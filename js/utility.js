// hidden page common function
function hideElementById(elementId) {
        const element = document.getElementById(elementId);
        element.classList.add('hidden');
}
//show page common function
function showElementById(elementId) {
        const element = document.getElementById(elementId);
        element.classList.remove('hidden');
}
//set keyboard all key background color common function
function setKeyboardBackgroundColor(elementId){
        const element = document.getElementById(elementId);
        element.classList.add('bg-orange-400');
}
//remove keyboard all key background color common function
function removeKeyboardBackgroundColor(elementId){
        const element = document.getElementById(elementId);
        element.classList.remove('bg-orange-400');
}
//when show play ground screen then generate a random alphabet
function getARandomAlphabet() {
        const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
        const alphabets = alphabetString.split('');//alphabet string convert to alphabet array
        const randomNumber = Math.random() * 25;//get 0-25 random fraction number
        const index = Math.round(randomNumber);//convert fraction to integer
        const alphabet = alphabets[index];//get every alphabets by index
        return alphabet;
}
//common function for get score generate
function getTextElementValueById(elementId){
        const element = document.getElementById(elementId);//get element by id
        const elementValueText = element.innerText;//set element by text
        const value = parseInt(elementValueText);//element text value convert to integer
        return value;//get value
}
//common function for set score generate
function setTextElementValueById(elementId, value){
        const element = document.getElementById(elementId);
        element.innerText = value;
}
//common function for remove every alphabet background color
function getElementTextById(elementId){
        const element = document.getElementById(elementId);
        const alphabetText = element.innerText;
        return alphabetText;
}