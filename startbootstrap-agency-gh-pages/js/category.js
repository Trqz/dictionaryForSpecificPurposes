
var server = document.getElementById("server");
var design = document.getElementById("design");
var programming = document.getElementById("programming");
var portfolio = document.getElementById("portfolio");
function hide() {
	 document.getElementById("design").style.display = "none";
	 document.getElementById("server").style.display = "none";
	 document.getElementById("programming").style.display = "none";	

}

function displayFunction_design()	 {
 
 if (design.style.display === 'none') {
 design.style.display = 'block';
 } else {
 design.style.display = 'none';
 } 
}

function displayFunction_server() {
 
 if(server.style.display ==='none'){
 	server.style.display ='block';
 }else{
 	server.style.display = 'none';
 }
}
function displayFunction_programming() {
 
 if (programming.style.display === 'none') {
 programming.style.display = 'block';
 } else {
 programming.style.display = 'none';
 }
}
