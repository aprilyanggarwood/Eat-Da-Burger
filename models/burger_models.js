const orm = require("../config/orm.js");

const burger = {
  selectAll: function (callback) {
    orm.selectAll(function (result) {
      callback(result);
    });
  },

  insertOne: function (burger_name, callback) {
    orm.insertOne(burger_name, function (result) {
      callback(result);
    });
  },

  updateOne: function (devour, id, callback) {
    orm.updateOne(devour, id, function (result) {
      callback(result);
    });
  },

  deleteOne: function (burger_id, callback) {
    orm.deleteOne(burger_id, function (result) {
      callback(result);
    });
  },
};

module.exports = burger;
