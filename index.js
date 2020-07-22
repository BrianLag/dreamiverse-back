const express = require('express');
const port = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', (request,response) => {
  response.send({message: `Hello World`})
})



app.listen(port, (err) => {
    if (err) {
        throw new Error(`An error occured: ${err.message}`);
    }
    console.log(`Server is listening on ${port}`);
});