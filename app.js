const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li");
    
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        // Animate Links
        navlinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`; // animation calculating here 
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');

    });
    

}

const app = () => {
    navSlide(); // Mobile Burger Menu Function
}

app();