require('dotenv').config(); // .env dosyasını yükle

const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DATABASE_URL: process.env.DATABASE_URL,
  },
};

module.exports = nextConfig;
