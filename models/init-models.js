var DataTypes = require("sequelize").DataTypes;
var _Categories = require("./categories");
var _Users = require("./users");
var _Items = require("./items");
var _Orders = require("./orders");
var _OrderItems = require("./order_items");

function initModels(sequelize) {
  var Category = _Categories(sequelize, DataTypes);
  var User = _Users(sequelize, DataTypes);
  var Item = _Items(sequelize, DataTypes);
  var Order = _Orders(sequelize, DataTypes);
  var OrderItem = _OrderItems(sequelize, DataTypes);

  return {
    Category,
    User,
    Item,
    Order,
    OrderItem,
  };
}
module.exports = { initModels };


