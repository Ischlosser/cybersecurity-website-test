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

function checkAnswers() {
    let score = 0;
    const answers = { q1: "Steal Your Data", q2: "1", q3: "5" };
    
    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    document.getElementById("result").textContent = `Your score: ${score}/2`;
    document.getElementById("result").classList.remove("hidden");
}