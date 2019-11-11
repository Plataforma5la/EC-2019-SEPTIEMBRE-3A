import axios from "axios";

export const sendMail = function(mensajeHTML) {
    return function(dispatch, getState) {
      axios.put("/api/mailer", { mensajeHTML: mensajeHTML })
    };
  };