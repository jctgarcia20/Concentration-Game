/*----- constants -----*/
const cardsArray = [
	{
		name: 'rams',
		image: 'imgs/los-angeles-rams-2020-logo-300x300.png'
	},
	{
		name: 'rams',
		image: 'imgs/los-angeles-rams-2020-logo-300x300.png'
	},
	{
		name: 'cardinals',
		image: 'imgs/nfl-arizona-cardinals-team-logo-2-300x300.png'
	},
	{
		name: 'cardinals',
		image: 'imgs/nfl-arizona-cardinals-team-logo-2-300x300.png'
	},
	{
		name: 'falcons',
		image: 'imgs/nfl-atlanta-falcons-team-logo-2-300x300.png'
	},
	{
		name: 'falcons',
		image: 'imgs/nfl-atlanta-falcons-team-logo-2-300x300.png'
	},
	{
		name: 'ravens',
		image: 'imgs/nfl-baltimore-ravens-team-logo-2-300x300.png'
	},
	{
		name: 'ravens',
		image: 'imgs/nfl-baltimore-ravens-team-logo-2-300x300.png'
	},
	{
		name: 'bills',
		image: 'imgs/nfl-buffalo-bills-team-logo-2-300x300.png'
	},
	{
		name: 'bills',
		image: 'imgs/nfl-buffalo-bills-team-logo-2-300x300.png'
	},
	{
		name: 'panthers',
		image: 'imgs/nfl-carolina-panthers-team-logo-2-300x300.png'
	},
	{
		name: 'panthers',
		image: 'imgs/nfl-carolina-panthers-team-logo-2-300x300.png'
	},
	{
		name: 'bears',
		image: 'imgs/nfl-chicago-bears-team-logo-2-300x300.png'
	},
	{
		name: 'bears',
		image: 'imgs/nfl-chicago-bears-team-logo-2-300x300.png'
	},
	{
		name: 'bengals',
		image: 'imgs/nfl-cincinnati-bengals-team-logo-300x300.png'
	},
	{
		name: 'bengals',
		image: 'imgs/nfl-cincinnati-bengals-team-logo-300x300.png'
	},
	{
		name: 'browns',
		image: 'imgs/nfl-cleveland-browns-team-logo-2-300x300.png'
	},
	{
		name: 'browns',
		image: 'imgs/nfl-cleveland-browns-team-logo-2-300x300.png'
	},
	{
		name: 'cowboys',
		image: 'imgs/nfl-dallas-cowboys-team-logo-2-300x300.png'
	},
	{
		name: 'cowboys',
		image: 'imgs/nfl-dallas-cowboys-team-logo-2-300x300.png'
	},
	{
		name: 'broncos',
		image: 'imgs/nfl-denver-broncos-team-logo-2-300x300.png'
	},
	{
		name: 'broncos',
		image: 'imgs/nfl-denver-broncos-team-logo-2-300x300.png'
	},
	{
		name: 'lions',
		image: 'imgs/nfl-detroit-lions-team-logo-2-300x300.png'
	},
	{
		name: 'lions',
		image: 'imgs/nfl-detroit-lions-team-logo-2-300x300.png'
	},
	{
		name: 'packers',
		image: 'imgs/nfl-green-bay-packers-team-logo-2-300x300.png'
	},
	{
		name: 'packers',
		image: 'imgs/nfl-green-bay-packers-team-logo-2-300x300.png'
	},
	{
		name: 'texans',
		image: 'imgs/nfl-houston-texans-team-logo-2-300x300.png'
	},
	{
		name: 'texans',
		image: 'imgs/nfl-houston-texans-team-logo-2-300x300.png'
	},
	{
		name: 'colts',
		image: 'imgs/nfl-indianapolis-colts-team-logo-2-300x300.png'
	},
	{
		name: 'colts',
		image: 'imgs/nfl-indianapolis-colts-team-logo-2-300x300.png'
	},
	{
		name: 'jaguars',
		image: 'imgs/nfl-jacksonville-jaguars-team-logo-2-300x300.png'
	},
	{
		name: 'jaguars',
		image: 'imgs/nfl-jacksonville-jaguars-team-logo-2-300x300.png'
	},
	{
		name: 'chiefs',
		image: 'imgs/nfl-kansas-city-chiefs-team-logo-2-300x300.png'
	},
	{
		name: 'chiefs',
		image: 'imgs/nfl-kansas-city-chiefs-team-logo-2-300x300.png'
	},
	{
		name: 'chargers',
		image: 'imgs/nfl-los-angeles-chargers-team-logo-2-300x300.png'
	},
	{
		name: 'chargers',
		image: 'imgs/nfl-los-angeles-chargers-team-logo-2-300x300.png'
	},
	{
		name: 'dolphins',
		image: 'imgs/nfl-miami-dolphins-logo-2018-300x300.png'
	},
	{
		name: 'dolphins',
		image: 'imgs/nfl-miami-dolphins-logo-2018-300x300.png'
	},
	{
		name: 'vikings',
		image: 'imgs/nfl-minnesota-vikings-team-logo-2-300x300.png'
	},
	{
		name: 'vikings',
		image: 'imgs/nfl-minnesota-vikings-team-logo-2-300x300.png'
	},
	{
		name: 'patriots',
		image: 'imgs/nfl-new-england-patriots-team-logo-2-300x300.png'
	},
	{
		name: 'patriots',
		image: 'imgs/nfl-new-england-patriots-team-logo-2-300x300.png'
	},
	{
		name: 'saints',
		image: 'imgs/nfl-new-orleans-saints-team-logo-2-300x300.png'
	},
	{
		name: 'saints',
		image: 'imgs/nfl-new-orleans-saints-team-logo-2-300x300.png'
	},
	{
		name: 'giants',
		image: 'imgs/nfl-new-york-giants-team-logo-2-300x300.png'
	},
	{
		name: 'giants',
		image: 'imgs/nfl-new-york-giants-team-logo-2-300x300.png'
	},
	{
		name: 'jets',
		image: 'imgs/nfl-new-york-jets-team-logo-300x300.png'
	},
	{
		name: 'jets',
		image: 'imgs/nfl-new-york-jets-team-logo-300x300.png'
	},
	{
		name: 'raiders',
		image: 'imgs/nfl-oakland-raiders-team-logo-300x300.png'
	},
	{
		name: 'raiders',
		image: 'imgs/nfl-oakland-raiders-team-logo-300x300.png'
	},
	{
		name: 'eagles',
		image: 'imgs/nfl-philadelphia-eagles-team-logo-2-300x300.png'
	},
	{
		name: 'eagles',
		image: 'imgs/nfl-philadelphia-eagles-team-logo-2-300x300.png'
	},
	{
		name: 'steelers',
		image: 'imgs/nfl-pittsburgh-steelers-team-logo-2-300x300.png'
	},
	{
		name: 'steelers',
		image: 'imgs/nfl-pittsburgh-steelers-team-logo-2-300x300.png'
	},
	{
		name: '49ers',
		image: 'imgs/nfl-san-francisco-49ers-team-logo-2-300x300.png'
	},
	{
		name: '49ers',
		image: 'imgs/nfl-san-francisco-49ers-team-logo-2-300x300.png'
	},
	{
		name: 'seahawks',
		image: 'imgs/nfl-seattle-seahawks-team-logo-2-300x300.png'
	},
	{
		name: 'seahawks',
		image: 'imgs/nfl-seattle-seahawks-team-logo-2-300x300.png'
	},
	{
		name: 'titans',
		image: 'imgs/nfl-tennessee-titans-team-logo-2-300x300.png'
	},
	{
		name: 'titans',
		image: 'imgs/nfl-tennessee-titans-team-logo-2-300x300.png'
	},
	{
		name: 'buccaneers',
		image: 'imgs/tampa-bay-buccaneers-2020-logo-300x300.png'
	},
	{
		name: 'buccaneers',
		image: 'imgs/tampa-bay-buccaneers-2020-logo-300x300.png'
	},
	{
		name: 'commanders',
		image: 'imgs/washington-commanders-logo-300x300.png'
	},
	{
		name: 'commanders',
		image: 'imgs/washington-commanders-logo-300x300.png'
	},
]


/*----- app's state (variables) -----*/
let board;
let firstCard, secondCard;
let results;
let winner;

/*----- cached element references -----*/
const cards = document.querySelector('#cards');


/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {


  render();
}

// Create board
function board() {
	for (let i = 0; i < cardArray.length; i++) {
		let card = document.createElement('img')
	}
}