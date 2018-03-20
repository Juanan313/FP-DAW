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

}

    function cambiarColor(id) {
        var div1 = document.getElementById(id);

        if (div1.style.backgroundColor == "grey") {
            div1.style.backgroundColor = "black";
        } else {
            div1.style.backgroundColor = "grey";
        }

    }

   /* function cambiarColor2() {
        var div2 = document.getElementById("id2");

        if (div2.style.backgroundColor == "yellow") {
            div2.style.backgroundColor = "green";
        } else {
            div2.style.backgroundColor = "yellow";
        }screenX

    } */

    function crearTabla(id) {
        var table = "<table>";
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

    
