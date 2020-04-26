const express = require("express");
const db = require("../data/config");
const router = express.Router();


router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.post("/" ,  (req,res,next) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .first()
        .then(newCar => {
          res.status(201).json(newCar);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
})
module.exports = router;
