const listItem = document.querySelector('#categories');
const item = listItem.querySelectorAll('.item');

console.log(`Number of category: ${item.length}`);

item.forEach(item => {
  const textTitle = item.querySelector('h2').textContent;
  const sumElements = item.querySelectorAll('li').length;

  console.log(`Category: ${textTitle}`);
  console.log(`Elements: ${sumElements}`);
});
