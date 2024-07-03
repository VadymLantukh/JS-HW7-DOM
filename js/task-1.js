const listEl = document.querySelector('#categories');
const itemEl = listEl.querySelectorAll('.item');

console.log(`Number of category: ${itemEl.length}`);

itemEl.forEach(item => {
  const textTitle = item.querySelector('h2').textContent;
  const sumElements = item.querySelectorAll('li').length;

  console.log(`Category: ${textTitle}`);
  console.log(`Elements: ${sumElements}`);
});
