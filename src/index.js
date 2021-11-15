const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();

const port = 4000;

// GET method route
app.get('/tasks', function (req, res) {

    const n = req.query.n || 3;

    axios.get(`https://lorem-faker.vercel.app/api?quantity=${n}`)
    .then(response =>{
        res.send(response.data);
    })
    .catch(error => {
        res.send('Ups something is bad! Try again later.');
    })
  });
  
  // PUT method route
  app.put('/tasks', function (req, res) {
    fs.writeFile("/tmp/test", "Tasks are complete!", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    res.send('The tasks are complete. Great!!!!');
});

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })