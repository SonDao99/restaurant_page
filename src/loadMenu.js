import space_cheeseburger from './images/space_cheeseburger.jpg';
import space_ramen from './images/space_ramen.jpg';
import retro_meal from './images/retro_meal.jpg';
import salad from './images/salad.jpg';
import snack_pack from './images/snack_pack.jpg';
import coffee from './images/coffee.jpg';

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
    spaceCheeseburger.firstChild.src = space_cheeseburger;
    spaceCheeseburger.lastChild.textContent = 'Space Cheeseburger with Tortilla Wrap';

    const spaceRamen = foodItem.cloneNode(true);
    spaceRamen.firstChild.src = space_ramen;
    spaceRamen.lastChild.textContent = 'Space Ramen in Plastic Package';

    const retroMeal = foodItem.cloneNode(true);
    retroMeal.firstChild.src = retro_meal;
    retroMeal.lastChild.textContent = 'Retro Space Meal with Sandwich';

    const spaceSalad = foodItem.cloneNode(true);
    spaceSalad.firstChild.src = salad;
    spaceSalad.lastChild.textContent = 'Space Salad';

    const snackPack = foodItem.cloneNode(true);
    snackPack.firstChild.src = snack_pack;
    snackPack.lastChild.textContent = 'Snack Pack with Crackers and Milk';

    const spaceCoffee = foodItem.cloneNode(true);
    spaceCoffee.firstChild.src = coffee;
    spaceCoffee.lastChild.textContent = 'Space Coffee';

    content.appendChild(spaceCheeseburger);
    content.appendChild(spaceRamen);
    content.appendChild(retroMeal);
    content.appendChild(spaceSalad);
    content.appendChild(snackPack);
    content.appendChild(spaceCoffee);
}

export default loadMenu;