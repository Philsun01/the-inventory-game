import React, {useState} from 'react';
import { products } from './data';
import faker from 'faker';
import Stats from './stats';


const Products = () => {
    
    const [items, setItems] = useState(products);
    const [sku, setSku ]  = useState(products.length+1);
    
    const addItem = () => {
        setSku(sku + 1);
        
        const newItem = {
            id: sku,
            name: faker.commerce.productName(),
            numberInStock: faker.random.number({ min: 1, max: 10})
          };

        setItems([newItem, ...items])
    }

    const updateCount = (updateItem, qty) => {

        if(updateItem.numberInStock + qty <= 0){
            
            const removedItem = items.filter(item => {
                return item.id !== updateItem.id;
            })
            
            setItems(removedItem);
        } else { 
            const updatedList = items.map(item => {
                if(item.id === updateItem.id){
                    return {...updateItem, numberInStock: updateItem.numberInStock += qty}
                }
                return item;
            });
            setItems(updatedList);
        }
    }

    return (
        <div>
            <h1> The Inventory Game</h1>
            <Stats items = {items}/>
            <button onClick = {() => addItem()}> Add New Item</button>
            <ul>
            {
            items.map((item) => {
                return (
                    <li key ={item.id}> 
                        Item {item.id}: {item.name} <br/> 
                        {item.numberInStock} in Stock
                        <div>
                            <button onClick = {() => updateCount(item, -1)}>-</button>
                            <button onClick = {() => updateCount(item, 1)} 
                                disabled = {item.numberInStock >= 10}>+</button>
                        </div>
                        
                    </li>
                )
            })
            }
        </ul>
        </div>
    )
}

export default Products;