
var server = document.getElementById("server");
var design = document.getElementById("design");
var programming = document.getElementById("programmingbtn");

function hide() {
	 document.getElementById("portfolio").style.display = "none";
}

function displayFunction() {
 
 if (design.style.display === 'none') {
 design.style.display = 'block';
 } else {
 design.style.display = 'none';
 }
}
