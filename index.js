// const items=[
//     {
//         id:1, // l'id de la carte 1 qui peut être utilisé par la suite dans une recherche d'éléments ou autre. 
//         nom:"Menu Classic", // le titre du menu qui apparait à l'écran.
//         img:"img/m1.png", // l'image de fond. 
//         prix: 5, // le prix qui apparait à l'écran.
//         description:"Burger, Salade, Tomate, Cornichon" // la description du menu que l'on ne voit pas mais qui peut être utilisée par la suite. 
    
//     },
    
//     {
//         id:2,
//         nom:"Menu Bacon",
//         img:"img/m2.png",
//         prix: 6,
//         description:"Burger, Fromage, Bacon, Salade, Tomate"
    
//     },
//     {
//         id:3,
//         nom:"Menu Big",
//         img:"img/m3.png",
//         prix: 8,
//         description:"Double Burger, Fromage, Cornichon, Salade"
    
//     },
//     {
//         id:4,
//         nom:"Menu Chicken",
//         img:"img/m4.png",
//         prix: 7,
//         description:"Poulet Frit, Tomate, Salade, Mayonnaise"
    
//     },
// ] // le tableau qui regroupe tous les menus. 


// const list = document.querySelector('.cards-list'); // création de la constante list qui prends les valeurs de cards-list


// function afficheitem(doc){ 
//     let carte = document.createElement('div');
//     carte.setAttribute('id', doc.id);
//     carte.classList.add('card');
//     carte.innerHTML='<div class="card_image"><img src="'+ doc.img + '"/></div><div class="card_title title-white"><div><p>'+ doc.nom+'</p><p>'+doc.prix;
//     carte.addEventListener('click', function() {
//         alert(doc.description);
//     });
//     list.appendChild(carte); // la variable carte est ajoutée à la liste créée auparavant
// } 


// items.map(item=>afficheitem(item)); // permet de parcourir le tableau "item" et de leur donner les caractéristiques définies dans la fonction au dessus.

// const btn = document.querySelector('.btn-container');


// function vide(){
//     list.innerHTML=""
//     btn.innerHTML=""
//     }
    

// function pluscher(){
//     vide();
//     const prixMax = Math.max(...items.map(item => item.prix));
//     document.getElementById("resultat").innerHTML = "Le prix le plus cher est " + prixMax + " euros."; 
// }

// function moinscher(){
//     vide();
//     const prixMin = Math.min(...items.map(item => item.prix));
//     document.getElementById("resultat").innerHTML = "Le prix le moins cher est " + prixMin + " euros.";
// }

// function moyenne(){
//     vide();
//     const totalPrix = items.reduce((total, item) => total + item.prix, 0);
//   const moyennePrix = totalPrix / items.length;
//   document.getElementById("resultat").innerHTML = "La moyenne des prix est de " + moyennePrix + " euros.";
// }

// function tous(items){
//     vide();
//     let resultat = "";
//     for (let i = 0; i < items.length; i++) {
//       resultat += items[i];
//     }
//     document.getElementById("resultat").innerHTML = resultat;
//   }




//--------------------------fonction GET DATA ----------------------------------
db.collection('personnes').get().then(
    (mydata)=>{
     mydata.docs.forEach(doc=>{
       console.log(doc.data())
     }) 
     });
  
     const ul = document.querySelector('#list'); // Seléctionner l'élément list sur le document HTML
  
  
     //---------------------------Fonction Affficher les données -------------------------------------------------
     function affiche(doc){
       let li = document.createElement('li'); // Créer une balise li
       let supprimer = document.createElement('div'); // créer une balise div
       let saveButton = document.createElement('button');
  
       saveButton.innerHTML = "Cliquez ici";
     
     
       li.setAttribute('data-id', doc.id) // donner l'identifiant de la personne comme attribut a la liste
       li.textContent=doc.data().Nom + ' ' + doc.data().prenom + ' ' +doc.data().age + ' , id=  ' + doc.id //mettre les données dans la liste
       supprimer.textContent='X' // Ecrite dans la balise supprimer
       li.appendChild(supprimer) // intégrer le 'x' dans la balise li
  
  
       ul.appendChild(li);
       li.appendChild(saveButton);//intégrer la balise li dans la balise ul présente sur le html
  
       //-------------function delete data -----------------------
  
        supprimer.addEventListener("click", (r) => {
  
            let id = r.target.parentElement.getAttribute('data-id')
            db.collection('personnes').doc(id).delete();
        });
  
  
        saveButton.addEventListener("click", (f) => {
          modifier = prompt ("Changer le nom")
          alert(modifier);
  
          let nv = f.target.parentElement.getAttribute('data-id')
          db.collection('personnes').doc(nv).update({
            Nom : modifier
          })
        })
  
     }
  
    
     //--------------------------fonction GET DATA ----------------------------------
     db.collection('personnes').get().then(
       (mydata)=>{
        mydata.docs.forEach(doc=>{
           affiche(doc)
        })
          
        });
  
     //--------------------------------------------------------------------------------
  
    //  db.collection('personnes').add({
    //   Nom: Document.getElementById("n"),
    //   prenom: "",
    //   age: "",
    // });
  
  const form = document.querySelector('#ajouter'); //selectionné l'élément form du HTML
  
  
  form.addEventListener('submit', (e) => { //Actionner l'évenement submit de la form ajouter
  e.preventDefault(); // Empêcher l'exécution de submit pour laisser la fonction s'exécuter
  
  
   alert(form.nom.value)
  
  
  });
  
        
  //--------------------------------------function ADD DATA --------------------------------------
  form.addEventListener('submit', (e) => { //Actionner l'évenement submit de la form ajouter
    e.preventDefault(); // Empécher l'éxécution de submmit pour laisser la fonction firebase s'éxécuter
    db.collection('personnes').add({
     //----mettre les données de la forme dans les variable à ajouter------
      Nom: form.nom.value, 
      prenom: form.prenom.value,
      age: form.age.value
    });
    //------Vider les formes ------
    form.nom.value="";
    form.prenom.value="";
    form.age.value="";
  });
  
     
  function showimage() {
  
  
  
    var storageRef = firebase.storage().ref();
    var spaceRef = storageRef.child('images/DALL·E 2022-12-02 22.09.59 - jeep blue and forest.png');
    storageRef.child('images/DALL·E 2022-12-02 22.09.59 - jeep blue and forest.png').getDownloadURL().then(function(url) {
        var img = document.getElementById("test");
        img.src = 'gs://projet-1-51fe9.appspot.com/images/DALL·E 2022-12-02 22.09.59 - jeep blue and forest.png';
  
    }).catch(function(error) {
  
    });
  
  
  }