window.onload = function() {

    document.getElementById("buttonTable1").onclick=function(){
        crearTabla("id1");
    };

    document.getElementById("buttonTable2").onclick=function(){
        crearTabla("id2");
    };

    document.getElementById("buttonColor1").onclick=function(){
        cambiarColor("id1");
    };

    document.getElementById("buttonColor2").onclick=function(){
        cambiarColor("id2");
    };
    
    document.addEventListener("click", function(e){
        var elemento = e.target;

        selectCeldas(elemento);    
    });

    document.getElementById("buttonInsertText1").onclick=function(){
        insertarTexto("insertText1");
    };

    document.getElementById("buttonInsertText2").onclick=function(){
        insertarTexto("insertText2");
    };
    

    document.addEventListener("click", function(e) {
        var elemento = e.target;
        var escape = false;
        
        if (elemento.tagName == "BUTTON" || elemento.id == ("insertText1" || "insertText2")) {
            return false;
        }
        while (escape == false) {
            if (elemento == null) {
                escape = true;
            } else if (elemento.id == "tabla") {
                return false;
            }
            else {
                elemento = elemento.parentNode;
            } 
        }

        deselectCeldas(elemento);
        }
    )};

    function selectCeldas(elemento) {

        if (elemento.tagName == "TD" && elemento.className != "selected" ) {
            elemento.className = "selected";
        } else if (elemento.tagName == "TD" && elemento.className == "selected") {
            elemento.className = "";
        } 
    }

    function cambiarColor(id) {
        var div1 = document.getElementById(id);

        if (div1.style.backgroundColor == "grey") {
            div1.style.backgroundColor = "black";
        } else {
            div1.style.backgroundColor = "grey";
        }

    }

    function insertarTexto(id) {
        var arrayCeldas = document.getElementsByClassName("selected");
        var textoAInsertar = document.getElementById(id).value; 
        for (i=0; i < arrayCeldas.length; i++) {
            /*textoAInsertar = document.createTextNode(document.getElementById(id).value);*/
            /*arrayCeldas[i].appendChild(textoAInsertar);*/
            arrayCeldas[i].innerHTML= textoAInsertar;
        } 

    }

    function crearTabla(id) {
        var table = "<table id='tabla'>";
        for ( i=0; i < 5; i++ ) {
            table += "<tr>";
            for ( n=1; n < 7; n++) {
                table += " <td>"+"</td>"
            }
            
            table += "</tr>";
        }
        table += "</table>";

        document.getElementById(id).innerHTML = table;
    }

        function deselectCeldas() {

        var arrayCeldas = document.getElementsByClassName("selected");
        /*for (i=0; i < arrayCeldas.length; i++) {
            arrayCeldas[i].className = "";
        }*/

        while (arrayCeldas.length > 0) {
            arrayCeldas[0].className = "";
        }

        for (var celda in arrayCeldas) {
            celda.className = "";
        }
    }
    
