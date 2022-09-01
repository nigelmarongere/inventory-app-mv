const express = require('express')
const cors = require('cors');
const app = express()
const seed = require('./seedData/seed')
const itemRoutes = require('./routes/items');

const server = async (port) => {
    await seed()
    app.use(cors());
    app.use("/items", itemRoutes);
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
};

server(3050);