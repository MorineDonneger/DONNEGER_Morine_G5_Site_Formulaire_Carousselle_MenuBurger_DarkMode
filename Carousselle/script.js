"use script";

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

// Fonction pour basculer l'affichage du menu déroulant
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}