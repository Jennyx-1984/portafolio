import React, { useState } from "react";
import styles from "../stylesheets/Contacto.module.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { LuMessageSquareText } from "react-icons/lu";
import ValidInput from "../components/atoms/ValidInput";
import IconBar from "../components/atoms/IconBar";
import Toast from "../components/atoms/Toast";
import axios from "axios";

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarNombre(nombre) {
  return nombre.length >= 2;
}

function validarCampo(mensaje) {
  return mensaje.length > 0 && mensaje.length <= 500;
}

function Contacto() {
  const [validos, setValidos] = useState({
    nombre: null,
    email: null,
    mensaje: null,
  });
  const [errores, setErrores] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [notif, setNotif] = useState(null);
  const handleInputChange = (name, value, valido) => {
    setValidos((prev) => ({ ...prev, [name]: valido }));

    let error = "";
    if (name === "nombre" && valido === false) {
      error = "El nombre debe tener al menos 2 caracteres.";
    }
    if (name === "email" && valido === false) {
      error = "El correo no es válido.";
    }
    if (name === "mensaje" && valido === false) {
      error = "El mensaje no puede estar vacío ni superar 500 caracteres.";
    }
    setErrores((prev) => ({ ...prev, [name]: error }));
  };

  const formularioValido =
    validos.nombre === true &&
    validos.email === true &&
    validos.mensaje === true;

  const enviarCorreo = async (e) => {
    e.preventDefault();
    if (!formularioValido) return;

    try {
      await axios.post("/api/contact", {
        nombre: e.target.nombre.value,
        email: e.target.email.value,
        mensaje: e.target.mensaje.value,
      });

      e.target.reset();
      setValidos({ nombre: null, email: null, mensaje: null });
      setErrores({ nombre: "", email: "", mensaje: "" });
      setNotif("exito");
    } catch {
      setNotif("error");
    }
  };
  return (
    <div
      className={styles.ring}
      style={{ "--clr1": "#00ff0a", "--clr2": "#ff0057", "--clr3": "#fffd44" }}
    >
      <i style={{ "--clr": "var(--clr1)" }}></i>
      <i style={{ "--clr": "var(--clr2)" }}></i>
      <i style={{ "--clr": "var(--clr3)" }}></i>
      <div className={styles.contacto_contenedor}>
        <h2>¿Quieres contactarme?</h2>
        <p className={styles.intro}>
          ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy
          siempre abierta a nuevas ideas, colaboraciones creativas y
          oportunidades profesionales. ¡Hablemos!
        </p>

        <form onSubmit={enviarCorreo}>
          <div className={styles.campo}>
            <div className={styles.input_con_icono}>
              <FaRegUser className={styles.input_icon} />
              <ValidInput
                name="nombre"
                placeholder="Tu nombre"
                validate={validarNombre}
                onChange={handleInputChange}
              />
            </div>
            {errores.nombre && <p className={styles.error}>{errores.nombre}</p>}
          </div>

          <div className={styles.campo}>
            <div className={styles.input_con_icono}>
              <AiOutlineMail className={styles.input_icon} />
              <ValidInput
                type="email"
                name="email"
                placeholder="ejemplo@correo.com"
                validate={validarEmail}
                onChange={handleInputChange}
              />
            </div>
            {errores.email && <p className={styles.error}>{errores.email}</p>}
          </div>

          <div className={styles.campo}>
            <div className={styles.input_con_icono}>
              <LuMessageSquareText className={styles.input_icon} />
              <ValidInput
                type="text"
                name="mensaje"
                placeholder="Escribe tu mensaje"
                validate={validarCampo}
                onChange={handleInputChange}
              />
            </div>
            {errores.mensaje && (
              <p className={styles.error}>{errores.mensaje}</p>
            )}
          </div>

          <button
            className={styles.submit}
            type="submit"
            disabled={!formularioValido}
          >
            Enviar
          </button>
        </form>

        <IconBar />
      </div>
      {notif && <Toast tipo={notif} onClose={() => setNotif(null)} />}
    </div>
  );
}

export default Contacto;
