// Storage API
// localStorage 
// const input = document.querySelector("input");
// const buttonSend = document.querySelector("#send");
// const buttonClear = document.querySelector("#clear");
// const buttonUp = document.querySelector("#up");
// const buttonClearAll = document.querySelector("#clearAll");
// const resultDiv = document.querySelector("#result");

// buttonSend.addEventListener("click", () => {
//     const name = input.name;
//     const value = input.value;

//     if(value) {
//         localStorage.setItem(name, value);
//         console.log(name, value);

//         const email = localStorage.getItem("email");
//         resultDiv.innerHTML = email;
//     }
// })

// buttonClear.addEventListener("click", () => {
//     localStorage.removeItem("email");
//     resultDiv.innerHTML = "";
// })

// let count = 0;

// buttonUp.addEventListener("click", () => {
//     localStorage.setItem(`key${count}`, `value${count}`);
//     count++;
// })

// buttonClearAll.addEventListener("click", () => {
//     localStorage.clear();
// })

// for(let i = 0; i < localStorage.length; i++) {
//     // console.log(i);
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     console.log(key, value);
// }
// End localStorage 

// sessionStorage
// sessionStorage.setItem("token", "tevbsnkq3343dsvxbnakxscs214sxm892q2");
// End sessionStorage
// End Storage API

// Closure (bao đóng)
// // const c = 10;

// const tinhToan = () => {
//     // const c = 20;
//     const tong = (a, b) => {
//         // const c = 30;
//         // return a + b + c;
//         return a + b;
//     }

//     const hieu = (a, b) => {
//         return a - b;
//     }

//     const tich = (a, b) => {
//         return a * b;
//     }

//     const thuong = (a, b) => {
//         return a / b;
//     }

//     return {
//         tong: tong,
//         hieu: hieu,
//         tich: tich,
//         thuong: thuong
//     };
// };

// const tt = tinhToan();
// // console.log(tt);
// // console.log(tt(20, 30));

// console.log(tt);
// console.log(tt.tong(20, 30));
// console.log(tt.hieu(20, 30));
// console.log(tt.tich(20, 30));
// console.log(tt.thuong(20, 30));


// const info = () => {
//     let fullName = "Nguyễn Thị Huyền";

//     const getFullName = () => {
//         return fullName;
//     }

//     const setFullName = (string) => {
//         fullName = string;
//     }

//     return {
//         get: getFullName,
//         set: setFullName
//     };
// }

// const infoUser = info();

// console.log(infoUser);
// console.log(infoUser.get());
// console.log(infoUser.set("Nguyễn Thị Thúy"));
// console.log(infoUser.get());
// End Closure (bao đóng)