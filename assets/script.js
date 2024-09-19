//This is an array that list the products and their qualities.
const products = [
  //Product 1
  { 
    "name": "Chocobananos",
    "price": 3.25,
    "quantity": 0,
    "productId": 1,
    "image": "images/Chocobananos.jpg"
  },
  //Product 2
  { 
    "name": "Flan",
    "price": 5.10,
    "quantity": 0,
    "productId": 2,
    "image": "images/flan.jpg"
  },
  //Product 3
  { 
    "name": "Arroz con Leche",
    "price": 4.50,
    "quantity": 0,
    "productId": 3,
    "image": "images/arroz_con_leche.jpg"
  },
];

//An empty array that is meant to be the placeholder for items being purchased.
const cart = [];

//A helper function that retrieves the productId of a product for the other functions to use.
function getProductById(productId) {
  return products.find(product => product.productId === productId);
}

//Adds a product to the cart.
function addProductToCart(productId) {
  const product = getProductById(productId);
  //Adds quantity if product is already in the cart.
  if (product) {
    product.quantity++;
    //Adds product if it is not included in the cart already.
    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
}

//Increases the quantity of a product in a cart.
function increaseQuantity(productId) {
  //Finds the product in the cart by its ID.
  const product = getProductById(productId);
  //If the product is in the cart already, it's quantity will increase by 1.
  if (product) {
    product.quantity++;
  }
}

//Decreases the quantity of a product in a cart.
function decreaseQuantity(productId) {
  //Finds the product in the cart by its ID.
  const product = getProductById(productId);
  //If the product is in the cart already, it's quantity will decrease by 1.
  if (product) {
    product.quantity--;
    //If the product overall quantity is 0, the function use to remove the item from the cart will be activated.
    if (product.quantity === 0) {
      removeProductFromCart(productId)
    }
  }
}

//Removes products from the cart when their quantity reaches 0.
function removeProductFromCart(productId) {
  //Finds the product in the cart by its ID.
  let product = getProductById(productId);
  //Confirms product quantity is at 0.
  if (product) {
    product.quantity = 0;
    //Defines what should be removed from the cart.
    const index = cart.indexOf(product);
    //Removes items from the cart.
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
}
//Presents the total of all products and return the sum of the products in the cart.
function cartTotal() {
  return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
}

//Empties the product from the cart.
function emptyCart() {
  cart.forEach(product => {
    product.quantity = 0;
  });
  cart.length = 0
}
//Variable that tracks total amount paid.
let totalPaid = 0;

//Compares amount paid to the amount owed based on the cartTotal function.
function pay(amount) {
  //Adds the current payment amount to the totalPaid variable.
  //Checks if the remaining amount is greater or equal to zero.
  if (remaining >= 0) {
    totalPaid = 0;
    emptyCart()
  } 
  return remaining;
}


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}