let icnn = document.getElementsByClassName("icnn")
let sidebar = document.getElementsByClassName("sidebar")[0]
function mv() {
    sidebar.classList.add("left")



}
let side = document.querySelector(".side")
function cl() {
    sidebar.classList.remove("left")
}
let icnlist = document.getElementsByClassName("icnlist")
let sidebar1 = document.querySelector(".sidebar1")
function mve() {
    sidebar1.classList.add("left1")
}
function cls() {
    sidebar1.classList.remove("left1")
}



//////////////////////////////////////////////////



let main = document.querySelector(".main")
let main1 = document.querySelector(".main1")


function show1() {
    main1.classList.add("show1")
}


function show() {
    main.classList.add("show")
}
function signUP() {
    let name = document.getElementById("signupUsername").value
    let email = document.getElementById("signupEmail").value
    let password = document.getElementById("signupPassword").value
    if (!name || !email || !password) {
        alert('Please enter a email and password.');
        return;
    }
    else {

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Signup successful');
        main.classList.remove("show")

        document.getElementById("signupUsername").value = ""
        document.getElementById("signupEmail").value = ""
        document.getElementById("signupPassword").value = ""


    }

}



function logIN() {
    let useremail = document.getElementById('loginUseremail').value;
    let password = document.getElementById('loginPassword').value;

    let storedUseremail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (useremail === storedUseremail && password === storedPassword) {
        alert('Login successful');
        main1.classList.remove("show1")
        document.getElementById('loginUseremail').value = ""
        document.getElementById('loginPassword').value = ""

    }
    else {
        alert('Login failed. Please check your username and password.');
    }
}



//////////////////////////////////////////////////////





let numberdiv = document.querySelector(".numberdiv")
let productdiv = document.querySelector(".box-P")
let cartvalue = 0
let pagination = document.querySelector(".pagination")
let productarray = [
    { id: 1, image: "./img/women-image/bnl1977-blue--_1_.jpg", article: "TILISIM-E-RAANAI-SHAWL", price: "16575.00" },
    { id: 2, image: "./img/women-image/bnl2097_d.grey_1_.jpg", article: "ZURI-01", price: "17470.00" },
    { id: 3, image: "./img/women-image/bnl2159_mustered_1_.jpg", article: "RANG-E-NAV", price: "15875.00" },
    { id: 4, image: "./img/women-image/bnl2178_o.green_1_.jpg", article: "CLASSIC ETHNIC-01", price: "17250.00" },
    { id: 5, image: "./img/women-image/bnl2197_grey_1_.jpg", article: "GAJJ RANGE", price: "18860.00" },
    { id: 6, image: "./img/women-image/bnl2241_black_1_.jpg", article: "INARA RANGE", price: "17830.00" },
    { id: 7, image: "./img/women-image/mc1101-beige-_1_.jpg", article: "QOS-E-QAZA-01-SHAWL", price: "25500.00" },
    { id: 8, image: "./img/women-image/mc1107_black_1_.jpg", article: "GUL MINA-01", price: "57950.00" },
    { id: 9, image: "./img/women-image/Menu-Tiles288x288_-EMBORIDRY--_.jpg", article: "GUL MINA-01", price: "57950.00" },
    { id: 10, image: "./img/women-image/Menu-Tiles288x288_-Festive__1.jpg", article: "GUL MINA-01", price: "57950.00" },
    { id: 11, image: "./img/women-image/Menu-Tiles288x288_-PRINT_.jpg", article: "GUL MINA-01", price: "57950.00" },
    { id: 12, image: "./img/women-image/Menu-Tiles288x288_-Sawl__1.jpg", article: "GUL MINA-01", price: "57950.00" },
    { id: 13, image: "./img/man-image/3000000025931-_1_.jpg", article: "Grey waistcoat", price: "57950.00" },
    { id: 14, image: "./img/man-image/3000000025964-_1_.jpg", article: "Brown waistcoat", price: "57950.00" },
    { id: 15, image: "./img/man-image/3000000026193-_1_.jpg", article: "Dark Grey waistcoat", price: "57950.00" },
    { id: 16, image: "./img/man-image/3000000026253-_1_.jpg", article: "Off White Waistcoat", price: "57950.00" },
    { id: 17, image: "./img/man-image/download (2).jpg", article: "Olive Green Kurta", price: "57950.00" },
    { id: 18, image: "./img/man-image/download (3).jpg", article: "Brown Suit", price: "57950.00" },
    { id: 19, image: "./img/man-image/download.jpg", article: "Black Suit", price: "57950.00" },
    { id: 20, image: "./img/man-image/3000000022305_1_.jpg", article: "Black Kurta", price: "57950.00" },
    { id: 21, image: "./img/man-image/download (1).jpg", article: "Blue Kurta", price: "57950.00" },
    { id: 22, image: "./img/man-image/twin-band-kurta-no.-8aa.jpg", article: "Off-white Suit", price: "57950.00" },

]
let productsperpage = 6
let currentpage = 1
renderproduct(currentpage)
renderpagination()

function renderproduct(currentpage) {
    productdiv.innerHTML = ""
    let startindex = (currentpage - 1) * productsperpage
    let lastindex = startindex + productsperpage

    console.log(startindex, "start", lastindex, "last");

    let pageproduct = productarray.slice(startindex, lastindex)

    console.log(pageproduct, "Page Products");

    pageproduct.forEach((product) => {
        let innerbox = document.createElement("div")
        productdiv.appendChild(innerbox)
        innerbox.classList.add("style")
        innerbox.innerHTML = `
                <img class="image-P" src="${product.image}">
                <h4>${product.article}</h4>
                <p>Price: PKR ${product.price}/-</p>
                <button class="btn" onclick = "addtocart(${product.id})">Add To Cart</button>
                `
    })
}
function renderpagination() {
    let totalpages = Math.ceil(productarray.length / productsperpage)
    console.log(totalpages);
    pagination.innerHTML = ""
    for (let i = 1; i <= totalpages; i++) {
        console.log(i);
        let btns = document.createElement("button")
        btns.innerHTML = i
        btns.addEventListener("click", () => {
            currentpage = i
            renderproduct(currentpage)
        })
        pagination.appendChild(btns)
    }
}
const cartitems = [];
function addtocart(productId) {
    let product = productarray.find(item => item.id === productId);
    if (product) {
        let existingitem = cartitems.find(item => item.id === product.id)
        console.log(existingitem);
        if (existingitem) {
            existingitem.quantity++;
            existingitem.total += product.price;
            updatedisplaycart();
        }
        else {
            cartitems.push({
                ...product,
                quantity: 1,
                total: product.price
            })
            updatedisplaycart();
        }
    }
}

////////////////////////////////////////////////////


function updatedisplaycart() {




    cartvalue++
    numberdiv.textContent = cartvalue
    side.innerHTML = ""
    cartitems.forEach((item) => {
        let cartelement = document.createElement("li")
        side.appendChild(cartelement)
        cartelement.classList.add("style2")
        cartelement.innerHTML = `
                <div class="image-C">
                <img class="full" src="${item.image}">
                </div>
                <div class="full1">
                <h4>${item.article}</h4>
                <h4>Quantity: ${item.quantity}</h4>
                <p>Price: PKR ${parseInt(item.quantity) * parseInt(item.total)}/-</p>
                </div>`
    })
}