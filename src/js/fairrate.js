const arrow = document.querySelector('.arrow-down');
const dropdown = document.querySelectorAll('.dropdown');
let photohead = document.querySelector('.photo');
let proofhead = document.querySelector('.proof');
let uploadhead = document.querySelector('.upload-head');




//dropdown

dropdown.forEach((dropElement) => {
    dropElement.addEventListener('click', () =>{
        arrow.classList.toggle("active") 
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



//button nav


// let slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   let i;
//   let x = document.getElementsByClassName("content");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "block";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }

// let currentTab=1;
// $.("content1").style.display = "";
// document.on('click', 'nav.multiTabs>a',
// function(){
// let TabId = this.attr('data-trigger');
// $('div#'+TabId+' ').style.display = "";
// console.log("current Tab: "+TabId");
// currentTab = parseInt (TabId.replace("content", ""));

// $('.tabcontent:not(#'+TabId+')').style.display = "none"
// });

// function next(){
// if (currentTab < 5){
// $ (".tabcontent").style.display = "none";
// $ (".#content"+(currentTab+1)).style.display = "";
// currentTab++;
// }
// function prev(){
// if (currentTab > 5){
// $ (".tabcontent").style.display = "none";
// $ (".#content"+(currentTab+1)).style.display = "";
// currentTab++;
// }