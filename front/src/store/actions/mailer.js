import axios from "axios";

export const sendMail = function (direccion, cart) {
  return function (dispatch, getState) {

    let HTML_MESSAGE = '<div><b>Gracias por tu compra!</b> <br>'
    for (let i = 0; i < cart.length; i++) {
      HTML_MESSAGE += `(${cart[i].cart_product.count}) ${cart[i].name} <br> `
    }
    HTML_MESSAGE += `<b>Te lo enviamos a ${direccion}</b></div>`
    axios.post("/api/mailer", { HTML_MESSAGE: HTML_MESSAGE }).then(() => alert("Gracias por tu compra! Te hemos enviado los detalles a tu casilla de correo"))
  };
};

export const sendMailAccept = function (email) {
  return function (dispatch, getState) {

    let HTML_MESSAGE = '<div><b>Informacion sobre tu compra!</b> <br>'
    HTML_MESSAGE += `<b>Su producto ya esta despachado y sera entregado el dia de mañana a las 14hs.</b></div>`
    return axios.post("/api/mailer/confirm", { HTML_MESSAGE: HTML_MESSAGE, email })
  };
};

export const sendMailCancel = function (email) {
  return function (dispatch, getState) {

    let HTML_MESSAGE = '<div><b>Informacion sobre tu compra!</b> <br>'
    HTML_MESSAGE += `<b>Su producto fue cancelado, usted es un degeneradx</b></div>`
    return axios.post("/api/mailer/cancel", { HTML_MESSAGE: HTML_MESSAGE, email })
  };
};