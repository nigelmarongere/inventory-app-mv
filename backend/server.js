const express = require('express')
const app = express()
const seed = require('./seedData/seed')
const {itemRoutes} = require('./routes');

const server = async (port) => {
    await seed() 
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
};

server(3050);