$("#selh1").click(function (event) {
  $("#contenedor").load("selecciones/partido.html");
});

$("#selh3").click(function(event) {
    $("#contenedor").load('selecciones/colombia.html');
});

$("#contac").click(function(event) {
    $("#contenedor").load('contacto.html');
});

var part ="";
$.getJSON('partidos.json', function(datos) {
    $("#contenido").html('');
    $.each(datos["partidos"], function(idx, partido) {
        $("#contenido").append("<tr>" + "<td>" + partido["fecha"] + "</td><td>" + partido["equipo1"] + "</td><td>" + partido.equipo2 + "</td>" + "</tr>");
    })
});
