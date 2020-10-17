var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _order_items = require("./order_items");
var _users = require("./users");
var _orders = require("./orders");
var _items = require("./items");

function initModels(sequelize) {
  var Category = _categories(sequelize, DataTypes);
  var OrderItem = _order_items(sequelize, DataTypes);
  var User = _users(sequelize, DataTypes);
  var Order = _orders(sequelize, DataTypes);
  var Item = _items(sequelize, DataTypes);

  return {
    Category,
    OrderItem,
    User,
    Order,
    Item,
  };
}
module.exports = { initModels };
