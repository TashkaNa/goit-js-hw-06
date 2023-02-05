const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
// #1 Task solution with the help of Grygorii

// const elementsArr = [];
// ingredients.forEach((ingredient) => {
//   const item = document.createElement('li');
//   item.classList.add('item');
//   item.textContent = ingredient;
//   elementsArr.push(item);
// });
// list.append(...elementsArr);


//#2 Task solution by use map() and innerHTML methods 

// const markup = ingredients.map((ingredient) => `<li class="list-item">${ingredient}</li>`).join('');
// list.innerHTML = markup;


//#3 Task solution by use reduce() and innerHTML methods 

// const markup = ingredients.reduce((previous, currentItem) => previous + `<li class="list-item">${currentItem}</li>`, '');
// list.innerHTML = markup;


//#4 Task solution by use map() and append(...) methods 

const itemList = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
});
list.append(...itemList);





