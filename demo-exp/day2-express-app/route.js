const express = require('express');
const router = express.Router();
const app = express();

router.get("/", (req, res) => {
   const Location = req.query.location;
   const Name = req.query.name;
   const Country = req.query.country;
   res.send(`This is a static route;<br>From location: ${Location};<br>From name: ${Name};<br>From country: ${Country};`);
   });

   router.get("/:id", (req, res) => {
    const userId= req.params.id;
    const name= req.query.name;
    const country= req.query.country;
    res.send(`User ID: ${userId}, Name: ${name}, Country: ${country}`);
});

module.exports = router;