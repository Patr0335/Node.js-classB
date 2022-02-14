const express = require("express"); // library
const app = express(); // instance
//const port = 8080

app.use(express.json()); // allow us to parse json

// endpoint callback function

const beers = [
  {
    id: 1,
    beerName: "carlsberg",
  },
  {
    id: 2,
    beerName: "tuborg",
  },
  {
    id: 3,
    beerName: "ale no 16",
  },
  {
    id: 4,
    beerName: "heineken",
  },
  {
    id: 5,
    beerName: "guinness",
  },
];

app.get("/beers", (req, res) => {
  res.send(Object.values(beers));
});

app.get("/beers/:beersId", (req, res) => {
  res.send(beers[req.params.beersId]);
});

app.post("/beers", (req, res) => {
  beers.push(req.body);
  res.send(req.body);
});


// prøvede lige at lave en endpoint med id i body'n.
app.put("/beers", (req, res) => {
    const beer = beers.find( ({ id }) => id === req.body.id);

  if (beer != null) {
    const updatedBeer = {
      id: req.body.id,
      beerName: req.body.beerName,
    };

    const targetIndex = beers.indexOf(beer);

    beers.splice(targetIndex, 1, updatedBeer);

    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

app.patch("/beers/:beersId", (req, res) => {
    const beer = beers.find( ({ id }) => id === req.body.id);

    if (beer != null) {
      const updatedBeer = {
        id: req.body.id,
        beerName: req.body.beerName,
      };
  
      const targetIndex = beers.indexOf(beer);
  
      beers.splice(targetIndex, 1, updatedBeer);
  
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  });

app.delete("/beers/:beersId", (req, res) => {
  const targetId = parseFloat(req.params.beersId);
  const indexNumber = beers.findIndex((beerName) => beerName.id === targetId);
  beers.splice(indexNumber, 1);
  res.send(beers);
});

app.listen(8080); // Specify what port it runs on. Always keep it in the bottom of the file.
