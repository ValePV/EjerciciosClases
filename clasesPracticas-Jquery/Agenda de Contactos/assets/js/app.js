
$(document).ready(function(){

});

function add(){
	// rescatando nombre
	var contName = $("#nameInput").val();
  
  //rescatando apellido
  var contLastname = $("#lastnameInput").val();
  //rescatando el numero de telefono
  var contPhone = $("#phoneInput").val();
  //rescatando el correo electronico
  var contEmail = $("#emailInput").val();

  //agregarlo al contenedor de contactos
  $("#conta-contact").append("<div class='col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3'>"+
    "<div class='row second-content-contact panel panel-default'>" +
    "<div class='col-sm-3 col-md-3'>" +
    "<img class='user' id='contUser' src='assets/images/user.png'>" +
    "</div>" +
    "<div class='col-sm-7 col-md-7'>" +
    "<div class='page-header'>" +
    "<h4>" + contLastname + "<small>" + contName + "</small></h4>" +
    "</div>" +
    "<p>" + contPhone + "</p>" +
    "<p>" + contEmail + "</p>" +
    "</div>" +
    "<div class='col-sm-1 col-md-1'>"+
    "<ul>" + 
    "<li><a><i class='fa fa-trash' aria-hidden='true'></i></a></li>" +
    "<li><a><i class='fa fa-pencil' aria-hidden='true'></i></a></li>" +
    "</ul>" +
    "</div>" + "</div>" + "</div>"
    )

    $(".fa-trash").click(function(){
      $(this).parent().parent().parent().parent().parent().remove();
    });
   
};
    

            
         
        