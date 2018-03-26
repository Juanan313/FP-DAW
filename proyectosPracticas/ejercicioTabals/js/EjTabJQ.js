window.onload = function () {

    // Cargar todas las funciones en sus respectivos eventos en la función Onload.

    $("#dialog1").dialog({ autoOpen: false });

    $("#buttonTable1").on("click", function () {
        if ($("#tablaid1 .celda").length == $("#rowcount").val() * $("#columncount").val()) {
            $("#dialog1") .dialog({
                title: "Aviso"
           }).text("Ya existe una tabla 1 con esas dimensiones").dialog("open");
        } else {
            crearTabla("id1");
        }
    });

    $("#buttonTable2").on("click", function () {
        if ($("#tablaid2 .celda").length == $("#rowcount").val() * $("#columncount").val()) {
            $("#dialog1").dialog({
                title: "Aviso"
           }).text("Ya existe una tabla 2 con esas dimensiones").dialog("open");
        } else {
            crearTabla("id2");
        }
    });

    $("#buttonColor1").on("click", function () {

        cambiarColor("id1");
    });

    $("#buttonColor2").on("click", function () {
        cambiarColor("id2");
    });

    $("#insertText1").keypress(function(e) {
        if(e.which == 13) {
        insertarTexto("insertText1");
        }
    })

    $("#buttonInsertText1").on("click", function () {
        insertarTexto("insertText1");
    });

    // $("#buttonInsertText2").on("click", function () {
    //     insertarTexto("insertText2");
    // });

    $("body").on("click", ".celda", function () {


        $(this).toggleClass("selected");
        if ($(this).closest("#tablaid1").length > 0 || $(this).attr("id") == "tablaid1") {
            deselectCeldas("#tablaid2 .selected");
        } else if ($(this).closest("#tablaid2").length > 0 || $(this).attr("id") == "tablaid2") {
            deselectCeldas("#tablaid1 .selected")
        }
        
        if ($("#tablaid2 .selected").length > 0 ) {
            $("#oculto2").css("display", "inline-block");
        }
        
        if ($("#tablaid1 .selected").length > 0 ) {
            $("#oculto1").css("display", "inline-block");
        }
        return false;


    });

    $("html").on("click", function (e) {

        var elemento = e.target;
        var tagElemento = elemento.tagName.toLowerCase();

        if ( tagElemento != "button" && tagElemento != "input" && tagElemento != "aside" && tagElemento != "table" && tagElemento != "select")
             deselectCeldas("td.selected");         
    })

    $("#buttonShowHide1").click(function () {
        $("#tablaid1").toggle("fold", 1000);
    });

    $("#buttonShowHide2").click(function () {
        $("#tablaid2").toggle("fold", 1000);
    });

    $("#showhidemenu").on("click", function () {
        $("aside").toggle("slide", 100);
        $(".div40").switchClass("div40", "div50", 100);
        $(".div50").switchClass("div50", "div40", 100);
    });

    $("#moreInfo1").on("click", function () {
        celdasConTexto("#tablaid1");
    })

    $("#moreInfo2").on("click", function () {
        celdasConTexto("#tablaid2");
    })

    $("#borrar1").on("click", function () {
        borrarTextoCeldas("#tablaid1");
    })

    $("#borrar2").on("click", function () {
        borrarTextoCeldas("#tablaid2");
    })

    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });

    $.ajax({
        type: "GET",
        url: "user.json",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var selectsID = $.parseJSON(data);

            //Select tabla1
            $.each(selectsID, function (i, d) {
                $('#select1').append('<option value="' + d.id + '">'+"Usuario con ID:"+d.id+ '</option>');
            });

            //Nationality Select
            $.each(selectsID, function (i, d) {
                $('#select2').append('<option value="' + d.id + '">'+"Usuario con ID:"+d.id+ '</option>');
            });

        },
        error: function (e) {
            console.log(e.responseText);
            alert("Error al procesar la petición AJAX de Usuarios.");
        }
    }); 


};


function cambiarColor(id) {
    var selector = "#" + id;
    var div1 = $(selector);

    div1.toggleClass("fondo1 fondo2");

}


function insertarTexto(id) {

    var selector = "#" + id;
    var celdasSeleccionadas = $(".selected");
    celdasSeleccionadas.html($('<div class="contenedor">' + $(selector).val() + '</div>'))
}


function crearTabla(idDiv) {

    var selector;
    var idTabla = "tabla" + idDiv;
    var tituloCeldas;

    if (idTabla == "tablaid1") {
        tituloCeldas = "Celda de la tabla 1";
    } else {
        tituloCeldas = "Celda de la tabla 2";
    }

    mytable = $('<table></table>').attr({ id: idTabla });
    var filas = new Number($("#rowcount").val());
    var columnas = new Number($("#columncount").val());
    var tr = [];
    for (var i = 0; i < filas; i++) {
        var row = $('<tr></tr>').addClass("fila").appendTo(mytable);
        for (var j = 0; j < columnas; j++) {
            $('<td></td>').addClass("celda").attr({ title: tituloCeldas }).appendTo(row);
        }

    }
    selector = "#" + idDiv;
    $(selector).html(mytable);

}

function deselectCeldas(selector) {

    var celdasSeleccionadas;
    celdasSeleccionadas = $(selector);
    console.log(celdasSeleccionadas);
    celdasSeleccionadas.toggleClass("selected");
    
    if ($("#tablaid2 .selected").length >= 0 ) {
        $("#oculto2").css("display", "none");
    }
    
    if ($("#tablaid1 .selected").length >= 0 ) {
        $("#oculto1").css("display", "none");
    }
}

function celdasConTexto(id) {

    var celdas = $(id + " .celda");
    var totalCeldasEscritas = 0;

    celdas.each(function (i, v) {
        if ($(this).html() != "") {
            totalCeldasEscritas += 1;
        }
    })

    $("#dialog1").dialog({
        title: "Celdas Escritas:"
   }).text("En la tabla 1 hay " + totalCeldasEscritas + " celdas con texto.").dialog("open");
}

function borrarTextoCeldas(id) {
    var celdas = $(id+" .selected");

    celdas.each(function (i, v) {
        $(this).html("");
    });
}


