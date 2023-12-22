/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('Users', [
    //   {
    //     name: "Igor Krytoy",
    //     email: "test@test.ru",
    //     hashPass: "123",        
    //   },      
    // ]);
    // await queryInterface.bulkInsert('Recipes', [
    //   {
    //     name: 'Паста карбонара',
    //     img: 'http://fatcat34.ru/images/menu/fettuchine_s_opyatami_sm.jpg',
    //     ingredients: 'спагетти, гуанчиале, пармезан, яйцо, черный перец',
    //     formula:
    //       '1. Сварите спагетти. \n2. Обжарьте гуанчиале. \n3. Смешайте яйцо и пармезан в миске. \n4. Отцедите спагетти и смешайте с гуанчиале. \n5. Добавьте яично-пармезановую смесь и хорошо перемешайте. \n6. Посыпьте черным перцем и подавайте.',
    //     time: 20,
    //   },
    //   {
    //     name: 'Греческий салат',
    //     img: 'https://i.ytimg.com/vi/kaNkhv02KFI/hqdefault.jpg',
    //     ingredients: 'помидоры, огурцы, фета, оливки, лук',
    //     formula:
    //       '1. Нарежьте помидоры, огурцы и лук. \n2. Добавьте кубики феты и оливки. \n3. Полейте оливковым маслом и посолите. \n4. Тщательно перемешайте. \n5. Подавайте холодным.',
    //     time: 15,
    //   },
    // ]);
    // await queryInterface.bulkInsert('Favorites', [
    //   {
    //     user_id: 1,
    //     recipe_id: 1,        
    //   },
    //   {
    //     user_id: 1,
    //     recipe_id: 2,        
    //   }
    // ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
