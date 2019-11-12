import axios from "axios";

export const sendMail = function (direccion, cart) {
  return function (dispatch, getState) {

    let HTML_MESSAGE = '<div><b>Gracias por tu compra!</b> <br>'
    for (let i = 0; i < cart.length; i++) {
      HTML_MESSAGE += `(${cart[i].cart_product.count}) ${cart[i].name} <br>`
    }
    HTML_MESSAGE += `<b>Te lo enviamos a ${direccion}</b></div>`
    axios.post("/api/mailer", { HTML_MESSAGE: HTML_MESSAGE }).then(() => alert("Gracias por tu compra! Te hemos enviado los detalles a tu casilla de correo"))
  };
};

export const sendMail2 = function () {
  return function (dispatch, getState) {

    let HTML_MESSAGE = '<div><b>Informacion sobre tu compra!</b> <br>'
    HTML_MESSAGE += `<b>Su producto ya esta despachado y sera entregado el dia de mañana a las 14hs.</b></div>`
    axios.post("/api/mailer", { HTML_MESSAGE: HTML_MESSAGE })
  };
};