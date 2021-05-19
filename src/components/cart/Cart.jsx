import React from "react";
import "./Cart.css";

function Cart({ cartItems }) {
  return (
    <div>
      <span class="badge badge-pill badge-danger">{cartItems.length}</span>
      <i class="fas fa-shopping-cart cart"></i>
    </div>
  );
}

export default Cart;
