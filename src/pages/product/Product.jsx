import axios from "axios";
import React from "react";
import "./Product.css";
import { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:3079/products";

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
        <div className="row">
          {products &&
            products.map((item) => {
              return (
                <div key={item.id} className="col-md-3 ">
                  <div className="pricing">
                    <img src={item.img} alt="" />
                    <h1>{item.name}</h1>
                    <p>{item.description.substring(0, 50)}</p>
                    <p className="price">${item.price} </p>

                    <div className="button">
                      <button className="btn btn-warning mb-3">
                        Agregar al carrito
                      </button>
                    </div>
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
