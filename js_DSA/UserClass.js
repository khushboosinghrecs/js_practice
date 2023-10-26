const user = { 
    name: "Kim", 
    active: true, 
    cart: [], 
    purchases: [] 
   }; 
   const userHistory = []; 
   function addToCart(user, item) { 
    userHistory.push( 
    Object.assign({}, user, { cart: user.cart, purchases: user.purchases }) 
    ); 
    const updateCart = user.cart.concat(item); 
    return Object.assign({}, user, { cart: updateCart }); 
   } 
   function taxItems(user) { 
    userHistory.push( 
    Object.assign({}, user, { cart: user.cart, purchases: user.purchases }) 
    ); 
    const { cart } = user; 
    const taxRate = 1.4; 
    const updatedCart = cart.map(item => { 
    return { 
    name: item.name, 
    price: item.price * taxRate 
    }; 
    }); 
    return Object.assign({}, user, { cart: updatedCart }); 
   } 
   function buyItems(user) { 
    userHistory.push( 
    Object.assign({}, user, { cart: user.cart, purchases: user.purchases }) 
    ); 
    return Object.assign({}, user, { purchases: user.cart }); 
   } 
   function emptyCart(user) { 
    userHistory.push( 
    Object.assign({}, user, { cart: user.cart, purchases: user.purchases }) 
    ); 
    return Object.assign({}, user, { cart: [] }); 
   } 
   function refundItem(user, item) { 
    userHistory.push( 
    Object.assign({}, user, { cart: user.cart, purchases: user.purchases }) 
    ); 
    const { purchases } = user; 
    const refundItem = purchases.splice(item); 
    return Object.assign({}, user, { purchases: refundItem }); 
   } 
   const compose = (fn1, fn2) => (...args) => fn1(fn2(...args)); 
   const purchaseItems = (...fns) => fns.reduce(compose); 
   purchaseItems( 
    emptyCart, 
    buyItems, 
    taxItems, 
    addToCart 
   )(user, { name: "laptop", price: 200 }); 
   refundItem(user, { name: "laptop", price: 200 }); 
   console.log(userHistory)