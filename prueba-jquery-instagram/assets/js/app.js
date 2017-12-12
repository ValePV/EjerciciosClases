$(document).ready(function(){
  //$('h1').html('<em>Holiii</em>');
  //$('h1').text('<em>Holiii</em>');
  $('h1').wrap('<div></div>');

  $('#btn').click(function(){
    var comentario = $('#comment').val();
    $('#comment').val("");
    var contenedor = $('#cont');
    /*
    * Lo mismo de abajo pero creando elementos uno por uno
    *
    * var newComments = $(document.createElement('div'));
    * newComments.append(comentario);
    * contenedor.append(newComments);
    */
    
    contenedor.append('<div><input type="checkbox">' + '<p>' + comentario + '</p><i class= "fa fa-trash trash"></i><i class = "fa fa-heart heart"></i></div>');
  })
  
  $('#hide').click(function(){
    //$('#show').before('<p>Prueba</p>');
    $('h1').hide();
  })
  $('#show').click(function(){
    //$('#show').before('<p>Prueba</p>');
    $('h1').show();
  })
  //$("#trash").click(function()){
  //	$("#cont").hide("#comment");
  //}
})





/*function add(){
	//tomando el valor 
	// variable para almacenar el comenmtario
	//rescato el valor del ID
	var comment = document.getElementById("comment").value;
	//limpiar el area despues del comentario
	document.getElementById("comment").value = "";
	// creacion del div donde iran los comentarios
	var newComments = document.createElement("div");

	var cont = document.getElementById("cont");

	var check = document.createElement("input");
	check.type = "checkbox";

	var paragraph = document.createElement("p");
	paragraph.classList.add("color");
	//crear un nodo de text.. hijo de paragraph.. y tomo la variable donde estará depositado el comentario
	var nodoText = document.createTextNode(comment);
	//agregarlo dentro de p(padre)
	paragraph.appendChild(nodoText);
	// variable para crear el corazón
	var heart = document.createElement("i");
	//crear clase para corazón
	heart.classList.add("fa","fa-heart", "heart");

	var trash = document.createElement("i");
	//crear clase para trash
	trash.classList.add("fa","fa-trash", "trash");

	newComments.appendChild(check);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(paragraph);
	cont.appendChild(newComments);

	check.addEventListener("click", function(){
		paragraph.classList.toggle("strike-out");
	})

	trash.addEventListener("click", function(){
		cont.removeChild(newComments);
	})

	heart.addEventListener("click", function(){
		heart.classList.toggle("red");
	})
	
}*/