const { Sequelize, DataTypes } = require('sequelize');

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
  : new Sequelize('busraroman', 'postgres', '1234', {
      host: 'localhost',
      dialect: 'postgres',
      dialectModule: require('pg'),
    });

const User = require('./user')(sequelize, DataTypes);
const Question = require('./question')(sequelize, DataTypes);
const Answer = require('./answer')(sequelize, DataTypes);


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
