
const db = require('../util/database');

const Cart = require('./cart');





module.exports = class Product {
    // constructor properties    
    constructor(id,title,imageURL,Price,Description) {
        this.ID = id;
        this.Title = title;
        this.ImageURL= imageURL;
        this.Price = Price;
        this.Description = Description;
    }



    // method object oriented programming
    save() { 
     if(this.ID){

        return db.execute('UPDATE products SET Title = ? , Price = ? , Description = ? , ImageURL= ? WHERE ID= ? ',
        [this.Title,this.Price,this.Description,this.ImageURL,this.ID] )


     }   
     else{

        return  db.execute('INSERT INTO products(Title,Price,Description,ImageURL) VALUES(? , ? , ? , ? )',
         [this.Title,this.Price,this.Description,this.ImageURL]); 
     }   

    }   
// })


    static DeletePrductID (id) {
    
    }
        // Get Data From MySQL than we will pass into view  
    static fetchAll() {
       
    return  db.execute('SELECT * FROM products');
    
    
    }

       // Find ID vs Use CallBack 
    static FindById(id){

       return db.execute('SELECT * FROM products WHERE ID = ?', [id])

    }    


}