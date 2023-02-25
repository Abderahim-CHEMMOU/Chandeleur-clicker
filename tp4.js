// Question1
let newcrepe = document.createElement('img');
newcrepe.src = 'crepe.png'
newcrepe.classList.add('c5');
// document.body.querySelector('h1').before(newcrepe.cloneNode())
document.body.querySelector('h1').after(newcrepe)

// question3
let i=0;
let acc = 1;
newcrepe.addEventListener('click', ()=>{    
    i = i + acc;
    newdivCompteur.innerText = i;
})

//Question2

let newdiv = document.createElement('div');
newdiv.setAttribute('id', 'stats');
newdiv.classList.add('c3')


let newdivNmbr = document.createElement('div');
newdivNmbr.innerText = 'Nombre de crêpes :';
newdivNmbr.classList.add('c1');

//nmbr de crepes
let newdivCompteur = document.createElement('div');
newdivCompteur.setAttribute('id', 'compteur');
newdivCompteur.innerText = '0';
newdivCompteur.classList.add('c1');


newdiv.append(newdivNmbr);
newdiv.append(newdivCompteur);
document.body.append(newdiv);

// question4
let newdivNmbrBigou = document.createElement('div');
newdivNmbrBigou.innerText = 'Nombre de Bigoudènes :';
newdivNmbrBigou.classList.add('c1');

//nmbr bigoudene
let newBigouCompteur = document.createElement('div');
newBigouCompteur.id = 'bigoudenes';
newBigouCompteur.innerText = '1';
newBigouCompteur.classList.add('c1');

//salaire
let bouton = document.createElement('input');
bouton.type='button';
bouton.value='10';
bouton.classList.add('c1');
let j=1;

bouton.addEventListener('click', ()=>{
    if(parseInt(newdivCompteur.innerText) < parseInt(bouton.value) * parseInt(newBigouCompteur.innerText) ){
        alert('Le nombre de crepes ne suffait pas pour les bigoudenes');
    }
    else{
        newdivCompteur.innerText = parseInt(newdivCompteur.innerText) - parseInt(bouton.value);
        newBigouCompteur.innerText = ++j;
        bouton.value =  10 * Math.pow((newBigouCompteur.innerText), 2) ;
        acc = parseInt(newBigouCompteur.innerText);
    }
})

newdiv.append(newdivNmbrBigou);
newdiv.append(newBigouCompteur);
newdiv.append(bouton);


//Question 5
let newCreperie = document.createElement('div');
newCreperie.innerText = 'Nombre de crêperies :';
newCreperie.classList.add('c1');

let newNmbrCreperie = document.createElement('div');
newNmbrCreperie.innerText = '0';
newNmbrCreperie.classList.add('c1');

// le cout en bigoudenes pour une creperie
let boutonCreperie = document.createElement('input');
boutonCreperie.type='button';
boutonCreperie.value= 3 + parseInt(newNmbrCreperie.innerText);
boutonCreperie.classList.add('c1');
let k=0;
boutonCreperie.addEventListener('click', ()=>{
    
    if( parseInt(newBigouCompteur.innerText) < 3 + parseInt(newNmbrCreperie.innerText) ){
        alert('Le nombre de bigoiudene ne suffait pas pour construire une creperie')
    }
    else{
        newBigouCompteur.innerText = parseInt(newBigouCompteur.innerText) - (3+ parseInt(newNmbrCreperie.innerText));
        newNmbrCreperie.innerText = ++k;
    }

    setInterval(()=>{
        newdivCompteur.innerText = parseInt(newdivCompteur.innerText) + parseInt(newBigouCompteur.innerText);
    } ,1000);
});

newdiv.append(newCreperie);
newdiv.append(newNmbrCreperie);
newdiv.append(boutonCreperie);




