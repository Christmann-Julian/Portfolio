// Show menu

const showMenu = (toggleId, navId) =>{
    
    const toggle = document.getElementById(toggleId), nav = document.getElementById(navId);

    if(toggle && nav){
        
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        });

    }

}

showMenu('nav_toggle', 'nav_menu');

// Remove active link

const navLink = document.querySelectorAll('.nav-link');

function linkAction(){

    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// SCROLL REVEAL ANIMATION 

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: false
});

//SCROLL HOME
sr.reveal('.home-title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home-text-infinite-1',{delay: 400});
sr.reveal('.home-text-infinite-2',{delay: 400}); 
sr.reveal('.home-social-icon',{ interval: 200}); 

//SCROLL ABOUT
sr.reveal('.about-img',{}); 
sr.reveal('.about-subtitle',{delay: 400}); 
sr.reveal('.about-text',{delay: 400}); 

//SCROLL WORK
sr.reveal('.skills-card',{interval: 200});

//SCROLL WORK
sr.reveal('.work-img',{interval: 200}); 

//SCROLL CONTACT
sr.reveal('.contact-input',{interval: 200}); 


//TEXT ANIMATION
const txtAnim = document.getElementById('txt-writer');

new Typewriter(txtAnim, {
    deleteSpedd: 20,
    cursor: ' ',
    //loop: true
})

//.changeDelay(20)
.pauseFor(1500)
.typeString('Développeur web <span style="color: #f7811a;">JS</span>')
.pauseFor(1000)
.deleteChars(18)
.typeString('Développeur web <span style="color: #5756a1;">php</span>')
.pauseFor(1000)
.deleteChars(19)
.typeString('Développeur web')
.start()
