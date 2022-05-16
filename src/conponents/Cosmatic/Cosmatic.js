import React from 'react';
import { addToDb, removeDb } from '../../utilities/fakdb';


const Cosmatic = (props) => {
    const { name, price, id } = props.cosmatic;

    const addTocart = (id) => {
        addToDb(id)
    }

    const removeItem = (id) => {
        removeDb(id)
    }

    // duita niom 
    // const addWthP = () => addTocart(id)

    {/* <button onClick={() => addTocart(id)}>Add TO Cart</button> */ }

    return (
        <div style={{
            border: '2px solid red', margin: '10px', padding: '20px',
        }}>

            <h1>Name:{name}</h1>
            <p>only for you: ${price} </p>
            <h4>It has a id : {id}</h4>

            <button onClick={() => addTocart(id)}>Add TO Cart</button>

            <button onClick={() => removeItem(id)}>Remove</button>
        </div >
    );
};

export default Cosmatic;