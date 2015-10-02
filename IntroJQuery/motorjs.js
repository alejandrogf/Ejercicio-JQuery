var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno";

function procesarJSON(resultado) {
    var r = "";
    for (var i = 0; i < resultado.length; i++) {
        r += resultado[i].nombre + "<br />";
    }
    $("#resultado").html(r);
};



function conGet(e) {

    //Se pasa preventDefault para que no funcione como un link y actue conforme
    //hemos definido  aquí.
    e.preventDefault();

    // $.get sustituye a todas las lineas de ajax.httprequest, onreadystatus,etc.
    //Se tiene que pasar la url de donde obtener los datos y luego la función que
    //procesará la información recibida.

    //Opción de hacerlo definiendo directamente la función ya que sólo se usará
    //una vez
    //$.get(url, function(resultado) {
    //    var r = "";
    //    for (var i = 0; i < resultado.LENGTH; i++) {
    //        r += resultado[i].nombre + "<br />";
    //    }
    //    $("#resultado").html(r);
    //});

    //Otra opción, teniendo definida "fuera" la función para que sea mas claro
    $.get(url, procesarJSON);
};

function conGetJSON(e) {

    e.preventDefault();
    $.getJSON(url, procesarJSON);

}

function conPost(e) {

    e.preventDefault();
    var objeto = {
        nombre: "Alex",
        apellidos: "Martín",
        edad: 22,
        nota: 4
    };

    $.post(url, JSON.stringify(objeto), function(res) {
        console.log(res);
    });

}
//onLoad devuelve el contenido de la url en la capa que se le indica.
function onLoad(e) {

    e.preventDefault();
    $("#resultado").load(url);

}

function conAJAX(e) {

    e.preventDefault();
    var objeto = {
        nombre: "Alex",
        apellidos: "Martín",
        edad: 22,
        nota: 4
    };
    $.ajax({
        method: "post",
        url: url,
        success: function(res) { console.log(res); },
        error: function(error) { console.log(error); },
        data: JSON.stringify(objeto),
        dataType: "json",
        headers: { "Content-Type":"application/json" }
    });
}

$(document).ready(function() {
    $("#linkGet").click(conGet);
    $("#linkPost").click(conPost);
    $("#linkAJAX").click(conAJAX);
    $("#linkGetJson").click(conGetJSON);
    $("#load").click(onLoad);

});