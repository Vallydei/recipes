const axios = require('axios');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (let n = 0; n < 1; n++) {
      const data = await axios('https://www.themealdb.com/api/json/v1/1/random.php');
      let ingredients = '';
      for (let i = 1; i < 21; i++) {
        if (data.data.meals[0][`strIngredient${i}`])
          ingredients += `${data.data.meals[0][`strIngredient${i}`]},`;
      }
      await queryInterface.bulkInsert('Recipes', [
        {
          name: data.data.meals[0].strMeal,
          img: data.data.meals[0].strMealThumb,
          ingredients: ingredients.slice(0, -1),
          formula: data.data.meals[0].strInstructions,
          time: ingredients.split(',').length * 5,
        },
      ]);
    }
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
