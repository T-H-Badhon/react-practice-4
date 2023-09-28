let shoppingCart={};

const removeCart = (id) => {
    const checkCart=localStorage.getItem('cart');
    if(checkCart){
        shoppingCart=JSON.parse(checkCart);
    }
    if(id in shoppingCart){
        delete shoppingCart[id];
    }
    else{
        alert(`Doesn't exist in cart`)
    }
    localStorage.setItem('cart',JSON.stringify(shoppingCart));
};

export default removeCart;