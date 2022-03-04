// function myFunction(){
//     document.getElementById("demo").innerHTML = "Paragraph changed";

// }

// let menu = document.getElementById('menu');

// let li = document.createElement("li");
// li.textContent = 'About Us';
// menu.appendChild(li);
// console.log(menu.innerHTML);

// function createMenuItem(name) {
//     let li = document.createElement('li');
//     li.textContent = name;
//     return li;
// }

// const menu = document.querySelector('#menu')
// menu.appendChild(createMenuItem('Home'));
// menu.appendChild(createMenuItem('Services'));
// menu.appendChild(createMenuItem('About Us'));

const firstList = document.querySelector('#first-list');

const everest = firstList.firstElementChild;

const secondList = document.querySelector('#second-list');
secondList.appendChild(everest)



