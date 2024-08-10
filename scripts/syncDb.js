const db = require('../models');

(async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log('Veritabanı senkronize edildi.');
  } catch (error) {
    console.error('Veritabanı senkronizasyon hatası:', error);
  } finally {
    await db.sequelize.close();
  }
})();
