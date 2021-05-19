import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
  let { id } = useParams();
  const [productsDetail, setProductsDetail] = useState([]);

  useEffect(() => {
    const URL = `http://localhost:3079/product/${id}`;

    const productsDetail = async () => {
      try {
        const response = await axios.get(URL);
        setProductsDetail(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    productsDetail();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container productDetail">
      <div className="row ">
        <div className="col-md-6 col1">
          <img src={productsDetail.img} />
        </div>

        <div className="col-md-6">
          <h2>{productsDetail.name}</h2>
          <p>{productsDetail.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
