//Store the selected element that we are going to use.
const navbuttom = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar'); // For navigavion links

//Toggle the show class off and on
navbuttom.addEventListener('click',()=>{
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show'); // For navigavion links
});