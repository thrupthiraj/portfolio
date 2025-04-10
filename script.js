// menu icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }


// Active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset +height) {
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });


    // navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // toogle
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const typed = new Typed ('.change',{
    strings:['Web Developer','Gamer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});



// Revealing elements
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.services-container,.conatct,form,.portfolio-mid-container', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img,.portfolio-mid-container .exp', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });


// Form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycby7bal_Cvg1lf62l1Bi2eA0yUpOVI4tJISz4giVXut0kflvkjoKkv4xEHhU37z1BFQXdA/exec'
const form = document.forms['contact']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL,{method:'POST', body:new FormData(form)})
    .then(Response => alert("Message Sent..!"))
.then(() => {window.location.reload();})
.catch(error => console.error('Error',error.message))
})