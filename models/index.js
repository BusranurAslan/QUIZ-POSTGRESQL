require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const pg = require('pg'); 

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      dialectModule: pg,
      dialectOptions: isProduction
      ? {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      }
      : {},
    })
  : new Sequelize('postgres://postgres:1234@localhost:5432/busraroman', {
      dialect: 'postgres',
      dialectModule: pg, 
    });


const User = require('./user')(sequelize, DataTypes);
const Question = require('./Question')(sequelize, DataTypes);
const Answer = require('./Answer')(sequelize, DataTypes);


Object.keys(sequelize.models).forEach((modelName) => {
  if (sequelize.models[modelName].associate) {
    sequelize.models[modelName].associate(sequelize.models);
  }
});


const db = {
  sequelize,
  Sequelize,
  models: {
    User,
    Question,
    Answer,
  },
};

module.exports = db;
