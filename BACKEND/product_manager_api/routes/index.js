var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: 'Ztegc13e6633',
  port: 5432,
})

/* GET home page. */
// router.get('/', function(req, res, next) {
//   pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })
//   res.render('index', { title: 'Express' });
// });
/* GET home page. */
router.get('/getall', function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  pool.query('SELECT * FROM product_info', (err, respon) => {
    if(err){
      console.log(err);
    }else{
      res.send(respon.rows)
    }
     pool.end()
   })

  

});
router.get('/Add', function(req, res, next) {
  res.render('Add', {});
  
});
router.post('/Add', function(req, res, next) {
  var name=req.body.product_name;
  var price=req.body.product_price;
  var link=req.body.product_link;
  res.send("Nhan dc du lieu r"+name+", "+price+", "+link)
  
});
module.exports = router;
