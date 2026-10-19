
function verifierEmail() {
    var email = document.getElementById("email").value;
    var positionArobase = email.indexOf("@");
    var dernierPoint = email.lastIndexOf(".");
    var message = document.getElementById("message");

 
    if (positionArobase > 0 && dernierPoint > positionArobase + 1
        && dernierPoint < email.length - 1) {
        message.innerHTML = "Cette adresse e-mail semble valide.";
        message.style.color = "green";
    } else {
        message.innerHTML = "Cette adresse e-mail n'est pas valide.";
        message.style.color = "#b00020";
    }
}

function effacerMessage() {
    document.getElementById("message").innerHTML = "Le résultat s'affichera ici.";
    document.getElementById("message").style.color = "#222";
}
