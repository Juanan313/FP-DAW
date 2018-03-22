window.onload = function () {

    $("#buttonTable1").on("click", function () {
        crearTabla("id1");
    });

    $("#buttonTable2").on("click", function () {
        crearTabla("id2");
    });

    $("#buttonColor1").on("click", function () {

        cambiarColor("id1");
    });

    $("#buttonColor2").on("click", function () {
        cambiarColor("id2");
    });

    $("#buttonInsertText1").on("click", function () {
        insertarTexto("insertText1");
    });

    $("#buttonInsertText2").on("click", function () {
        insertarTexto("insertText2");
    });

    $("body").on("click", ".celda", function () {


        $(this).toggleClass("selected");
        if ($(this).closest("#tablaid1").length > 0 || $(this).attr("id") == "tablaid1") {
            deselectCeldas("#tablaid2 .selected");
        } else if ($(this).closest("#tablaid2").length > 0 || $(this).attr("id") == "tablaid2") {
            deselectCeldas("#tablaid1 .selected")
        }
        return false;
    });

    $("html").on("click", function (e) {

        var elemento = e.target;
        if (elemento.tagName.toLowerCase() != "button" && elemento.tagName.toLowerCase() != "input") {
            deselectCeldas("td.selected");
        }
    })
    // $(".fila").mouseover(function(e) {

    //     var elemento = e.target;
    //     elemento.toggleClass("hoverFila");

    // });



    // document.addEventListener("click", function (e) {
    //     var elemento = e.target;
    //     var escape = false;

    //     if (elemento.tagName.toLowerCase() == "button" || (elemento.id == ("insertText1" || "insertText2"))) {
    //         return false;
    //     }
    //     while (escape == false) {
    //         if (elemento == null) {
    //             escape = true;
    //         } else if (elemento.id == "tablaid1") {
    //             return false;
    //         } else if (elemento.id == "tablaid2") {
    //             return false;
    //         }
    //         else {
    //             elemento = elemento.parentNode;
    //         }
    //     }

    //     deselectCeldas(elemento);
    // }
    // )
};

// function selectCeldas(elemento) {

//     elemento.toggleClass("selected");

// }


// refactorizado a jquery

function cambiarColor(id) {
    var selector = "#" + id;
    var div1 = $(selector);

    div1.toggleClass("fondo1 fondo2");

}

// refact to jquery

function insertarTexto(id) {
    // var arrayCeldas = $(".selected");

    // var textoAInsertar = $(selector).val();
    // for (i = 0; i < arrayCeldas.length; i++) {
    //     arrayCeldas[i].innerHtml = "pruebas";
    // }

    var selector = "#" + id;
    var celdasSeleccionadas = $(".selected");
    celdasSeleccionadas.html($('<div class="contenedor">' + $(selector).val() + '</div>'))
}

// refactorizado a jquery


function crearTabla(idDiv) {

    var selector;
    var idTabla = "tabla" + idDiv;

    mytable = $('<table></table>').attr({ id: idTabla });
    var filas = new Number($("#rowcount").val());
    var columnas = new Number($("#columncount").val());
    var tr = [];
    for (var i = 0; i < filas; i++) {
        var row = $('<tr></tr>').addClass("fila").appendTo(mytable);
        for (var j = 0; j < columnas; j++) {
            $('<td></td>').addClass("celda").appendTo(row);
        }

    }
    selector = "#" + idDiv;
    $(selector).html(mytable);

}

function deselectCeldas(selector) {

    // var arrayCeldas = document.getElementsByClassName("selected");
    // /*for (i=0; i < arrayCeldas.length; i++) {
    //     arrayCeldas[i].className = "";
    // }*/

    // while (arrayCeldas.length > 0) {
    //     arrayCeldas[0].className = "";

    // if (elemento.tagName.toLowerCase() != "button" && elemento.tagName.toLowerCase() != "input" ) {
    //     if (elementoSelect.parents().hasClass("tablaid1").length > 0 || elementoSelect.hasClass("tablaid1")) {
    //         celdasSeleccionadas = $("#tablaid2 .selected");
    //         celdasSeleccionadas.toggleClass("selected");
    //     } else if (elementoSelect.parents().hasClass("tablaid2").length > 0 || elementoSelect.hasClass("tablaid2")) {
    //         celdasSeleccionadas = $("#tablaid1 .selected");
    //         celdasSeleccionadas.toggleClass("selected");
    //     } else {
    //          celdasSeleccionadas = $("td.selected");
    //         celdasSeleccionadas.toggleClass("selected");
    //     }
    //     }

    var celdasSeleccionadas;
    celdasSeleccionadas = $(selector);
    console.log(celdasSeleccionadas);
    celdasSeleccionadas.toggleClass("selected");
}


