const categories = document.querySelector('#categories');
// console.log(categories);
const items = categories.querySelectorAll('.item');

console.log('Number of categories: ' + items.length);
console.log();

items.forEach(item => {
    const list = item.querySelector('ul');
    
    console.log('Category: ' + item.querySelector('h2').textContent);
    console.log('Elements: ' + list.querySelectorAll('li').length);
    console.log();
});