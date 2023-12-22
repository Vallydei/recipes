'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({User}) {
      this.belongsToMany(User, {through: 'Favorite', foreignKey: 'recipeId'})
    }
  }
  Recipe.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    formula: DataTypes.TEXT,
    time: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};