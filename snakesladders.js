var pos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var movers = [document.getElementById("p0"), document.getElementById("p1"), 
			  document.getElementById("p2"), document.getElementById("p3"),
			  document.getElementById("p4"), document.getElementById("p5"), 
			  document.getElementById("p6"), document.getElementById("p7"),
			  document.getElementById("p8"), document.getElementById("p9")];
var turn = 0;
var numplayers = 1;
function movePlayer() {
	var curMover = movers[turn];
	var lsquares = (pos[turn] - 1) % 10;
	var tsquares = Math.floor((pos[turn] - 1) / 10);
	if ((tsquares % 2) == 1) {
		lsquares = 9 - lsquares;
	}
	var newTop = 0;
	var newLeft = 0;

	// Assigns the proper left value
	if (lsquares == 0) {
		newLeft = 27;
	} else if (lsquares == 1) {
		newLeft = 72;
	} else if (lsquares == 2) {
		newLeft = 117;
	} else if (lsquares == 3) {
		newLeft = 163;
	} else if (lsquares == 4) {
		newLeft = 208;
	} else if (lsquares == 5) {
		newLeft = 254;
	} else if (lsquares == 6) {
		newLeft = 299;
	} else if (lsquares == 7) {
		newLeft = 345;
	} else if (lsquares == 8) {
		newLeft = 390;
	} else {
		newLeft = 435;
	}

	// Assigns the proper top value
	if (tsquares == 0) {
		newTop = 566;
	} else if (tsquares == 1) {
		newTop = 521;
	} else if (tsquares == 2) {
		newTop = 476;
	} else if (tsquares == 3) {
		newTop = 430;
	} else if (tsquares == 4) {
		newTop = 385;
	} else if (tsquares == 5) {
		newTop = 339;
	} else if (tsquares == 6) {
		newTop = 294;
	} else if (tsquares == 7) {
		newTop = 248;
	} else if (tsquares == 8) {
		newTop = 203;
	} else {
		newTop = 158;
	}

	curMover.style.top = newTop + "px";
	curMover.style.left = newLeft + "px";
}
function addSquares(numsquares) {
	pos[turn] += numsquares;

	// Determines if a player won:
	if (pos[turn] > 100) {
		pos[turn] = 200 - pos[turn];
	} else if (pos[turn] == 100) {
		alert("Congrats! Player " + turn + " won!");
		document.getElementById("rollBtn").disabled = true;
		document.getElementById("plusBtn").disabled = false;
		document.getElementById("minBtn").disabled = false;
	}
	// Ladders:
	if (pos[turn] == 1) {
		pos[turn] = 38;
		alert("Congrats! The ladder took you to square 38!")
	} else if (pos[turn] == 4) {
		pos[turn] = 14;
		alert("Congrats! The ladder took you to square 14!")
	} else if (pos[turn] == 8) {
		pos[turn] = 30;
		alert("Congrats! The ladder took you to square 30!")
	} else if (pos[turn] == 21) {
		pos[turn] = 42;
		alert("Congrats! The ladder took you to square 42!")
	} else if (pos[turn] == 28) {
		pos[turn] = 76;
		alert("Congrats! The ladder took you to square 76!")
	} else if (pos[turn] == 50) {
		pos[turn] = 67;
		alert("Congrats! The ladder took you to square 67!")
	} else if (pos[turn] == 71) {
		pos[turn] = 92;
		alert("Congrats! The ladder took you to square 92!")
	} else if (pos[turn] == 80) {
		pos[turn] = 99;
		alert("Congrats! The ladder took you to square 99!")
	} 

	// Snakes:
	else if (pos[turn] == 32) {
		pos[turn] = 10;
		alert("Oh no! The snake took you to square 10.")
	} else if (pos[turn] == 36) {
		pos[turn] = 6;
		alert("Oh no! The snake took you to square 6.")
	} else if (pos[turn] == 48) {
		pos[turn] = 26;
		alert("Oh no! The snake took you to square 26.")
	} else if (pos[turn] == 62) {
		pos[turn] = 18;
		alert("Oh no! The snake took you to square 18.")
	} else if (pos[turn] == 88) {
		pos[turn] = 24;
		alert("Oh no! The snake took you to square 24.")
	} else if (pos[turn] == 95) {
		pos[turn] = 56;
		alert("Oh no! The snake took you to square 56.")
	} else if (pos[turn] == 97) {
		pos[turn] = 78;
		alert("Oh no! The snake took you to square 78.")
	} else if (pos[turn] == 93) {
		pos[turn] = 2;
		alert("Oh no! You got the legendary hidden snake! You got sent back to square 2. That's a yike.")
	}
	
	movePlayer();
	++turn;
	if (turn == numplayers) {
		turn = 0;
	}
}
function roll() {
	var randnum = Math.random();
	randnum *= 100;
	randnum %= 6;
	randnum = Math.floor(randnum) + 1;
	document.getElementById("rollTxt").innerHTML = randnum;
	addSquares(randnum);
}
function reset() {
	document.getElementById("plusBtn").disabled = true;
	document.getElementById("minBtn").disabled = true;
	for (var i = 0; i < pos.length; i++) {
		pos[i] = 0;
		if (i == 0) {
			movers[i].style.left = "27px";
		} else if (i == 1) {
			movers[i].style.left = "72px";
		} else if (i == 2) {
			movers[i].style.left = "117px";
		} else if (i == 3) {
			movers[i].style.left = "163px";
		} else if (i == 4) {
			movers[i].style.left = "208px";
		} else if (i == 5) {
			movers[i].style.left = "254px";
		} else if (i == 6) {
			movers[i].style.left = "299px";
		} else if (i == 7) {
			movers[i].style.left = "345px";
		} else if (i == 8) {
			movers[i].style.left = "390px";
		} else {
			movers[i].style.left = "435px";
		}
		movers[i].style.top = "633px";
	}
	document.getElementById("rollBtn").disabled = false;
}
function addPlayer() {
	if (numplayers == 1) {
		movers[1].style.backgroundColor = "#00FF00";
	} else if (numplayers == 2) {
		movers[2].style.backgroundColor = "#388BFF";
	} else if (numplayers == 3) {
		movers[3].style.backgroundColor = "#9F38FF";
	} else if (numplayers == 4) {
		movers[4].style.backgroundColor = "#FCDC49";
	} else if (numplayers == 5) {
		movers[5].style.backgroundColor = "#6A38FF";
	} else if (numplayers == 6) {
		movers[6].style.backgroundColor = "#00FFFF";
	} else if (numplayers == 7) {
		movers[7].style.backgroundColor = "#FFA142";
	} else if (numplayers == 8) {
		movers[8].style.backgroundColor = "#8C8C8C";
	} else if (numplayers == 9) {
		movers[9].style.backgroundColor = "#000000";
		var leftChange = parseInt(document.getElementById("plrNumTxt").style.left);
		leftChange -= 25;
		document.getElementById("plrNumTxt").style.left = leftChange + "px";
	} else if (numplayers == 10) {
		alert("ERROR: Cannot have more than 10 player(s)")
		return;
	}
	++numplayers
	document.getElementById("plrNumTxt").innerHTML = numplayers;
}
function remPlayer() {
	--numplayers;
	if (numplayers == 0) {
		numplayers = 1;
		alert("ERROR: Cannot have less than 1 player(s)")
		return;
	} else if (numplayers == 9) {
		var leftChange = parseInt(document.getElementById("plrNumTxt").style.left);
		leftChange += 25;
		document.getElementById("plrNumTxt").style.left = leftChange + "px";
	}
	movers[numplayers].style.backgroundColor = "#FFFFFF";
	document.getElementById("plrNumTxt").innerHTML = numplayers;
}
function cheat() {
	var tempTurn = turn;
	var plrToCheat = prompt("Please enter a player number");
	var sqrToMove = parseInt(prompt("Please enter a square to move to"));
	if (plrToCheat >= numplayers) {
		alert("ERROR: Invalid player");
		return;
	}
	pos[plrToCheat] = sqrToMove;
	turn = plrToCheat;
	movePlayer();
	turn = tempTurn;
}