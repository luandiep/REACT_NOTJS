import axios from "axios"
import { useState } from "react"
const addaction=(item)=>{
   
 var product_name=item.product_name 
 var product_price=item.product_price 
 var product_link=item.product_link 

axios.post('/Add',{product_name,product_price,product_link}).then((reponse)=>{
console.log(reponse.data);
})
}
export default function AddProduct() {
const [editdata,seteditdata]=useState({product_name:'',product_price:'',product_link:''})

const ischange=(event)=>{
    seteditdata({...editdata,[event.target.name]:event.target.value})
   
}
    return(
        <div className="col mx-auto">
        <form >
        <div className="form-group">
          <label htmlFor="product_name">Tên sản phẩm</label>
          <input type="text"
            className="form-control" onChange={(event)=>ischange(event)} name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhập tên sản phẩm"/>
          <small id="name_text" className="form-text text-muted">Nhập tên</small>
        </div>
        <div className="form-group">
          <label htmlFor="product_price">Giá sản phẩm</label>
          <input type="text"
            className="form-control" onChange={(event)=>ischange(event)} name="product_price" id="product_price" aria-describedby="price_text" placeholder="Nhập giá sản phẩm"/>
          <small id="price_text" className="form-text text-muted">Nhập giá</small>
        </div>
        <div className="form-group">
          <label htmlFor="product_link">Link sản phẩm</label>
          <input type="text"
            className="form-control" onChange={(event)=>ischange(event)} name="product_link" id="product_link" aria-describedby="link_text" placeholder="Nhập link sản phẩm"/>
          <small id="link_text" className="form-text text-muted">Nhập link</small>
        </div>
        <button type="reset" onClick={()=>addaction(editdata)} className="btn btn-primary">Thêm mới</button>
    </form>
    </div>
    )
}