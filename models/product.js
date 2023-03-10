const fs = require('fs');
const path = require('path');

const pathApp = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFromFile = cb => {
    fs.readFile(pathApp, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };

module.exports = class Product {
    constructor(title){
        this.title = title;
    }

    save() {        
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(pathApp, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }
    
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}
