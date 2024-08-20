'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert Questions for Quiz 1
    const quiz1Questions = await queryInterface.bulkInsert('Questions', [
      { id: 1, questionText: 'Kiralama ve aboneliğin farkı nedir?', quizId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, questionText: 'Kiralama ne zaman başlıyor ve bitiyor?', quizId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, questionText: 'Cihazın orijinal kutusunu muhafaza etmem gerekir mi?', quizId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, questionText: 'Hangi şehirlerde hizmet veriyorsunuz?', quizId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, questionText: 'Üye olmadan sipariş verebilir miyim?', quizId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 6, questionText: 'Kapıda ödeme veya havale ile ödeme seçenekleri var mıdır?', quizId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 7, questionText: 'Kiralama süresini uzatabilir miyim?', quizId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 8, questionText: 'Kira sürem bittikten sonra kullandığım cihazı satın alabilir miyim?', quizId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 9, questionText: 'Mobil uygulamanız var mı?​', quizId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 10, questionText: 'Kart bilgilerim güvende mi?', quizId: 1, createdAt: new Date(), updatedAt: new Date() }
    ], { returning: true });

    // Insert Questions for Quiz 2
    const quiz2Questions = await queryInterface.bulkInsert('Questions', [
      { id: 11, questionText: 'Hobbit film serisinin ünlü yönetmeni kimdir?', quizId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 12, questionText: 'Cem Yılmazın Yahşi Batı filminde satılmak istenen ve film boyunca hikâyesi anlatılan değerli eşya hangisidir?', quizId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 13, questionText: 'Deadpool 2 filminde sadece birkaç saniye görünen ve ücret olarak bir bardak kahve isteyen aktör kimdir?', quizId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 14, questionText: 'Benjamin Button ın Tuhaf Hikâyesi filminde yaşlı doğup gençleşen Benjamin Button karakterini kim canlandırmıştır?', quizId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 15, questionText: 'Star-Lord, Gamora, Drax ve Groot hangi film serisinde yer alan karakterlerdir?', quizId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 16, questionText: 'Lord Voldemort un korktuğu tek büyücü kimdir?', quizId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 17, questionText: 'Yüzüklerin Efendisi: Kralın Dönüşü filmi kaç dalda Oscar kazanmıştır?', quizId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 18, questionText: 'Örümcek Adam süper güçlerine nasıl sahip olmuştur?', quizId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 19, questionText: 'Annabelle filmine ismini veren Annabelle kimin ismidir?', quizId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 20, questionText: 'Matrix film serisindeki karizmatik başrol oyuncularının kullandığı aksesuar hangisidir?', quizId: 2, createdAt: new Date(), updatedAt: new Date() }
    ], { returning: true });

    // Insert Answers
    await queryInterface.bulkInsert('Answers', [
      // Answers for Quiz 1
      { id: 1, answerText: 'Kiralama tek seferlik yapacağın ödemeyle başlarken, abonelik seçtiğin süre boyunca yapacağın kiralama taahhütüdür ve her ay kredi kartından otomatik çekim yapılır.', isCorrect: true, questionId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, answerText: 'Bir farkları yok aynı şeyler.', isCorrect: false, questionId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, answerText: 'Kiralaman cihaz sana teslim edildiği gün başlar ve geri teslim edilen gün biter.', isCorrect: true, questionId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, answerText: '1 hafta içerisinde son buluyor.', isCorrect: false, questionId: 2, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, answerText: 'Evet.', isCorrect: true, questionId: 3, createdAt: new Date(), updatedAt: new Date() },
      { id: 6, answerText: 'Hayır.', isCorrect: false, questionId: 3, createdAt: new Date(), updatedAt: new Date() },
      { id: 7, answerText: 'Sadece İstanbul ve Ankarada.', isCorrect: false, questionId: 4, createdAt: new Date(), updatedAt: new Date() },
      { id: 8, answerText: '81 ilde hizmet verilmektedir.', isCorrect: true, questionId: 4, createdAt: new Date(), updatedAt: new Date() },
      { id: 9, answerText: 'Tabii ki.', isCorrect: false, questionId: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 10, answerText: 'Hayır.', isCorrect: true, questionId: 5, createdAt: new Date(), updatedAt: new Date() },
      { id: 11, answerText: 'Hayır.', isCorrect: true, questionId: 6, createdAt: new Date(), updatedAt: new Date() },
      { id: 12, answerText: 'Elbette.', isCorrect: false, questionId: 6, createdAt: new Date(), updatedAt: new Date() },
      { id: 13, answerText: 'Maalesef.', isCorrect: false, questionId: 7, createdAt: new Date(), updatedAt: new Date() },
      { id: 14, answerText: 'Tabii ki.', isCorrect: true, questionId: 7, createdAt: new Date(), updatedAt: new Date() },
      { id: 15, answerText: 'Maalesef.', isCorrect: false, questionId: 8, createdAt: new Date(), updatedAt: new Date() },
      { id: 16, answerText: 'Elbette.', isCorrect: true, questionId: 8, createdAt: new Date(), updatedAt: new Date() },
      { id: 17, answerText: 'Maalesef.', isCorrect: true, questionId: 9, createdAt: new Date(), updatedAt: new Date() },
      { id: 18, answerText: 'Elbette google playden indirilebilir.', isCorrect: false, questionId: 9, createdAt: new Date(), updatedAt: new Date() },
      { id: 19, answerText: 'Kart bilgileriniz para ile satılır ve sizede komisyon verilir.', isCorrect: false, questionId: 10, createdAt: new Date(), updatedAt: new Date() },
      { id: 20, answerText: 'Kredi kartı bilgileri Türkiye İş Bankası kuruluşu olan Moka Ödeme ve E-Para Kuruluşu tarafından saklanır, Kiralarsın kredi kartı bilgilerine erişemez.', isCorrect: true, questionId: 10, createdAt: new Date(), updatedAt: new Date() },

      // Answers for Quiz 2
            { id: 21, answerText: 'Peter Jackson', isCorrect: true, questionId: 11, createdAt: new Date(), updatedAt: new Date() },
            { id: 22, answerText: 'Bryan Singer', isCorrect: false, questionId: 11, createdAt: new Date(), updatedAt: new Date() },
            { id: 23, answerText: 'Padişah Tuğrası', isCorrect: false, questionId: 12, createdAt: new Date(), updatedAt: new Date() },
            { id: 24, answerText: 'Elmas', isCorrect: true, questionId: 12, createdAt: new Date(), updatedAt: new Date() },
            { id: 25, answerText: 'Brad Pitt', isCorrect: true, questionId: 13, createdAt: new Date(), updatedAt: new Date() },
            { id: 26, answerText: 'Keanu Reeves', isCorrect: false, questionId: 13, createdAt: new Date(), updatedAt: new Date() },
            { id: 27, answerText: 'Tom Cruise', isCorrect: false, questionId: 14, createdAt: new Date(), updatedAt: new Date() },
            { id: 28, answerText: 'Brad Pitt', isCorrect: true, questionId: 14, createdAt: new Date(), updatedAt: new Date() },
            { id: 29, answerText: 'Galaksinin Koruyucuları', isCorrect: true, questionId: 15, createdAt: new Date(), updatedAt: new Date() },
            { id: 30, answerText: 'Fantastic Dörtlü', isCorrect: false, questionId: 15, createdAt: new Date(), updatedAt: new Date() },
            { id: 31, answerText: 'Severus Snape', isCorrect: false, questionId: 16, createdAt: new Date(), updatedAt: new Date() },
            { id: 32, answerText: 'Albus Dumbledore', isCorrect: true, questionId: 16, createdAt: new Date(), updatedAt: new Date() },
            { id: 33, answerText: '10', isCorrect: false, questionId: 17, createdAt: new Date(), updatedAt: new Date() },
            { id: 34, answerText: '11', isCorrect: true, questionId: 17, createdAt: new Date(), updatedAt: new Date() },
            { id: 35, answerText: 'Bir örümcek ısırığıyla', isCorrect: true, questionId: 18, createdAt: new Date(), updatedAt: new Date() },
            { id: 36, answerText: 'Miras yoluyla', isCorrect: false, questionId: 18, createdAt: new Date(), updatedAt: new Date() },
            { id: 37, answerText: 'Tablonun', isCorrect: false, questionId: 19, createdAt: new Date(), updatedAt: new Date() },
            { id: 38, answerText: 'Oyuncak bebeğin', isCorrect: true, questionId: 19, createdAt: new Date(), updatedAt: new Date() },
            { id: 39, answerText: 'Güneş gözlüğü', isCorrect: true, questionId: 20, createdAt: new Date(), updatedAt: new Date() },
            { id: 40, answerText: 'Baston', isCorrect: false, questionId: 20, createdAt: new Date(), updatedAt: new Date() }
          ], {});
        },
      
        down: async (queryInterface, Sequelize) => {
          await queryInterface.bulkDelete('Answers', null, {});
          await queryInterface.bulkDelete('Questions', null, {});
        }
      };
      
