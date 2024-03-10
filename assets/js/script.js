document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }

        })
    }

    runGame("addition")
})

/**
 *The main game is built on these two numbers
 * they will appear after the user loads the page
 */
function runGame(gameType){
    let num1 = Math.floor(Math.random() *25) +1;
    let num2 = Math.floor(Math.random() *25) +1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else if(gameType === "multiply"){
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert('Well Done you are amazung at maths your answer is correct');
        incrementScore();
    } else {
        alert(`Wooooops....... you answered ${userAnswer} the corrrect answer is ${calculatedAnswer[0]}!`)
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1])

}

function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand-1').innerText);
    let operand2 = parseInt(document.getElementById('operand-2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+'){
        return [operand1 + operand2, 'addition']
    } else if (operator === 'x') {
        return [operand1 * operand2, 'multiply']
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator} Aborting!`;
    }
}

function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand-1').textContent = operand1;
    document.getElementById('operand-2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand-1').textContent = operand1;
    document.getElementById('operand-2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}