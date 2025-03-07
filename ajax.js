function comis(sel){
var inp = document.getElementById("fortran-"+sel);
var x = inp.innerHTML; x = x.replace(/\n+/g, ';').replace(/  +/g, ' ').replace(/ ;+/g,';').replace(/; +/g,';');
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {document.getElementById('div-'+sel).innerHTML = this.responseText;}
xhttp.open("POST", "main.cgi");
xhttp.send(x);}

function trigger(){
var z = document.querySelectorAll('[id^=fortran]').length;
for (var i=1; i < z+1; i++){comis(i.toString());}}
