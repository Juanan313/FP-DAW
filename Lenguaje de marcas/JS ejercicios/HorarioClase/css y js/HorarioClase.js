
/*
var asignaturas = {
  "BBDD":
      "Base de Datos \n Jaume Oliver",
  "Programación":
        "Programación \n David Gelpi",
  "RefProgramación":
       "REF Programación \n David Gelpi",
  "ED":
      "Entornos Desarrollo \n David Gelpi",
  "LLMM":
        "Lenguaje de Marcas \n Rafa Gión",
  "RefLLMM":
        "REF Lenguaje de Marcas \n Rafa Gión",
  "SI":
        "Sistemas Informáticos \n Ramón Jaume",
  "FOL":
        "No sabe no contesta \n No cursado",
  "Patio":
      "Café",
  "Tutoría":
      "Consultas tutorias \n Tutor: David Gelpi",
  }

  document.addEventListener("mouseover", function(obj){
    var obj = obj.target;
    if(obj.tagName == 'TD' && obj != obj.parentElement.childNodes[1]){
      obj.classList.toggle('hoverobjs',true);
    }
  });
  
  document.addEventListener("mouseout", function(obj){
    var obj = obj.target;
    if(obj.tagName == 'TD' && obj != obj.parentElement.childNodes[1]){
      obj.classList.toggle('hoverobjs',false);
    }
  });

  
  function AñadirDatos (asignatura){
    var objs = document.getElementsByTagName("td");
    for (i=0; i<=objs.length; i++){
      if(objs[i].innerText.split("\n")[0] == asignatura){
        if(obj[i].childNodes.length >1 && obj[i].childNodes[1].innerText == ""){
          obj[i].childNodes[1].innerText = ""+asignaturas[asignatura]["nombre"]+"\n"+asignaturas[asignatura]["profesor"];
      }else{
        vaciarNodo(obj[i]);
        crearNodos("P", obj[i]);
      }
      objs[i].classList.toggle(asignatura);
      }else{
        if(objs[i].className != ""){
          objs[i].classList.toggle(objs[i].className);
          limpiaP(objs[i]);
          crearNodos("P",objs[i]);
      }}}}
  
  
      function vaciarNodo(obj){
    obj.childNodes[1].innerText = ""
    obj.childNodes[1].innerHTML = ""
    obj.childNodes[1].outerText = ""
  } 
  
  
  function crearNodos(tag, elemento){
    var nodo = document.createElement(tag);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    elemento.appendChild(nodo);
  }


  function $(selector){
    return document.querySelectorAll(selector);
  }

document.addEventListener("click", function(cell){
  var obj = cell.target;
  if(obj.tagName == "td" && obj != obj.parentElement.childNodes[1]){
    var asignatura = obj.innerText.split("\n")[0];
    AñadirDatos(asignatura);
    console.log(obj);
  }});
*/


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
  var obj = e.target;
  if(obj.tagName == 'TD' && obj != obj.parentElement.childNodes[1]){
    obj.classList.toggle('hoverCeldas',true);
  }
});

document.addEventListener("mouseout", function(e){
  var obj = e.target;
  if(obj.tagName == 'TD' && obj != obj.parentElement.childNodes[1]){
    obj.classList.toggle('hoverCeldas',false);
  }
});

function limpiarP(obj){
  obj.childNodes[1].innerText = ""
  obj.childNodes[1].innerHTML = ""
  obj.childNodes[1].outerText = ""
  //obj.childNodes[1].outerHTML = ""
}

function generarNodo(tipo,obj){
  var node = document.createElement(tipo);
  var textnode = document.createTextNode("");
  node.appendChild(textnode);
  obj.appendChild(node);
}

function datosAsignaturas(asignatura){
  var td = document.getElementsByTagName("TD")
  for(i=0; i<=td.length; i++){
      if(td[i].innerText.split("\n")[0] == asignatura){
        if(td[i].childNodes.length > 1 && td[i].childNodes[1].innerText == ""){
            td[i].childNodes[1].innerText = ""+asignaturas[asignatura]["nombre"]+"\n"+asignaturas[asignatura]["profesor"];
        } else {
          limpiarP(td[i]);
          generarNodo("P",td[i]);
        }
        td[i].classList.toggle(asignatura);
      }else{
        if(td[i].className != ""){
          td[i].classList.toggle(td[i].className);
          limpiarP(td[i]);
          generarNodo("P",td[i]);
        }
      }
  }
}

document.addEventListener("click", function(e){
    var obj = e.target;
    if(obj.tagName == 'TD' && obj != obj.parentElement.childNodes[1]){
      var asignatura = obj.innerText.split("\n")[0];
      datosAsignaturas(asignatura);
    }

});