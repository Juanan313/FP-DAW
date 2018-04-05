
// Variable global data donde cargaremos los datos obtenidos mediante Ajax
var DATA = [];


    // Cargar todas las funciones en sus respectivos eventos en la función Onload.

    $( document ).ready(function() { 

    // Opciones para que solo cargue los tooltips de JQueryUI y no los de bootstrap.

    $.widget.bridge('uibutton', $.ui.button);
    $.widget.bridge('uitooltip', $.ui.tooltip);



     $('#datepicker').datepicker({
         uiLibrary: 'bootstrap4'
     }).on('change', function(e) {
        moment.locale("ca"); 
         var fecha =  moment(e.target.value);
         
        alert('La fecha ha cambiado a: ' + fecha.format("DD/MMMM/YYYY"));
    });

    $("#dialog1").dialog({ autoOpen: false });


    // Botones con sus respectivas funciones

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

    $("#buttonShowHide1").click(function () {
        $("#tablaid1").toggle("fold", 1000);
    });

    $("#buttonShowHide2").click(function () {
        $("#tablaid2").toggle("fold", 1000);
    });

    $("#showhidemenu").on("click", function () {
        // $("aside").toggle("slide", 1000);
        $(".d-none").switchClass("d-none","d-block",1000);
        $(".d-block").switchClass("d-block","d-none",1000);
        // $(".usersDrag.d-none").switchClass("d-none","d-block",1000);
        // $(".usersDrag.d-block").switchClass("d-block","d-none",1000);
        $(".divTablas.col-md-5").switchClass("col-md-5", "col-md-6", 1000);
        $(".divTablas.col-md-6").switchClass("col-md-6", "col-md-5", 1000);

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

    $("#select1").change(function() {
        selectUserInfo("#select1");
    })

    $("#select2").change(function() {
        selectUserInfo("#select2");
    })

    
    $("#SelectAll1").on("click", function(){
        var celdas = $("#tablaid1 .celda");
        $(celdas).toggleClass("selected");
        
        if ($("#tablaid2 .selected").length > 0 ) {
            $("#oculto2").css("display", "inline-block");
        }

        if ($("#tablaid1 .selected").length > 0 ) {
            $("#oculto1").css("display", "inline-block");
        }
        deselectCeldas("#tablaid2 .selected")

    });

    $("#SelectAll2").on("click", function(){
        var celdas = $("#tablaid2 .celda");
        $(celdas).toggleClass("selected");
        
        if ($("#tablaid2 .selected").length > 0 ) {
            $("#oculto2").css("display", "inline-block");
        }

        if ($("#tablaid1 .selected").length > 0 ) {
            $("#oculto1").css("display", "inline-block");
        }
        deselectCeldas("#tablaid1 .selected")

    });

    // Seleccionar las celdas para modificar, no permite seleccionar celdas de ambas tablas a la vez

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

    // Deseleccionar las celdas al clickar en elementos que no formen parte de las tablas o sus botones

    $("html").on("click", function (e) {

        var elemento = e.target;
        var tagElemento = elemento.tagName.toLowerCase();

        if ( tagElemento != "button" && tagElemento != "input" && tagElemento != "aside" && tagElemento != "table" && tagElemento != "select")
             deselectCeldas("td.selected");
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

    // Función Ajax : carga los datos de los usuarios con los que trabajaremos en las tablas.

    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        success: function (data) {
            DATA = data;
            var selectsID = data;

            //Select tabla1
            $.each(selectsID, function (i, d) {
                $('#select1').append('<option value="' + d.id + '">'+"Usuario con ID:"+d.id+ '</option>');
            });

            //Nationality Select
            $.each(selectsID, function (i, d) {
                $('#select2').append('<option value="' + d.id + '">'+"Usuario con ID:"+d.id+ '</option>');
            });

            $.each(data, function (i, v) {
                var userDrag = ($("<div/>").addClass("box").append($("<span/>").append(v.username)).data("user",v).draggable({
                    snap: true, opacity: 0.7, helper: "clone"
                }));
                $(".usersDrag").append(userDrag);
            })

        },
        error: function (e) {
            console.log(e.responseText);
            alert("Error al procesar la petición AJAX de Usuarios.");
        }
    });

    function initialize() {
        var goo = google.maps,
            mapOptions = {
                zoom: 14,
                center: new goo.LatLng(52.5498783, 13.425209099999961),
                mapTypeId: goo.MapTypeId.ROADMAP,
                disableDefaultUI:true
            },
            map = new goo.Map(document.getElementById('map_canvas'),
            mapOptions),
            marker = new goo.Marker({
                map: map,
                position: map.getCenter()
            });

        // $('#mapStart')
        //     .prop({
        //     disabled: false
        // })
        //     .click(function () {

        //     $(map.getDiv()).fancybox(
        //     // $.fancybox(map.getDiv(),

        //     {
        //         width: 600,
        //         height: 400,
        //         margin:50,
        //         autoSize: false,
        //         afterShow: function (a, z) {
        //             map.setOptions({
        //                 disableDefaultUI: false
        //             })
        //             goo.event.trigger(map, 'resize');
        //             map.setCenter(this.content.data('center'));
        //         },

        //         beforeLoad: function (a) {
        //             this.content.data({
        //                 parent: this.content.parent(),
        //                 center: map.getCenter()
        //             })
        //         },

        //         beforeClose: function () {
        //             this.content.data({
        //                 center: map.getCenter()
        //             })

        //         },
        //         afterClose: function () {
        //             map.setOptions({
        //                 disableDefaultUI: true
        //             })
        //             this.content.appendTo(this.content.data('parent')).show();
        //             goo.event.trigger(map, 'resize');
        //             map.setCenter(this.content.data('center'));
        //         }
        //     });

        // });
    }
    initialize();


    $("#mapStart").fancybox({
        'hideOnContentClick': false, // so you can handle the map
        'overlayColor'      : '#ccffee',
        'overlayOpacity'    : 0.8,
        'autoDimensions': true, // the selector #mapcontainer HAS css width and height        
        'onComplete': function(){
          google.maps.event.trigger(map, "resize");
                      $("#fancybox-close").css({"opacity":0.5});
        },
        'onCleanup': function() {
         var myContent = this.href;
         $(myContent).unwrap();
        } // fixes inline bug
       });
       // map
       map = new google.maps.Map(
        document.getElementById("map_canvas"), {
        zoom: 9,
        center: new google.maps.LatLng(49.261226,-123.113928),
        mapTypeId: google.maps.MapTypeId.TERRAIN
        }   
       );
});


function cambiarColor(id) {
    var selector = "#" + id;
    var div1 = $(selector);

    div1.toggleClass("bg-primary bg-secondary");

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

    mytable = $('<table></table>').attr({ id: idTabla }).addClass("table bg-info");
    var filas = new Number($("#rowcount").val());
    var columnas = new Number($("#columncount").val());
    var tr = [];
    for (var i = 0; i < filas; i++) {
        var row = $('<tr></tr>').addClass("fila").appendTo(mytable);
        for (var j = 0; j < columnas; j++) {
            $('<td></td>').addClass("celda").attr({ title: tituloCeldas }).droppable({
                    accept: ".box",
                    drop: function(e, ui){
                        var celda = $(this);
                         dragableInsertData(e,ui, celda);
                    //    var dragElement = $(ui.draggable[0]);
                    //     var id = dragElement.data("user").id;
                    // selectUserInfo(id);

                    }
                  }).appendTo(row);
        }

    }
    selector = "#" + idDiv;
    $(selector).html(mytable);

}

function deselectCeldas(selector) {

    var celdasSeleccionadas;
    celdasSeleccionadas = $(selector);
    celdasSeleccionadas.toggleClass("selected");

    if ($("#tablaid2 .selected").length >= 0 ) {
        $("#oculto2").css("display", "none");
        // $("#borrar2").css("display", "none");
    }

    if ($("#tablaid1 .selected").length >= 0 ) {
        $("#oculto1").css("display", "none");
        // $("#borrar1").css("display", "none");
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
    var tituloCeldas;
    if (id == "#tablaid1") {
        tituloCeldas = "Celda de la tabla 1";
    } else {
        tituloCeldas = "Celda de la tabla 2";
    }
    celdas.each(function (i, v) {
        $(this).html("");
        $(this).attr("title", tituloCeldas);

    });
}

function selectUserInfo(id) {

    var celdasSeleccionadas = $(".selected");
    var id = $(id + " option:selected").val();

    $.each(DATA, function (i, v) {
        if (v.id == id) {
            celdasSeleccionadas.each(function (index, celda) {
                $(celda).attr("title", "Usuario con ID: " + v.id).html($('<div class="contenedor">' + v.name + "<br/>" + v.username + '</div>'))
                });
            };
        });
        }


function dragableInsertData(e, ui, celda) {
    
    // Cargar datos de Data del elemento Dragable en dataDrag 
    var dragElement = $(ui.draggable[0]);
    var dataDrag = {};
    dataDrag.name = dragElement.data("user").name;
    dataDrag.userName = dragElement.data("user").username;
    dataDrag.id = dragElement.data("user").id;
    dataDrag.geo = {
        lat: parseFloat(dragElement.data("user").address.geo.lat),
        lng: parseFloat(dragElement.data("user").address.geo.lng)
    }

    // Crea contenedor para insertar en la celda dropable
    var contenido = $("<a/>").data("user", dataDrag).attr("id", "user"+dataDrag.id).attr("href", "#map_canvas").addClass("contenedor dialogFancyBox").html(dataDrag.userName);
    celda.html(contenido).attr("title", "Usuario con ID: " + dataDrag.id);

    // convierte el contenido en lanzador fancybox del map con la localizacion del usuario
    cargarMapa(dataDrag);
     
 }

 function cargarMapa(dataDrag){

    var geo = new google.maps.LatLng(dataDrag.geo.lat,dataDrag.geo.lng);
    var id = "#user"+dataDrag.id;


    $(id).fancybox({
        'hideOnContentClick': false, // so you can handle the map
        'overlayColor'      : '#ccffee',
        'overlayOpacity'    : 0.8,
        'autoDimensions': true, // the selector #mapcontainer HAS css width and height
        'onComplete': function(){
          google.maps.event.trigger(map, "resize");
                      $("#fancybox-close").css({"opacity":0.5});
        },
        'onCleanup': function() {
         var myContent = this.href;
         $(myContent).unwrap();
        } // fixes inline bug
       });
       // map
       map = new google.maps.Map(
        document.getElementById("map_canvas"), {
        zoom: 9,
        center: geo,
        mapTypeId: google.maps.MapTypeId.TERRAIN
        }   
       );
 }


// function crearDialogoFancyBox(dataDrag) {
    //      if ( $("#user"+dataDrag.id).length >0) {
    //          return false;
    //      } else {
    //         var dialogoFancybox = $("<div/>").attr("id", "user"+dataDrag.id).hide();
    //         dialogoFancybox.html("<div/>").html("ID: "+dataDrag.id+"<br/>"+
    //         "Nombre: "+dataDrag.name+"<br/>"+
    //         "UserName: "+dataDrag.userName);
    //         // $("<div style= width: 500px;height 500px;/>").attr("id", "mapa"+dataDrag.id).appendTo(dialogoFancybox);
    //         // cargarMapa("mapa"+dataDrag.id, dataDrag.geo);
    //         $("body").append(dialogoFancybox);
    //      }
         
    //  }


 
