var numberOfSquares = 6;
var colors = []; 
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setupModeBtn();

	//menampilkan warna pada kotak
	setupSquares();

	reset();
}


function setupModeBtn(){
		//mode buttons event listeners
	for (var i = 0; i < modeBtn.length; i++){
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			
			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;

			//make disabled after one clicked  
			if (this.textContent === "Easy"){
				modeBtn[0].disabled = true;
				modeBtn[1].disabled = false;
			}else{
				modeBtn[0].disabled = false;
				modeBtn[1].disabled = true;
			}
			
			reset();
		});
	}
}



function setupSquares(){
		//menampilkan warna pada kotak
	for (var i = 0; i < squares.length; i++){
		//add event listener when clicked
		squares[i].addEventListener("click", function(){
			//get the color selected
			var selectedColor = this.style.backgroundColor;

			if (selectedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(selectedColor);
				h1.style.backgroundColor = selectedColor;
				resetBtn.textContent = "Play Again?";
			}else {
				this.style.backgroundColor = "black";
				messageDisplay.textContent = "Try Again";
			}

		});

	}
}



function reset(){
	//generate all new colors
	colors = generateColors(numberOfSquares);
	//pick a new random colors from array
	pickedColor = pickColor();
	//display pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors squares
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
	//reset message
	messageDisplay.textContent = "";
	//h1 default
	h1.style.backgroundColor = "steelblue";

	resetBtn.textContent = "New Colors!";
}



//when new Color clicked
resetBtn.addEventListener("click", function(){
	reset();	
});



// if correct change all color
function changeColors(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}



//fungsi untuk memilih warna random
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}



function generateColors(num){
	//make array
	var arr = [];

	//add num random colors to array
	for (var i = 0; i < num; i++){
		//get random color and push
		arr.push(randomColor());
	}

	//return array
	return arr;
}



//untuk generate random color RGB channel
function randomColor(){
	return ("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " 
		+ Math.floor(Math.random() * 256) + ")");
}


//easybtn clicked
// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");

// 	//generate color
// 	numberOfSquares = 3;
// 	colors = generateColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i< squares.length; i++){
// 		if (colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else {
// 			squares[i].style.display = "none";
// 		}
// 	}

// 	//change text button on the left
// 	resetBtn.textContent = "New Colors!";
// });

// //hardbtn clicked
// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");

// 	//generate color
// 	numberOfSquares = 6;
// 	colors = generateColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i< squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}

// 	//change text button on the left
// 	resetBtn.textContent = "New Colors!";
// });