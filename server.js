const express = require('express');
const app = express();
const knex = require('./knex');
const bodyParser = require('body-parser')

let airports = require('./routes/stuff')

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', "*")
//   res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })


app.get('/', function(req,res,next){
  res.send('hello world!');
})


app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/stuff', airports)



const port = process.env.PORT || 3000

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});

module.exports = app;
