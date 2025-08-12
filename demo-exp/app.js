const express = require('express');
const app= express();
app.get('/',(req,res)=>{
    console.log("Hello from express");
    res.render(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>This is a simple express app</p>
    <p>Check the console for logs.</p>
    <p>Open the terminal to see the output of the triangle.js script.</p>
</body>
</html>
        `);
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});