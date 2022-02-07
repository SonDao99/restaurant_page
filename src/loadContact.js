import hologram from './images/hologram.png';

function loadContact() {
    let content = document.querySelector('#content');

    const header = document.createElement('header');
    header.textContent = 'Contact';
    content.appendChild(header);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('imageAndContent');

    const img = document.createElement('img');
    img.src = hologram;

    const call = document.createElement('button');
    call.textContent = 'Hologram Call';

    contactInfo.appendChild(img);
    contactInfo.appendChild(call);

    content.appendChild(contactInfo);
}

export default loadContact;