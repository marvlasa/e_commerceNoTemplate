import React from "react";
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="row align-items-center mb-5">
        <div className="col-md-3 pricing rounded">
          <img
            src="https://www.estrategiaynegocios.net/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=RDGJtT2_wvbyq5AjPJET4c$daE2N3K4ZzOUsqbU5sYsJwndwh_25dutpI2C1IJwl6FB40xiOfUoExWL3M40tfzssyZqpeG_J0TFo7ZhRaDiHC9oxmioMlYVJD0A$3RbIiibgT65kY_CSDiCiUzvHvODrHApbd6ry6YGl5GGOZrs-&CONTENTTYPE=image/jpeg"
            alt=""
          />
          <h1>Smart TV Samsung 75 2020 QLED 4K HDR</h1>
          <p>
            Los colores son tan reales como deberían ser. Con la exclusiva
            tecnología de punto cuántico de Samsung, QLED aumenta el volumen de
            color en un 100 %...
          </p>
          <p>Precio: $20,2500</p>
          <button className="btn btn-warning mb-3">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
