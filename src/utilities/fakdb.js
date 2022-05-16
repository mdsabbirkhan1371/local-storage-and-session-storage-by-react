const addToDb = (id) => {
    let shoppingCart;

    // get shooping cart 

    const storCart = localStorage.getItem('shopping-cart');
    if (storCart) {
        shoppingCart = JSON.parse(storCart)
    }
    else {
        shoppingCart = {}
    }

    // add quantity 
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;

        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))



    // first niom simple 

    // const quantity = localStorage.getItem(id)
    // if (quantity) {
    //     const newQuantity = parseInt(quantity) + 1;
    //     localStorage.setItem(id, newQuantity)
    // }
    // else {
    //     localStorage.setItem(id, 1)
    // }


}

const removeDb = (id) => {
    const storCart = localStorage.getItem('shopping-cart');
    if (storCart) {
        const shoppingCart = JSON.parse(storCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const datas = [
    { name: 'sarah', price: 344 },
    { name: 'dfkd', price: 354 },
    { name: 'djid', price: 343 },
]

const getTotalprice = () => {
    const sumReduer = (previous, current) => previous + current.price;
    const total = datas.reduce(sumReduer, 0)
    return total
}

// const numbers = [4, 5, 6, 8, 9, 34]

// const sumReducer = (pre, current) => pre + current;
// const total = numbers.reduce(sumReducer, 0)
export { addToDb, removeDb, getTotalprice }