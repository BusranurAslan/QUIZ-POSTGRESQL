

require('dotenv').config();
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: process.env.DB_DIALECT || 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true' ? {
        require: true,
        rejectUnauthorized: false
      } : false
    }
  }
);


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Veritabanı bağlantısı başarıyla kuruldu.');
  } catch (error) {
    console.error('Veritabanına bağlanırken hata oluştu:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
