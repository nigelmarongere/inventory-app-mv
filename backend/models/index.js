const { db, DataTypes } = require('../db')


const Item = db.define("items", {
  title: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  }
});




module.exports = {
  Item
  

};