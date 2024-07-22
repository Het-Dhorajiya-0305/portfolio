const navbtn=document.querySelector(".nav-right");
const navbar=document.querySelector(".navbar");

navbtn.addEventListener('click',()=>{
    navbtn.classList.toggle('bx-x');
    navbar.classList.toggle('open');
})