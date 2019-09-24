function affichage_popup() {
    alert('Ceci est un message d\'avertissement');
}

function affichage_debug() {
    console.log('Ceci est un message qui permet le debugguage');
}


function votrenom() {
    var reponse = prompt('quel est votre nom?');
    var reponse1 = prompt('à present quel est votre prenom?');
    alert('Votre nom est : ' + reponse + ' et votre prénom : ' + reponse1)
}

//votrenom();

function sacdebille() {
    var billeedmond = 14;
    var billedemander;
    var resultat;

    var billedemander = prompt('Combien de bille voulez-vous ?');

    if (billeedmond >= billedemander) {
        var resultat = billeedmond - billedemander;
        alert('D\'accord, tu m\'en a pris ' + billedemander + ' et il m\'en reste ' + resultat);
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
    } else if (age < 18) {
        alert('retoune chez ta mère tu es mineur');
    }
}

//contrôle_identite();

function ordre() {

    var dweb = ['naze', 'gamin', 'capron', 'attoumani', 'adbou', 'morel', 'cyprien', 'vellien', 'baret', 'lauret'];
    console.log(dweb);
    var croissant = dweb.sort();

    var reponse = prompt(' Mettre le tableau dans l\'ordre tape : 1 ou Inverser complètement le tableau tape : 2');

    if (reponse == 1) {

        console.log('croissant :', croissant);
    } else if (reponse == 2) {
        var decroissant = croissant.reverse();
        console.log('decroissant :', decroissant);

    }

    // mon commentaire est génial

}

//ordre();

/*<!-- On va créer une machine à sous -->
<!-- Elle contient des boissons ( Coca, Sprite, Orangina, 7Up, Aloe Vera, Lipton Ice tea ) -->
<!-- Les boisson ont un prix ( 1,20€, 1,00€, 1,50€, 1,60€, 1,40€, 1,10€ ) -->
<!-- Les boissons ont un identifiant (16, 17, 18, 19, 20, 21) -->
<!-- Ces boissons ont chaucunes un prix et un identifiant -->
<!-- Demander à l'utilisateur quelle boisson il aimerait avoir ( il devra entrer un ID 15,16,17 etc )-->
<!-- Indiquer le prix à l'utilisateur et lui demander d'insérer une pièce avec la liste des pièces qu'il a-->
<!-- L'utilisateur a 6 pièces  [ 1 pièce de 1€ | 2 pièces de 0,50€ | 2 pièce de 0,20€ | 1 pièce de 0,10€ ] --> */




var boisson = ['Coca', 'Sprite', 'Orangina', '7Up', 'Aloe Vera', 'Lipton Ice tea'];
var prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];

var ID = ['16', '17', '18', '19', '20', '21'];
var reponse;
var un = 1;
var cinquante = 2;
var vingt = 2;
var dix = 1;



function machineasous() {



    reponse = prompt('quel boisson aimeriez vous avoir?');





    if (reponse == 16) {
        alert('boisson : ' + boisson[0] + ' prix : ' + prix[0] + ' ID :' + ID[0]);

        prix[0] = parseFloat(prix[0]);


        var paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");




        while (prix[0] != 0) {

            prix[0] = parseFloat(prix[0], 10);

            paye = parseFloat(paye, 10);


            if (paye == 1 && un > 0 && prix[0] != 0) {

                prix[0] = prix[0] - paye;
                prix[0] = Math.round(prix[0] * 100) / 100;
                un--;
                if (prix[0] != 0) {
                    paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[0] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                } else if (prix[0] < 0) {
                    var difference =  -1*prix[0] ;
                    alert('voici votre boisson, \n n\'oubliez pas votre monnaie'+ difference);
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();
                }






            } else if (paye == 0.50 && cinquante > 0 && prix[0] != 0) {


                prix[0] = prix[0] - paye;
                prix[0] = Math.round(prix[0] * 100) / 100;
                cinquante--;
                if (prix[0] != 0) {
                    paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[0] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                } else if (prix[0] < 0) {
                    var difference = prix[0] * -1;
                    alert('voici votre boisson, \n n\'oubliez pas votre monnaie' + difference);
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();
                }





            } else if (paye == 0.20 && vingt > 0) {

                prix[0] = prix[0] - paye;
                prix[0] = Math.round(prix[0] * 100) / 100;
                vingt--;
                if (prix[0] != 0) {
                    paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[0] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }







            } else if (paye == 0.10 && dix > 0 && prix[0] != 0) {

                prix[0] = prix[0] - paye;
                prix[0] = Math.round(prix[0] * 100) / 100;
                dix--;
                if (prix[0] != 0) {
                    paye = prompt("Prix:" + prix[0] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[0] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }


            }
        }






    } else if (reponse == 17) {
        alert('boisson : ' + boisson[1] + ' prix : ' + prix[1] + ' ID :' + ID[1]);



        prix[1] = parseFloat(prix[1]);


        var paye = prompt("Prix:" + prix[1] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");








        while (prix[1] != 0) {

            prix[1] = parseFloat(prix[1], 10);
            paye = parseFloat(paye, 10);


            if (paye == 1 && un > 0 && prix[1] != 0) {

                prix[1] = prix[1] - paye;
                prix[1] = Math.round(prix[1] * 100) / 100;
                un--;
                if (prix[1] != 0) {
                    paye = prompt("Prix:" + prix[1] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[1] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }






            } else if (paye == 0.50 && cinquante > 0 && prix[1] != 0) {


                prix[1] = prix[1] - paye;
                prix[1] = Math.round(prix[1] * 100) / 100;
                cinquante--;
                if (prix[1] != 0) {
                    paye = prompt("Prix:" + prix[1] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");

                } else if (prix[1] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }





            } else if (paye == 0.20 && vingt > 0) {

                prix[1] = prix[1] - paye;
                prix[1] = Math.round(prix[1] * 100) / 100;
                vingt--;
                if (prix[1] != 0) {
                    paye = prompt("Prix:" + prix[1] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");

                } else if (prix[1] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }







            } else if (paye == 0.10 && dix > 0 && prix[1] != 0) {

                prix[1] = prix[1] - paye;
                prix[1] = Math.round(prix[1] * 100) / 100;
                dix--;
                if (prix[1] != 0) {
                    paye = prompt("Prix:" + prix[1] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");

                } else if (prix[1] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }


            }
        }





    } else if (reponse == 18) {
        alert('boisson : ' + boisson[2] + ' prix : ' + prix[2] + ' ID :' + ID[2]);


        prix[2] = parseFloat(prix[2]);


        var paye = prompt("Prix:" + prix[2] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");








        while (prix[2] != 0) {

            prix[2] = parseFloat(prix[2], 10);
            paye = parseFloat(paye, 10);


            if (paye == 1 && un > 0 && prix[2] != 0) {

                prix[2] = prix[2] - paye;
                prix[2] = Math.round(prix[2] * 100) / 100;
                un--;
                if (prix[2] != 0) {
                    paye = prompt("Prix:" + prix[2] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
                    console.log(prix[2]);

                } else if (prix[2] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }






            } else if (paye == 0.50 && cinquante > 0 && prix[2] != 0) {


                prix[2] = prix[2] - paye;
                prix[2] = Math.round(prix[2] * 100) / 100;
                cinquante--;
                if (prix[2] != 0) {
                    paye = prompt("Prix:" + prix[2] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");

                } else if (prix[2] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }





            } else if (paye == 0.20 && vingt > 0) {

                prix[2] = prix[2] - paye;
                prix[2] = Math.round(prix[2] * 100) / 100;
                vingt--;
                if (prix[2] != 0) {
                    paye = prompt("Prix:" + prix[2] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[2] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }







            } else if (paye == 0.10 && dix > 0 && prix[2] != 0) {

                prix[2] = prix[2] - paye;
                prix[2] = Math.round(prix[2] * 100) / 100;
                dix--;
                if (prix[2] != 0) {
                    paye = prompt("Prix:" + prix[2] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[2] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }


            }
        }

    } else if (reponse == 19) {
        alert('boisson : ' + boisson[3] + ' prix : ' + prix[3] + ' ID :' + ID[3]);


        prix[3] = parseFloat(prix[3]);


        var paye = prompt("Prix:" + prix[3] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");








        while (prix[3] != 0) {

            prix[3] = parseFloat(prix[3], 10);
            console.log(prix[3]);
            paye = parseFloat(paye, 10);


            if (paye == 1 && un > 0 && prix[3] != 0) {

                prix[3] = prix[3] - paye;
                prix[3] = Math.round(prix[3] * 100) / 100;
                un--;
                if (prix[3] != 0) {
                    paye = prompt("Prix:" + prix[3] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[3] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }






            } else if (paye == 0.50 && cinquante > 0 && prix[3] != 0) {


                prix[3] = prix[3] - paye;
                prix[3] = Math.round(prix[3] * 100) / 100;
                cinquante--;
                if (prix[3] != 0) {
                    paye = prompt("Prix:" + prix[3] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[3] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }





            } else if (paye == 0.20 && vingt > 0) {

                prix[3] = prix[3] - paye;
                prix[3] = Math.round(prix[3] * 100) / 100;
                vingt--;
                if (prix[3] != 0) {
                    paye = prompt("Prix:" + prix[3] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[3] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }







            } else if (paye == 0.10 && dix > 0 && prix[3] != 0) {

                prix[3] = prix[3] - paye;
                prix[3] = Math.round(prix[3] * 100) / 100;
                dix--;
                if (prix[3] != 0) {
                    paye = prompt("Prix:" + prix[3] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[3] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }


            }
        }

    } else if (reponse == 20) {
        alert('boisson : ' + boisson[4] + ' prix : ' + prix[4] + ' ID :' + ID[4]);


        prix[4] = parseFloat(prix[4]);


        var paye = prompt("Prix:" + prix[4] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");








        while (prix[4] != 0) {

            prix[4] = parseFloat(prix[4], 10);

            paye = parseFloat(paye, 10);


            if (paye == 1 && un > 0 && prix[4] != 0) {

                prix[4] = prix[4] - paye;
                prix[4] = Math.round(prix[4] * 100) / 100;
                un--;
                if (prix[4] != 0) {
                    paye = prompt("Prix:" + prix[4] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[4] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }






            } else if (paye == 0.50 && cinquante > 0 && prix[4] != 0) {


                prix[4] = prix[4] - paye;
                prix[4] = Math.round(prix[4] * 100) / 100;
                cinquante--;
                if (prix[4] != 0) {
                    paye = prompt("Prix:" + prix[4] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
                    console.log(prix[4]);

                } else if (prix[4] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }





            } else if (paye == 0.20 && vingt > 0) {

                prix[4] = prix[4] - paye;
                prix[4] = Math.round(prix[4] * 100) / 100;
                vingt--;
                if (prix[4] != 0) {
                    paye = prompt("Prix:" + prix[4] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[4] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }







            } else if (paye == 0.10 && dix > 0 && prix[4] != 0) {

                prix[4] = prix[4] - paye;
                prix[4] = Math.round(prix[4] * 100) / 100;
                dix--;
                if (prix[4] != 0) {
                    paye = prompt("Prix:" + prix[4] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[4] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }


            }
        }

    } else if (reponse == 21) {
        alert('boisson : ' + boisson[5] + ' prix : ' + prix[5] + ' ID :' + ID[5]);


        prix[5] = parseFloat(prix[5]);


        var paye = prompt("Prix:" + prix[5] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");








        while (prix[5] != 0) {

            prix[5] = parseFloat(prix[5], 10);
            console.log(prix[5]);
            paye = parseFloat(paye, 10);


            if (paye == 1 && un > 0 && prix[5] != 0) {

                prix[5] = prix[5] - paye;
                prix[5] = Math.round(prix[5] * 100) / 100;
                un--;
                if (prix[5] != 0) {
                    paye = prompt("Prix:" + prix[5] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");

                } else if (prix[5] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }






            } else if (paye == 0.50 && cinquante > 0 && prix[5] != 0) {


                prix[5] = prix[5] - paye;
                prix[5] = Math.round(prix[5] * 100) / 100;
                cinquante--;
                if (prix[5] != 0) {
                    paye = prompt("Prix:" + prix[5] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[5] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }





            } else if (paye == 0.20 && vingt > 0) {

                prix[5] = prix[5] - paye;
                prix[5] = Math.round(prix[5] * 100) / 100;
                vingt--;
                if (prix[5] != 0) {
                    paye = prompt("Prix:" + prix[5] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");


                } else if (prix[5] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }







            } else if (paye == 0.10 && dix > 0 && prix[5] != 0) {

                prix[5] = prix[5] - paye;
                prix[5] = Math.round(prix[5] * 100) / 100;
                dix--;
                if (prix[5] != 0) {
                    paye = prompt("Prix:" + prix[5] + "\n Entrez une Pièce:\n[" + un + " pièce de 1€ | " + cinquante + "pièces de 0,50€ | " + vingt + " pièce de 0,20€ | " + dix + " pièce de 0,10€ ]");
                    console.log(prix[5]);

                } else if (prix[5] == 0) {
                    alert('voici votre boisson');
                    prix = ['1.20€', '1.00€', '1.50€', '1.60€', '1.40€', '1.10€'];
                    machineasous();

                }


            }
        }

    }








}

machineasous();