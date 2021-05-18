import axios from "axios";
import React from "react";
import "./Product.css";
import { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:3080/products";

    const products = async () => {
      try {
        const response = await axios.get(URL);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    products();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row  mb-5">
          {products &&
            products.map((item) => {
              return (
                <div className="col-md-3 pricing rounded">
                  <img src={item.img} />
                  <h1>{item.name}</h1>
                  <p>{item.description.substring(0, 50)}</p>
                  <p2>${item.price} </p2>

                  <div className="button">
                    <button className="btn btn-warning mb-3">
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Product;
