// quiz.js

// Step 1: Function declaration
function checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (!selectedOption) {
        // Handle case where no option is selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }
    const userAnswer = selectedOption.value;

    // Step 4: Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
