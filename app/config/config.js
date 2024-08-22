require('dotenv').config();

module.exports = {
  local: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'database_dev',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
  },
  development: {
    username: process.env.DB_USERNAME || 'default', 
    password: process.env.DB_PASSWORD || 'VnvY2JXLjti6', 
    database: process.env.DB_NAME || 'verceldb', 
    host: process.env.DB_HOST || 'ep-misty-boat-a4uhlw0f-pooler.us-east-1.aws.neon.tech', 
    port: process.env.DB_PORT || 5432, 
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  },
  test: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'database_test',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME || 'default',
    password: process.env.DB_PASSWORD || 'VnvY2JXLjti6', 
    database: process.env.DB_NAME || 'verceldb', 
    host: process.env.DB_HOST || 'ep-misty-boat-a4uhlw0f-pooler.us-east-1.aws.neon.tech',
    port: process.env.DB_PORT || 5432, 
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  },
};
