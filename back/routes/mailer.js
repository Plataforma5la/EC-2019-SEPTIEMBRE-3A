const router = require("express").Router();
const nodeMailer = require('nodemailer');

router.post("/", function (req, res) {

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'infoeclimax@gmail.com',
            pass: 'eclimax.com'
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: [req.user.email/*, 'anyother@hotmail.com'*/],
        subject: 'COMPRA eClimax.com',
        text: 'Hello world?', // plain text body
        html: req.body.HTML_MESSAGE // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    // res.writeHead(301, { Location: 'index.html' });
    res.status(200);
    res.json('Enviado con Exito!');

});

router.post("/confirm", function (req, res) {

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'infoeclimax@gmail.com',
            pass: 'eclimax.com'
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: [req.body.email/*, 'anyother@hotmail.com'*/],
        subject: 'COMPRA CONFIRMADA eClimax.com',
        text: 'Hello world?', // plain text body
        html: req.body.HTML_MESSAGE // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    // res.writeHead(301, { Location: 'index.html' });
    res.status(200);
    res.json('Enviado con Exito!');

});

router.post("/cancel", function (req, res) {

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'infoeclimax@gmail.com',
            pass: 'eclimax.com'
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: [req.body.email/*, 'anyother@hotmail.com'*/],
        subject: 'COMPRA CANCELADA eClimax.com',
        text: 'Hello world?', // plain text body
        html: req.body.HTML_MESSAGE // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    // res.writeHead(301, { Location: 'index.html' });
    res.status(200);
    res.json('Enviado con Exito!');

});

module.exports = router;