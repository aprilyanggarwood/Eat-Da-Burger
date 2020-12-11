const connection = require("./connection.js");

const orm = {
  selectAll: function (callback) {
    const queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: (burgerName, callback) => {
    const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryString, [burgerName], function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  updateOne: (devour, id, callback) => {
    const queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
    connection.query(queryString, [devour, id], (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },

  deleteOne: function (id, callback) {
    const queryString = "DELETE FROM burgers WHERE id = ?";
    connection.query(queryString, [id], (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
};

module.exports = orm;
