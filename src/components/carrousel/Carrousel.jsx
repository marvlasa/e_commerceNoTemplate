import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carrousel.css";

function Carrousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block  img"
            src="https://images.pexels.com/photos/6527054/pexels-photo-6527054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>La pantalla LCD que deseas</h3>
            <p>paneles táctiles únicos en el mercado</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block  img"
            // src="https://i.ibb.co/djgN2h7/foto1.jpg"
            src="https://images.unsplash.com/photo-1584143987552-0ab1f595af6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Los electrodomésticos que harán la diferencia</h3>
            <p>
              Ten el diseño de interiores que deseas con nuestros productos
              distintivos
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block  img"
            src="https://www.lowes.ca/-/media/lowes/images/ideas-how-tos/buying%20guides/refrigerator%20buying%20guide/refrigerator-buying-guide-hero-1015x571.jpg?h=571&w=1015&la=en-CA&hash=DC147165B14A83B2898F0672F7E0923D1ED4CE43"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Eletrodomésticos con inteligenica artificial</h3>
            <p>Haz tu vida más simple con la úlima tecnología en plaza</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel;
