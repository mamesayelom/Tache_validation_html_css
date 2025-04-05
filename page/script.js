// Fonction pour afficher les produits du panier dans le tableau
function afficherPanier() {
    // Récupère les données du panier depuis le localStorage, ou initialise un tableau vide si le panier est vide
    const panier = JSON.parse(localStorage.getItem('panier')) || [];

    // Sélectionne le tableau HTML où les produits seront affichés
    const table = document.querySelector("table");

    // Supprime toutes les lignes existantes sauf la première (l'en-tête du tableau)
    const rows = table.querySelectorAll("tr");
    rows.forEach((row, index) => {
        if (index !== 0) row.remove(); // On garde seulement l'en-tête
    });

    let total = 0; // Variable pour stocker le total du panier

    // Parcourt chaque produit dans le panier pour l'afficher dans une ligne du tableau
    panier.forEach((produit) => {
        // Calcule le sous-total pour ce produit (prix x quantité)
        const subtotal = produit.price * produit.quantity;
        total += subtotal; // Ajoute au total

        // Crée une nouvelle ligne de tableau pour ce produit
        const row = document.createElement("tr");

        //on vérifie si le chemin de l’image commence par "images/", si c le cas on ajoute ../ sinon on ajoute directement produit.image
        produit.image = produit.image.startsWith("images/") ? "../" + produit.image : produit.image;

        row.innerHTML = `
            <td class="flex">
                <img src="${produit.image}" alt="" style="width: 50px; height: auto;">
                <h6>${produit.name}</h6>
                
            </td>
            <td><h6>$${produit.price}</h6></td>
            <td>
                <input type="number" value="${produit.quantity}" min="1" 
                onchange="mettreAJourQuantite('${produit.name}', this.value)">
            </td>
            <td><h6>$${subtotal}</h6></td>
            <td>
                <button onclick="supprimerProduit('${produit.name}')" style="color:red; background-color:white; border:none"><i class="fa-solid fa-delete-left"></i></button>
            </td
        `;

        // Ajoute la ligne au tableau
        table.appendChild(row);
    });

    // Met à jour les éléments qui affichent le total dans la section "Cart Total"
    document.querySelectorAll(".div1 p:last-child")[0].textContent = `$${total}`; // Subtotal
    document.querySelectorAll(".div1 p:last-child")[1].textContent = "Free";      // Shipping
    document.querySelectorAll(".div1 p:last-child")[2].textContent = `$${total}`; // Total

    // Mettre à jour le nombre d'articles dans le panier dans le header
    updateCartCount()
}

// Fonction pour mettre à jour la quantité d'un produit dans le panier
function mettreAJourQuantite(nom, quantite) {
    // Récupère le panier depuis le localStorage
    let panier = JSON.parse(localStorage.getItem('panier')) || [];

    // Met à jour la quantité du produit correspondant au nom donné
    panier = panier.map(p => {
        if (p.name === nom) {
            p.quantity = parseInt(quantite); // Met à jour avec la nouvelle valeur
        }
        return p;
    });

    // Enregistre le panier mis à jour dans le localStorage
    localStorage.setItem('panier', JSON.stringify(panier));

    // Recharge l'affichage du panier pour refléter les changements
    afficherPanier();
}

function supprimerProduit(nom) {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    panier = panier.filter(p => p.name !== nom); // on garde tous sauf le produit à supprimer
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherPanier(); // on recharge le panier
}


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



//Un coupon code (ou code promo) est un code que le client peut entrer pour obtenir une réduction (ou une autre offre spéciale) sur le total de son panier.
document.querySelector('.form2').addEventListener('submit', function (e) {
e.preventDefault();
const input = document.querySelector('.input1');
const code = input.value.trim().toUpperCase();
let total = 0;

const panier = JSON.parse(localStorage.getItem('panier')) || [];
panier.forEach(p => total += p.price * p.quantity);

if (code === 'REDUC10') {
const reduction = total * 0.10;
total = total - reduction;

alert("Coupon applied! 10% discount");
} else {
alert("Invalid coupon");
}

// Mettre à jour le total affiché
document.querySelectorAll(".div1 p:last-child")[0].textContent = `$${total.toFixed(2)}`;
document.querySelectorAll(".div1 p:last-child")[2].textContent = `$${total.toFixed(2)}`;
});


// Appelle la fonction afficherPanier() une fois que la page est entièrement chargée
window.onload = afficherPanier;