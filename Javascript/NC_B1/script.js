// Scope
// var a = 10;

// function test() {
//     console.log(a);

//     function test2() {
//         console.log(a);
//     }

//     test2();
// }

// test();

// function test() {
//     const a = 10;
//     console.log(a);

//     function test2() {
//         console.log(a);
//     }
//     test2();
// }

// test();
// console.log(a); //lỗi
// End Scope

// Hoisting
// Biến trong hoisting
// console.log(a);
// var a = 10;

// var a;
// console.log(a);
// a = 10;
// console.log(a);

// console.log(a); // lỗi
// let a = 10; 

// let a;
// console.log(a);
// a = 10;

// console.log(a); // lỗi
// const a = 10; 

// const a;
// console.log(a); // lỗi
// a = 10;
// End Biến trong hoisting

// Hàm trong hoisting
// Declaration Function
// let a = 10;
// let b = 20;

// let c = sum(a, b);

// console.log(c);

// function sum(x, y) {
//     return (x + y);
// }

// Expression Function
// let a = 10;
// let b = 20;

// let c = sum(a, b);

// console.log(c); // lỗi

// var sum = function(x, y) {
//     return (x + y);
// }

// Arrow Function
// let a = 10;
// let b = 20;

// let c = sum(a, b);

// console.log(c); // lỗi

// var sum = (x, y) => {
//     return (x + y);
// }
// End Hàm trong hoisting

// Strict Mode 
// "use strict";

// a = 10;
// console.log(a); // lỗi

// function test() {
//     "use strict";

//     a = 20;
//     console.log(a); 
// }

// test(); // lỗi
// End Strict Mode 
// End Hoisting

// Từ khoá “this”
// This trong Javascript
// console.log(this);
// console.log(window.location.href);
// console.log(this.location.href);

// This trong javascript function 
// "use strict"; // undefined

// function test() {
//     console.log(this); // window
// }

// test(); 

// This trong các sự kiện javascript
// const button = document.querySelector("#button");

// button.addEventListener("click", function() {
//     console.log(this);
// });

// const listItem = document.querySelectorAll("#menu li");
// console.log(listItem);

// [...listItem].forEach(function(item) {
//     item.addEventListener("click", function() {
//         console.log(this);
//         console.log(item);
//     });
// });

// This trong javascript object
// let info = {
//     fullName: "Nguyễn Thị Huyền",
//     age: 21,
//     email: "huyenmeroria@gmail.com",
//     getFullName: function() {
//         console.log(info.fullName);
//         console.log(this.fullName);
//     },
//     cccd: {
//         fullName: "NGUYỄN THỊ HUYỀN",
//         address: "306Đ Mỹ Đình",
//         getInfoCCCD: function() {
//             console.log(this.fullName);
//         }
//     }
// };

// info.getFullName();
// info.cccd.getInfoCCCD();

// This trong arrow function (không tồn tại)
// const button = document.querySelector("#button");

// button.addEventListener("click", function() {
//     console.log(this);
// });

// const listItem = document.querySelectorAll("#menu li");
// console.log(listItem);

// [...listItem].forEach(function(item) {
//     item.addEventListener("click", () => {
//         console.log(item);
//         console.log(this); // trả về window
//     });
// });
// End Từ khoá “this”

// Modules
// End Modules

// JSON
// JSON có giá trị là Object
// let infoUser = {
//     fullName: "Nguyễn Thị Huyền",
//     email: "huyenmeroria@gmail.com",
//     age: 21
// };
    
// let infoUserJSON = `
//     {
//         "fullName": "Nguyễn Thị Huyền",
//         "email": "huyenmeroria@gmail.com",
//         "age": 21
//     }
// `;

// console.log(infoUserJSON);

// let infoUserJSONtoJS = JSON.parse(infoUserJSON);
// let infoUserJStoJSON = JSON.stringify(infoUser);

// console.log(infoUserJSONtoJS);
// console.log(infoUserJSONtoJS.fullName);
// console.log(infoUserJStoJSON);

// JSON có giá trị là Number
// let jsonNumber = `5`;

// console.log(jsonNumber);
// console.log(JSON.parse(jsonNumber));

// JSON có giá trị là String
// let jsonString = `"Xin chào bạn!"`;

// console.log(jsonString);
// console.log(JSON.parse(jsonString));

// JSON có giá trị là Boolean
// let jsonBoolean = `true`;

// console.log(jsonBoolean);
// console.log(JSON.parse(jsonBoolean));

// JSON có giá trị là Array
// let jsonArray = `
//     [
//         {
//             "id": 1,
//             "name": "Nguyễn Thị Huyền",
//             "email": "huyenmeroria@gmail.com"
//         },
//         {
//             "id": 2,
//             "name": "Vũ Công Chiến",
//             "email": "chientk01@gmail.com"
//         },
//         {
//             "id": 3,
//             "name": "Phạm Hoài Nam",
//             "email": "nampham@gmail.com"
//         }
//     ]
// `;

// let listUser = JSON.parse(jsonArray);

// let htmls = "";

// listUser.forEach(item => {
//     console.log(item);
//     htmls += `
//         <div class="user-item">
//             <div class="inner-name">${item.name}</div>
//             <div class="inner-email">${item.email}</div>
//         </div>
//     `;
// });

// const divUserList = document.querySelector("#listUser");
// divUserList.innerHTML = htmls;

// console.log(htmls);

// console.log(jsonArray);
// console.log(JSON.parse(jsonArray));

// JSON có giá trị là Null
// let jsonNull = `null`;

// console.log(jsonNull);
// console.log(JSON.parse(jsonNull));
// End JSON