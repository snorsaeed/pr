 // Get the product name from localStorage
 const productName = localStorage.getItem('productName');
 const productprice = localStorage.getItem('productprice');
 const storedImage = localStorage.getItem('imgsrc');
 const summary = localStorage.getItem('sammary');

 // Display the product name on the page
 if (productName) {
   document.getElementById('model').textContent = productName;
   document.getElementById('price').textContent = productprice+"$";
   document.getElementById('img').src = storedImage
   document.getElementById('summary').textContent = summary;    
 } else {
   document.getElementById('product-name').textContent = 'Product not found';
   document.getElementById('summary').textContent = 'Product not found';
 }

 document.getElementById("satc").addEventListener("click", function() {
    // Get the product data from localStorage (same as above)
    const product = {
        name: localStorage.getItem('productName'),
        price: parseFloat(localStorage.getItem('productprice')),
        image: localStorage.getItem('imgsrc'),
        summary: localStorage.getItem('sammary')
    };

    // Add the product to the cart (same behavior as in file 2)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
    history.back();
});


document.getElementById("backbtn1").onclick=function(){
  history.back();
}