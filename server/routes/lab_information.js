const express = require('express');
const { Lab } = require('../models')
const router = express.Router();

router.post('/lab', async(req,res) =>{
    const {name, department, description} = req.body

    try{
        const lab = await Lab.create({name, department, description})
        return res.json(lab)
        
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})
router.get('/labs', async(req,res)=>{
    try{
        const labs = await Lab.findAll()

        return res.json(labs)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = router;