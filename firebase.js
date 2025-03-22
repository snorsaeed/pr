const firebaseConfig = {
    apiKey: "AIzaSyDMvu1av0QoXyUpPObeiKIRXJUvXEDWif0",
    authDomain: "amedyparfume.firebaseapp.com",
    databaseURL: "https://amedyparfume-default-rtdb.firebaseio.com",
    projectId: "amedyparfume",
    storageBucket: "amedyparfume.firebasestorage.app",
    messagingSenderId: "917751330084",
    appId: "1:917751330084:web:293471f38b0a362106afb1",
    measurementId: "G-4B9M8WB8EX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("orders");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var phone = getElementVal("phone");
    var city = getElementVal("city");
    var street = getElementVal("street");

    // ✅ Get cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0 ) {
        alert("Cart is empty. Please add items before checking out.");
        return;
    }
    if(name==""||phone==""||city==""||street==""){
        alert("fill your informations.");
        return;
    }

    saveMessages(name, phone, city, street, cart);

    // ✅ Enable alert
   

    // ✅ Clear cart and form after submission
    localStorage.removeItem("cart");
    localStorage.removeItem("price");
    document.getElementById("contactForm").reset();
    alert("Order submitted successfully!");
    window.location.href = "t.html";
}

const saveMessages = (name, phone, city, street, cart) => {
    var newOrder = contactFormDB.push();

    newOrder.set({
        name: name,
        phone: phone,
        city: city,
        street: street,
        cart: cart // ✅ Save the cart in Firebase
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};