const express = require("express");
const app = express();

app.get('/', (request, response)=>{
    response.send('Hello the rest of the world!');
});

app.listen(3000);