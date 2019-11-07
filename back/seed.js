const Category = require("./models/categories");
const Product = require("./models/products");
const db = require("./config/db");

db.sync({ force: true }).then(() => {
  Category.create({
    name: "Anal"
  }).then(categories => {
    Product.bulkCreate([
      {
        name: "Stronic Surf",
        description: "Impulsos y penetración a manos libres. Creado para ofrecer masajes profundo. Silencioso y discreto con 7 velocidades & 3 ritmos",
        price: 500,
        stock: 3,
        img1Url:
          "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_SURF/neon-orange/1.png",
        img2Url:
          "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_SURF/FF_STRONIC-SURF_4118823_mood.jpg"
      },
      {
        name: "Stronic G",
        description: "Juguete para el punto G que se impulsa y empuja, manos libres. Punta firme para estimular el punto G con 7 velocidades y 3 ritmos",
        price: 500,
        stock: 3,
        img1Url:
          "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_G/pink/1.png",
        img2Url:
          "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_G/FF_STRONIC-G_4108873_hand.jpg"
      },
      {
        name: "ShareVibe",
        description: "SHAREVIBE es como una prolongación del cuerpo ya que no es necesario el uso de arnés. Se introduce en la vagina de la parte activa, que lo sostiene con la musculatura pélvica. Da placer simultáneamente a la parte activa y a la pasiva",
        price: 500,
        stock: 3,
        img1Url:
          "https://www.funfactory.com/fileadmin/360/CoupleTOYS/SHAREVIBE/dark-violet/1.png",
        img2Url:
          "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/Sharevibe/Sharevibe-Mood-2.jpg"
      },
      {
        name: "SuperChoto",
        description: "para mas placeeer bebotin linde hermose",
        price: 500,
        stock: 3,
        img1Url:
          "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_SURF/neon-orange/1.png",
        img2Url:
          "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_SURF/FF_STRONIC-SURF_4118823_mood.jpg"
      },
      {
        name: "Pijon",
        description: "para mas placeeer bebotin linde hermose",
        price: 500,
        stock: 3,
        img1Url:
          "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_SURF/neon-orange/1.png",
        img2Url:
          "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_SURF/FF_STRONIC-SURF_4118823_mood.jpg"
      },
      {
        name: "El rompe Asteriscos",
        description: "para mas placeeer bebotin linde hermose",
        price: 500,
        stock: 3,
        img1Url:
          "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_SURF/neon-orange/1.png",
        img2Url:
          "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_SURF/FF_STRONIC-SURF_4118823_mood.jpg"
      },
      {
        name: "Muni",
        description: "para mas placeeer bebotin linde hermose",
        price: 500,
        stock: 3,
        img1Url:
          "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_SURF/neon-orange/1.png",
        img2Url:
          "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_SURF/FF_STRONIC-SURF_4118823_mood.jpg"
      },
      {
        name: "Skere",
        description: "para mas placeeer bebotin linde hermose",
        price: 500,
        stock: 3,
        img1Url:
          "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_SURF/neon-orange/1.png",
        img2Url:
          "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_SURF/FF_STRONIC-SURF_4118823_mood.jpg"
      }
    ]).then(products => {
      Category.create({ name: "impulsor" }).then(impulsor => {
        products.forEach(X => {
          X.addCategories(Date.now() % 2 == 0 ? categories : impulsor);
        });
      });
    });
  });
});
