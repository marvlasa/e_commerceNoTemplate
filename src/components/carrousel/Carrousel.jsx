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
            src="https://img5.goodfon.com/wallpaper/nbig/f/97/home-television-living-room.jpg"
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
            src="https://i.ibb.co/djgN2h7/foto1.jpg"
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
