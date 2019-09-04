'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu = sequelize.define('menu', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  }, {});
  menu.associate = function(models) {
    menu.belongsTo(models.category, {
      foreignKey: 'categoryId',
    });
    menu.hasMany(models.order, {
      foreignKey: 'menuId'
    });
  };
  return menu;
};