
const produits = [
    {
      nom: "HAVIT HV-G92 Gamepad",
      image: "images/home/g92-2-500x500 1.png",
      reduction: "-40%",
      prixActuel: "$120",
      ancienPrix: "$160",
      avis: 88,
      etoiles: 5
    },
    {
      nom: "AK-900 Wired Keyboard",
      image: "images/home/ak-900-01-500x500 1.png",
      reduction: "-35%",
      prixActuel: "$960",
      ancienPrix: "$1160",
      avis: 75,
      etoiles: 4
    },
    {
      nom: "IPS LCD Gaming Monitor",
      image: "images/home/g27cq4-500x500 1.png",
      reduction: "-30%",
      prixActuel: "$370",
      ancienPrix: "$400",
      avis: 99,
      etoiles: 5
    },
    {
      nom: "S-Series Comfort Chair",
      image: "images/home/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
      reduction: "-25%",
      prixActuel: "$375",
      ancienPrix: "$400",
      avis: 99,
      etoiles: 5
    },
  ];

  const categories = [
    { nom: "Phones", image: "images/home/Category-CellPhone.png" },
    { nom: "Computers", image: "images/home/Category-Computer.png" },
    { nom: "SmartWatch", image: "images/home/Category-SmartWatch.png" },
    { nom: "Camera", image: "images/home/Category-Camera.png" },
    { nom: "HeadPhones", image: "images/home/Category-Headphone.png" },
    { nom: "Gaming", image: "images/home/Category-Gamepad.png" }
  ];

  const section4produits = [
    {
      nom: "The north coat",
      image: "images/home/Frame 605.png",
      prix: 120,
      ancien_prix: 160,
      note: 5,
      avis: 88
    },
    {
      nom: "Gucci duffle bag",
      image: "images/home/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png",
      prix: 960,
      ancien_prix: 1160,
      note: 5,
      avis: 75
    },
    {
      nom: "RGB liquid CPU Cooler",
      image: "images/home/gammaxx-l240-argb-1-500x500 1.png",
      prix: 370,
      ancien_prix: 400,
      note: 5,
      avis: 99
    },
    {
      nom: "Small BookSelf",
      image: "images/home/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png",
      prix: 375,
      ancien_prix: 400,
      note: 5,
      avis: 99
    }
  ];

  const section5products = [
    {
        img: "images/home/1.png",
        title: "Breed Dry Dog Food",
        price: "$120",
        oldPrice: "$160",
        etoiles: 3,
        reviews: 88,
    },
    {
        img: "images/home/2.png",
        title: "CANON EOS DSLR Camera",
        price: "$960",
        oldPrice: "$1160",
        etoiles: 4,
        reviews: 75,
    },
    {
        img: "images/home/3.png",
        title: "ASUS FHD Gaming Laptop",
        price: "$370",
        oldPrice: "$400",
        etoiles: 5,
        reviews: 99,
    },
    {
        img: "images/home/4.png",
        title: "Curology Product Set",
        price: "$375",
        oldPrice: "$400",
        etoiles: 4,
        reviews: 99,
    }
];

const section5produits=[
    {
        img: "images/home/5.png",
        title: "Kids Electric Car",
        price: "$120",
        oldPrice: "$160",
        note: 5,
        reviews: 88,
    },
    {
        img: "images/home/7.png",
        title: "Jr. Zoom Soccer Cleats",
        price: "$960",
        oldPrice: "$1160",
        note: 5,
        reviews: 75,
    },
    {
        img: "images/home/8.png",
        title: "GP11 Shooter USB Gamepad",
        price: "$370",
        oldPrice: "$400",
        note: 5,
        reviews: 99,
    },
    {
        img: "images/home/9.png",
        title: "Quilted Satin Jacket",
        price: "$375",
        oldPrice: "$400",
        note: 5,
        reviews: 99,
    }
];


  
  function afficherProduits() {
    const container = document.querySelector(".bottom");
    container.innerHTML = ""; // On vide d'abord le container
  
    produits.forEach(produit => {
      const cart = document.createElement("div");
      cart.classList.add("cart");
  
      cart.innerHTML = `
        <div class="div_img">
          <img src="${produit.image}" alt="">
          <span class="absolute">${produit.reduction}</span>
          <span class="icon-absolute icon-1"><i class="fa-regular fa-eye"></i></span>
          <span class="icon-absolute icon-2"><i class="fa-regular fa-heart"></i></span>
        </div>
        <button class="add-to-cart">Add to Cart</button>
        <p>${produit.nom}</p>
        <div class="flex">
          <span class="span1">${produit.prixActuel}</span>
          <span class="span2">${produit.ancienPrix}</span>
        </div>
        <div class="star">
          ${genererEtoiles(produit.etoiles)}
          <span>(${produit.avis})</span>
        </div>
      `;
  
      container.appendChild(cart);
    });
  }

  
  function genererEtoiles(n) {
    let html = "";
    for (let i = 0; i < 5; i++) {
      if (i < n) {
        html += `<i class="fa-solid fa-star"></i>`;
      } else {
        html += `<i style="color: rgba(0, 0, 0, 0.2);" class="fa-solid fa-star"></i>`;
      }
    }
    return html;
  }

  function afficherCategories(){
    const container = document.getElementById("category-container");

    categories.forEach(cat => {
      const div = document.createElement("div");
      div.innerHTML = `
        <img src="${cat.image}" alt="${cat.nom}">
        <p>${cat.nom}</p>
      `;
      container.appendChild(div);
    });
  }

  function afficherProduitsSection4(){
    const productContainer = document.getElementById("product-container");

    section4produits.forEach(p => {
const div = document.createElement("div");
div.className = "cart";
div.innerHTML = `
  <div class="div_img">
    <img src="${p.image}" alt="${p.nom}">
    <span class="icon-absolute icon-1"><i class="fa-regular fa-eye"></i></span>
    <span class="icon-absolute icon-2"><i class="fa-regular fa-heart"></i></span>
  </div>
  <button class="add-to-cart">Add to Cart</button>
  <p>${p.nom}</p>
  <div class="flex">
    <span class="span1">$${p.prix}</span>
    <span class="span2">$${p.ancien_prix}</span>
  </div>
  <div class="star">
    ${'<i class="fa-solid fa-star"></i>'.repeat(p.note)}
    <span>(${p.avis})</span>
  </div>
`;
productContainer.appendChild(div);
});
  }

  //Appelle la fonction au chargement de la page
  document.addEventListener("DOMContentLoaded", afficherProduits);
  document.addEventListener("DOMContentLoaded", afficherCategories);
  document.addEventListener("DOMContentLoaded", afficherProduitsSection4);
  document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.getElementById("productsContainer");
    container.innerHTML = ""; // On vide d'abord le container
  
    section5products.forEach(product => {
      const cart = document.createElement("div");
      cart.classList.add("cart");
  
      cart.innerHTML = `
        <div class="div_img">
                <img src="${product.img}" alt="">
                <span class="icon-absolute icon-1"><i class="fa-regular fa-eye"></i></span>
                <span class="icon-absolute icon-2"><i class="fa-regular fa-heart"></i></span>
            </div>
            <button class="add-to-cart">Add to Cart</button>
            <p>${product.title}</p>
            <div class="flex">
                <span class="span1">${product.price}</span>
                <span class="span2">${product.oldPrice}</span>
            </div>
            <div class="star">
            ${genererEtoiles(product.etoiles)}
                <span>(${product.reviews})</span>
            </div>
      `;
  
      container.appendChild(cart);
    });
  });

  document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.getElementById("produitsContainer");
    container.innerHTML = ""; // On vide d'abord le container
  
    section5produits.forEach(product => {
      const cart = document.createElement("div");
      cart.classList.add("cart");
  
      cart.innerHTML = `
        <div class="div_img">
                <img src="${product.img}" alt="">
                <span class="icon-absolute icon-1"><i class="fa-regular fa-eye"></i></span>
                <span class="icon-absolute icon-2"><i class="fa-regular fa-heart"></i></span>
            </div>
            <button class="add-to-cart">Add to Cart</button>
            <p>${product.title}</p>
            <div class="flex">
                <span class="span1">${product.price}</span>
                <span class="span2">${product.oldPrice}</span>
            </div>
            <div class="star">
            ${'<i class="fa-solid fa-star"></i>'.repeat(product.note)}
                <span>(${product.reviews})</span>
            </div>
      `;
  
      container.appendChild(cart);
    });
  });



  document.addEventListener("DOMContentLoaded", ()=>{
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const addArrow = document.getElementById("menu1");
    const addArrow1 = document.getElementById("menu2");
    const menu = document.getElementById("menuDeroulante1");
    const menu1 = document.getElementById("menuDeroulante2");
    const icone1 = document.getElementById("i1");
    const icone2 = document.getElementById("i2");
    const icone3 = document.getElementById("i3");
    const icone4 = document.getElementById("i4");

    const toggleMenMenu1 = ()=>{
        menu.classList.toggle("hidden");
        icone1.style.display="none";
        icone2.style.display="inline";
        addArrow.style.top="10%";
    }
    const toggleMenMenu2 = ()=>{
        menu.classList.toggle("hidden");
        icone2.style.display="none";
        icone1.style.display="inline";
        addArrow.style.top="50%";
    }
    const toggleWomenMenu1 = ()=>{
        menu1.classList.toggle("hidden");
        icone3.style.display="none";
        icone4.style.display="inline";
        addArrow1.style.top="10%";
    }
    const toggleWomenMenu2 = ()=>{
        menu1.classList.toggle("hidden");
        icone4.style.display="none";
        icone3.style.display="inline";
        addArrow1.style.top="50%";
    }
    icone1.addEventListener("click", toggleMenMenu1);
    icone2.addEventListener("click", toggleMenMenu2);
    icone3.addEventListener("click", toggleWomenMenu1);
    icone4.addEventListener("click", toggleWomenMenu2);

    addToCartButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            //.closest() = remonter dans les parents jusqu’à trouver un élément qui correspond.
            const cart = btn.closest('.cart');
            const productName = cart.querySelector('p').textContent;
            const productPrice = cart.querySelector('.span1').textContent.replace('$', '');
            const productImage = cart.querySelector('img').getAttribute('src');

            const product = {
                name: productName,
                price: parseFloat(productPrice),
                image: productImage,
                quantity: 1
            };

            let panier = JSON.parse(localStorage.getItem('panier')) || [];

            // Vérifie si le produit existe déjà
            const index = panier.findIndex(p => p.name === product.name);
            if (index > -1) {
                panier[index].quantity += 1;
            } else {
                panier.push(product);
            }

            localStorage.setItem('panier', JSON.stringify(panier));
            updateCartCount()

            alert(`${productName} added to cart!`);
        });

    });


    // Fonction pour mettre à jour le nombre d'articles dans le panier (dans le header)
function updateCartCount() {
    const panier = JSON.parse(localStorage.getItem('panier')) || [];
    const cartCount = panier.reduce((acc, produit) => acc + produit.quantity, 0); // Nombre total d'articles

    const notif = document.getElementById('notif');
    console.log("moi"+notif);
    if (cartCount > 0) {
        notif.style.display = 'flex'; // Afficher le span
        notif.textContent = cartCount;  // Mettre à jour le nombre d'articles
    } else {
        notif.style.display = 'none';   // Cacher le span si le panier est vide
    }
}
  });

  