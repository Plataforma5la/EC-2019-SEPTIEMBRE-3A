const Category = require("./models/categories");
const Product = require("./models/products");
const db = require('./config/db')

db.sync({force: true})
.then(()=>{

    Product.bulkCreate([
    {
      name: "Dildote",
      description: "para mas placeeer bebotin linde hermose",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_SURF/neon-orange/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_SURF/FF_STRONIC-SURF_4118823_mood.jpg"
    },
    {
      name: "Dildito",
      description: "para mas placeeer bebotin linde hermose",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_SURF/neon-orange/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_SURF/FF_STRONIC-SURF_4118823_mood.jpg"
    },
    {
      name: "Dildin",
      description: "para mas placeeer bebotin linde hermose",
      price: 500,
      stock: 3,
      img1Url:
        "https://www.funfactory.com/fileadmin/360/StrongTOYS/STRONIC_SURF/neon-orange/1.png",
      img2Url:
        "https://www.funfactory.com/fileadmin/images/product_details/pictures%20product%20detail/STRONIC_SURF/FF_STRONIC-SURF_4118823_mood.jpg"
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
  ])
  .then((products) => {
    // console.log("@@@", products)
    Category.bulkCreate([
      {
        name: "Impulsor"
      },
      {
        name: "Vibrador"
      },
      {
        name: "Anal"
      }
      ])
      .then((categories) =>{
        console.log("@@@@", categories)
        categories.forEach(X => {
          X.addProducts(products[Math.floor(Math.random() * 3)])
          X.addProducts(products[Math.floor(Math.random() * 3)])
    })
  })
})

})
