/*----- constants -----*/
const cardsArray = [
	{
		name: 'rams',
		img: 'https://i.imgur.com/IIZHuCu.png',
		matched: false
	},
	{
		name: 'cardinals',
		img: 'https://i.imgur.com/0bmV8Nd.png',
		matched: false
	},
	{
		name: 'falcons',
		img: 'https://i.imgur.com/UTr8Bje.png',
		matched: false
	},
	{
		name: 'ravens',
		img: 'https://i.imgur.com/hmxbrTk.png',
		matched: false
	},
	{
		name: 'bills',
		img: 'https://i.imgur.com/5FYTl1Q.png',
		matched: false
	},
	{
		name: 'panthers',
		img: 'https://i.imgur.com/1x4mDFG.png',
		matched: false
	},
	{
		name: 'bears',
		img: 'https://i.imgur.com/YOi6M65.png',
		matched: false
	},
	{
		name: 'bengals',
		img: 'https://i.imgur.com/6pJTksm.png',
		matched: false
	},
	{
		name: 'browns',
		img: 'https://i.imgur.com/SqKqqWf.png',
		matched: false
	},
	{
		name: 'cowboys',
		img: 'https://i.imgur.com/zeq4InO.png',
		matched: false
	},
	{
		name: 'broncos',
		img: 'https://i.imgur.com/qkD7j5W.png',
		matched: false
	},
	{
		name: 'lions',
		img: 'https://i.imgur.com/sde7wXq.png',
		matched: false
	},
	{
		name: 'packers',
		img: 'https://i.imgur.com/hSq69w4.png',
		matched: false
	},
	{
		name: 'texans',
		img: 'https://i.imgur.com/F5xZv41.png',
		matched: false
	},
	{
		name: 'colts',
		img: 'https://i.imgur.com/yMLQ2HE.png',
		matched: false
	},
	{
		name: 'jaguars',
		img: 'https://i.imgur.com/fVIIaOS.png',
		matched: false
	},
	{
		name: 'chiefs',
		img: 'https://i.imgur.com/EpOa7d1.png',
		matched: false
	},
	{
		name: 'chargers',
		img: 'https://i.imgur.com/xubHddO.png',
		matched: false
	},
	{
		name: 'dolphins',
		img: 'https://i.imgur.com/dLSqnWa.png',
		matched: false
	},
	{
		name: 'vikings',
		img: 'https://i.imgur.com/oMBQbJP.png',
		matched: false
	},
	{
		name: 'patriots',
		img: 'https://i.imgur.com/wqzFDuT.png',
		matched: false
	},
	{
		name: 'saints',
		img: 'https://i.imgur.com/5xpcvki.png',
		matched: false
	},
	{
		name: 'giants',
		img: 'https://i.imgur.com/RgadcHD.png',
		matched: false
	},
	{
		name: 'jets',
		img: 'https://i.imgur.com/KCKKJ4y.png',
		matched: false
	},
	{
		name: 'raiders',
		img: 'https://i.imgur.com/Ju1B7sP.png',
		matched: false
	},
	{
		name: 'eagles',
		img: 'https://i.imgur.com/Mc8duo0.png',
		matched: false
	},
	{
		name: 'steelers',
		img: 'https://i.imgur.com/7hAPXgY.png',
		matched: false
	},
	{
		name: '49ers',
		img: 'https://i.imgur.com/ziydVuy.png',
		matched: false
	},
	{
		name: 'seahawks',
		img: 'https://i.imgur.com/spOay6D.png',
		matched: false
	},
	{
		name: 'titans',
		img: 'https://i.imgur.com/5h9XFd1.png',
		matched: false
	},
	{
		name: 'buccaneers',
		img: 'https://i.imgur.com/kTnFPXh.png',
		matched: false
	},
	{
		name: 'commanders',
		img: 'https://i.imgur.com/FT8hxFX.png',
		matched: false
	},
];

const cardBack = 'https://i.imgur.com/ut9htoZ.png';

/*----- app's state (variables) -----*/
let cards;  // Array of 64 shuffled card objects
let firstCard;  // First card clicked (card object) or null
let secondCard;  // Second card clicked (card object) if matches first card or not
let numBad;  // Number of moves made
let livesCounter;  // 3 Lives = Number of moves made (numBad)
let stopWatch;  // Clock Timer to track how fast you win or fail the game
let ignoreClicks;  // Clicking anything than the cards itself
let gameStatus;  // Displays 'Winner' or 'Loser'; null -> game in progress
let restart;  // Resets the array of 64 shuffled cards

/*----- cached element references -----*/
const movesEl = document.querySelector('.moves');
const livesEl = document.querySelector('.lives');
const msgEl = document.querySelector('h2');
const timerEl = document.querySelector('.stopwatch');

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleChoice);
document.querySelector('button').addEventListener('click', init);
document.querySelector('.stopwatch').addEventListener('load', handleChoice);

/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
	cards = getShuffledCards();
	firstCard = null;
	secondCard = null;
	numBad = 0;
	livesCounter = livesEl.innerHTML = '3';
	ignoreClicks = false;
	gameStatus = null;
	
	render();
}

function render() {
	cards.forEach(function(card, idx) {
		const imgEl = document.getElementById(idx);
		const src = (card.matched || card === firstCard) ? card.img : cardBack;
		imgEl.src = src;
	});
	movesEl.innerHTML = `${numBad}`;

	renderMsg();
}

function renderMsg() {
	if (gameStatus === "WINNER") {
		msgEl.innerText = "WINNER! YOU'RE GOING TO DISNEY WORLD!";
	} else if (gameStatus === "LOSER") {
		msgEl.innerText = "LOSER! Maybe you'll meet Mickey Mouse next year...";
	}
}

function getShuffledCards() {
	let tempCards = [];
	let cards = [];
	for (let card of cardsArray) {
		tempCards.push({ ...card }, { ...card });
	}
	while (tempCards.length) {
		let rndIdx = Math.floor(Math.random() * tempCards.length);
		let card = tempCards.splice(rndIdx, 1)[0];
		cards.push(card);
	}
	return cards;
}

// Update all impacted state, then call render()
function handleChoice(evt) {
	const cardIdx = parseInt(evt.target.id);
	if (isNaN(cardIdx) || ignoreClicks || gameStatus) return;
	const card = cards[cardIdx];
	if (firstCard) {
		if (firstCard.img === card.img) {
			// correct match
			firstCard.matched = card.matched = true
		} else {
			numBad++;
		}
		firstCard = null;
	} else {
		firstCard = card;
	}
	if (secondCard) {
		if (secondCard.img === card.img) {
			secondCard.matched = card.matched = true
		} else {
			numBad++;
		}
		firstCard = card;
		secondCard = card;
	} else {
		firstCard = card;
	}

	// Let certain number of moves effect the lives counter
	if (livesCounter) {
		if (numBad === 50) {
			livesEl.innerHTML = '2';
		} else if (numBad === 100) {
			livesEl.innerHTML = '1';
		} else if (numBad === 200) {
			livesEl.innerHTML = '0';
		}
	}

	gameStatus = checkForWinner();
	render();
}

function checkForWinner() {
	if (cards === cards.length) return 'WINNER';
	if (livesEl.innerHTML === '0') return 'LOSER';
	return null;
}