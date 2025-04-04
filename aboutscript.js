const langToggle = document.getElementById("langToggle");
const textEN = document.querySelectorAll(".textEN");
const textHU = document.querySelectorAll(".textHU");

langToggle.addEventListener("change", function() {
    if (langToggle.checked) {
        textEN.forEach(el => el.style.display = "none");  
        textHU.forEach(el => el.style.display = "block"); 
    } else {
        textEN.forEach(el => el.style.display = "block"); 
        textHU.forEach(el => el.style.display = "none");  
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("quizForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page refresh

        let score = 0;
        const answers = { q1: "STD", q2: "1", q3: "5" };

        for (let question in answers) {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            if (!selected) {
                alert(`Please answer question: ${question}`);
                return;
            }
            if (selected.value === answers[question]) {
                score++;
            }
        }

        document.getElementById("result").textContent = `Your score: ${score}/3`;
        document.getElementById("result").classList.remove("hidden");
    });
});
