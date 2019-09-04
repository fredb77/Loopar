
var braSaker = ["Vara med familjen", "Programmera", "Resa", "Äta mat", "Lyssna på musik"]
var ul = "<ul>";
var i;

for(i = 0; i < braSaker.length; i++) {
        ul += "<li>"+ braSaker[i] + "</li>"; 
}

ul += "</ul>";
document.getElementById("skrivUt").innerHTML = ul;