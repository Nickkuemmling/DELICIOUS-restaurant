const buttonClick = document.querySelector('.buttonToggle');
let toggleNavStatus = true;

buttonClick.addEventListener('click', function () {
    const getSidebarUl = document.querySelector('ul');


    if (toggleNavStatus === false) {
        buttonClick.style.transform = 'none';
        getSidebarUl.style.opacity = '0';
        toggleNavStatus = true;
        
        console.log(toggleNavStatus);
        
    } else {
        buttonClick.style.transform = 'rotate(90deg)';
        getSidebarUl.style.opacity = '100%';
        toggleNavStatus = false;

        console.log(toggleNavStatus);
    }
});