const express = require('express');
const port = 8000;
const api = require('./routes');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', api)

app.get('/', (request,response) => {
  response.send({message: `Hello World`})
});



app.listen(port, (err) => {
    if (err) {
        throw new Error(`An error occured: ${err.message}`);
    }
    console.log(`Server is listening on ${port}`);
});