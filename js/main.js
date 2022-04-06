/*----- constants -----*/
const cardsArray = [
	{
		name: 'rams',
		image: 'https://i.imgur.com/IIZHuCu.png',
		matched: false
	},
	{
		name: 'cardinals',
		image: 'https://i.imgur.com/0bmV8Nd.png',
		matched: false
	},
	{
		name: 'falcons',
		image: 'https://i.imgur.com/UTr8Bje.png',
		matched: false
	},
	{
		name: 'ravens',
		image: 'https://i.imgur.com/hmxbrTk.png',
		matched: false
	},
	{
		name: 'bills',
		image: 'https://i.imgur.com/5FYTl1Q.png',
		matched: false
	},
	{
		name: 'panthers',
		image: 'https://i.imgur.com/1x4mDFG.png',
		matched: false
	},
	{
		name: 'bears',
		image: 'https://i.imgur.com/YOi6M65.png',
		matched: false
	},
	{
		name: 'bengals',
		image: 'https://i.imgur.com/6pJTksm.png',
		matched: false
	},
	{
		name: 'browns',
		image: 'https://i.imgur.com/SqKqqWf.png',
		matched: false
	},
	{
		name: 'cowboys',
		image: 'https://i.imgur.com/zeq4InO.png',
		matched: false
	},
	{
		name: 'broncos',
		image: 'https://i.imgur.com/qkD7j5W.png',
		matched: false
	},
	{
		name: 'lions',
		image: 'https://i.imgur.com/sde7wXq.png',
		matched: false
	},
	{
		name: 'packers',
		image: 'https://i.imgur.com/hSq69w4.png',
		matched: false
	},
	{
		name: 'texans',
		image: 'https://i.imgur.com/F5xZv41.png',
		matched: false
	},
	{
		name: 'colts',
		image: 'https://i.imgur.com/yMLQ2HE.png',
		matched: false
	},
	{
		name: 'jaguars',
		image: 'https://i.imgur.com/fVIIaOS.png',
		matched: false
	},
	{
		name: 'chiefs',
		image: 'https://i.imgur.com/EpOa7d1.png',
		matched: false
	},
	{
		name: 'chargers',
		image: 'https://i.imgur.com/xubHddO.png',
		matched: false
	},
	{
		name: 'dolphins',
		image: 'https://i.imgur.com/dLSqnWa.png',
		matched: false
	},
	{
		name: 'vikings',
		image: 'https://i.imgur.com/oMBQbJP.png',
		matched: false
	},
	{
		name: 'patriots',
		image: 'https://i.imgur.com/wqzFDuT.png',
		matched: false
	},
	{
		name: 'saints',
		image: 'https://i.imgur.com/5xpcvki.png',
		matched: false
	},
	{
		name: 'giants',
		image: 'https://i.imgur.com/RgadcHD.png',
		matched: false
	},
	{
		name: 'jets',
		image: 'https://i.imgur.com/KCKKJ4y.png',
		matched: false
	},
	{
		name: 'raiders',
		image: 'https://i.imgur.com/Ju1B7sP.png',
		matched: false
	},
	{
		name: 'eagles',
		image: 'https://i.imgur.com/Mc8duo0.png',
		matched: false
	},
	{
		name: 'steelers',
		image: 'https://i.imgur.com/7hAPXgY.png',
		matched: false
	},
	{
		name: '49ers',
		image: 'https://i.imgur.com/ziydVuy.png',
		matched: false
	},
	{
		name: 'seahawks',
		image: 'https://i.imgur.com/spOay6D.png',
		matched: false
	},
	{
		name: 'titans',
		image: 'https://i.imgur.com/5h9XFd1.png',
		matched: false
	},
	{
		name: 'buccaneers',
		image: 'https://i.imgur.com/kTnFPXh.png',
		matched: false
	},
	{
		name: 'commanders',
		image: 'https://i.imgur.com/FT8hxFX.png',
		matched: false
	},
];

const cardBack = 'https://i.imgur.com/9nQTYf1.png';

/*----- app's state (variables) -----*/
let cards;
let firstCard;
let secondCard;
let numBad;
let ignoreClicks;

/*----- cached element references -----*/
const movesEl = document.querySelector('.moves');
const livesEl = document.querySelector('.lives');


/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleChoice);
document.querySelector('.timer').addEventListener('click', handleChoice)

/*----- functions -----*/
init();

function init() {
	cards = getShuffledCards();
	firstCard = null;
	numBad = 0;
	ignoreClicks = false;
	render();
}

function render() {
	cards.forEach(function(card, idx) {
		const imgEl = document.getElementById(idx);
		const src = (card.matched || card === firstCard) ? card.img : cardBack;
		imgEl.src = src;
	});
	movesEl.innerHTML = `${numBad}`;
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

function handleChoice(evt) {
	const cardIdx = parseInt(evt.target.id);
	if (isNaN(cardIdx) || ignoreClicks) return;
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
		if (secondCard.img === firstCard.img) {
			//correct match
			secondCard.matched = firstCard.matched = true
		} else {
			numBad++;
		}
		secondCard = null;
		firstCard = null;
	} else {
		secondCard = card;
		firstCard = card;
	}
	render();
}