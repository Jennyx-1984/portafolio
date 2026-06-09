import React from "react";
import "../stylesheets/notfound.css"; // aquí pondrás tu CSS correspondiente
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="error-page">
      <div className="cow">
        <div className="head">
          <div className="face"></div>
        </div>
        <div className="leg b l"></div>
        <div className="leg b r"></div>
        <div className="leg f l"></div>
        <div className="leg f r"></div>
        <div className="tail"></div>
      </div>

      <div className="well">
        <Link to="/" className="home-btn" >
      <button className="btn">Volver al inicio</button>
    </Link>
      </div>

      <div className="text-box">
        <h1>401</h1>
        <p>Lo siento, se ha perdido la conexión...</p>
      </div>
    </div>
  );
}

