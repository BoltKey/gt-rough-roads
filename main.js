'use strict';



let app = {
	main: function() {
		console.log("main");
		document.getElementById("loading").remove();
		let lang = localStorage.getItem("language") || "en";
		this.currLanguage = cardTexts[lang] || cardTexts.en;
		this.deck = JSON.parse(localStorage.getItem("deck")) || [0, 1, 2, 3, 4, 5, 6];
		this.rondell = JSON.parse(localStorage.getItem("rondell")) || [];
		this.discard = JSON.parse(localStorage.getItem("discard")) || [];
		
		if (!localStorage.getItem("rondell")) {
			document.getElementById("help-text").classList.add("visible");
		}
		
		for (let name of ['draw-button', 'discard-button', 'discard-all-button', 'reshuffle-discard-button', 'help-button']) {
			let button = document.createElement("button");
			button.id = name;
			if (name == 'discard-all-button') {
				button.innerHTML = "Discard all";
			}
			if (name == 'reshuffle-discard-button') {
				button.innerHTML = "Reshuffle discard";
			}
			if (name == 'help-button') {
				button.innerHTML = "?";
				document.getElementById("top-bar").appendChild(button);
			}
			else {
				document.getElementById("card-area").appendChild(button);
			}
		}
		
		document.getElementById("draw-button").addEventListener("click", function(e) {this.drawCard()}.bind(this), this);
		document.getElementById("discard-button").addEventListener("click", function(e) {this.discardClick()}.bind(this));
		document.getElementById("discard-all-button").addEventListener("click", function(e) {this.discardAllClick()}.bind(this));
		document.getElementById("reshuffle-discard-button").addEventListener("click", function(e) {this.reshuffleDiscard()}.bind(this));
		document.getElementById("help-button").addEventListener("click", function(e) {document.getElementById("help-text").classList.toggle("visible")});
		document.getElementById("help-text").addEventListener("click", function(e) {document.getElementById("help-text").classList.remove("visible")} );
		
		
		
		window.addEventListener('resize', function(e) {this.resizeWindow()}.bind(this));
		
		this.resizeWindow();
		this.updateRondell();
	},

	createCard: function(id, headerText, paragraphText) {
		let oldCard;
		if (oldCard = document.getElementById("card-" + id)) {
			oldCard.remove();
		}
		let cardWrap = document.createElement("div");
		if (id != "back") {
			headerText = this.currLanguage[id][0];
			paragraphText = this.currLanguage[id][1];
			cardWrap.id = "card-" + id;
		}
		cardWrap.classList.add("card-wrap");
		
		let rotateWrap = document.createElement("div");
		rotateWrap.classList.add("rotate-wrap");
		
		let front = document.createElement("div");
		front.classList.add("card-front");
		let header = document.createElement("h2");
		header.innerHTML = headerText;
		let image = document.createElement("div");
		image.classList.add("card-image");
		let body = document.createElement("p");
		body.innerHTML = paragraphText;
		
		front.appendChild(header);
		front.appendChild(image);
		front.appendChild(body);
		
		let back = document.createElement("div");
		back.classList.add("card-back");
		
		rotateWrap.appendChild(front);
		rotateWrap.appendChild(back);
		
		cardWrap.appendChild(rotateWrap);
		cardWrap.addEventListener("click", function(e) {this.cardClick(e)}.bind(this));
		
		cardWrap.dataset.id = id;
		return cardWrap;
	},
	
	

	saveState: function() {
		localStorage.setItem("deck", JSON.stringify(this.deck));
		localStorage.setItem("rondell", JSON.stringify(this.rondell));
		localStorage.setItem("discard", JSON.stringify(this.discard));
	},
	shuffle: function(a) {
		//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
		let currentIndex = a.length, randomIndex;
		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[a[currentIndex], a[randomIndex]] = [
			a[randomIndex], a[currentIndex]];
		}
		this.saveState();
		return a;
	},
	updateRondell: function() {
		
		let cardWidth = 300;
		let scaleFactor = Math.min(window.innerHeight * .6, window.innerWidth) / cardWidth * .8;
		let drawButton = document.getElementById("draw-button");
		let discardButton = document.getElementById("discard-button");
		let discardAllButton = document.getElementById("discard-all-button");
		drawButton.classList.remove("small");
		drawButton.style.top = "40%";
		
		drawButton.style.width = 
			drawButton.style.height = 30 + scaleFactor * 21;
		discardButton.style.width = 
			discardButton.style.height = 20 + scaleFactor * 14;
		//discardAllButton.style.top = "80%";
		
		discardButton.classList.add("hidden");
		discardAllButton.classList.add("hidden");
		if (this.rondell.length) {
			discardButton.classList.remove("hidden");
		}
		if (this.rondell.length > 1) {
			discardAllButton.classList.remove("hidden");
		}
		
		//discardAllButton.style.top = (63.5 + scaleFactor * 12) + "%";
		
		for (let i in this.rondell) {
			drawButton.style.top = (40 + 
				scaleFactor * 6 + 
				Math.min(this.rondell.length, 5) * 1) + "%";
			drawButton.style.width = 
				drawButton.style.height = (30 + scaleFactor * 17) * 0.7;
			let card = this.rondell[i];
			let cardDiv = document.querySelector("#card-" + card);
			if (!cardDiv) {
				cardDiv = this.createCard(card);
				document.getElementById("card-area").appendChild(cardDiv);
			}
			if (i == 0) {
				cardDiv.style.left = "50%";
				cardDiv.style.top = (20 + scaleFactor * 4) + "%";
				cardDiv.style.transform = "translate(-50%, -50%) scale(" + scaleFactor * 1.2 + ")";
				/*let rect = cardDiv.getBoundingClientRect();
				document.getElementById("discard-button").style.left = rect.right;
				document.getElementById("discard-button").style.top = rect.top;*/
			}
			else {
				let scaleMult = [0, 0, 1, 0.8, 0.6][this.rondell.length] || 0.5;
				if (this.rondell.length == 2) {
					scaleMult = 1;
				}
				if (this.rondell.length == 3) {
					scaleMult = 0.8;
				}
				cardDiv.style.transform = "translate(-50%, -50%) scale(" + (scaleFactor * scaleMult) + ")";
				let ratio;
				if (this.rondell.length == 2) {
					ratio = 0.5
				}
				else {
					ratio = (i-1) / (this.rondell.length - 2);
				}
				if (this.rondell.length == 3) {
					ratio += 0.1 * (ratio < 0.5 ? 1 : -1);
				}
				cardDiv.style.left = (22 + ratio * 56) + "%";
				cardDiv.style.top = (60 - Math.pow(Math.abs(0.5 - ratio) * 5, 2) + scaleFactor * 8) + "%";
				cardDiv.style.zIndex = 100 - i;
			}
		}
		
		document.getElementById("draw-number").innerHTML = this.deck.length;
		document.getElementById("discard-number").innerHTML = this.discard.length;
	},
	cardClick: function(evt) {
		document.getElementById("help-text").classList.remove("visible");
		let cardId = +evt.target.dataset.id;
		console.log("click card", cardId);
		let cardIndex = this.rondell.indexOf(cardId);
		this.rondell[cardIndex] = this.rondell[0];
		this.rondell[0] = cardId;
		this.updateRondell();
		this.saveState();
	},
	drawCard: function(evt) {
		document.getElementById("help-text").classList.remove("visible");
		if (this.deck.length == 0) {
			this.reshuffleDiscard();
			if (this.deck.length) {
				window.setTimeout(this.drawCard.bind(this), 800);
			}
			return;
		}
		if (this.deck.length == 0) {
			return;
		}
		this.shuffle(this.deck);
		
		let nextId = this.deck.shift();
		
		console.log("Draw card", nextId);
		
		this.rondell.unshift(nextId);
		
		let cardDiv = this.createCard(nextId);
		cardDiv.style.transform = "translate(-50%, -50%) scale(0.3)";
		cardDiv.style.opacity = "0";
		cardDiv.classList.add("flipped");
		cardDiv.style.top = "10%";
		cardDiv.style.left = "10%";
		document.getElementById("card-area").appendChild(cardDiv);
		window.setTimeout(function(thisArg) {
			cardDiv.style.transform = "translate(-50%, -50%)";
			cardDiv.style.opacity = "1";
			thisArg.updateRondell();
		}, 0, this);
		window.setTimeout(function() {
			cardDiv.classList.remove("flipped");
		}, 800);
		this.saveState();
	},
	discardClick: function(evt) {
		if (this.rondell.length == 0) {
			return;
		}
		let cardId = this.rondell.shift();
		this.discard.push(cardId);
		let cardDiv = document.getElementById("card-" + cardId);
		
		cardDiv.style.opacity = 0;
		cardDiv.style.top = "100%";
		cardDiv.style.left = "0%";
		window.setTimeout(function() {cardDiv.remove();}, 500);
		this.updateRondell();
		this.saveState();
	},
	discardAllClick: function(evt) {
		for (let c of this.rondell) {
			let cardDiv = document.getElementById("card-" + c);
			window.setTimeout(function() {
				cardDiv.style.opacity = 0;
				cardDiv.style.top = "100%";
				cardDiv.style.left = "0%";
			}, Math.random() * 300);
			window.setTimeout(function() {cardDiv.remove();}, 600);
			this.discard.push(c);
		}
		this.rondell = [];
		this.updateRondell();
		this.saveState();
	},
	reshuffleDiscard: function() {
		for (let i in this.discard) {
			let app = this;
			window.setTimeout(function() {
				app.makeReshuffleCard(i);
			}, i * 100 + Math.random() * 70);
			
		}
		this.deck = this.deck.concat(this.discard);
		this.discard = [];
		this.shuffle(this.deck);
		
		this.updateRondell();
	},
	makeReshuffleCard: function() {
		let card = this.createCard("back", 0, 0);
		card.id = "";
		card.dataset.id = "";
		card.style.zIndex = -5;
		card.style.pointerEvents = "none";
		card.classList.add("flipped");
		let discard = document.getElementById("discard-number");
		document.getElementById("card-area").appendChild(card);
		card.style.top = "80%";
		card.style.left = 0;
		card.style.opacity = 0;
		window.setTimeout(function() {
			card.style.top = "5%";
			card.style.opacity = 1;
		}, 100);
		window.setTimeout(function() {
			card.style.opacity = 0;
		}, 600);
	},
	resizeWindow: function(evt) {
		this.updateRondell();
		let aspect = window.innerWidth / window.innerHeight;
		let cutoff = 1.333;
		if (aspect > cutoff) {
			document.body.style.width = window.innerHeight * cutoff + "px";
		}
		else {
			document.body.style.width = "";
		}
	}
}
window.onload = function() {app.main()};