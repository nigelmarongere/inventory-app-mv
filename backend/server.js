const express = require('express')
const cors = require('cors');
const app = express()
const seed = require('./seedData/seed')
const itemRoutes = require('./routes/items');

app.get('/', async (req, res) => {
  const items = await Item.findAll();
  res.send(items)
})

app.get('/:id', async (req, res) => {
  const items = await Item.findByPk(req.params.id);
  if(!items) {
      res.status(404);
    
    }
    res.send(items);
})

const server = async (port) => {
    await seed()
    app.use(cors());
    app.use("/items", itemRoutes);
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
};

server(3050);