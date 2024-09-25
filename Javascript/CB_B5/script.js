// DOM Document
// console.log(document);
// End DOM Document

// DOM Element
// getElementById()
// const box = document.getElementById("box");
// box.classList.add("dark");

// console.log(box);

// const menu = document.getElementById("menu");
// console.log(menu);
// End getElementById()

// getElementsByTagName()
// const listH2 = document.getElementsByTagName("h2");
// console.log(listH2);
// console.log(listH2[3]);
// End getElementsByTagName()

// getElementsByClassName()
// const listTest = document.getElementsByClassName("test");
// console.log(listTest);
// console.log(...listTest);
// console.log([...listTest]);

// [...listTest].forEach(item => {
//     console.log(item);
//     item.classList.add("test-2");
//     item.classList.remove("test");
// });
// End getElementsByClassName()

// querySelector()
// const element = document.querySelector(".box-1 .box-2 h2 .link");
// element.classList.add("active");

// console.log(element);

// const box = document.querySelector("#box");
// console.log(box);

// const h2 = document.querySelectorAll("h2");
// console.log(h2);

// const test = document.querySelectorAll(".test");
// console.log(test);
// End querySelector()

// querySelectorAll()
// const elements = document.querySelectorAll(".box-1 .box-2 h2 .link");
// [...elements].forEach(item => {
//     console.log(item);
//     item.classList.add("inactive");
// });

// console.log(elements);
// End querySelectorAll()
// End DOM Element

// DOM HTML
// innerHTML()
// const box = document.querySelector("#box");
// const contentBox = box.innerHTML; // lấy text và cả thẻ html
// const contentBox = box.textContent; // lấy text
// const contentBox = box.innerText; // lấy text bỏ khoảng trắng
// console.log(contentBox);
// box.innerHTML = "Nội dung mới";

// const boxTest = document.querySelector("#box-test");
// console.log(boxTest);
// boxTest.innerHTML = contentBox;
// End innerHTML()

// getAttribute() and setAttribute()
// const productList = document.querySelectorAll(".product-item");
// console.log(productList);

// let cart = [];

// [...productList].forEach(item => {
//     const dataId = item.getAttribute("data-id");
//     cart.push(dataId);

//     item.setAttribute("data-category", "234");
//     item.setAttribute("class", "product-item product-test");
    
//     console.log(item);
//     console.log(dataId);
// });

// console.log(cart);
// End getAttribute() and setAttribute()
// End DOM HTML

// DOM CSS
// const h3 = document.querySelector("#h3");
// h3.style.color = "red";
// h3.style.backgroundColor = "yellow";

// console.log(h3);
// End DOM CSS

