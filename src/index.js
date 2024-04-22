/*
  Servicio para imagenes: robohash
  servicio para API: https://retool.com/api-generator
  Modulo de React para icons: react icons
*/

import React from "react";
import ReactDOM from "react-dom/client";
// import {Post} from './Post';
// import {Saludar} from './Saludar'
// import {TaskCard} from './Task'
// import {Button} from './Button'
// import { Usercard } from "./componente";
// import "./index.css";

const user = [
  {
    id: 1,
    name: "Antonio",
    image: "https://robohash.org/user 1",
  },
  {
    id: 2,
    name: "Manuel",
    image: "https://robohash.org/user 2",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {user.map((user, index) => {
      return <ul key={index}>
        <li>
          <h1>{index}</h1>
        </li>
        <li>
          <p>{user.name}</p>
        </li>
        <li>
          <img src={user.image} />
        </li>
      </ul>
    })}
  </>
);
