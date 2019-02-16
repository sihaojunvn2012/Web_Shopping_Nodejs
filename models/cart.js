const path = require('path');
const fs = require('fs');



const p = path.join(path.dirname(process.mainModule.filename),
 'Data', 
 'cart.json'
 );



  module.exports = class cart {


    static AddProduct (id,priceProduct){

        
    fs.readFile(p, (err, fileContent) => {
        let cart = { Products: [], TotalPrice: 0 };
        if (err) {

            console.log(err)
          
        }
        
        else {
            cart = JSON.parse(fileContent);
            
          const  existingProductIndex = cart.Products.findIndex( p => p.id ===id);
          const existingProduct = cart.Products[existingProductIndex];
          let updataProduct;
          if(existingProduct){
            updataProduct = {...existingProduct};
            updataProduct.qty += 1;
            cart.Products = [...cart.Products]; 
            cart.Products[existingProductIndex] = {...updataProduct};
           
          }
          else {
           updataProduct ={  id:id, qty :1  }
           cart.Products = [...cart.Products,updataProduct];

          }
          cart.TotalPrice += priceProduct; 
          
          fs.writeFile(p,JSON.stringify(cart),err =>{

            console.log(err);

          }) 
        }
    });
    }
  }  
