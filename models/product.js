const fs = require('fs');
const path = require('path');

const pathApp = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFromFile = async () => {
    try {
      const content = await fs.promises.readFile(pathApp);
      return JSON.parse(content);
    } catch (error) {
      console.log('>> error when reading data: ', error)
    }
    return [];
  };

const saveProductsOnFile = async (prods) => {
  try {
    await fs.promises.writeFile(pathApp, JSON.stringify(prods));
  } catch (error) {
    console.error('>> error when saving data: ', error);
  }
}

module.exports = class Product {
    constructor(title){
        this.title = title;
    }

    async save() {
        const prods = await getProductsFromFile();
        prods.push(this);
        await saveProductsOnFile(prods);
    }
    
    static async fetchAll() {
        return await getProductsFromFile();
    }
}
