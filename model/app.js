const express = require('express');
const expect = require('chai').expect;
const app = express();
const PORT = 6789;
const path = require('path');
const request = require('supertest'); 


 
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/../assets/index.html'));
  //__dirname : It will resolve to your project folder.
});
 
app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname + '/../assets/about.html'));
  });

app.get('/sitemap',function(req,res){
    res.sendFile(path.join(__dirname + '/../assets/sitemap.html'));
})


//add the router

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
});



module.exports = {app};