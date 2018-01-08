
var asignaturas = {
  "BBDD":{
      "nombre":"Base de Datos",
      "profesor":"Jaume Oliver",
  },
  "Programación":{
        "nombre":"Programación",
        "profesor":"David Gelpi",
  },
  "RefProgramación":{
        "nombre":"REF Programación",
        "profesor":"David Gelpi",
  },
  "ED":{
        "nombre":"Entornos Desarrollo",
        "profesor":"David Gelpi",
  },
  "LLMM":{
        "nombre":"Lenguaje de Marcas",
        "profesor":"Rafa Gión",
  } ,
  "RefLLMM":{
        "nombre":"REF Lenguaje de Marcas",
        "profesor":"Rafa Gión",
  },
  "SI":{
        "nombre":"Sistemas Informáticos",
        "profesor":"Ramón Jaume",
  },
  "FOL":{
        "nombre":"Form y or. laboral",
        "profesor":"No sabe no contesta",
  },
  "Patio":{
      "nombre":"Descanso/Café",
      "profesor":""
  },
  "Tutoría":{
    "nombre":"Consultas tutoría",
    "profesor":"Tutor: DavidG"
  }
};


document.addEventListener("mouseover", function(e){
  var elemento = e.target;
  if(elemento.tagName == 'TD'){
    elemento.classList.toggle('hoverCeldas',true);
  }
});

document.addEventListener("mouseout", function(e){
  var elemento = e.target;
  if(elemento.tagName == 'TD'){
    elemento.classList.toggle('hoverCeldas',false);
  }
});

function limpiarP(elemento){
  elemento.childNodes[1].innerText = "";
  elemento.childNodes[1].innerHTML = "";
  elemento.childNodes[1].outerText = "";
}

function generarNodo(tag,elemento){
  var node = document.createElement(tag);
  var textnode = document.createTextNode("");
  node.appendChild(textnode);
  elemento.appendChild(node);
}

function infoAsignaturas(asignatura){
  var celda = document.getElementsByTagName("TD")
  for(i=0; i<=celda.length; i++){
      if(celda[i].innerText.split("\n")[0] == asignatura){
        if(celda[i].childNodes.length > 1 && celda[i].childNodes[1].innerText == ""){
            celda[i].childNodes[1].innerText = ""+asignaturas[asignatura]["nombre"]+"\n"+asignaturas[asignatura]["profesor"];
        } else {
          limpiarP(celda[i]);
          generarNodo("P",celda[i]);
        }
        celda[i].classList.toggle(asignatura);
      }else{
        if(celda[i].className != ""){
          celda[i].classList.toggle(celda[i].className);
          limpiarP(celda[i]);
          generarNodo("P",celda[i]);
        }
      }
  }
}

document.addEventListener("click", function(e){
    var elemento = e.target;
    if(elemento.tagName == 'TD'){
      var asignatura = elemento.innerText.split("\n")[0];
      infoAsignaturas(asignatura);
    }

});