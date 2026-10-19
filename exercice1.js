
var bonnesReponses = [
    ["a"],       // Question 1
    ["b"],       // Question 2
    ["a", "b"],  // Question 3
    ["a"],       // Question 4
    ["a"]        // Question 5
];

var textesQuestions = [
    "Qu'est-ce que JavaScript ?",
    "Quelle instruction affiche du texte dans le document selon le cours ?",
    "Quelles sont des valeurs booléennes ?",
    "Quelle boucle est présentée dans le cours ?",
    "Quelle propriété donne le nombre d'éléments d'un tableau ?"
];

var textesChoix = [
    ["Un langage de programmation utilisé dans les pages Web", "Un système d'exploitation", "Un navigateur Web"],
    ["prompt()", "document.write()", "isFinite()"],
    ["true", "false", "\"Bonjour\""],
    ["for", "print", "writeLoop"],
    ["length", "join()", "reverse()"]
];


function initialiserQCM() {
    document.qcm.reset();
}


function lireReponses(numero) {
    var reponses = [];
    var choix = document.getElementsByName("q" + numero);

    for (var i = 0; i < choix.length; i++) {
        if (choix[i].checked) {
            reponses.push(choix[i].value);
        }
    }
    return reponses;
}


function verifierReponse(reponses, bonnes) {
    if (reponses.length != bonnes.length) {
        return false;
    }

    for (var i = 0; i < bonnes.length; i++) {
        if (reponses.indexOf(bonnes[i]) == -1) {
            return false;
        }
    }
    return true;
}


function afficherCorrige() {
    var fenetre = window.open("", "corrige", "width=700,height=650,resizable=yes,scrollbars=yes");

    if (fenetre == null) {
        alert("Autorisez les fenêtres pop-up pour afficher le corrigé.");
        return;
    }

    var contenu = "<html><head><title>Corrigé du QCM</title>";
    contenu += "<style>body{font-family:Arial;padding:20px} .bonne{color:green;text-decoration:underline;font-weight:bold}</style>";
    contenu += "</head><body><h1>Corrigé du QCM</h1>";

    for (var i = 0; i < textesQuestions.length; i++) {
        contenu += "<h3>Question " + (i + 1) + " : " + textesQuestions[i] + "</h3>";

        for (var j = 0; j < textesChoix[i].length; j++) {
            var lettre = String.fromCharCode(97 + j);
            if (bonnesReponses[i].indexOf(lettre) != -1) {
                contenu += "<p class='bonne'>" + textesChoix[i][j] + " (bonne réponse)</p>";
            } else {
                contenu += "<p>" + textesChoix[i][j] + "</p>";
            }
        }
    }

    contenu += "</body></html>";
    fenetre.document.write(contenu);
    fenetre.document.close();
}


function afficherResultat() {
    var fenetre = window.open("", "resultat", "width=600,height=450,resizable=yes,scrollbars=yes");

    if (fenetre == null) {
        alert("Autorisez les fenêtres pop-up pour afficher le résultat.");
        return;
    }

    var contenu = "<html><head><title>Résultat du test</title>";
    contenu += "<style>body{font-family:Arial;padding:20px}.ok{color:green}.ko{color:#b00020}</style>";
    contenu += "</head><body><h1>Résultat du test</h1>";
    var score = 0;

    for (var i = 0; i < bonnesReponses.length; i++) {
        var reponses = lireReponses(i + 1);
        if (verifierReponse(reponses, bonnesReponses[i])) {
            contenu += "<p class='ok'>La réponse de la question " + (i + 1) + " est correcte.</p>";
            score++;
        } else {
            contenu += "<p class='ko'>La réponse de la question " + (i + 1) + " est incorrecte.</p>";
        }
    }

    contenu += "<h2>Score : " + score + " / " + bonnesReponses.length + "</h2>";
    contenu += "</body></html>";
    fenetre.document.write(contenu);
    fenetre.document.close();
}
