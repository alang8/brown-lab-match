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
    uid:{
      type: DataTypes.STRING,
      allowNull:false
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
      type: DataTypes.TEXT,
      allowNull:false
    },
    open_position: {
      type: DataTypes.BOOLEAN
    },
    keywords: {
      type: DataTypes.TEXT,
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