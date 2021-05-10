const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000
///este es mio
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let products = [
    {
        id:1,
        name : 'Playera Oscura',
        price : 299,
        image: "img/p2.jpg",
        stock: 5,
    },
    {
        id:2,
        name : 'Playera Blanca',
        price : 199,
        image: "img/p3.jpg",
        stock: 4,
    },
    {
        id:3,
        name : 'Playera Negra',
        price : 399,
        image: "img/p4.jpg",
        stock: 3,
    },
    {
        id:4,
        name : 'Playera Roja',
        price : 499,
        image: "img/p2.jpg",
        stock: 2,
    },
    {
        id:5,
        name : 'Playera Koreana',
        price : 359,
        image: "img/pa7.jpg",
        stock: 5,
    },
];

app.get("/api/products", (req, res) => {
  res.send(products)
})

app.post("/api/pay", (req, res) => {
    const ids = req.body;
    const procutsCopy = products.map((p) => ({ ...p }));
    ids.forEach((id) => {
      const product = procutsCopy.find((p) => p.id === id);
      if (product.stock > 0) {
        product.stock--;
      } else {
        throw "Sin stock";
      }
    });
    products = procutsCopy;
    res.send(products);
  });

app.use("/", express.static("fe"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})