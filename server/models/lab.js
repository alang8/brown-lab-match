'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return{...this.get(),id:undefined}
    }
  };
  Lab.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    department: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
    },
    open_position: {
      type: DataTypes.BOOLEAN
    },
    keywords: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    total_reviewers: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    total_experience: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    total_hoursOutLab: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    total_hoursInLab: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    total_workload: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    total_communication: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    avg_experience: {
      type: DataTypes.FLOAT,
      allowNull:false
    },
    avg_hoursInLab: {
      type: DataTypes.FLOAT,
      allowNull:false
    },
    avg_hoursOutLab: {
      type: DataTypes.FLOAT,
      allowNull:false
    },
    avg_workload: {
      type: DataTypes.FLOAT,
      allowNull:false
    },
    avg_communication: {
      type: DataTypes.FLOAT,
      allowNull:false
    },

  }, {
    sequelize,
    tableName: 'labs',
    modelName: 'Lab',
  });
  return Lab;
};