require('dotenv').config();


module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectModule: pg,
    migrationStorage: 'json',
    migrationStoragePath: 'sequelize-meta.json',
    seederStorage: 'json',
    seederStoragePath: 'sequelize-seeds.json',
    dialectOptions: {
      useUTC: false, 
    },
    timezone: '+03:00', 
  },
};
