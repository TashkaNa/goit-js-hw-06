const categories = document.querySelector('ul#categories');
const categoriesList = categories.querySelectorAll('li.item');
  console.log(`Number of categories: `, categoriesList.length);

categoriesList.forEach((item) => {
  console.log(`Category: `, item.querySelector('h2').textContent); 
  // console.log(`Category: `, item.firstElementChild.textContent); //another variant
  console.log(`Elements: `, item.lastElementChild.children.length);
});
