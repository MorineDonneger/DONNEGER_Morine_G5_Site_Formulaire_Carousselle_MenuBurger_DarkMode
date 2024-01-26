"use strict";

//Bouton DARKMODE

let bt = document.querySelector('button');
console.log(bt);

let h1 = document.querySelector('h1')
h1.style.background = 'lightblue';


let interrupteur = 0;
function backgroungC(){
    let body = document.querySelector('body');
    let h1 = document.querySelector('h1')
    if (interrupteur == 0){
        body.style.background = 'black';
        interrupteur = 1;
        body.style.color = "white";
        h1.style.background = ' grey';
    }
    else{
        body.style.background = 'white';
        interrupteur = 0;
        body.style.color = "black";
        h1.style.background = 'lightblue';
}}

bt.addEventListener("click",backgroungC);


//Récupérer les éléments

let btv = document.querySelector('#valider');
console.log(btv);

function recup(e){
    e.preventDefault(); //Empêche de refresh^
    let body = document.querySelector('body')

    let pre = document.getElementById('prenom'); //Récup Prénom
    //console.log(pre);
    let preValue = pre.value;
    console.log(preValue);

    let nom = document.getElementById('nom'); //Récup Nom
    //console.log(nom);
    let nomValue = nom.value;
    console.log(nomValue);

    let mdp = document.getElementById('mdp'); //Récup mdp
    //console.log(mdp);
    let mdpValue = mdp.value;
    console.log(mdpValue);


    // Validation du mot de passe avec le regex
    let motDePasseError = document.getElementById("motDePasseError");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;

    if (!regex.test(mdpValue)) {
        motDePasseError.textContent = "ATTENTION : Le mot de passe ne respecte pas les critères requis !!!";
        motDePasseError.classList.add("error");
        mdp.classList.add("error-input");
        body.classList.add("error"); // Ajoute la classe error au body en cas d'erreur
    } else {
        motDePasseError.textContent = "";
        motDePasseError.classList.remove("error");
        mdp.classList.remove("error-input");
        body.classList.remove("error"); // Retire la classe error du body s'il n'y a pas d'erreur
    }


    let mail = document.getElementById('mail'); //Récup mail
    //console.log(mail);
    let mailValue = mail.value;
    console.log(mailValue);

    let select1 = document.querySelector('#j'); //Récup le jour de naissance
    //console.log(select);
    let select1Value = select1.value;
    console.log(select1Value);

    let select2 = document.querySelector('#m'); //Récup le mois de naissance
    //console.log(select);
    let select2Value = select2.value;
    console.log(select2Value);

    let select3 = document.querySelector('#a'); //Récup l'année de naissance
    //console.log(select);
    let select3Value = select3.value;
    console.log(select3Value);


    //Code trouvé sur internet parce que je ne trouvais pas comment récupérer le name d'un input
    let quelgenre = document.querySelectorAll('input[name="genre"]') //Même opération qu'aevc les autres récup mais ils on rajouté un input davant le name qui remplace le # des id pour les retrouver
    let genre = "" //Ils ont fait une fonction pour récupérer la valeur exact coché
    for (let i = 0; i < quelgenre.length; i++) { //On parcours le tableau (les 2 genres)
        if (quelgenre[i].checked) { //Si on tombe sur la valeur checked
            genre = quelgenre[i].value //Alors on affecte dans la valeur genre la valeur
            break;
        }
    }
    console.log(genre) //Affiche la valeur du genre coché


    // Vérification du bouton radio
    let genreHomme = document.getElementById("h");
    let genreFemme = document.getElementById("f");
    let genreError = document.getElementById("genreError");
 
    if (!genreHomme.checked && !genreFemme.checked) {
        genreError.textContent = "ATTENTION : Veuillez sélectionner un genre !!!";
        genreError.classList.add("error");
        body.classList.add("error"); // Ajoute la classe error au body en cas d'erreur
    } else {
        genreError.textContent = "";
        genreError.classList.remove("error");
        body.classList.remove("error"); // Retire la classe error du body s'il n'y a pas d'erreur
    }

    
    let select = document.querySelector('#nat'); //Récup nationalité liste
    //console.log(select);
    let selectValue = select.value;
    console.log(selectValue);


    //Récup de la donnée de l'utilisateur s'il souhaite s'abonner à la newsletter
    let follow = document.querySelectorAll('input[name="abonnement"]') 
        let ifollow = ""
    for (let i = 0; i < follow.length; i++) {
        if (follow[i].checked) {
            ifollow = follow[i].value
            break;
        }
    }
    console.log(ifollow) //Affiche la valeur du genre coché


}

btv.addEventListener("click",recup);

// Fonction pour basculer l'affichage du menu déroulant
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}