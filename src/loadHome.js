import space_burger from './images/space_burger.jpg'

function loadHome() {

    let content = document.querySelector('#content');

    const header = document.createElement('header');
    header.textContent = 'Deep Space Diner';
    content.appendChild(header);

    const img = document.createElement('img');
    img.src = space_burger;
    content.appendChild(img);

    const description = document.createElement('p');
    description.textContent = 'Weary from space exploration? Dine with us and enjoy our wonderful selection of zero gravity meals!';
    content.appendChild(description);
}

export default loadHome;