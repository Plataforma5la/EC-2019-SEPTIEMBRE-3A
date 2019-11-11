import axios from "axios";

export const sendMail = function(direccion, cart) {
    return function(dispatch, getState) {
      console.log("@@d", direccion, cart)

let HTML_MESSAGE = '<div><b>Gracias por tu compra!</b> <br>'
for (let i=0; i<cart.length; i++){
  HTML_MESSAGE += `(${cart[i].cart_product.count}) ${cart[i].name} <br>`
}
HTML_MESSAGE += `<b>Te lo enviamos a ${direccion}</b></div>`
console.log(HTML_MESSAGE)
      axios.post("/api/mailer", { HTML_MESSAGE: HTML_MESSAGE }).then(()=> alert("Gracias por tu compra! Te hemos enviado los detalles a tu casilla de correo"))
    };
  };