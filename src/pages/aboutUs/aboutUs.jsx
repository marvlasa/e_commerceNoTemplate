import React from "react";
import "./aboutUs.css";

/* https://i.ibb.co/BV8WLFX/marcos.jpg" 
https://i.ibb.co/SPMhpdZ/martin.jpg" 
  https://i.ibb.co/R0TC7Zg/nico.jpg"  
  https://i.ibb.co/GdbQkt3/kevin.jpg */

function aboutUs() {
  return (
    <div>
      <div className="container aboutUs">
        <h1>Sobre Nosotros</h1>
        <p1>
          Somos un grupo de estudiantes de la 3º edición del bootcamp de Hack
          Academy. En este proyecto buscamos demostrar una gran parte del
          conocimiento que hemos adquirido a lo largo del curso. Este proyecto
          se basa en React js en la parte de Front-End y MySQL en cuanto a
          Back-End.{" "}
        </p1>
        <div className="row ">
          <div className="col-md-2 left-img">
            <img src="https://i.ibb.co/R0TC7Zg/nico.jpg" />
          </div>

          <div className="col-md-10 left-text">
            <h2>Nicolas Curbelo</h2>
            <p>
              Estudiante de bootcamp en Hack Academy para el curso de Full Stack
              Web Developer
            </p>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-10 right-text">
            <h2>Martin Vlasanovich</h2>
            <p>
              Estudiante de bootcamp en Hack Academy para el curso de Full Stack
              Web Developer
            </p>
          </div>
          <div className="col-md-2 right-img">
            <img src="https://i.ibb.co/SPMhpdZ/martin.jpg" />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-2 left-img">
            <img src="https://i.ibb.co/BV8WLFX/marcos.jpg" />
          </div>

          <div className="col-md-10 left-text">
            <h2>Marcos Sierra</h2>
            <p>
              Estudiante de bootcamp en Hack Academy para el curso de Full Stack
              Web Developer
            </p>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-10 right-text">
            <h2>Kevin Mullin</h2>
            <p>
              Estudiante de bootcamp en Hack Academy para el curso de Full Stack
              Web Developer
            </p>
          </div>
          <div className="col-md-2 right-img">
            <img src="https://i.ibb.co/GdbQkt3/kevin.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutUs;
