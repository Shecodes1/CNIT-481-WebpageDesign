document.addEventListener('DOMContentLoaded', function() {
    function handleHover(event) {
        const loginIcon = document.querySelector('#loginicon i');
        const loginText = document.querySelector('#loginicon a');

        if (event.type === 'mouseenter') {
            loginIcon.style.color = loginText.style.color = 'lightblue';
        } else if (event.type === 'mouseleave') {
            loginIcon.style.color = loginText.style.color = '';
        }
    }

    const loginIcon = document.querySelector('#loginicon i');
    const loginText = document.querySelector('#loginicon a');

    loginIcon.addEventListener('mouseenter', handleHover);
    loginText.addEventListener('mouseenter', handleHover);
    loginIcon.addEventListener('mouseleave', handleHover);
    loginText.addEventListener('mouseleave', handleHover);
});







