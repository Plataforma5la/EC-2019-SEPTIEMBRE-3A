const router = require("express").Router();
const nodeMailer = require('nodemailer');

router.post("/", function(req, res) {
   
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
        to: ['franpegels@gmail.com'/*, 'anyother@hotmail.com'*/],
        subject: 'COMPRA eClimax.com',
        text: 'Hello world?', // plain text body
        html: '<div class="container cartProductsContainer"><div class="row cartSingleProductBox"><div class="col-3"><img class="cartProductPic " src="https://www.funfactory.com/fileadmin/360/DeluxeVIBES/MISS_BI/pink/1.png"></div><div class="col-3"><h4>Miss Bi</h4></div><div class="col-3"><p>$500</p></div><div class="col-3"><button>-</button><p>cant</p><button>+</button></div></div><div class="row cartSingleProductBox"><div class="col-3"><img class="cartProductPic " src="https://www.funfactory.com/fileadmin/360/CoupleTOYS/SHAREVIBE/dark-violet/1.png"></div><div class="col-3"><h4>ShareVibe</h4></div><div class="col-3"><p>$500</p></div><div class="col-3"><button>-</button><p>cant</p><button>+</button></div></div><div class="row cartSingleProductBox"><div class="col-3"><img class="cartProductPic " src="https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_G/pink/1.png"></div><div class="col-3"><h4>Stronic G</h4></div><div class="col-3"><p>$500</p></div><div class="col-3"><button>-</button><p>cant</p><button>+</button></div></div><div class="row cartSingleProductBox"><div class="col-3"><img class="cartProductPic " src="https://www.funfactory.com/fileadmin/360/DeluxeVIBES/VOLTA_-_BLACK_LINE/black/1.png"></div><div class="col-3"><h4>Volta</h4></div><div class="col-3"><p>$500</p></div><div class="col-3"><button>-</button><p>cant</p><button>+</button></div></div><button>Vaciar carrito</button></div>' // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.writeHead(301, { Location: 'index.html' });
    res.end();

    //   res.status(200);
    //   res.json(categories);

  });
  
  module.exports = router;