/*
  Servicio para imagenes: robohash
  servicio para API: https://retool.com/api-generator
  Modulo de React para icons: react icons
*/

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// import {Post} from './Post';
// import {Saludar} from './Saludar'
// import {TaskCard} from './Task'
// import {Button} from './Button'
// import { Usercard } from "./componente";
// import "./index.css";

// const user = [
//   {
//     id: 1,
//     name: "Antonio",
//     image: "https://robohash.org/user 1",
//   },
//   {
//     id: 2,
//     name: "Manuel",
//     image: "https://robohash.org/user 2",
//   },
// ];

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");

  useEffect(function () {
    console.log("Render");
  }, []);

  return (
    <div>
      {/* <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter+1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCounter(counter-1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Restart
      </button> */}
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Guardar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
  </>
);
