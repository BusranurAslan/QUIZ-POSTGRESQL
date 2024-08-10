const { Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize('busraroman', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',  
  dialectModule: require('pg')
});

const User = require('./user')(sequelize, DataTypes);

const db = {
  sequelize,
  Sequelize,
  models: {
    User,
  },
};

module.exports = db;
