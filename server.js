const express = require('express')
const app = express()


app.use(express.static(__dirname));

app.get('/volumes/:shape', function(req, res) {
    var shape = req.params.shape
    var length = Number(req.query.l)
    var height = Number(req.query.h)
    var width = Number(req.query.w)
    var radius = Number(req.query.r)
    let value = 0 
  switch(shape){
    case 'sphere':
      value = 4/3*Math.PI*radius**3;
      break;
    case 'rectangularprism':
      value = length*width*height;
      break;
    case 'cylinder':
      value = Math.PI*radius**2*height;
      break;
    case 'cone':
      value = Math.PI*radius**2*height/3;
      break;
  }
  if(isNaN(value)){
	res.json({value:'incorrect input'})
  }else{
  	res.json({ value: value })
  }
});

/*

app.get('/querystring_tester', function(req, res) {
  res.send(req.query);
});

app.get('/post_test', function(req, res) {
  res.send('POST response');
});
*/

app.listen(4200, function() {
  console.log('App started');
});
