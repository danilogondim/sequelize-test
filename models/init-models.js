var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _order_items = require("./order_items");
var _users = require("./users");
var _orders = require("./orders");
var _items = require("./items");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var order_items = _order_items(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var items = _items(sequelize, DataTypes);

  return {
    categories,
    order_items,
    users,
    orders,
    items,
  };
}
module.exports = { initModels };
