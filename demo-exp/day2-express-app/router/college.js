// const express= require('express');
// const router= express.Router();
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

// router.get('/', (req, res) => {
//     connection.query('SELECT * FROM Colleges', (err, results) => {
//     if (err) {
//         console.error('(❌))Error executing query to colleges:', err);
//         return;
//     }
//   res.send(results);
// });

//     // const location = req.query.location;
//     // const name = req.query.name;
//     // const country = req.query.country;
//     // res.send(`This is a static route;<br>From location: ${location};<br>From name: ${name};<br>From country: ${country};`);
// });

// router.get('/:id', (req, res) => {
//     const collegeId = req.params.id;
// connection.query('SELECT * FROM Colleges WHERE id=?', [collegeId], (err, results) => {
//     if (err) {
//         console.error('(❌))Error executing query to colleges:', err);
//         return;
//     }
//   res.send(results);
// })
// });

// router.get('/search/:name', async (req, res) => {
//     const collegeName = req.params.name;

//     //async wait with promise approach
//     const result = await new Promise((resolve,reject)=>{
//         connection.query(`SELECT * FROM Colleges WHERE name="${collegeName}"`, (err, results) => {
   
//     if (err) reject(err);
//         // console.error('(❌))Error executing query to colleges:', err);
//         resolve(results);
//         // return;
//     })
// })
//   res.send(result);
//     });


// //  module.exports =router
 
// router.post('/create', async(req, res) => {
//     const collegeName=req.body.name;
//     const collegeAddress=req.body.address;
//     //validation before create
//     if(!collegeName && !collegeAddress){
//         return res.status(400).send('Please provide college name and address');
//     }
//     const result = await new Promise((resolve, reject) => {
//         connection.query('INSERT INTO Colleges (name, address) VALUES (?, ?)', [collegeName, collegeAddress], (err, results) => {
//             if (err) {
//                 console.error('(❌))Error executing query to colleges:', err);
//                 reject(err);
//             } else {
//                 console.log('(✅)College added successfully:', results);
//                 resolve(results);
//             }
//         })
//     })
//     res.send('College added successfully');
// });

// router.put('/update/:id', async (req, res) => {
//     // const collegeId = req.params.id;
//     const collegeName = req.body.name;  
//     const collegeAddress = req.body.address;
//     //validation before update  
//     if (!collegeName && !collegeAddress) {
//         return res.status(400).send('Please provide college name and address');
//     }   
//     const result = await new Promise((resolve, reject) => {
//         connection.query('UPDATE Colleges SET name=?, address=?' , [collegeName, collegeAddress], (err, results) => {
//             if (err) {
//                 console.error('(❌))Error executing query to colleges:', err);
//                 reject(err);
//             } else {
//                 console.log('(✅)College updated successfully:', results);
//                 resolve(results);
//             }
//         })
//     })
//                   res.send('College updated successfully');

//     });

//     router.delete('/delete/:id', async (req, res) => {
//         const collegeId = req.params.id;
//         const result = await new Promise((resolve, reject) => {
//             connection.query('DELETE FROM Colleges WHERE id=?', [collegeId], (err, results) => {
//                 if (err) {
//                     console.error('(❌))Error executing query to colleges:', err);
//                     reject(err);
//                 } else {
//                     console.log('(✅)College deleted successfully:', results);
//                     resolve(results);
//                 }
//             })
//         })
//         res.send('College deleted successfully');
//     });
  
//     // res.send('College added successfully');
// module.exports =router
