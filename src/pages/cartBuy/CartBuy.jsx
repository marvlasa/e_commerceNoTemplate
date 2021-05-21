import React from "react";
import { Link } from "react-router-dom";

function CartBuy({ cartItems }) {
  console.log(cartItems);
  return (
    <div className="container">
      <div className="row">
        {cartItems &&
          cartItems.map((item) => {
            return (
              <div className="col-md-3 ">
                <div className="pricing">
                  <Link to={"/product/" + item.slug}>
                    <img src={item.img} />
                    <div className="heightCard">
                      <h5>{item.name}</h5>
                      {/* <p>{item.description.substring(0, 50)}</p> */}
                    </div>
                  </Link>
                  <p>${item.price} </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CartBuy;
