const Category = require("./models/categories");
const Product = require("./models/products");
const db = require("./config/db");

db.sync({ force: true }).then(() => {
  Category.create({
    name: "Anal"
  }).then(category => {
    Product.create({
      name: "Duke",
      description:
        "Estimulador de próstata. Placer anal masculino de otra dimensión. Su forma ergonómica hace posible la estimulación del perineo. Maravillosa sensación de plenitud y orgasmos sensacionales asegurados",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/MenONLY/DUKE/deep-sea-blue/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/Duke/FF_Hand_DUKE_5300859_900x900px.jpg"
    }).then(product => product.addCategories(category.id));
    Product.create({
      name: "BendyBeads",
      description:
        "Juguete anal. Dildo: ¡placer total sin motor! , cadena muy estimulante con bolas de diferente grosor. Excitante durante la inserción, extracción muy placentera.",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/AnalTOYS/BENDYBEADS/black/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/Bendybeads/FF_BENDYBEADS_hand_01.jpg"
    }).then(product => product.addCategories(category.id));
  });

  Category.create({
    name: "Impulsores"
  }).then(category => {
    Product.create({
      name: "Stronic Surf",
      description:
        "Impulsos y penetración a manos libres. Creado para ofrecer masajes profundo. Silencioso y discreto con 7 velocidades & 3 ritmos",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_SURF/neon-orange/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_SURF/FF_STRONIC-SURF_4118823_mood.jpg"
    }).then(product => product.addCategories(category.id));
    Product.create({
      name: "Stronic G",
      description:
        "Juguete para el punto G que se impulsa y empuja, manos libres. Punta firme para estimular el punto G con 7 velocidades y 3 ritmos",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_G/pink/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_G/FF_STRONIC-G_4108873_hand.jpg"
    }).then(product => product.addCategories(category.id));
  });

  Category.create({
    name: "Vibradores"
  }).then(category => {
    Product.create({
      name: "ShareVibe",
      description:
        "SHAREVIBE es como una prolongación del cuerpo ya que no es necesario el uso de arnés. Se introduce en la vagina de la parte activa, que lo sostiene con la musculatura pélvica. Da placer simultáneamente a la parte activa y a la pasiva",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/CoupleTOYS/SHAREVIBE/dark-violet/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/Sharevibe/Sharevibe-Mood-2.jpg"
    }).then(product => product.addCategories(category.id));
    Product.create({
      name: "Volta",
      description:
        "Puntas movedizas, para más excitación y sensibilidad. Lo suficientemente potente para ti; lo suficientemente pequeño para el juego en pareja. Diseñado para el clítoris, para unas felaciones increíbles y más! 6 velocidades & 6 ritmos",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/DeluxeVIBES/VOLTA_-_BLACK_LINE/black/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/Black_Line/VOLTA_black-line_1141808_hand.jpg"
    }).then(product => product.addCategories(category.id));
    Product.create({
      name: "Wicked Wings",
      description:
        "Una forma angelical y juguetona. Intensidad constante mientras duren las pilas. 4 velocidades y 6 ritmos",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/Battery%2B/WICKED_WINGS/lightblue/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/360/Battery%2B/WICKED_WINGS/baby-rose/1.png"
    }).then(product => product.addCategories(category.id));
    Product.create({
      name: "Miss Bi",
      description:
        "Estimulación doble del clítoris y el punto G. 2 motores de manejo independiente en el cuerpo y en el saliente del juguete. Mayor grosor y mayor flexibilidad del saliente para la estimulación del clítori",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/DeluxeVIBES/MISS_BI/pink/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/MissBi/MissBi-Mood-2.jpg"
    }).then(product => product.addCategories(category.id));
  });
});
