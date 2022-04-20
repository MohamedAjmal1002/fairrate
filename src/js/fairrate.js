const arrow = document.querySelector('.arrow-down');
const dropdown = document.querySelector('.dropdown-links');

arrow.addEventListener("click", () => {
    arrow.classList.toggle("active") 
    dropdown.classList.toggle("active");
})