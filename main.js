document.querySelectorAll('a[href^="#"]').forEach(navLink => {
    navLink.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            //get pos of target element
            const targetPos = targetElement.offsetTop;

            //scroll to position, adjusting for header height
            window.scroll({
                top: targetPos - 60
            });
        }

    });
});