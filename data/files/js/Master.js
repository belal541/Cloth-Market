console.log("Welcom from JS File");

function ShowDynamiclySales() {
    // Start Last Chance Style
    let NewCollectionSpan1 = document.querySelector("body main .last-chance .photo .new-span span");
    let NewCollectionSpan2 = document.querySelector("body main .last-chance .photo .new-span span:nth-child(2)");
    let NewCollectionSpan3 = document.querySelector("body main .last-chance .photo .new-span span:last-child");
    let Backgroundphoto = document.getElementById("Backgroundphoto");

    NewCollectionSpan1.onclick = function() {
        NewCollectionSpan1.classList.add("span-Active");
        NewCollectionSpan2.classList.remove("span-Active");
        NewCollectionSpan3.classList.remove("span-Active");
        Backgroundphoto.style.backgroundImage = "url(data/img/01_1170x577_crop_center.webp)";
    };

    NewCollectionSpan2.onclick = function() {
        NewCollectionSpan2.classList.add("span-Active");
        NewCollectionSpan1.classList.remove("span-Active");
        NewCollectionSpan3.classList.remove("span-Active");
        Backgroundphoto.style.backgroundImage = "url(data/img/02_1170x577_crop_top.webp)";
    };

    NewCollectionSpan3.onclick = function() {
        NewCollectionSpan3.classList.add("span-Active");
        NewCollectionSpan2.classList.remove("span-Active");
        NewCollectionSpan1.classList.remove("span-Active");
        Backgroundphoto.style.backgroundImage = "url(data/img/001_1170x577_crop_center.webp)";
    };
};

// To Stert The Function
ShowDynamiclySales();

let products = JSON.parse(localStorage.getItem("products")) || [
    {category: "Mens Cloth", photo: "data/img/mens Uurwear.png", name: "Mens Underwear", photohover: "data/img/mens Uurwear hover.jpg", price: 150, state: "Available", color: "#FF5733"},
    {category: "Girls Cloth", photo: "data/img/womens hat.jpg", name: "Girls Hat", photohover: "data/img/womens hat hover.jpg", price: 200, state: "Unavailable", color: "#33FF57"},
    {category: "T-Shirts", photo: "data/img/women shirt.jpg", name: "Women Shirt", photohover: "data/img/women shirt hover.jpg", price: 120, state: "Available", color: "#5733FF"},
    {category: "Shoes", photo: "data/img/shoes.jpg", name: "Shoes", photohover: "data/img/shoes hover.jpg", price: 300, state: "Unavailable", color: "#FF33A8"},
    {category: "Mens Bag", photo: "data/img/mens bag.jpg", name: "Mens Bag", photohover: "data/img/mens bag hover.jpg", price: 180, state: "Available", color: "#33FFF5"},
    {category: "Girls Cloth", photo: "data/img/Dreas.avif", name: "Dress", photohover: "data/img/Dreas hover.avif", price: 250, state: "Unavailable", color: "#FFAA33"},
    {category: "Accessories", photo: "data/img/necklace.jpg", name: "Necklace", photohover: "data/img/necklace hover.jpg", price: 100, state: "Available", color: "#AA33FF"},
    {category: "Kids Cloth", photo: "data/img/baby dress.jpg", name: "Baby Dress", photohover: "data/img/baby dress hover.jpg", price: 80, state: "Unavailable", color: "#33AAFF"},
    {category: "Sports", photo: "data/img/sport shoes.jpg", name: "Sport Shoes", photohover: "data/img/sport shoes hover.jpg", price: 350, state: "Available", color: "#FF3344"},
    {category: "Mens Bag", photo: "data/img/leather bag.jpg", name: "Leather Bag", photohover: "data/img/leather bag hover.jpg", price: 220, state: "Unavailable", color: "#33FFAA"},
    {category: "Girls Cloth", photo: "data/img/skirt.jpg", name: "Skirt", photohover: "data/img/skirt hover.jpg", price: 150, state: "Available", color: "#FF3380"},
    {category: "Accessories", photo: "data/img/watch.jpg", name: "Watch", photohover: "data/img/watch hover.jpg", price: 280, state: "Unavailable", color: "#80FF33"},
    {category: "Mens Cloth", photo: "data/img/jeans.jpg", name: "Mens Jeans", photohover: "data/img/jeans hover.jpg", price: 200, state: "Available", color: "#3380FF"},
    {category: "Accessories", photo: "data/img/sunglasses.jpg", name: "Sunglasses", photohover: "data/img/sunglasses hover.jpg", price: 120, state: "Unavailable", color: "#FF8033"},
    {category: "Shoes", photo: "data/img/heels.jpg", name: "Heels", photohover: "data/img/heels hover.jpg", price: 350, state: "Available", color: "#33FF44"},
    {category: "Mens Cloth", photo: "data/img/tie.jpg", name: "Tie", photohover: "data/img/tie hover.jpg", price: 50, state: "Unavailable", color: "#4433FF"},
    {category: "Girls Cloth", photo: "data/img/blouse.jpg", name: "Blouse", photohover: "data/img/blouse hover.jpg", price: 180, state: "Available", color: "#FF33FF"},
    {category: "T-Shirts", photo: "data/img/striped shirt.jpg", name: "Striped Shirt", photohover: "data/img/striped shirt hover.jpg", price: 140, state: "Unavailable", color: "#33FFFF"}
];



function ShowCategorys() {
    let Categorys = document.querySelector("body main .prodact-market .First-Section .Category-View");

    Categorys.innerHTML = ""

    let uniqueCategories = new Set();

    for (let i = 0; i < products.length; i++) {
        if (!uniqueCategories.has(products[i].category)) {
            uniqueCategories.add(products[i].category);

            let Categorya = document.createElement("a");
            let Categoryt = document.createTextNode(products[i].category);
            Categorya.appendChild(Categoryt);
            Categorys.appendChild(Categorya);
        };
    };
};

// To Start The Function
ShowCategorys();

function ShowProduct() {
    let prodact = document.querySelector("body main .prodact-market .Second-Section");

    prodact.innerHTML = ""
    for (let i = 0; i < 6; i++) {

        // Create The Main Chiled
        let Productdiv = document.createElement("div");

        // To Add the Tytle
        let productname = document.createElement("h2");
        let namenode = document.createTextNode(`${products[i].name}`);
        productname.appendChild(namenode);
        Productdiv.appendChild(productname);
        prodact.appendChild(Productdiv);

        // To Add The Photo
        let Productimg = document.createElement("img");
        Productimg.src = products[i].photo;
        Productimg.alt = products[i].name;

        Productimg.addEventListener("mouseover", function() {
            Productimg.src = products[i].photohover;
            Productimg.style.transform = "scale(1.1) rotate(3deg)";
            Productimg.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
            Productimg.style.opacity = "0.9";
            Productimg.style.transition = "0.3s";
        });

        Productimg.addEventListener("mouseout", function() {
            Productimg.src = products[i].photo;
            Productimg.style.transform = "scale(1) rotate(0deg)";
            Productimg.style.boxShadow = "none";
            Productimg.style.opacity = "1";
            Productimg.style.transition = "0.3s";
        });
        Productdiv.appendChild(Productimg);
    };
};

// To Start The Function
ShowProduct();

// Show All Products on the wep

function ShowAllProducts() {
    let allprodact = document.querySelector("body main .prodact-market .prodcs-show");

    allprodact.innerHTML = ""

    // Looping On All Function To Show
    for (let i = 0; i < products.length; i++) {
        // Create The Main Chiled
        let Productdiv = document.createElement("div");
        
        // To Add the Tytle
        let productname = document.createElement("h2");
        let namenode = document.createTextNode(`${products[i].name}`);
        productname.appendChild(namenode);
        Productdiv.appendChild(productname);

        // To Add The Img
        let productimg = document.createElement("img");
        productimg.src = products[i].photo;
        productimg.alt = products[i].name;
        Productdiv.appendChild(productimg);

        // Add the hover image
        let hoverImg = document.createElement("img");
        hoverImg.src = products[i].photohover;
        hoverImg.alt = `${products[i].name} hover`;
        hoverImg.classList.add("hover-img");
        Productdiv.appendChild(hoverImg);

        // To Add Div Bottoms
        let bottomdiv = document.createElement("div");
        bottomdiv.className = "bottomdiv";
        Productdiv.appendChild(bottomdiv);

        // To Add The Update Bottom
        let updatebottom = document.createElement("button");
        updatebottom.id = "UpdateDate";
        updatebottom.textContent = "Update";
        updatebottom.addEventListener("click", () => Updatedata(i))
        bottomdiv.appendChild(updatebottom);

        // To Add The Delate Bottom
        let Delatebottom = document.createElement("button");
        Delatebottom.id = "DelateDate";
        Delatebottom.addEventListener("click", () => Delatepro(i));
        Delatebottom.textContent = "Delate";
        bottomdiv.appendChild(Delatebottom);

        // To Add The Book Bottom
        let Bookbottom = document.createElement("button");
        Bookbottom.id = "BookDate";
        bottomdiv.addEventListener("click", () => ShowToClick(i));
        Bookbottom.textContent = "Book";
        bottomdiv.appendChild(Bookbottom);

        // To Add The Products To Main Child
        allprodact.appendChild(Productdiv);

        console.log("products was read sucsefuly")
    };
};

// To Start The Function
ShowAllProducts();

// Start Cuuds System

// Get All Element
let name = document.getElementById("Category");
let price = document.getElementById("Price");
let photo = document.getElementById("photo");
let photohover = document.getElementById("photohover");
let update = document.getElementById("UpdateDate");
let delate = document.getElementById("DelateDate");
let book = document.getElementById("BookDate");
let create = document.getElementById("Create");

let mood = "Create";
let updateData;

// Create Date

create.onclick = function (event) {
    event.preventDefault();

    // Set New Item
    let newpro = {
        name: name.value,
        price: price.value,
        photo: photo.value,
        photohover: photohover.value,
    };
    
    if (mood === "Create") {
        products.push(newpro);
        localStorage.setItem("products", JSON.stringify(products));
    } else if (mood === "Update") {
        products[updateData] = newpro;
        localStorage.setItem("products", JSON.stringify(products));
        mood = "Create"
        create.innerHTML = "Create New Data"
    }
    ShowAllProducts();
    ClearDate();
};

// To Clear Data From The Form
function ClearDate() {
    name.value = "";
    price.value = "";
    photo.value = "";
    photohover.value = "";
};

// Update Date
function Updatedata(i) {

    name.value = products[i].name;
    price.value = products[i].price;
    photo.value = products[i].photo;
    photohover.value = products[i].photohover;
    
    document.querySelector('body main .CurdsSystem').scrollIntoView({
        behavior: 'smooth'
    });

    mood = "Update"
    updateData = i;
    create.innerHTML = `Update ${products[i].name} Date`;
};

// Delate Date
function Delatepro(i) {
    products.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(products));
    ShowAllProducts();
    ShowCategorys();
    ShowProduct();
};

// Search
function SearchData(value) {
    let searchResult = document.querySelector("body header .Dynamicly .Serveses .search .search-result");
    let searchinput = document.querySelector("body header .Dynamicly .Serveses .search small input");

    searchResult.style.display = "block"
    // Clear the previous results
    searchResult.innerHTML = "";

    let resultsFound = false; // To track if any result was found

    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(value.toLowerCase())) {

            // Mark that a result was found
            resultsFound = true;

            // Create The Main Element
            let miandiv = document.createElement("div");
            miandiv.className = "pro-main";

            // Create Image Div
            let imagediv = document.createElement("div");
            imagediv.className = "pro-image";
            let image = document.createElement("img");
            image.src = products[i].photo;
            image.alt = `Photo for ${products[i].name}`;
            imagediv.appendChild(image);
            miandiv.appendChild(imagediv); // To Add To The main Div

            // Create The properties
            let propertesdiv = document.createElement("div");
            propertesdiv.className = "pro-properts"

            // To Get The Title
            let name = document.createElement("h2");
            name.textContent = products[i].name;
            propertesdiv.appendChild(name); // To Add To The main Div

            // To Get The Price
            let price = document.createElement("p");
            price.textContent = `${products[i].price} $`;
            propertesdiv.appendChild(price); // To Add To The main Div
            miandiv.append(propertesdiv);

            // To Add To The Page
            searchResult.appendChild(miandiv);
        };
    };
    // If no results were found, display a message
    if (!resultsFound) {
        let noResults = document.createElement("p");
        noResults.textContent = "No Results Found";
        searchResult.appendChild(noResults);
    } else if (searchinput.value === "") {
        searchResult.innerHTML = "";
        searchResult.style.display = "none";
    };
};

// Dynamecly The Style
function MakeTheSearchDynamic() {
    let search = document.querySelector('body header .Dynamicly .Serveses .search');
    let searchinput = document.querySelector("body header .Dynamicly .Serveses .search small input");
    let searchp = document.querySelector("body header .Dynamicly .Serveses .search small p");
    let searchicon = document.getElementById("Cos")
    let preventicon = document.getElementById("x");

    search.onclick = function () {
        searchinput.classList.add("show");
        searchp.classList.add("hide");
        searchicon.classList.add("hide");
        preventicon.classList.add("show");
        searchinput.focus();
        };

    preventicon.onclick = function() {
        searchinput.value = ''; // Clear the input
        searchinput.classList.remove("show");
        searchp.classList.remove("hide");
        searchicon.classList.remove("hide");
        preventicon.classList.remove("show");
    };
    
};

// To Start The Function 
MakeTheSearchDynamic();



// Book System

let carddiv = document.querySelector("body header .Sustanable .card");

let bookeditem;

function savebooked(i) {

    let booki = {
        name: products[i].name,
        price: products[i].price,
        photo: products[i].image,
        photohover: products[i].photohover,
    }

    

    
}

function ShowToClick(i) {
    
    let bookshowdiv = document.querySelector("body main .prodact-market .book-section");

    bookshowdiv.style.display = "flex"
    bookshowdiv.innerHTML = ""

    // To Add Photo
    let imagediv = document.createElement("div");
    let image = document.createElement("img")
    image.src = products[i].photo;
    image.alt = `Photo to ${products[i].name}`
    imagediv.appendChild(image)
    bookshowdiv.appendChild(imagediv); // To Add To The Main Div

    // To Add Propertes
    let propertesdiv = document.createElement("div")

    // To Add Name
    let name = document.createElement("h2");
    name.textContent = products[i].name;
    propertesdiv.appendChild(name);

    // To Add State
    let State = document.createElement("h3")
    State.textContent = products[i].state;
    propertesdiv.appendChild(State);

    // To Add Color
    let Color = document.createElement("span")
    Color.style.backgroundColor = products[i].color;
    propertesdiv.appendChild(Color)

    // To Add Price
    let price = document.createElement("h3");
    price.textContent = `${products[i].price} $`;
    propertesdiv.appendChild(price);

    // To Add The Buttom
    let bookbuttom = document.createElement("button")
    bookbuttom.textContent = "Book Now"
    propertesdiv.appendChild(bookbuttom)

    // To Responseve The Wep
    if (products[i].state === "Available") {
        State.style.color = "green"
        bookbuttom.style.cursor = "pointer"
        bookbuttom.style.backgroundColor = products[i].color;
    } else {
        State.style.color = "red"
        bookbuttom.style.cursor = "not-allowed"
    }

    bookshowdiv.appendChild(propertesdiv); // To Add To The Main Div

    // Add Icon To Close
    let icon = document.createElement("i")
    icon.className = "fa-solid fa-x"
    icon.style.cursor = "pointer"
    bookshowdiv.appendChild(icon)
}

// To Hide the ShowToBook
let hideicon = document.querySelector("body main .prodact-market .book-section svg")

hideicon.onclick = function () {
    let bookshowdiv = document.querySelector("body main .prodact-market .book-section");

    bookshowdiv.style.display = "none"

}


carddiv.onclick = function () {

}