const express = require('express');
const { Lab } = require('../models')
const Sequelize = require('sequelize');
const {validationResult} = require('express-validator')
const router = express.Router();
const Op = Sequelize.Op;

// Post a lab for testing purposes
router.post('/lab', async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ errors: errors.array() });
    }
    const {name, department, description, open_position, 
        keywords, total_reviewers, total_experience, total_hoursOutLab, 
        total_hoursInLab, total_workload, total_communication, 
        avg_experience, avg_hoursOutLab, avg_hoursInLab, 
        avg_workload, avg_communication} = req.body

    try{
        const lab = await Lab.create({name, department, description, open_position, 
            keywords, total_reviewers, total_experience, total_hoursOutLab, 
            total_hoursInLab, total_workload, total_communication, 
            avg_experience, avg_hoursOutLab, avg_hoursInLab, 
            avg_workload, avg_communication} )
        return res.json(lab)
        
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

// Returns all labs
router.get('/alllabs', async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ errors: errors.array() });
    }
    try{
        const labs = await Lab.findAll()

        return res.json(labs)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

// Returns lab with specific uuid
router.get('/lab/:uuid', async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ errors: errors.array() });
    }
    const uuid = req.params.uuid
    try{
        const lab = await Lab.findOne({
            where: {uuid}
        })

        return res.json(lab)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

// Returns lab with the following filters
router.get('/labsshow', async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ errors: errors.array() });
    }
    const department = req.query.department
    const open_position = req.query.open_position
    const avg_experience = req.query.avg_experience
    const avg_hoursOutLab = req.query.avg_hoursOutLab
    const avg_hoursInLab = req.query.avg_hoursInLab
    const avg_workload = req.query.avg_workload
    const avg_communication = req.query.avg_communication

    try{
        const labs = await Lab.findAll({
            where: {
                department:{[Op.startsWith]:department}, 
                open_position,
                avg_experience: {[Op.gte]:avg_experience},
                avg_hoursInLab: {[Op.gte]:avg_hoursInLab},
                avg_hoursOutLab: {[Op.gte]:avg_hoursOutLab},
                avg_communication: {[Op.gte]:avg_communication},
                avg_workload: {[Op.gte]:avg_workload}
            }

        })

        return res.json(labs)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

// Returns lab with filter and search term
router.get('/labssearch', async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ errors: errors.array() });
    }
    const department = req.query.department
    const open_position = req.query.open_position
    const avg_experience = req.query.avg_experience
    const avg_hoursOutLab = req.query.avg_hoursOutLab
    const avg_hoursInLab = req.query.avg_hoursInLab
    const avg_workload = req.query.avg_workload
    const avg_communication = req.query.avg_communication
    
    let term = req.query.term
    term = term.toLowerCase()

    try{
        const labs = await Lab.findAll({
            where: {
                department:{[Op.startsWith]:department},
                open_position,
                avg_experience: {[Op.gte]:avg_experience},
                avg_hoursInLab: {[Op.gte]:avg_hoursInLab},
                avg_hoursOutLab: {[Op.gte]:avg_hoursOutLab},
                avg_communication: {[Op.gte]:avg_communication},
                avg_workload: {[Op.gte]:avg_workload},
                [Op.or]:[{name:{[Op.substring]:term}},{keywords:{[Op.contains]:[term]}}]

            }

        })

        return res.json(labs)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})


module.exports = router;