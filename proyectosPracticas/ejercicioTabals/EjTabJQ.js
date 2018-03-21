window.onload = function() {

    $( "#buttonTable1" ).on( "click", function(){
        crearTabla("id1");
    });

    $( "#buttonTable2" ).on( "click", function(){
        crearTabla("id2");
    });

    $( "#buttonColor1" ).on( "click", function(){
        
        cambiarColor("id1");
    });

    $( "#buttonColor2" ).on( "click", function(){
        cambiarColor("id2");
    });
        
    $( "#buttonInsertText1" ).on( "click", function(){
        insertarTexto("insertText1");
    });

    $( "#buttonInsertText2" ).on( "click", function(){
        insertarTexto("insertText2");
    });
    
    document.addEventListener("click", function(e){
        var elemento = e.target;

        selectCeldas(elemento);    
    });

    document.addEventListener("click", function(e) {
        var elemento = e.target;
        var escape = false;
        
        if (elemento.tagName == "BUTTON" || (elemento.id == ("insertText1" || "insertText2"))) {
            return false;
        }
        while (escape == false) {
            if (elemento == null) {
                escape = true;
            } else if (elemento.id == "tablaid1") {
                return false;
            } else if (elemento.id == "tablaid2") {
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

    
    // refactorizado a jquery

    function cambiarColor(id) {
        var selector = "#" + id;
        var div1 = $(selector);
        
        div1.toggleClass("fondo1 fondo2")

    }

    // refact to jquery

    function insertarTexto(id) {
        var arrayCeldas = $(".selected");
        var selector = "#" + id;
        var textoAInsertar = $(selector).val(); 
        for (i=0; i < arrayCeldas.length; i++) {
            arrayCeldas[i].innerHTML= textoAInsertar;
        } 

    }

    // refactorizado a jquery

    function crearTabla(id) {
        var table = "<table id='tabla"+id+"'>";
        var selector;
        for ( i=0; i < 5; i++ ) {
            table += "<tr>";
            for ( n=1; n < 7; n++) {
                table += " <td>"+"</td>"
            }
            
            table += "</tr>";
        }
        table += "</table>";
        selector = "#" + id;
        $(selector).html(table);
    }

        function deselectCeldas() {
		
        var arrayCeldas = document.getElementsByClassName("selected");
        /*for (i=0; i < arrayCeldas.length; i++) {
            arrayCeldas[i].className = "";
        }*/

        while (arrayCeldas.length > 0) {
            arrayCeldas[0].className = "";
        }
        
    }
    
