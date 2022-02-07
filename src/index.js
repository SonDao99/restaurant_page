import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadContact from './loadContact';

const navBar = document.createElement('div');
navBar.classList.add('navBar');

const homeButton = document.createElement('button');
homeButton.textContent = 'Home';

const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';

const contactButton = document.createElement('button');
contactButton.textContent = 'Contact';

navBar.appendChild(homeButton);
navBar.appendChild(menuButton);
navBar.appendChild(contactButton);

let content = document.querySelector('#content');
content.appendChild(navBar);

loadHome();

homeButton.addEventListener('click', () => {
    content.textContent = '';
    content.appendChild(navBar);
    loadHome();
})

menuButton.addEventListener('click', () => {
    content.textContent = '';
    content.appendChild(navBar);
    loadMenu();
})

contactButton.addEventListener('click', () => {
    content.textContent = '';
    content.appendChild(navBar);
    loadContact();
})