Concentration Game - Pseudocode

/*----- constants -----*/
1) Define required constants:
Define the player inside of an object
Objects to store card variables
Objects to store scoreboard variables
Define the winning combinations (win logic) for when you match the same type of card/icon
Define the cards and their state
32 icons
Opened/Flipped cards
Matching cards
Sounds object
Background music
Sound effects

/*----- app's state (variables) -----*/
2) Define required variables used to track the state of the game:
Use board array to represent the 64 cards
First and second card
Number of moves
Game status
Restart

/*----- cached element references -----*/
3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:
Store the 64 elements that represent the cards on the page

/*----- cached element references -----*/	
4) Upon loading the app should:
Initialize state variables:
Initialize the board array to 64 untouched, back facing cards/icons
Initialize winner to null to represent there is no winner yet
Render state variables to page:
Render the board array
Loop over each of the 64 elements/cards, access the mapped value of the board array, and set the background color to our down-facing color
Render message (game status)
Wait for the player to click a card


/*----- event listeners -----*/
5) Handle a player clicking a card:
Track the number of clicks the player had made to a DOWNWARD FACING card
Listen for clicks for the ‘RESTART’ button
Listen for clicks to play/stop audio (handlePlaySound)

/*----- functions -----*/
6) Handle a player clicking and playing the game:
Function to play background music/audio
Function to play a sound when a card is flipped and when 2 cards match
Function to calculate the time of the game, to start timer when the player first clicks a card
Function to translate the number of icons to the number of cards
Function for matching the icons to their identical partner
Function to shuffle the array of the cards (Random.Math???)
Function for flipping the cards (front-side or back-side), ONLY 2 cards at a time
Function to check whether or not 2 cards/icons are matching and in fact identical 
Function to leave a card on its front side if they do in fact match
Function to flip cards back to their original state (back-side) if they do not match
Function to count and find out how many lives the player has left 
for example, a total of 15 wrong cards (in pairs) that are not matching will remove one life
Function for when the player successfully matches all 64 cards/32 icons
Function to reset the game




