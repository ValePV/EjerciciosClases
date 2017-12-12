//contador
var idPin = 0


$(document).ready(function(){

});

function savePin(){
  //rescatar valor deltitulo
  var titulo = $("#tituloInput").val();
  //rescatar valor de la descripcion
  var descripcion = $("#descripcionInput").val();
  //rescatar valor de la url
  var url = $("#urlInput").val();

  $("#pines").append("<div id='pin_" + idPin + "' class='pin col-md-3'>" +
    //Este es el frente
    "<div class='panel panel-success front'>" +
    "<div class='panel-heading'>" +
    "<h3 class='panel-tittle'>" + titulo + "</h3>" +
    "</div>" +
    "<div class='panel-body'>" +
    "<a href='#' class='thumbnail'>" +
    "<img src='" + url + "' alt='...'>" +
    "</a>" +
    "</div>" +
    "<div class='panel-footer'>" + descripcion + "</div> </div>" +
    //este es el panel detrás
    "<div class='rear'>" +
    "</div>" +
    "</div>");
    
};
