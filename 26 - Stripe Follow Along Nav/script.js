const background = document.querySelector('.dropdownBackground');
const navList = document.querySelectorAll('.cool > li');

const nav = document.querySelector('.top');

function showMenuHandler() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    
    const thisDropdown = this.querySelector('.dropdown');
    const dropdownCoords = thisDropdown.getBoundingClientRect();

    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - nav.offsetTop,
        left: dropdownCoords.left - nav.offsetLeft,
    }

    background.classList.add('open');
    background.style.width = `${coords.width}px`;
    background.style.setProperty('height', `${coords.height}px`);   //did you notice? two ways to set property.
    background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

function hideMenuHandler() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

navList.forEach(list => list.addEventListener('mouseenter', showMenuHandler));
navList.forEach(list => list.addEventListener('mouseleave', hideMenuHandler));