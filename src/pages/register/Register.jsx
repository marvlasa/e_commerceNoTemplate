import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="container">
      <div className="row" id="rowRegister">
        <div className="col-md-6 " id="registerImage"></div>
        <div className="col-md-6" id="registerInput">
          <div className="headerForm">
            <h1>Datos de Registro</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form1">
                <label>
                  Nombre.
                  <input type="text" name="name" />
                </label>
                <label>
                  Dirección
                  <input type="text" name="name" />
                </label>
                <label>
                  Email.
                  <input type="text" name="name" />
                </label>
                <label>
                  Contraseña.
                  <input type="text" name="name" />
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form2">
                <label>
                  Apellido.
                  <input type="text" name="name" />
                </label>
                <label>
                  Teléfono.
                  <input type="text" name="name" />
                </label>
                <label>
                  Repetir Email.
                  <input type="text" name="name" />
                </label>
                <label>
                  Repetir contraseña.
                  <input type="text" name="name" />
                </label>
              </div>
            </div>
          </div>
          <div className="footerForm">
            <div className="row">
              <div className="col-md-6 icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-google-plus-g"></i>
              </div>
              <div className="col-md-6">
                <p>¿Olvidaste tu contraseña?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
