import axios from "axios";
import React from "react";
import "./Product.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product({ handleCartItems, searchField }) {
  const [products, setProducts] = useState([]);

  const filteredProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(searchField.toLowerCase());
  });

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

  useEffect(() => {
    console.log(searchField);
  }, [searchField]);

  return (
    <div>
      <div className="container">
        <div className="row">
          {filteredProducts &&
            filteredProducts.map((item) => {
              return (
                <div className="col-md-3 ">
                  <div className="pricing">
                    <Link to={"/product/" + item.slug}>
                      <img src={item.img} />
                      <h1>{item.name.substring(0, 9)}</h1>
                      {/* <p>{item.description}</p> */}
                    </Link>
                    <p>${item.price} </p>

                    <div className="button">
                      <button
                        onClick={handleCartItems}
                        className="btn btn-warning mb-3"
                      >
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
