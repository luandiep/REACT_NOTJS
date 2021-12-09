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


router.get('/getall', function(req, res, next) {
  pool.query('SELECT * FROM product_info', (err, respon) => {
    if(err){
      console.log(err);
    }else{
      res.send(respon.rows)
    }
   })

  

});
router.get('/Add', function(req, res, next) {
  res.render('Add', {});
  
});
router.post('/Add', function(req, res, next) {
  var name=req.body.product_name;
  var price=req.body.product_price;
  var link=req.body.product_link;

  pool.query("INSERT INTO product_info(product_name,product_price,image) values ($1,$2,$3)",[name,price,link],(err,response)=>{
    if (err) {res.send(err)}
    else{res.send("da them du lieu thanh cong ")};
  })
  
});
module.exports = router;
