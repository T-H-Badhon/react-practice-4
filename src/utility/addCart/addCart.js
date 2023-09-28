

let shoppingCart={};

const addCart = (id,name,price) => {
    const checkCart=localStorage.getItem('cart');
    if(checkCart){
        shoppingCart=JSON.parse(checkCart);
    }
    if(id in shoppingCart){
        shoppingCart[id].quantity++;
    }
    else{
        shoppingCart[id]={
            name: name,
            price: price,
            quantity: 1
        }
    }
    localStorage.setItem('cart',JSON.stringify(shoppingCart));
    shoppingCart={}
};

export default addCart;