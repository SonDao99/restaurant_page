function loadHome() {

    let content = document.querySelector('#content');

    const header = document.createElement('header');
    header.textContent = 'Deep Space Diner';
    content.appendChild(header);

    const img = document.createElement('img');
    img.src = "../src/images/space_burger.jpg";
    content.appendChild(img);

    const description = document.createElement('p');
    description.textContent = 'Weary from space exploration? Dine with us and enjoy our wonderful selection of zero gravity meals!';
    content.appendChild(description);
}

export default loadHome;