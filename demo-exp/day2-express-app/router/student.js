const express= require('express');
const router= express.Router();
const mysql= require('mysql2');
const connection= mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"roshAn_12#",
    database: "ankita",
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error('(❌)Error connecting to the database:', err);
        return;
    }
    console.log('(🚀)Connected to the MySQL database');
});

router.get('/', (req, res) => {
    connection.query('SELECT * FROM student', (err, results) => {
    if (err) {
        console.error('(❌))Error executing query to student:', err);
        return;
    }
  res.send(results);
});

    // const location = req.query.location;
    // const name = req.query.name;
    // const country = req.query.country;
    // res.send(`This is a static route;<br>From location: ${location};<br>From name: ${name};<br>From country: ${country};`);
});

router.get('/:id', (req, res) => {
    const studentId = req.params.id;
connection.query('SELECT * FROM student WHERE id=?', [studentId], (err, results) => {
    if (err) {
        console.error('(❌))Error executing query to :', err);
        return;
    }
  res.send(results);
})
});

router.get('/search/:name', async (req, res) => {
    const studentName = req.params.name;

    //async wait with promise approach
    const result = await new Promise((resolve,reject)=>{
        connection.query(`SELECT * FROM student WHERE name="${sttudentName}"`, (err, results) => {
   
    if (err) reject(err);
        // console.error('(❌))Error executing query to student:', err);
        resolve(results);
        // return;
    })
})
  res.send(result);
    });


//  module.exports =router
 
router.post('/create', async(req, res) => {
    const studentName=req.body.name;
    const studentAddress=req.body.address;
    //validation before create
    if(!studentName && ! studentAddress){
        return res.status(400).send('Please provide student name and address');
    }
    const result = await new Promise((resolve, reject) => {
        connection.query('INSERT INTO student (name, address) VALUES (?, ?)', [studentName, studentAddress], (err, results) => {
            if (err) {
                console.error('(❌))Error executing query to student:', err);
                reject(err);
            } else {
                console.log('(✅)student added successfully:', results);
                resolve(results);
            }
        })
    })
    res.send('student added successfully');
});

router.put('/update/:id', async (req, res) => {
    // const collegeId = req.params.id;
    const studentName = req.body.name;  
    const studentAddress = req.body.address;
    //validation before update  
    if (!studentName && ! studentAddress) {
        return res.status(400).send('Please provide student name and address');
    }   
    const result = await new Promise((resolve, reject) => {
        connection.query('UPDATE student SET name=?, address=?' , [studentName, studentAddress], (err, results) => {
            if (err) {
                console.error('(❌))Error executing query to student:', err);
                reject(err);
            } else {
                console.log('(✅)student updated successfully:', results);
                resolve(results);
            }
        })
    })
                  res.send('student updated successfully');

    });

    router.delete('/delete/:id', async (req, res) => {
        const studentId = req.params.id;
        const result = await new Promise((resolve, reject) => {
            connection.query('DELETE FROM student WHERE id=?', [studentId], (err, results) => {
                if (err) {
                    console.error('(❌))Error executing query to student:', err);
                    reject(err);
                } else {
                    console.log('(✅)student deleted successfully:', results);
                    resolve(results);
                }
            })
        })
        res.send('student deleted successfully');
    });
  
    // res.send('College added successfully');
module.exports =router
