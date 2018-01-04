function alerta()
{
var mensaje;
var opcion = confirm("Modificar Div?");
if (opcion == true) {
    modifDiv();
} else {
    alert("has cancelado");
}
}
x= 50
y=50
function modifDiv() {
document.getElementById("change").innerHTML= "La prueba funciona";
document.getElementById("change").style.backgroundColor = "green";
document.getElementById("change").style.height = String(x+y) +"px";
}