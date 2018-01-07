

  var asignaturas = {
    "BD":{
        "nombre":"Base de Datos",
        "profesor":"Jaume Oliver",
    },
    "Prog":{
          "nombre":"Programación",
          "profesor":"David Gelpi",
    },
    "RefProg":{
          "nombre":"REF Programación",
          "profesor":"David Gelpi",
    },
    "ED":{
          "nombre":"Entornos Desarrollo",
          "profesor":"David Gelpi",
    },
    "LM":{
          "nombre":"Lenguaje de Marcas",
          "profesor":"Rafa Gión",
    } ,
    "RefLM":{
          "nombre":"REF Lenguaje de Marcas",
          "profesor":"Rafa Gión",
    },
    "SI":{
          "nombre":"Sistemas Informáticos",
          "profesor":"Ramón Jaume",
    },
    "FOL":{
          "nombre":"No sabe no contesta",
          "profesor":"No cursado",
    },
    "Patio":{
        "nombre":"kit-kat time",
        "profesor":""
    },
    "Tuto":{
        "nombre":"Consultas tutorias",
        "profesor": "Tutor: David Gelpi"
    }
  };

  document.addEventListener("mouseover", function(celda){
    var obj = celda.target;
    if(obj.tagName == 'TD' && obj != obj.parentElement.childNodes[1]){
      obj.classList.toggle('hoverCeldas',true);
    }
  });
  
  document.addEventListener("mouseout", function(celda){
    var obj = celda.target;
    if(obj.tagName == 'TD' && obj != obj.parentElement.childNodes[1]){
      obj.classList.toggle('hoverCeldas',false);
    }
  });

 /* function cambiarEstilo(){

    var elemento = document.getElementById("Horario");
elemento.className = elemento.id;
  }*/

  /*function cambiarEstilo(cell){
    var name = cell.id;
    var elemento = document.getElementById(name);
    elemento.className = elemento.id;
  }*/

  function cambiarEstilo(cell){
    var name = cell.id;
    var elemento = document.getElementsByClassName(name);
    console.log(elemento)
    for (var i = 0; i <= elemento.length; i++) {
    elemento[i].className +="Modif";
    elemento[i].innerHTML = asignaturas[elemento[i]];
  }
    }