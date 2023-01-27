const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const item = document.createElement('li');
  list.appendChild(item);
  item.classList.add('item');
  item.textContent = ingredient.valueOf(ingredients);
});

