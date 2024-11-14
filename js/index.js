//click play Now button then work for
function playNow() {
       hideElementById('home-screen'); //hide home screen
       hideElementById('final-score')//hide final score screen
       showElementById('play-ground-screen');//show play-ground-screen
       setTextElementValueById('current-life', 5);//for reset game current life 5
       setTextElementValueById('current-score', 0)//for reset game current score 0
       continueGame();//call continueStartGame function

}

//continue start game and get a random alphabet
function continueGame() {
       const alphabet = getARandomAlphabet();//call getARandomAlphabet function for get single alphabet
       const currentAlphabetElement = document.getElementById('current-alphabet');//get current alphabet 
       currentAlphabetElement.innerText = alphabet;//show alphabet in display
       setKeyboardBackgroundColor(alphabet);// set randomly generating alphabet bg color
}

//keyboard press working for continue play game
function handleKeyboardPressEvent(event) {
       const playerPressed = event.key;//after key press get keys event
       //get the expected alphabet 
       const currentAlphabetElement = document.getElementById('current-alphabet');
       const currentAlphabet = currentAlphabetElement.innerText;
       const expectedAlphabet = currentAlphabet.toLowerCase();//current alphabet match to expected by lowercase
       //apter press Escape button then game will be over
       if (playerPressed === 'Escape') {
              gameOver();
       }
       //apter keypress and it will be same as expected keys random keys
       if (playerPressed === expectedAlphabet) {
              const currentScore = getTextElementValueById('current-score');
              const updatedScore = currentScore + 1;
              setTextElementValueById('current-score', updatedScore);//set score value in score
              removeKeyboardBackgroundColor(expectedAlphabet);// remove keyboard bg color after key press
              continueGame();//call for continuing gaming
       }
       else {
              const currentLife = getTextElementValueById('current-life');
              const updatedLife = currentLife - 1;
              setTextElementValueById('current-life', updatedLife);
              if (updatedLife === 0) {
                     gameOver();
              }
       }
}
document.addEventListener('keyup', handleKeyboardPressEvent);//capture key for key press working

//game over function and hide playground page and show final score screen
function gameOver() {
       hideElementById('play-ground-screen');//when life 0 hide play ground screen
       showElementById('final-score');// show final score screen
       const generateScore = getTextElementValueById('current-score')//get the generated score from score
       setTextElementValueById('final-generate-score', generateScore);// set the score in final score page
       const currentAlphabet = getElementTextById('current-alphabet');//call by id for show only current alphabet 
       removeKeyboardBackgroundColor(currentAlphabet);//remove keys bg color
}