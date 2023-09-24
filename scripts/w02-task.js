/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Afolabi Ademolu';
let currentYear = new Date().getFullYear();
console.log(currentYear);
let profilePicture = 'images/new-image.jpg';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('my-image');
imageElement.src = 'new-image.jpg';






/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>Afolabi Ademolu </strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('Profile image of Afolabi Ademolu')






/* Step 5 - Array */
let favfoods = ['Rice','Beans','Yam','Egg','Fish','Meat'];

let food2 = ['Garri', 'nudus','vegetable'];
food2.push('cake');
favfoods.innerHTML += `<br> $ {favfoods}`;
favfoods.shift();
favfoods.pop();








