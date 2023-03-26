const express = require('express');
const app = express();
const PORT = 6789;
const path = require('path');
const router = express.Router();
 
 
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
 
app.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
  });

app.get('/sitemap',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
})


//add the router
app.use(express.static('keylog.js'))
app.listen(process.env.port || PORT);
 
console.log(`Listening on http://localhost:${PORT}`)

