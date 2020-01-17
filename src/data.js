import faker from 'faker';

const products = [];

while(products.length < Math.random()*5 + 30){
  products.push({
    id: products.length + 1,
    name: faker.commerce.productName(),
    numberInStock: faker.random.number({ min: 1, max: 10})
  });
}

const data = {
  products
};

export default data;