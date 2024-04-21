import React from "react";
import ReactDOM from "react-dom/client";
// import {Saludar} from './Saludar'
// import {TaskCard} from './Task'
import {Button} from './Button'
// import { Usercard } from "./componente";
// import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Button/>
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log('Enviando datos')
    }}>
      <h1>Registro de usuario</h1>
      <button>Enviando</button>
    </form>
  </>
);
