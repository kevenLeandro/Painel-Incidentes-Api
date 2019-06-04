const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


//add the router
app.use('/', router);

//add css and script file
app.use(express.static(__dirname + '/'));

//Launch listening server on port 8081  
app.listen(8081, function () {  
    console.log('app listening on port 8081!')  
  })

console.log('Running at Port 4200');