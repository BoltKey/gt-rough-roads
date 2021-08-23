'use strict';



let app = {
	main: function() {
		console.log("main");
		let lang = localStorage.getItem("language") || "en";
		this.currLanguage = cardTexts[lang] || cardTexts.en;
		this.deck = JSON.parse(localStorage.getItem("deck")) || [0, 1, 2, 3, 4, 5, 6];
		this.rondell = JSON.parse(localStorage.getItem("rondell")) || [];
		this.discard = JSON.parse(localStorage.getItem("discard")) || [];
		
		document.getElementById("draw-button").addEventListener("click", function(e) {this.drawCard()}.bind(this), this);
		document.getElementById("discard-button").addEventListener("click", function(e) {this.discardClick()}.bind(this));
		document.getElementById("discard-all-button").addEventListener("click", function(e) {this.discardAllClick()}.bind(this));
		document.getElementById("reshuffle-discard-button").addEventListener("click", function(e) {this.reshuffleAll()}.bind(this));
		document.getElementById("help-button").addEventListener("click", function(e) {document.getElementById("help-text").classList.toggle("visible")});
		
		window.addEventListener('resize', function(e) {this.resizeWindow()}.bind(this));
		
		this.updateRondell();
	},

	createCard: function(id, headerText, paragraphText) {
		let oldCard;
		if (oldCard = document.getElementById("card-" + id)) {
			oldCard.remove();
		}
		headerText = this.currLanguage[id][0];
		paragraphText = this.currLanguage[id][1];
		let cardWrap = document.createElement("div");
		cardWrap.id = "card-" + id;
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
	
	reshuffleDiscard: function() {
		this.deck = this.discard;
		this.discard = [];
		this.shuffle(this.deck);
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
		let scaleFactor = Math.min(window.innerHeight * .8, window.innerWidth) / cardWidth * .8;
		let drawButton = document.getElementById("draw-button");
		let discardButton = document.getElementById("discard-button");
		drawButton.classList.remove("small");
		drawButton.style.top = "20%";
		
		drawButton.style.width = 
			drawButton.style.height = 
			discardButton.style.width = 
			discardButton.style.height = 20 + scaleFactor * 14;
		
		discardButton.classList.add("hidden");
		for (let i in this.rondell) {
			discardButton.classList.remove("hidden");
			
			drawButton.style.top = (30 + scaleFactor * 10) + "%";
			let card = this.rondell[i];
			let cardDiv = document.querySelector("#card-" + card);
			if (!cardDiv) {
				cardDiv = this.createCard(card);
				document.body.appendChild(cardDiv);
			}
			if (i == 0) {
				cardDiv.style.left = "50%";
				cardDiv.style.top = (20 + scaleFactor * 4) + "%";
				cardDiv.style.transform = "translate(-50%, -50%) scale(" + scaleFactor + ")";
			}
			else {
				cardDiv.style.transform = "translate(-50%, -50%) scale(" + (scaleFactor * .5) + ")";
				let ratio;
				if (this.rondell.length == 2) {
					ratio = 0.5
				}
				else {
					ratio = (i-1) / (this.rondell.length - 2);
				}
				cardDiv.style.left = (22 + ratio * 56) + "%";
				cardDiv.style.top = (40 - Math.pow(Math.abs(0.5 - ratio) * 5, 2) + scaleFactor * 15) + "%";
				cardDiv.style.zIndex = 100 - i;
			}
		}
	},
	cardClick: function(evt) {
		let cardId = +evt.target.dataset.id;
		console.log("click card", cardId);
		let cardIndex = this.rondell.indexOf(cardId);
		this.rondell[cardIndex] = this.rondell[0];
		this.rondell[0] = cardId;
		this.updateRondell();
		this.saveState();
	},
	drawCard: function(evt) {
		if (this.deck.length == 0) {
			this.reshuffleDiscard();
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
		document.body.append(cardDiv);
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
			}, Math.random() * 300);
			window.setTimeout(function() {cardDiv.remove();}, 600);
			this.discard.push(c);
		}
		this.rondell = [];
		this.updateRondell();
		this.saveState();
	},
	resizeWindow: function(evt) {
		this.updateRondell();
	}
}
window.onload = function() {app.main()};