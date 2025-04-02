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