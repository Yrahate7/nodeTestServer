const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

const port = 3000

products = [
    { name: 'Prod1', price: 30, maxQuantity: 10, userQuantity: 0, counter: { upperLimit: 10, lowerLimit: 0 }, image: 'image1' },
    { name: 'Prod2', price: 40, maxQuantity: 8, userQuantity: 0, counter: { upperLimit: 10, lowerLimit: 0 }, image: 'image2' },
    { name: 'Prod3', price: 50, maxQuantity: 5, userQuantity: 0, counter: { upperLimit: 10, lowerLimit: 0 }, image: 'image3' },

];

app.get('/', (req, res) => {
    try {
        res.json(products);
    } catch (error) {
        res.send(error.message);
    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})