const express = require("express");
const itemsRouter = express.Router();
const { Item } = require("../models/index");
const { data } = require('../seedData/seedData')

itemsRouter.get('/', async (req, res) => {
    const items = await Item.findAll();
    res.send(items)
})

itemsRouter.get('/:id', async (req, res) => {
    const items = await Item.findByPk(req.params.itemId);
    if(!items) {
        res.status(404);
        next();
      } else {
        res.send(items);
      }
})

module.exports = itemsRouter