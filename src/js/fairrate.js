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

//page nav


const content = document.querySelectorAll('.content');  
const buttons = document.querySelectorAll('.gotoNextPage'); 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let valid = false;
        const currentPage = document.querySelector('.content.active');
        const gotopageNumber = button.getAttribute('gotopageNumber');
        const isValid = checkAllInputValid('.content.active', valid);
        if(isValid) {
            currentPage.classList.remove('active');
            content[gotopageNumber].classList.add('active');
        }
    });

})

//valid inputs


function checkAllInputValid(activePage, valid) {
    const pageInputs = document.querySelectorAll(activePage + ' ' + '.mandatory');
    const pageInputsArrary = Array.from(pageInputs);
    pageInputsArrary.map((pageInput) =>{
        checkInput(pageInput)
    });

    const errorField = document.querySelector(activePage + ' ' + '.error');
    if(errorField) {
        valid = false;
    } else {
        valid = true
    }
    return valid;
}

function checkInput(input){
    if(input.value.trim() === ''){
        onError(input);

    } else {
        onSuccess(input);
    }
}



function onSuccess (input){
    let parent = input.parentElement;
    let msgElm = parent.querySelector('small');
    msgElm.style.visibility='hidden';  
    input.classList.add("success");  
    input.classList.remove("error");  
}
function onError (input){
    let parent = input.parentElement;
    let msgElm = parent.querySelector('small');
    msgElm.style.visibility='visible';  
    msgElm.innerHTML='*required'; 
    input.classList.add("error");  
    input.classList.remove("success");  
}
