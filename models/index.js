import 'dotenv/config'; 
import { Sequelize, DataTypes } from 'sequelize';
import pg from 'pg'; 

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


import UserModel from './user';
import QuestionModel from './Question';
import AnswerModel from './Answer';


const User = UserModel(sequelize, DataTypes);
const Question = QuestionModel(sequelize, DataTypes);
const Answer = AnswerModel(sequelize, DataTypes);


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

export default db;
