'use strict';

var express = require('express');
var cors = require('cors');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })
// require and use "multer"...

var app = express();
var fileUpload;

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
   res.json({ name: req.file.originalname , type:mimetype)
})
 


// var cpUpload = upload.fields([{ name: 'upfile'}])
// app.post('/cool-profile', cpUpload, function (req, res, next) {
//   // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
//   //
//   // e.g.
//    console.log(req.files['upfile'][0])
//   //  req.files['gallery'] -> Array
//   //
//   // req.body will contain the text fields, if there were any
// })

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
