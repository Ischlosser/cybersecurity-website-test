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

const images = [
    'photos/1.jpg', 
    'photos/2.jpg', 
    'photos/3.jpg'  
];

let currentIndex = 0;
const backgroundContainer = document.querySelector('.background-container');

function changeBackground() {
    backgroundContainer.style.opacity = 0; 

    setTimeout(() => {
        backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
        backgroundContainer.style.opacity = 1; 
    }, 1000);

    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);
changeBackground();
