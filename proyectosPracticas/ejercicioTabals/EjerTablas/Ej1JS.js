// JavaScript source code
//DIV1
function color1() {
    //cambia de color el DIV
    document.getElementById('div1').style.backgroundColor = '#90EE90';
}


function tabla1() {
    //escribir en div1
    var body = document.getElementById('div1');

    //crea <table> y <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //crear tabla
    for (var i = 0; i < 6; i++) {
        //crea filas
        var fila = document.createElement("tr");

        //crear columnas
        for (var j = 0; j < 5; j++) {
            celda = document.createElement('td');
            textoCelda = document.createTextNode("");
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
            celda.setAttribute("onclick", "SelectCelda1(this)");
            celda.setAttribute("style", "border: 3px solid black; 3px solid black; width: 20%; height: 16.7%;");
            id = ("t" + [i] + [j]);
            celda.setAttribute("id", id);
        }
        
        //agrega la fila al final de la tabla
        tblBody.appendChild(fila);
    }

    //posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);

    body.appendChild(tabla);
    tabla.setAttribute("border");
    tabla.style.width = "100%";
    tabla.style.height = "100%";

    //activar botones DIV1
    document.getElementById('bt1').style.display = 'block';
}

function SelectCelda1(c) {
     //mira si la celda clicada tiene el borde negro (no marcada), si es asi le pone el borde en rojo
    if (c.style.cssText == "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;") {
        //marca celda (borde a rojo)
        c.setAttribute("style", "border: 3px solid red; border-image: none; width: 20%; height: 16.7%;");
    }
    else {
        //desmarca celda (borde a negro)
        c.setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    }
}


function Insertar1() {
    t1 = document.getElementById("txt1").value;
    if (t1 == "") {
        alert("Rellena el textbox.");
    }
    else {
        //mira celda por celda si esta marcada y esta vacia, si es asi rellena la celda con lo introducido en el textbox correspondiente.
        if ((document.getElementById("t00").style.border == "3px solid red") && !(document.getElementById("t00").innerText = t1)) {
            document.getElementById("t00").innerText = t1;
        }
        if ((document.getElementById("t01").style.border == "3px solid red") && !(document.getElementById("t01").innerText = t1)) {
            document.getElementById("t01").innerText = t1;
        }
        if ((document.getElementById("t02").style.border == "3px solid red") && !(document.getElementById("t02").innerText = t1)) {
            document.getElementById("t02").innerText = t1;
        }
        if ((document.getElementById("t03").style.border == "3px solid red") && !(document.getElementById("t03").innerText = t1)) {
            document.getElementById("t03").innerText = t1;
        }
        if ((document.getElementById("t04").style.border == "3px solid red") && !(document.getElementById("t04").innerText = t1)) {
            document.getElementById("t04").innerText = t1;
        }
        if ((document.getElementById("t10").style.border == "3px solid red") && !(document.getElementById("t10").innerText = t1)) {
            document.getElementById("t10").innerText = t1;
        }
        if ((document.getElementById("t11").style.border == "3px solid red") && !(document.getElementById("t11").innerText = t1)) {
            document.getElementById("t11").innerText = t1;
        }
        if ((document.getElementById("t12").style.border == "3px solid red") && !(document.getElementById("t12").innerText = t1)) {
            document.getElementById("t12").innerText = t1;
        }
        if ((document.getElementById("t13").style.border == "3px solid red") && !(document.getElementById("t13").innerText = t1)) {
            document.getElementById("t13").innerText = t1;
        }
        if ((document.getElementById("t14").style.border == "3px solid red") && !(document.getElementById("t14").innerText = t1)) {
            document.getElementById("t14").innerText = t1;
        }
        if ((document.getElementById("t20").style.border == "3px solid red") && !(document.getElementById("t20").innerText = t1)) {
            document.getElementById("t20").innerText = t1;
        }
        if ((document.getElementById("t21").style.border == "3px solid red") && !(document.getElementById("t21").innerText = t1)) {
            document.getElementById("t21").innerText = t1;
        }
        if ((document.getElementById("t22").style.border == "3px solid red") && !(document.getElementById("t22").innerText = t1)) {
            document.getElementById("t22").innerText = t1;
        }
        if ((document.getElementById("t23").style.border == "3px solid red") && !(document.getElementById("t23").innerText = t1)) {
            document.getElementById("t23").innerText = t1;
        }
        if ((document.getElementById("t24").style.border == "3px solid red") && !(document.getElementById("t24").innerText = t1)) {
            document.getElementById("t24").innerText = t1;
        }
        if ((document.getElementById("t30").style.border == "3px solid red") && !(document.getElementById("t30").innerText = t1)) {
            document.getElementById("t30").innerText = t1;
        }
        if ((document.getElementById("t31").style.border == "3px solid red") && !(document.getElementById("t31").innerText = t1)) {
            document.getElementById("t31").innerText = t1;
        }
        if ((document.getElementById("t32").style.border == "3px solid red") && !(document.getElementById("t32").innerText = t1)) {
            document.getElementById("t32").innerText = t1;
        }
        if ((document.getElementById("t33").style.border == "3px solid red") && !(document.getElementById("t33").innerText = t1)) {
            document.getElementById("t33").innerText = t1;
        }
        if ((document.getElementById("t34").style.border == "3px solid red") && !(document.getElementById("t34").innerText = t1)) {
            document.getElementById("t34").innerText = t1;
        }
        if ((document.getElementById("t40").style.border == "3px solid red") && !(document.getElementById("t40").innerText = t1)) {
            document.getElementById("t40").innerText = t1;
        }
        if ((document.getElementById("t41").style.border == "3px solid red") && !(document.getElementById("t41").innerText = t1)) {
            document.getElementById("t41").innerText = t1;
        }
        if ((document.getElementById("t42").style.border == "3px solid red") && !(document.getElementById("t42").innerText = t1)) {
            document.getElementById("t42").innerText = t1;
        }
        if ((document.getElementById("t43").style.border == "3px solid red") && !(document.getElementById("t43").innerText = t1)) {
            document.getElementById("t43").innerText = t1;
        }
        if ((document.getElementById("t44").style.border == "3px solid red") && !(document.getElementById("t44").innerText = t1)) {
            document.getElementById("t44").innerText = t1;
        }
        if ((document.getElementById("t50").style.border == "3px solid red") && !(document.getElementById("t50").innerText = t1)) {
            document.getElementById("t50").innerText = t1;
        }
        if ((document.getElementById("t51").style.border == "3px solid red") && !(document.getElementById("t51").innerText = t1)) {
            document.getElementById("t51").innerText = t1;
        }
        if ((document.getElementById("t52").style.border == "3px solid red") && !(document.getElementById("t52").innerText = t1)) {
            document.getElementById("t52").innerText = t1;
        }
        if ((document.getElementById("t53").style.border == "3px solid red") && !(document.getElementById("t53").innerText = t1)) {
            document.getElementById("t53").innerText = t1;
        }
        if ((document.getElementById("t54").style.border == "3px solid red") && !(document.getElementById("t54").innerText = t1)) {
            document.getElementById("t54").innerText = t1;
        }
    }
}

function Borrar1() {
    t1 = document.getElementById("txt1").value;
     //mira celda por celda si esta marcada y esta llena, si es asi borra el contenido que contenga.

    if (document.getElementById("t00").style.border == "3px solid black" && document.getElementById("t01").style.border == "3px solid black" &&
        document.getElementById("t02").style.border == "3px solid black" && document.getElementById("t03").style.border == "3px solid black" &&
        document.getElementById("t04").style.border == "3px solid black" && document.getElementById("t10").style.border == "3px solid black" &&
        document.getElementById("t11").style.border == "3px solid black" && document.getElementById("t12").style.border == "3px solid black" &&
        document.getElementById("t13").style.border == "3px solid black" && document.getElementById("t14").style.border == "3px solid black" &&
        document.getElementById("t20").style.border == "3px solid black" && document.getElementById("t21").style.border == "3px solid black" &&
        document.getElementById("t22").style.border == "3px solid black" && document.getElementById("t23").style.border == "3px solid black" &&
        document.getElementById("t24").style.border == "3px solid black" && document.getElementById("t30").style.border == "3px solid black" &&
        document.getElementById("t31").style.border == "3px solid black" && document.getElementById("t32").style.border == "3px solid black" &&
        document.getElementById("t33").style.border == "3px solid black" && document.getElementById("t34").style.border == "3px solid black" &&
        document.getElementById("t40").style.border == "3px solid black" && document.getElementById("t41").style.border == "3px solid black" &&
        document.getElementById("t42").style.border == "3px solid black" && document.getElementById("t43").style.border == "3px solid black" &&
        document.getElementById("t44").style.border == "3px solid black" && document.getElementById("t50").style.border == "3px solid black" &&
        document.getElementById("t51").style.border == "3px solid black" && document.getElementById("t52").style.border == "3px solid black" &&
        document.getElementById("t53").style.border == "3px solid black" && document.getElementById("t54").style.border == "3px solid black") {
        alert("No hay celdas seleccionadas.");
    }
    else {
        if ((document.getElementById("t00").style.border == "3px solid red") && (document.getElementById("t00").innerText = t1)) {
            document.getElementById("t00").innerText = "";
        }
        if ((document.getElementById("t01").style.border == "3px solid red") && (document.getElementById("t01").innerText = t1)) {
            document.getElementById("t01").innerText = "";
        }
        if ((document.getElementById("t02").style.border == "3px solid red") && (document.getElementById("t02").innerText = t1)) {
            document.getElementById("t02").innerText = "";
        }
        if ((document.getElementById("t03").style.border == "3px solid red") && (document.getElementById("t03").innerText = t1)) {
            document.getElementById("t03").innerText = "";
        }
        if ((document.getElementById("t04").style.border == "3px solid red") && (document.getElementById("t04").innerText = t1)) {
            document.getElementById("t04").innerText = "";
        }
        if ((document.getElementById("t10").style.border == "3px solid red") && (document.getElementById("t10").innerText = t1)) {
            document.getElementById("t10").innerText = "";
        }
        if ((document.getElementById("t11").style.border == "3px solid red") && (document.getElementById("t11").innerText = t1)) {
            document.getElementById("t11").innerText = "";
        }
        if ((document.getElementById("t12").style.border == "3px solid red") && (document.getElementById("t12").innerText = t1)) {
            document.getElementById("t12").innerText = "";
        }
        if ((document.getElementById("t13").style.border == "3px solid red") && (document.getElementById("t13").innerText = t1)) {
            document.getElementById("t13").innerText = "";
        }
        if ((document.getElementById("t14").style.border == "3px solid red") && (document.getElementById("t14").innerText = t1)) {
            document.getElementById("t14").innerText = "";
        }
        if ((document.getElementById("t20").style.border == "3px solid red") && (document.getElementById("t20").innerText = t1)) {
            document.getElementById("t20").innerText = "";
        }
        if ((document.getElementById("t21").style.border == "3px solid red") && (document.getElementById("t21").innerText = t1)) {
            document.getElementById("t21").innerText = "";
        }
        if ((document.getElementById("t22").style.border == "3px solid red") && (document.getElementById("t22").innerText = t1)) {
            document.getElementById("t22").innerText = "";
        }
        if ((document.getElementById("t23").style.border == "3px solid red") && (document.getElementById("t23").innerText = t1)) {
            document.getElementById("t23").innerText = "";
        }
        if ((document.getElementById("t24").style.border == "3px solid red") && (document.getElementById("t24").innerText = t1)) {
            document.getElementById("t24").innerText = "";
        }
        if ((document.getElementById("t30").style.border == "3px solid red") && (document.getElementById("t30").innerText = t1)) {
            document.getElementById("t30").innerText = "";
        }
        if ((document.getElementById("t31").style.border == "3px solid red") && (document.getElementById("t31").innerText = t1)) {
            document.getElementById("t31").innerText = "";
        }
        if ((document.getElementById("t32").style.border == "3px solid red") && (document.getElementById("t32").innerText = t1)) {
            document.getElementById("t32").innerText = "";
        }
        if ((document.getElementById("t33").style.border == "3px solid red") && (document.getElementById("t33").innerText = t1)) {
            document.getElementById("t33").innerText = "";
        }
        if ((document.getElementById("t34").style.border == "3px solid red") && (document.getElementById("t34").innerText = t1)) {
            document.getElementById("t34").innerText = "";
        }
        if ((document.getElementById("t40").style.border == "3px solid red") && (document.getElementById("t40").innerText = t1)) {
            document.getElementById("t40").innerText = "";
        }
        if ((document.getElementById("t41").style.border == "3px solid red") && (document.getElementById("t41").innerText = t1)) {
            document.getElementById("t41").innerText = "";
        }
        if ((document.getElementById("t42").style.border == "3px solid red") && (document.getElementById("t42").innerText = t1)) {
            document.getElementById("t42").innerText = "";
        }
        if ((document.getElementById("t43").style.border == "3px solid red") && (document.getElementById("t43").innerText = t1)) {
            document.getElementById("t43").innerText = "";
        }
        if ((document.getElementById("t44").style.border == "3px solid red") && (document.getElementById("t44").innerText = t1)) {
            document.getElementById("t44").innerText = "";
        }
        if ((document.getElementById("t50").style.border == "3px solid red") && (document.getElementById("t50").innerText = t1)) {
            document.getElementById("t50").innerText = "";
        }
        if ((document.getElementById("t51").style.border == "3px solid red") && (document.getElementById("t51").innerText = t1)) {
            document.getElementById("t51").innerText = "";
        }
        if ((document.getElementById("t52").style.border == "3px solid red") && (document.getElementById("t52").innerText = t1)) {
            document.getElementById("t52").innerText = "";
        }
        if ((document.getElementById("t53").style.border == "3px solid red") && (document.getElementById("t53").innerText = t1)) {
            document.getElementById("t53").innerText = "";
        }
        if ((document.getElementById("t54").style.border == "3px solid red") && (document.getElementById("t54").innerText = t1)) {
            document.getElementById("t54").innerText = "";
        }
    }
}


//DIV2
function color2() {
    //cambia de color el DIV
    document.getElementById('div2').style.backgroundColor = '#B0E0E6';
}


function tabla2() {
    //escribir en div1
    var body = document.getElementById('div2');

    //crea <table> y <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //crear tabla
    for (var i = 0; i < 6; i++) {
        //crea filas
        var fila = document.createElement("tr");

        //crear columnas
        for (var j = 0; j < 5; j++) {
            celda2 = document.createElement('td');
            textoCelda = document.createTextNode("");
            celda2.appendChild(textoCelda);
            fila.appendChild(celda2);
            celda2.setAttribute("style", "border: 3px solid black; width: 20%; height: 16.7%;");
            celda2.setAttribute("onclick", "SelectCelda2(this)");
            celda2.setAttribute("id", "r" + [i] + [j]);  
        }

        // agrega la fila al final de la tabla
        tblBody.appendChild(fila);
    }

    // posiciona el <tbody> debajo <table>
    tabla.appendChild(tblBody);

    body.appendChild(tabla);
    tabla.setAttribute("border");
    tabla.style.width = "100%";
    tabla.style.height = "100%";

    //activar botones div2
    document.getElementById('bt2').style.display = 'block';
}

function SelectCelda2(c) {
    //mira si la celda clicada tiene el borde negro (no marcada), si es asi le pone el borde en rojo
    if (c.style.cssText == "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;") {
         //marca celda (borde a rojo)
        c.setAttribute("style", "border: 3px solid red; border-image: none; width: 20%; height: 16.7%;");
    }
    else {
         //desmarca celda (borde a negro)
        c.setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    }
}


function Insertar2() {
    //mira celda por celda si esta marcada y esta vacía, si es así la rellena con el contenido de su textbox correspondiente
    t2 = document.getElementById("txt2").value;

    if (t2 == "") {
        alert("Rellena el textbox.");
    }
    else {
        if ((document.getElementById("r00").style.border == "3px solid red") && !(document.getElementById("r00").innerText = t2)) {
            document.getElementById("r00").innerText = t2;
        }
        if ((document.getElementById("r01").style.border == "3px solid red") && !(document.getElementById("r01").innerText = t2)) {
            document.getElementById("r01").innerText = t2;
        }
        if ((document.getElementById("r02").style.border == "3px solid red") && !(document.getElementById("r02").innerText = t2)) {
            document.getElementById("r02").innerText = t2;
        }
        if ((document.getElementById("r03").style.border == "3px solid red") && !(document.getElementById("r03").innerText = t2)) {
            document.getElementById("r03").innerText = t2;
        }
        if ((document.getElementById("r04").style.border == "3px solid red") && !(document.getElementById("r04").innerText = t2)) {
            document.getElementById("r04").innerText = t2;
        }
        if ((document.getElementById("r10").style.border == "3px solid red") && !(document.getElementById("r10").innerText = t2)) {
            document.getElementById("r10").innerText = t2;
        }
        if ((document.getElementById("r11").style.border == "3px solid red") && !(document.getElementById("r11").innerText = t2)) {
            document.getElementById("r11").innerText = t2;
        }
        if ((document.getElementById("r12").style.border == "3px solid red") && !(document.getElementById("r12").innerText = t2)) {
            document.getElementById("r12").innerText = t2;
        }
        if ((document.getElementById("r13").style.border == "3px solid red") && !(document.getElementById("r13").innerText = t2)) {
            document.getElementById("r13").innerText = t2;
        }
        if ((document.getElementById("r14").style.border == "3px solid red") && !(document.getElementById("r14").innerText = t2)) {
            document.getElementById("r14").innerText = t2;
        }
        if ((document.getElementById("r20").style.border == "3px solid red") && !(document.getElementById("r20").innerText = t2)) {
            document.getElementById("r20").innerText = t2;
        }
        if ((document.getElementById("r21").style.border == "3px solid red") && !(document.getElementById("r21").innerText = t2)) {
            document.getElementById("r21").innerText = t2;
        }
        if ((document.getElementById("r22").style.border == "3px solid red") && !(document.getElementById("r22").innerText = t2)) {
            document.getElementById("r22").innerText = t2;
        }
        if ((document.getElementById("r23").style.border == "3px solid red") && !(document.getElementById("r23").innerText = t2)) {
            document.getElementById("r23").innerText = t2;
        }
        if ((document.getElementById("r24").style.border == "3px solid red") && !(document.getElementById("r24").innerText = t2)) {
            document.getElementById("r24").innerText = t2;
        }
        if ((document.getElementById("r30").style.border == "3px solid red") && !(document.getElementById("r30").innerText = t2)) {
            document.getElementById("r30").innerText = t2;
        }
        if ((document.getElementById("r31").style.border == "3px solid red") && !(document.getElementById("r31").innerText = t2)) {
            document.getElementById("r31").innerText = t2;
        }
        if ((document.getElementById("r32").style.border == "3px solid red") && !(document.getElementById("r32").innerText = t2)) {
            document.getElementById("r32").innerText = t2;
        }
        if ((document.getElementById("r33").style.border == "3px solid red") && !(document.getElementById("r33").innerText = t2)) {
            document.getElementById("r33").innerText = t2;
        }
        if ((document.getElementById("r34").style.border == "3px solid red") && !(document.getElementById("r34").innerText = t2)) {
            document.getElementById("r34").innerText = t2;
        }
        if ((document.getElementById("r40").style.border == "3px solid red") && !(document.getElementById("r40").innerText = t2)) {
            document.getElementById("r40").innerText = t2;
        }
        if ((document.getElementById("r41").style.border == "3px solid red") && !(document.getElementById("r41").innerText = t2)) {
            document.getElementById("r41").innerText = t2;
        }
        if ((document.getElementById("r42").style.border == "3px solid red") && !(document.getElementById("r42").innerText = t2)) {
            document.getElementById("r42").innerText = t2;
        }
        if ((document.getElementById("r43").style.border == "3px solid red") && !(document.getElementById("r43").innerText = t2)) {
            document.getElementById("r43").innerText = t2;
        }
        if ((document.getElementById("r44").style.border == "3px solid red") && !(document.getElementById("r44").innerText = t2)) {
            document.getElementById("r44").innerText = t2;
        }
        if ((document.getElementById("r50").style.border == "3px solid red") && !(document.getElementById("r50").innerText = t2)) {
            document.getElementById("r50").innerText = t2;
        }
        if ((document.getElementById("r51").style.border == "3px solid red") && !(document.getElementById("r51").innerText = t2)) {
            document.getElementById("r51").innerText = t2;
        }
        if ((document.getElementById("r52").style.border == "3px solid red") && !(document.getElementById("r52").innerText = t2)) {
            document.getElementById("r52").innerText = t2;
        }
        if ((document.getElementById("r53").style.border == "3px solid red") && !(document.getElementById("r53").innerText = t2)) {
            document.getElementById("r53").innerText = t2;
        }
        if ((document.getElementById("r54").style.border == "3px solid red") && !(document.getElementById("r54").innerText = t2)) {
            document.getElementById("r54").innerText = t2;
        }
    }
}


function Borrar2() {
    //mira celda por celda si esta marcada y tiene contenido en su interior, si es asi la vacia.
    t2 = document.getElementById("txt2").value;

    if (document.getElementById("r00").style.border == "3px solid black" && document.getElementById("r01").style.border == "3px solid black" &&
        document.getElementById("r02").style.border == "3px solid black" && document.getElementById("r03").style.border == "3px solid black" &&
        document.getElementById("r04").style.border == "3px solid black" && document.getElementById("r10").style.border == "3px solid black" &&
        document.getElementById("r11").style.border == "3px solid black" && document.getElementById("r12").style.border == "3px solid black" &&
        document.getElementById("r13").style.border == "3px solid black" && document.getElementById("r14").style.border == "3px solid black" &&
        document.getElementById("r20").style.border == "3px solid black" && document.getElementById("r21").style.border == "3px solid black" &&
        document.getElementById("r22").style.border == "3px solid black" && document.getElementById("r23").style.border == "3px solid black" &&
        document.getElementById("r24").style.border == "3px solid black" && document.getElementById("r30").style.border == "3px solid black" &&
        document.getElementById("r31").style.border == "3px solid black" && document.getElementById("r32").style.border == "3px solid black" &&
        document.getElementById("r33").style.border == "3px solid black" && document.getElementById("r34").style.border == "3px solid black" &&
        document.getElementById("r40").style.border == "3px solid black" && document.getElementById("r41").style.border == "3px solid black" &&
        document.getElementById("r42").style.border == "3px solid black" && document.getElementById("r43").style.border == "3px solid black" &&
        document.getElementById("r44").style.border == "3px solid black" && document.getElementById("r50").style.border == "3px solid black" &&
        document.getElementById("r51").style.border == "3px solid black" && document.getElementById("r52").style.border == "3px solid black" &&
        document.getElementById("r53").style.border == "3px solid black" && document.getElementById("r54").style.border == "3px solid black") {
        alert("No hay celdas seleccionadas.");
    }
    else {
        if ((document.getElementById("r00").style.border == "3px solid red") && (document.getElementById("r00").innerText = t2)) {
            document.getElementById("r00").innerText = "";
        }
        if ((document.getElementById("r01").style.border == "3px solid red") && (document.getElementById("r01").innerText = t2)) {
            document.getElementById("r01").innerText = "";
        }
        if ((document.getElementById("r02").style.border == "3px solid red") && (document.getElementById("r02").innerText = t2)) {
            document.getElementById("r02").innerText = "";
        }
        if ((document.getElementById("r03").style.border == "3px solid red") && (document.getElementById("r03").innerText = t2)) {
            document.getElementById("r03").innerText = "";
        }
        if ((document.getElementById("r04").style.border == "3px solid red") && (document.getElementById("r04").innerText = t2)) {
            document.getElementById("r04").innerText = "";
        }
        if ((document.getElementById("r10").style.border == "3px solid red") && (document.getElementById("r10").innerText = t2)) {
            document.getElementById("r10").innerText = "";
        }
        if ((document.getElementById("r11").style.border == "3px solid red") && (document.getElementById("r11").innerText = t2)) {
            document.getElementById("r11").innerText = "";
        }
        if ((document.getElementById("r12").style.border == "3px solid red") && (document.getElementById("r12").innerText = t2)) {
            document.getElementById("r12").innerText = "";
        }
        if ((document.getElementById("r13").style.border == "3px solid red") && (document.getElementById("r13").innerText = t2)) {
            document.getElementById("r13").innerText = "";
        }
        if ((document.getElementById("r14").style.border == "3px solid red") && (document.getElementById("r14").innerText = t2)) {
            document.getElementById("r14").innerText = "";
        }
        if ((document.getElementById("r20").style.border == "3px solid red") && (document.getElementById("r20").innerText = t2)) {
            document.getElementById("r20").innerText = "";
        }
        if ((document.getElementById("r21").style.border == "3px solid red") && (document.getElementById("r21").innerText = t2)) {
            document.getElementById("r21").innerText = "";
        }
        if ((document.getElementById("r22").style.border == "3px solid red") && (document.getElementById("r22").innerText = t2)) {
            document.getElementById("r22").innerText = "";
        }
        if ((document.getElementById("r23").style.border == "3px solid red") && (document.getElementById("r23").innerText = t2)) {
            document.getElementById("r23").innerText = "";
        }
        if ((document.getElementById("r24").style.border == "3px solid red") && (document.getElementById("r24").innerText = t2)) {
            document.getElementById("r24").innerText = "";
        }
        if ((document.getElementById("r30").style.border == "3px solid red") && (document.getElementById("r30").innerText = t2)) {
            document.getElementById("r30").innerText = "";
        }
        if ((document.getElementById("r31").style.border == "3px solid red") && (document.getElementById("r31").innerText = t2)) {
            document.getElementById("r31").innerText = "";
        }
        if ((document.getElementById("r32").style.border == "3px solid red") && (document.getElementById("r32").innerText = t2)) {
            document.getElementById("r32").innerText = "";
        }
        if ((document.getElementById("r33").style.border == "3px solid red") && (document.getElementById("r33").innerText = t2)) {
            document.getElementById("r33").innerText = "";
        }
        if ((document.getElementById("r34").style.border == "3px solid red") && (document.getElementById("r34").innerText = t2)) {
            document.getElementById("r34").innerText = "";
        }
        if ((document.getElementById("r40").style.border == "3px solid red") && (document.getElementById("r40").innerText = t2)) {
            document.getElementById("r40").innerText = "";
        }
        if ((document.getElementById("r41").style.border == "3px solid red") && (document.getElementById("r41").innerText = t2)) {
            document.getElementById("r41").innerText = "";
        }
        if ((document.getElementById("r42").style.border == "3px solid red") && (document.getElementById("r42").innerText = t2)) {
            document.getElementById("r42").innerText = "";
        }
        if ((document.getElementById("r43").style.border == "3px solid red") && (document.getElementById("r43").innerText = t2)) {
            document.getElementById("r43").innerText = "";
        }
        if ((document.getElementById("r44").style.border == "3px solid red") && (document.getElementById("r44").innerText = t2)) {
            document.getElementById("r44").innerText = "";
        }
        if ((document.getElementById("r50").style.border == "3px solid red") && (document.getElementById("r50").innerText = t2)) {
            document.getElementById("r50").innerText = "";
        }
        if ((document.getElementById("r51").style.border == "3px solid red") && (document.getElementById("r51").innerText = t2)) {
            document.getElementById("r51").innerText = "";
        }
        if ((document.getElementById("r52").style.border == "3px solid red") && (document.getElementById("r52").innerText = t2)) {
            document.getElementById("r52").innerText = "";
        }
        if ((document.getElementById("r53").style.border == "3px solid red") && (document.getElementById("r53").innerText = t2)) {
            document.getElementById("r53").innerText = "";
        }
        if ((document.getElementById("r54").style.border == "3px solid red") && (document.getElementById("r54").innerText = t2)) {
            document.getElementById("r54").innerText = "";
        }
    }
}


function QuitarSeleccion1() {
    //Seleccion tabla1
    document.getElementById("t00").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t01").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t02").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t03").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t04").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t10").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t11").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t12").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t13").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t14").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t20").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t21").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t22").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t23").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t24").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t30").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t31").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t32").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t33").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t34").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t40").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t41").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t42").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t43").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t44").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t50").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t51").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t52").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t53").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("t54").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
}
function QuitarSeleccion2() {
    //Seleccion tabla2
    document.getElementById("r00").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r01").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r02").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r03").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r04").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r10").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r11").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r12").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r13").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r14").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r20").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r21").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r22").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r23").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r24").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r30").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r31").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r32").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r33").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r34").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r40").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r41").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r42").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r43").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r44").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r50").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r51").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r52").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r53").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
    document.getElementById("r54").setAttribute("style", "border: 3px solid black; border-image: none; width: 20%; height: 16.7%;");
}