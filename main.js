const socials = document.querySelectorAll('.fa-brands')
const linkedin = document.querySelector('.fa-linkedin-in')
const github = document.querySelector('.fa-github')
const username = document.querySelector('.username')

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
        linkedin.style.color = '#93ac9d';
        username.innerText = '@ldv-nguyen'
    } else if (icon.classList.contains('fa-github')) {
        //change color & set username
        github.style.color = '#93ac9d';
        username.innerText = '@lillian-nguyen'
    }
}

function revertSocials(event) {
    const icon = event.target;
    socials.forEach(social => {
        social.style.color = '#B4BBC8';
    })
    username.innerText = 'savvy sprout'
}