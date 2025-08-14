const express = require('express');
const userrouter = express.Router();
const app = express();

userrouter.get("/", (req, res) => {
   const Location = req.query.location;
   const Name = req.query.name;
   const Country = req.query.country;
   res.send(`This is a static route;<br>From location: ${Location};<br>From name: ${Name};<br>From country: ${Country};`);
   });

   userrouter.get("/:id", (req, res) => {
    const userId= req.params.id;
    const name= req.query.name;
    const country= req.query.country;
    res.send(`User ID: ${userId}, Name: ${name}, Country: ${country}`);
});

userrouter.get("/try-catch", (req, res) => {

try {
    const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
    const jsonData = JSON.parse(data);
    res.send(jsonData);
} catch (error) {
    res.status(500).send("Error reading data file");
}
});
module.exports = userrouter;