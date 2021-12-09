import React, { useState, useEffect } from "react";
import TitleHeader from "./TitleHeader";
import Product from "./Product";
import axios from "axios";
import AddProduct from "./AddProduct";
function App() {
  const [data, setdata] = useState([]);
  // GET request for remote image in node.js

  useEffect(() => {
    axios({
      method: "get",
      url: "/getall",
      responseType: "stream",
    })
      .then(function (response) {
        setdata(response.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  function print() {
    if (data != null) {
      return data.map((item, index) => {
        return (
          <Product key={index} name={item.product_name} image={item.image} />
        );
      });
    }
  }

  return (
    <div className="App">
      <TitleHeader />
      <div className="container-fluid">
        <div className="row">
        <div className="col-7">
        <div className="row">
          {print()}
         </div>
         </div>
          <AddProduct />
        </div>
      </div>
    </div>
  );
}

export default App;
