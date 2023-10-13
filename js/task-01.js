const categories = document.querySelector('#categories');

const items = categories.children.length;

console.log('Number of categories: ' + items);
console.log();

[...categories.children].forEach(item => {
    console.log('Category: ' + item.firstElementChild.textContent);
    console.log('Elements: ' + item.lastElementChild.children.length);
    console.log();
});








// const items = categories.querySelectorAll('.item');

// console.log('Number of categories: ' + items.length);
// console.log();

// items.forEach(item => {
//     const list = item.querySelector('ul');
    
//     console.log('Category: ' + item.querySelector('h2').textContent);
//     console.log('Elements: ' + list.querySelectorAll('li').length);
//     console.log();
// });