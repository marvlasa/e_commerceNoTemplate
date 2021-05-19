import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="container">
      <div className="row" id="rowRegister">
        <div className="col-md-6 " id="registerImage"></div>
        <div className="col-md-6" id="registerInput">
          <div className="register">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
