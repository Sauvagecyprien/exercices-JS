function affichage_popup (){
    alert ('Ceci est un message d\'avertissement');
}

function affichage_debug() {
    console.log('Ceci est un message qui permet le debugguage');
}


function votrenom() {
    var reponse = prompt('quel est votre nom?');
        alert('Votre nom est : '+reponse)
}

votrenom();