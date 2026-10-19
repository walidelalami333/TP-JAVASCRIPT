
function trier(tableau) {
 
    tableau.sort(function(a, b) {
        return a - b;
    });
    return tableau;
}

function afficherTableauTrie() {
    var texte = document.getElementById("nombres").value;
    var elements = texte.split(",");
    var nombres = [];

    for (var i = 0; i < elements.length; i++) {
        var nombre = Number(elements[i]);

        if (elements[i].trim() != "" && !isNaN(nombre)) {
            nombres.push(nombre);
        }
    }

    if (nombres.length == 0) {
        document.getElementById("resultat").innerHTML = "Entrez au moins un nombre valide.";
    } else {
        var tableauTrie = trier(nombres);
        document.getElementById("resultat").innerHTML = "Tableau trié : " + tableauTrie.join(", ");
    }
}
