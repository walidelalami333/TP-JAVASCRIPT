
function calculerSomme() {
    var heures = Number(document.getElementById("h1").value)
        + Number(document.getElementById("h2").value)
        + Number(document.getElementById("h3").value);

    var minutes = Number(document.getElementById("m1").value)
        + Number(document.getElementById("m2").value)
        + Number(document.getElementById("m3").value);

    var secondes = Number(document.getElementById("s1").value)
        + Number(document.getElementById("s2").value)
        + Number(document.getElementById("s3").value);

    
    minutes = minutes + Math.floor(secondes / 60);
    secondes = secondes % 60;


    heures = heures + Math.floor(minutes / 60);
    minutes = minutes % 60;

    var jours = Math.floor(heures / 24);
    heures = heures % 24;

    document.getElementById("resultat").innerHTML =
        "Total des trois temps : " + jours + " jour(s), "
        + heures + " heure(s), " + minutes + " minute(s) et "
        + secondes + " seconde(s).";
}

function effacerResultat() {
    document.getElementById("resultat").innerHTML = "Le total s'affichera ici.";
}
