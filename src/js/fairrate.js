const dropdown = document.querySelectorAll('.dropdown');
let photohead = document.querySelector('.photo');
let proofhead = document.querySelector('.proof');
let uploadhead = document.querySelector('.upload-head');




//dropdown

dropdown.forEach((dropElement) => {
    dropElement.addEventListener('click', () =>{
        dropElement.closest('.dropdown-wrapper').classList.toggle('dropdown-open')
    })
});

//page-3 heading

photohead.addEventListener('click', () => {
    uploadhead.innerHTML = 'Upload Photo Indentification'
});
proofhead.addEventListener('click', () => {
    uploadhead.innerHTML = 'Upload Proof of Address'
});

//slider


const slider = document.querySelector('.range-wrapper input');
const value = document.querySelector('.value');

value.textContent = slider.value;
slider.oninput = function(){
    value.textContent = this.value; 
}

//page nav


const content = document.querySelectorAll('.content');  
const buttons = document.querySelectorAll('.gotoNextPage'); //return all buttons

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const currentPage = document.querySelector('.content.active');
        const gotopageNumber = button.getAttribute('gotopageNumber');
        currentPage.classList.remove('active');
        content[gotopageNumber].classList.add('active');

    });

})


//button dis and enable

let input = document.querySelector(".input");
let button = document.querySelector(".btn");
button.disabled = true;
input.addEventListener("change", stateHandle);

function stateHandle() {
    if(document.querySelector(".input").value === "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}
