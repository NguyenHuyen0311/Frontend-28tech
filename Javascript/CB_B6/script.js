// DOM Events
// onload
// window.onload = function() {
//     const menu = document.querySelector("#menu");
//     console.log(menu);
// }
// End onload

// onblur and onfocus
// const inputName = document.querySelector("#inputName");
// inputName.onblur = function() {
//     inputName.value = inputName.value.toUpperCase(); // giá trị trong ô input thành chữ in hoa
//     inputName.classList.remove("focus");
// }

// inputName.onfocus = function() {
//     inputName.classList.add("focus");
// }
// End onblur and onfocus

// onkeydown and onkeyup
// const inputName = document.querySelector("#inputName");
// inputName.onkeydown = function() {
//     console.log("onkeydown");
//     alert('onkeydown');
// }

// inputName.onkeyup = function() {
//     console.log("onkeyup");
//     alert('onkeyup');
// }
// End onkeydown and onkeyup

// onclick
// const buttonMenu = document.querySelector("#buttonMenu");
// const buttonClose = document.querySelector("#buttonClose");
// const menu = document.querySelector("#menuClick");

// buttonMenu.onclick = function() {
//     menu.classList.add("show");
// };

// buttonClose.onclick = function() {
//     menu.classList.remove("show");
// };
// End onclick

// onchange
// const colors = document.querySelector("#colors");

// colors.onchange = function() {
//     let currentColor = colors.value;
//     console.log(currentColor);
// }

// const inputName = document.querySelector("#inputName");
// inputName.onchange = function() {
//     console.log(inputName.value);
// }
// End onchange
// End DOM Events

// DOM Events Listener
// function hamMot() {
//     console.log("Việc 1");
// }

// function hamHai() {
//     console.log("Việc 2");
// }

// const button = document.querySelector("#button");

// button.onclick = function() {
//     hamMot();
// }

// button.onclick = function() {
//     hamHai();
// }

// button.addEventListener("click", function() {
//     hamMot();
// }); 

// button.addEventListener("click", function() {
//     hamHai();
// });

// -> Viết gọn
// button.addEventListener("click", hamMot); 

// button.addEventListener("click", hamHai);

// setTimeout(() => {
//     button.removeEventListener("click", hamHai);
// }, 5000);
// End DOM Events Listener

// DOM Navigation
// const childOne = document.querySelector("#child-1");
// console.log(childOne);
// console.log(childOne.parentNode);
// console.log(childOne.childNodes);
// console.log(childOne.querySelectorAll(".box"));
// console.log(childOne.firstElementChild);
// console.log(childOne.lastElementChild);
// console.log(childOne.nextElementSibling);
// console.log(childOne.previousElementSibling);
// console.log(childOne.nodeName);

// const parent = document.querySelector(".parent");
// console.log(parent.querySelectorAll(".box"));
// End DOM Navigation

// DOM Nodes
// document.createElement()
// const div = document.createElement("div");
// div.innerHTML = "Quảng cáo...";
// console.log(div);

// setInterval(() => {
//     const divAds = document.querySelector("#ads");
//     divAds.appendChild(div);
// }, 3000);
// End document.createElement()

// document.createTextNode()
// const div = document.createElement("div");
// const text = document.createTextNode("Quảng cáo 2...");
// div.appendChild(text)
// console.log(div);

// const divAds = document.querySelector("#ads");
// divAds.appendChild(div);
// End document.createTextNode()

// appendChild()
// const menu = document.querySelector("#menu");
// const buttonAdd = document.querySelector("#buttonAdd");

// buttonAdd.onclick = function() {
//     const newItem = document.createElement("li");
//     newItem.innerHTML = "Item mới";

//     menu.appendChild(newItem);
// }
// End appendChild()

// insertBefore()
// const menu = document.querySelector("#menu");
// const buttonAdd = document.querySelector("#buttonAdd");

// buttonAdd.onclick = function() {
//     const firstElement = menu.firstElementChild;

//     const newItem = document.createElement("li");
//     newItem.innerHTML = "Item mới";

//     menu.insertBefore(newItem, firstElement);
// }
// End insertBefore()

// removeChild()
// const menu = document.querySelector("#menu");

// const listItem = menu.querySelectorAll("li");
// console.log(listItem);

// listItem.forEach(item => {
//     console.log(item);
//     item.onclick = function() {
//         menu.removeChild(item);
//     };
// });
// End removeChild()

// replaceChild()
// const menu = document.querySelector("#menu");

// const listItem = menu.querySelectorAll("li");
// console.log(listItem);

// listItem.forEach(item => {
//     console.log(item);
//     item.onclick = function() {
//         const newItem = document.createElement("li");
//         newItem.innerHTML = "Item mới";

//         menu.replaceChild(newItem, item);
//     };
// });
// End replaceChild()
// End DOM Nodes
