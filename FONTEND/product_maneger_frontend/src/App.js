import React,{useState,useEffect} from "react"
import './App.css';
import TitleHeader from './TitleHeader';
import Product from './Product';
import axios from "axios"
function App() {
const [data, setdata] = useState([])
  // GET request for remote image in node.js

useEffect(()=>{
  axios({
    method: 'get',
    url: 'http://localhost:4000/getall',
    responseType: 'stream'
  }).then(function (response) {
     setdata(response.data)
    }).catch((erro)=>{
      console.log(erro)
    })
  
},[])

function print() {
  if(data!=null)
  {
   return data.map((item)=>{
      console.log(item);
        return (<Product name={item.product_name} image={item.image}/>)
    })
  }
  
}

  return (
    <div className="App">
    <TitleHeader/>
    <div className="container">
    <div className="row">
      {
      print()
      }
  
   
      </div>
    
    </div>
   
    </div>
  );
}

export default App;
