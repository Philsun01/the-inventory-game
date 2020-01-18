import React from 'react';

const Stats = (props) => {

    const {items} = props;
    const lowCount = items.reduce( (acc, item) => { 
        if(item.numberInStock <= 3){    
            return acc = acc + 1;
        }
        return acc;
    },0);

    return (
        <h3>There are {lowCount} items with low inventory</h3>
    )
}

export default Stats;