// Default parameters (Tham số mặc định)
// const sum = (a = 0, b = 0) => {
//     return a + b;
// }

// const sum = (a, b) => {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }

// console.log(sum(10));
// End Default parameters (Tham số mặc định)

// Spread syntax 
// const array1 = [1, 2, 3];
// const array2 = [4, 5, "6"];
// const array3 = [
//     {
//         id: 1,
//         name: "Nguyễn Thị Huyền"
//     },
//     {
//         id: 2,
//         name: "Nguyễn Thị Thúy"
//     }
// ];
// const array4 = [...array1, ...array2, ...array3];

// console.log(...array1);
// console.log(...array2);
// console.log(...array3);
// console.log(array4);

// let infoUser = {
//     fullName: "Nguyễn Thị Huyền",
//     email: "huyenmeroria@gmail.com"
// };

// let infoUpdate = {
//     phone: "0966556026",
//     age: 21
// };

// let infoFinal = {
//     ...infoUser,
//     ...infoUpdate
// };

// console.log(infoFinal);
// End Spread syntax 

// Rest parameters (Tham số "còn lại")
// const sum = (a, b, ...numbers) => {
//     console.log(numbers);
//     const result = numbers.reduce((total, item) => {
//         return total + item;
//     }, 0);
//     return a + b + result;
// };

// console.log(sum(10, 20, 30, 40, 50, 60));
// End Rest parameters (Tham số "còn lại")

// Destructuring
// let infoUser = {
//     fullName: "Nguyễn Thị Huyền",
//     email: "huyenmeroria@gmail.com"
// } || {};

// console.log(infoUser.fullName);

// const { fullName, email } = infoUser;
// console.log(fullName);
// console.log(email);
// End Destructuring

