console.log("script.js connected!");

let title = document.getElementById("page-title");
let instructions = document.getElementById("instructions");
title.textContent = "Are you secretly three raccoons in a trench coat?";
instructions.textContent = "Take this quiz to find out!";

console.log((title));

//This was so hard for some reason
const questionBlocks = document.querySelectorAll(".question-block"); //query for the class question-block which is in the 2nd div of every question, store uit in questionBlocks
const answers = Array(questionBlocks.length).fill(null); // Start an array, and clear it out if there is anything already there with null before filling it :)

questionBlocks.forEach((question, questionIndex) => { // forEach questionBlocks: question is the function and question index is the index obvi.
    const answerButtons = question.querySelectorAll(".answer-btn"); // find all those answer buttons, store them in answerButtons

    answerButtons.forEach(button => {
        button.addEventListener('click', () => { // track the clicks
                answerButtons.forEach(b => b.classList.remove('selected')); // lots of buttons, so for each button that is clicked, it removes the selected trait from the last. It clears the selected. Does that make sense? I'm sleep deprived.
                
                button.classList.add('selected'); // When clicked, the button will be selected, which is a id in the CSS that was already there
                answers[questionIndex] = Number(button.dataset.score); //Store the click information, important for scoring

            });
    })
})


document.getElementById("show-result").addEventListener("click", () => {
    // The answers.includes(null) means that if there are no values stored in answers, it is null; which will trigger the below.
    if (answers.includes(null)) {
                alert("Please answer every question first."); //fun little pop out window that warns the user
                return;
            };

    const totalscore = answers.reduce((total, score) => total + score, 0) //calculates the score so that the below can happen

    //I made it so the questions that aren't obviously the raccoon have a value of 0, so if you choose one that is the raccoon answer, it will add up.
    if (totalscore ==3) {
        result = "Put the coat down and get back in the trash, you rapscallions.";
    }
    else if (totalscore == 2) {
        result = "I'm on to you. I can't prove it, but I'm on to you.";
    }
    else if (totalscore == 1) {
        result = "You're not 3 raccoons in a trench coat, you're just... quirky. And that's okay.";
    }
    else if (totalscore == 0) {
        result = "You've passed! You're not 3 raccoons in a trench coat!";
    }
    

    document.getElementById("result-text").textContent = result; // The text that displays after scoring
    document.getElementById("result-container").style.display = "block"; // what the result container that has the text looks like. using the id from html
});

//Some sources. There are WAY way more, these are just the most common I used.
// https://www.w3schools.com/jsref/jsref_includes_array.asp
// https://www.w3schools.com/jsref/jsref_fill.asp
// https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class