// import hàm tính tổng và kiểm tra chẵn lẻ
// import { tong } from "./helpers/tong.js";
// import { kiemTraChanLe } from "./helpers/kiemTraChanLe.js";
// import { kiemTraSoDuong } from "./helpers/kiemTraSoDuong.js";
import { fetchApi } from "./helpers/fetchApi.js";

// Callbacks
// Dạng thường
// function ham1() {
//     console.log("Hàm 1");
// }

// function ham2() {
//     console.log("Hàm 2");
// }

// ham1();
// ham2();

// Dạng callback
// function ham1(callback) {
//     console.log("Hàm 1");
//     console.log(callback);
//     callback();
// }

// function ham2() {
//     console.log("Hàm 2");
// }

// ham1(ham2);

// Ví dụ khác
// tong(10, 20, kiemTraSoDuong);
// tong(10, 20, kiemTraChanLe);
// End Callbacks

// Promise
// Ví dụ 1:
// var a = 10;

// var promise = new Promise((resolve, reject) => {
//     if(a !== undefined && a !== null && a !== "") {
//         resolve(a);
//     } else {
//         reject(a);
//     }
// });

// promise
//     .then((success) => {
//         console.log(success);
//         return success;
//     })
//     .then((success2) => {
//         const b = 20;
//         console.log(success2 + b);
//         return success2 + b;
//     })
//     .then((success3) => {
//         const c = 30;
//         console.log(success3 + c);
//     })
//     .catch((error) => {
//         console.log("Lỗi: ", error);
//     })
//     .finally(() => {
//         console.log("Luôn vào đây!");
//     })

// Ví dụ 2:
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//         // reject();
//     }, 3000);
// });

// console.log(promise); // Pending

// setTimeout(() => {
//     console.log("Sau 1 giây: ", promise); // Pending
// }, 1000);

// setTimeout(() => {
//     console.log("Sau 2 giây: ", promise); // Pending
// }, 2000);

// setTimeout(() => {
//     console.log("Sau 3 giây: ", promise); // Fulfilled hoặc Rejected
// }, 3000);

// Ví dụ 3: Promise all
// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// let e = 50;
// let f = 60;

// let sum1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(a + b);
//     }, 3000);
// });

// let sum2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(c + d);
//     }, 4000);
// });

// let sum3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(e + f);
//     }, 6000);
// });

// Promise.all([sum1, sum2, sum3])
//     .then(([sum1, sum2, sum3]) => {
//         let sum = sum1 + sum2 + sum3;
//         console.log(sum);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Luôn vào đây!");
//     })
// End Promise

// Fetch API
// const fetchApi = (url) => {
//     const result = fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             return data;
//         });
//         return result;
// }

// Get Categorys
// fetchApi("https://dummyjson.com/products/categories")
//     .then(data => {
//         let htmls = "";
//         data.forEach(item => {
//             htmls += `
//                 <div class="category-item">${item.name}</div>
//             `; 
//             // console.log(item.name);
//         });
//         // console.log(htmls);
//         // console.log(data);
//         const divCategory = document.querySelector("#category");
//         divCategory.innerHTML = htmls;
//     })
// End Get Categorys

// Get Products
// fetchApi("https://dummyjson.com/products")
//     .then (data => {
//         // console.log(data.products);
//         let htmls = "";
//         data.products.forEach(item => {
//             htmls += `
//                 <div class="product-item">
//                     <img src="${item.thumbnail}" alt="${item.title}">
//                     <h3>${item.title}</h3>
//                     <p>${item.price}</p>
//                 </div>
//             `;
//         });
//         const divProducts = document.querySelector("#products");
//         divProducts.innerHTML = htmls;
//     })
// End Get Products
// End Fetch API

// Async/Await
fetchApi("http://localhost:3000/products/")
    .then (data => {
        // console.log(data.products);
        let htmls = "";
        data.forEach(item => {
            htmls += `
                <div class="product-item">
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                </div>
            `;
        });
        const divProducts = document.querySelector("#products");
        divProducts.innerHTML = htmls;
    })
// End Async/Await

// JSON server & Postman
// End JSON server & Postman