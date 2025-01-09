// N A V B A R

//keep track of previous scroll position
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function () {
    //current scroll pos
    const currentScrollPos = window.scrollY;
    const navbar = this.document.querySelector('.navbar')

    if (prevScrollPos > currentScrollPos) {
        //user has scrolled up
        navbar.classList.remove('remove-border');
        navbar.classList.add('return-border');
    } else {
        //user scrolled down
        navbar.classList.remove('return-border');
        navbar.classList.add('remove-border');
    }

    //update previous scroll position
    prevScrollPos = currentScrollPos

});


// A B O U T   S E C T I O N

const socials = document.querySelectorAll('.socials')
const linkedin = document.querySelector('.fa-linkedin-in')
const github = document.querySelector('.fa-github')
const resume = document.querySelector('.iconsax')
const username = document.querySelector('#username')

socials.forEach(social => {
    social.addEventListener('mouseover', hoverSocials)
})

socials.forEach(social => {
    social.addEventListener('mouseout', revertSocials)
})

function hoverSocials(event) {
    //event.target is property on all JS event objects 
    const icon = event.target;

    //which icon is being hovered over? 
    if (icon.classList.contains('fa-linkedin-in')) {
        //change color & set username
        linkedin.style.color = 'rgb(113, 145, 241)';
        linkedin.style.backgroundColor = 'white';
        username.innerText = '@ldv-nguyen'
    } else if (icon.classList.contains('fa-github')) {
        //change color & set username
        github.style.color = '#22753E';
        github.style.backgroundColor = 'white';
        username.innerText = '@lillian-nguyen'
    } else {
        resume.style.backgroundColor = 'white';
        username.innerText = 'view resume'
    }
}

//changes icon to default color and sets default text of savvy sprout
function revertSocials(event, icon) {
    // const icon = event.target;
    //reset github colors 
    github.style.backgroundColor = '#93ac9d';
    //reset linkedin colors
    linkedin.style.backgroundColor = 'rgb(154, 186, 193)';
    //reset resume colors
    resume.style.backgroundColor = 'rgb(183, 178, 167';
    //reset username
    username.innerText = 'savvy sprout'
}