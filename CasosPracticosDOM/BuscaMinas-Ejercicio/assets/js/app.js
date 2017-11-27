var tableBombIt = [
					" ",
					"*",
					"1",
					" ",
					"/n",
					" ",
					" ",
					"*",
					"2",
					"/n",
					"1",
					"*",
					" ",
					" ",
					"/n",
					" ",
					"3",
					"*",
					" "
];
// hacer un a función que pinte el tablero				];
var containerBombIt = document.getElementById("container-bomb-it");
//area de juego
var bombIt = document.getElementById("bomb-it");
//decirle que va a recibir un arreglo
var drawGameZone = function(array){
	for (i = 0; i< tableBombIt.length; i++ ){
		//por cada uno de estos espacions, crealo
		var cell = document.createElement ("div");
		var enter = document.createElement("br");

		if (array[i] == "1" || array[i] == "2" || array[i] == "3"){
			cell.className = "number";
			cell.innerText = array[i];
			cell.onclick = showNumber;
		} else if(array[i] == " "){
			cell.className = "emptySpace";
			cell.onclick = changeColor;
		} else if (array[i] == "*"){
			cell.className = "bomb";
			cell.onclick
		} else if (array[i] == "/n"){
			bombIt.appendChild(enter);
			continue;
		}
		bombIt.appendChild(cell);
	}
};

var showNumber = function(){
	this.className = "number showNumber";
};

var changeColor = function(){
	this.style.backgroundColor = "#000000"
};

var boom = function(){
	containerBombIt.removeChild(bombIt);
	containerBombIt.innerHTML= "<img src='https://media.giphy.com/media/3osxYCsLd9qgsgqpwI/giphy.gif'>"
	addBtnRestart();
};

var addBtnRestart = function(){
	var btnRestart = document.createElement("button");
	btnRestart.innerText = "Restart!!";
	btnRestart.addEventListener ("click", reStar);
	containerBombIt.appendChild(btnRestart);
};

var reStar = function(){
	location.reload();
}

drawGameZone(tableBombIt);