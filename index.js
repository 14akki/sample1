const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('This is my first project')
})

const portNo= 3010;
app.listen(portNo,()=>{
    console.log(`server running on Port Number: ${portNo}`)
})
