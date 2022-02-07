function loadMenu() {
    let content = document.querySelector('#content');

    const header = document.createElement('header');
    header.textContent = 'Menu';
    content.appendChild(header);

    const foodItem = document.createElement('div');
    const foodImage = document.createElement('img');
    const foodDescription = document.createElement('p');

    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodDescription);
    foodItem.classList.add('imageAndContent');


    const spaceCheeseburger = foodItem.cloneNode(true);
    spaceCheeseburger.firstChild.src = '../src/images/space_cheeseburger.jpg';
    spaceCheeseburger.lastChild.textContent = 'Space Cheeseburger with Tortilla Wrap';

    const spaceRamen = foodItem.cloneNode(true);
    spaceRamen.firstChild.src = '../src/images/space_ramen.jpg';
    spaceRamen.lastChild.textContent = 'Space Ramen in Plastic Package';

    const retroMeal = foodItem.cloneNode(true);
    retroMeal.firstChild.src = '../src/images/retro_meal.jpg';
    retroMeal.lastChild.textContent = 'Retro Space Meal with Sandwich';

    const spaceSalad = foodItem.cloneNode(true);
    spaceSalad.firstChild.src = '../src/images/salad.jpg';
    spaceSalad.lastChild.textContent = 'Space Salad';

    const snackPack = foodItem.cloneNode(true);
    snackPack.firstChild.src = '../src/images/snack_pack.jpg';
    snackPack.lastChild.textContent = 'Snack Pack with Crackers and Milk';

    const spaceCoffee = foodItem.cloneNode(true);
    spaceCoffee.firstChild.src = '../src/images/coffee.jpg';
    spaceCoffee.lastChild.textContent = 'Space Coffee';

    content.appendChild(spaceCheeseburger);
    content.appendChild(spaceRamen);
    content.appendChild(retroMeal);
    content.appendChild(spaceSalad);
    content.appendChild(snackPack);
    content.appendChild(spaceCoffee);
}

export default loadMenu;