//Browns Trivia Game JS
//Mark Snodgrass 2017




//Function to hide elements of the trivia game before the user hits start
function hideElements(){
	$(".trivia").toggle();
	$(".navbar").toggle();
	$(".end").toggle();
};

hideElements();


//Counters for scorekeeping
var counters = {
	correct: 0,
	incorrect: 0,
	unanswered: 0,

	updateCorrect: function(){
		this.correct += 1;
	},

	updateIncorrect: function(){
		this.incorrect += 1;
	},

	updateUnanswered: function(){
		this.unanswered += 1;
	}
};

//Array to hold user guesses
var userPicks = [];

//Function to push answers to the array
function getUserGuess(){

	var q1 = document.getElementsByName("radioq1");
	var q2 = document.getElementsByName("radioq2");
	var q3 = document.getElementsByName("radioq3");
	var q4 = document.getElementsByName("radioq4");
	var q5 = document.getElementsByName("radioq5");
	var q6 = document.getElementsByName("radioq6");



	for (var i = 0; i < q1.length; i++) {
	    if(q1[i].checked) {
	    	userPicks.push(q1[i].value);
	    };
	 };

	 for (var i = 0; i < q2.length; i++) {
	    if(q2[i].checked) {
	    	userPicks.push(q1[i].value);
	    };
	 };

	 for (var i = 0; i < q3.length; i++) {
	    if(q3[i].checked) {
	    	userPicks.push(q1[i].value);
	    };
	 };

	 for (var i = 0; i < q4.length; i++) {
	    if(q4[i].checked) {
	    	userPicks.push(q1[i].value);
	    };
	 };

	 for (var i = 0; i < q5.length; i++) {
	    if(q5[i].checked) {
	    	userPicks.push(q1[i].value);
	    };
	 };

	 for (var i = 0; i < q6.length; i++) {
	    if(q6[i].checked) {
	    	userPicks.push(q1[i].value);
	    };
	 };
};


//Function that determines the values in the array to get the final score
function calcScore(){
	for (var i = 0; i < userPicks.length; i++) {
		if(userPicks[i] == "correct"){
			counters.updateCorrect();
		}
		else{
			counters.updateIncorrect();
		}
	};

	if (userPicks.length < 6) {
		counters.unanswered = 6 - userPicks.length;
	}

};




//function to update the score in the HTML
function updateScore(){
	document.getElementById("correct").innerHTML = "Correct Answers: " + counters.correct;
	document.getElementById("incorrect").innerHTML= "Incorrect Answers: " + counters.incorrect;
	document.getElementById("unanswered").innerHTML= "Unanswered: " + counters.unanswered;
};


//Functions for the timer

var number = 20;
var interval = 0;

function stop(){
	clearInterval(interval);
	getUserGuess();
	console.log(userPicks);
	calcScore();
	updateScore();
	$(".trivia").toggle();
	$(".navbar").toggle();
	$(".end").toggle();

};

function decrement(){
	number--;
	$("#time").html("Time Remaining: " + number.toString());
	if (number ===0) {
		stop();
	};
};

function clockRun(){
	interval = setInterval(decrement, 1000);
};

function gameStart(){
		 				
	$(".start").hide();
	$(".trivia").show();
	$(".navbar").show();
	clockRun();
};
 

 //Button Clicks to start and restart the game

$("#startBtn").on("click", function(){
	gameStart();
});


$("#restartBtn").on('click', function(){
	number = 20;
	$("#time").html("Time Remaining: 20")
	$(".end").toggle();
	gameStart();
	$('html,body').scrollTop(0);
});

