import React from 'react';
import add from '../../utilities/calculate';
import { getTotalprice } from '../../utilities/fakdb';
import Cosmatic from '../Cosmatic/Cosmatic';

const Cosmatics = () => {
    const cosmatics = [
        { id: 1, name: 'alta', price: 100 },
        { id: 2, name: 'dalta', price: 200 },
        { id: 3, name: 'palta', price: 300 },
        { id: 4, name: 'salta', price: 400 },
        { id: 5, name: 'ista', price: 500 }
    ]
    const total = getTotalprice(cosmatics)
    return (
        <div>
            <p>Total: {total}</p>
            <h1>This is Cosmatic Area</h1>
            {
                cosmatics.map(cosmatic => <Cosmatic
                    key={cosmatic.id}
                    cosmatic={cosmatic}

                ></Cosmatic>)
            }
        </div>
    );
};

export default Cosmatics;