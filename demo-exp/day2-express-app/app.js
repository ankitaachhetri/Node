// const express= require('express');
// const  profileRouter= require('./route');
// const userRouter= require('./userroute');
// const app= express();

// app.get('/', (req, res) => {

//     // console.log("Hello from express");
//     res.send("Hello world");
// });
// app.use('/profile', profileRouter);


// app.use('/user', userRouter); 


// // //create a new route
// // app.get('/new', (req, res) => {
// //     const location = req.query.location;
// //     const name = req.query.name;
// //     const country = req.query.country;
// //     res.send(`This is a static route;<br>From location: ${location};<br>From name: ${name};<br>From country: ${country};`);
// // });
// // //create a new route
// // app.get('/ankita', (req, res) => {
// //     res.send("Hello ankita and team");
// //     });

// //     app.get("/user/:id", (req, res) => {
// //         const userId = req.params.id;
// //         res.send(`User ID: ${userId}`);
// //     });

// //     //create a new route with route parameters and query parameters
// //     app.get("/saral", (req, res) => {

// //         const userId = req.query.id;
// //         const userName = req.query.name;
// //         const userCountry = req.query.country;
// //         res.send(`User ID: ${userId}, userName: ${userName}, userCountry: ${userCountry}`);
// //     });

// //     //create new route with route params and query param
// // app.get("/user/:id/education/:education/address/:address", (req, res) => {
// //     const userId = req.params.id;
// //     const location = req.query.location;
// //     const name = req.query.name;
// //     const country = req.query.country;
// //     res.send(`User ID: ${userId}, Name: ${name}, Location: ${location}, Country:${country}`);
    
// // });
// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

const express = require('express');
// const router = require('./router/college');
const router = require('./router/student');
// const router1= require('./router/student');
// const mysql = require('mysql2');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

//mysql connection
// app.use('/college', router);
app.use('/student', require('./router/student'));
// const mysql= require('mysql2');
// const connection= mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password:"roshAn_12#",
//     database: "ankita",
//     port: 3306,
// });

// connection.connect((err) => {
//     if (err) {
//         console.error('(❌)Error connecting to the database:', err);
//         return;
//     }
//     console.log('(🚀)Connected to the MySQL database');
// });

// connection.query('SELECT * FROM Colleges', (err, results) => {
//     if (err) {
//         console.error('(❌))Error executing query to colleges:', err);
//         return;
//     }
//     console.log('(🚀)Colleges Data:', results);
// });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});