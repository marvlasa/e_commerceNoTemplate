import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      <span>{cartItems.length}</span>
      <i class="fas fa-shopping-cart"></i>
    </div>
  );
}

export default Cart;
