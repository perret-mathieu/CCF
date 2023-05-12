const items=[
    {
        id:1, // l'id de la carte 1 qui peut être utilisé par la suite dans une recherche d'éléments ou autre. 
        nom:"Menu Classic", // le titre du menu qui apparait à l'écran.
        img:"img/m1.png", // l'image de fond. 
        prix: 5, // le prix qui apparait à l'écran.
        description:"Burger, Salade, Tomate, Cornichon" // la description du menu que l'on ne voit pas mais qui peut être utilisée par la suite. 
    
    },
    
    {
        id:2,
        nom:"Menu Bacon",
        img:"img/m2.png",
        prix: 6,
        description:"Burger, Fromage, Bacon, Salade, Tomate"
    
    },
    {
        id:3,
        nom:"Menu Big",
        img:"img/m3.png",
        prix: 8,
        description:"Double Burger, Fromage, Cornichon, Salade"
    
    },
    {
        id:4,
        nom:"Menu Chicken",
        img:"img/m4.png",
        prix: 7,
        description:"Poulet Frit, Tomate, Salade, Mayonnaise"
    
    },
] // le tableau qui regroupe tous les menus. 


const list = document.querySelector('.cards-list'); // création de la constante list qui prends les valeurs de cards-list


function afficheitem(doc){ 
    let carte = document.createElement('div');
    carte.setAttribute('id', doc.id);
    carte.classList.add('card');
    carte.innerHTML='<div class="card_image"><img src="'+ doc.img + '"/></div><div class="card_title title-white"><div><p>'+ doc.nom+'</p><p>'+doc.prix;
    carte.addEventListener('click', function() {
        alert(doc.description);
    });
    list.appendChild(carte); // la variable carte est ajoutée à la liste créée auparavant
} 


items.map(item=>afficheitem(item)); // permet de parcourir le tableau "item" et de leur donner les caractéristiques définies dans la fonction au dessus.


