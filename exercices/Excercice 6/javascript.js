function affichage_popup (){
    alert ('Ceci est un message d\'avertissement');
}

function affichage_debug() {
    console.log('Ceci est un message qui permet le debugguage');
}


function votrenom() {
    var reponse = prompt('quel est votre nom?');
    var reponse1 = prompt('à present quel est votre prenom?');
    alert('Votre nom est : '+reponse+' et votre prénom : ' +reponse1)
}

//votrenom();

function sacdebille() {
   var billeedmond = 14;
   var billedemander;
   var resultat ;
   
   var billedemander = prompt('Combien de bille voulez-vous ?');

   if (billeedmond >= billedemander) {
       var resultat = billeedmond - billedemander;
       alert('D\'accord, tu m\'en a pris '+billedemander+' et il m\'en reste '+resultat );
   } else if (billeedmond < billedemander) {
       alert('Tu n\'es vraiment pas gentil, je ne peux pas t\'en donner autant');
       var billedemander = prompt('Combien de bille voulez-vous ?');
   }
}

sacdebille();

