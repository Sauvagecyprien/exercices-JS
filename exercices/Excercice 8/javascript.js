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

//sacdebille();

// sinon il est mineur et vous le lui indiquerez dans une popup

function contrôle_identite() {
    var age = prompt('quel âge avez vous?');

    if (age >= 18) {
        alert('ok circulez bonne journée jeune homme, vous auriez un 06 avant de partir?');
    }else if (age < 18) {
        alert('retoune chez ta mère tu es mineur');
    }
}

//contrôle_identite();

function ordre() {
    
    var dweb = ['naze', 'gamin', 'capron', 'attoumani', 'adbou', 'morel', 'cyprien', 'vellien', 'baret', 'lauret'];
    console.log(dweb);
    var croissant = dweb.sort();
    
    var reponse = prompt(' Mettre le tableau dans l\'ordre tape : 1 ou Inverser complètement le tableau tape : 2');

    if (reponse ==1) {
        
        console.log('croissant :', croissant);
    }  else if (reponse ==2) {
        var decroissant = croissant.reverse();
        console.log('decroissant :', decroissant);
        
    }

    // mon commentaire est génial

}

//ordre();

