// Hello World
// var button = document.querySelector("button");
//     button.onclick = function() {
//         alert("Hello World!");
//     }

// Variables
// var a = 10;
// var b = 20;

// var c = a + b;

// console.log(c); 

// var fullName = "Nguyễn Thị Huyền";
// console.log(fullName);
// End Variables

// Operators (Toán tử)
// Toán tử số học
// var a = 10;
// var b = 20;
// var d = "20";

// var c = a + d;
// console.log(c);

// var e = a - b;
// console.log(e);

// var f = a * d;
// console.log(f);

// var g = a / b;
// console.log(g);

// var h = a % b;
// console.log(h);

// var i = a ** b;
// console.log(i);

// var a = 10;
// var b = ++a;
// var b = a++;
// var b = a++ + ++a + a++ + a++ + ++a;
//     // = 10 + 12 + 12 + 13 + 15 = 62

// console.log(b);

// var b = --a;
// var b = a--;
// var b = a-- - a++ + a--;
//     // = 10 - 9 + 10 = 11
// var b = --a + a-- - ++a + a-- - a++ + ++a;
//     // = 9 + 9 - 9 + 9 - 8 + 10 = 20

// console.log(b);

// Hết Toán tử số học

// Toán tử gán
// var fullName = "Nguyễn Thị Huyền";
// var b = "Ng Huyền";

// b = fullName;

// console.log(b);

// var c = 20;
// var d = 10;
// d += c; // d = d + c
// d -= c; // d = d - c
// d *= c; // d = d * c
// d /= c; // d = d / c
// d %= c; // d = d % c

// console.log(d);
// Hết Toán tử gán

// Toán tử so sánh
// var a = 8;
// var b = 9;
// if(a > b) {
//     console.log("a lớn hơn b");
// } else {
//     console.log("a nhỏ hơn b");
// }

// var a = 10;
// var b = "10";
// if(a !== b) {
//     console.log("a khác b");
// } else {
//     console.log("a bằng b");
// }
// Hết Toán tử so sánh

// Toán tử logic
// var a = 10;
// var b = 10;
// var c = 30;

// if(a == b && b == c) {
//     console.log("a = b = c");
// } else {
//     console.log("Khác nhau");
// }

// if(a == b || b == c) {
//     console.log("OK");
// } else {
//     console.log("False");
// }

// var e = true;
// var f = false;

// console.log(!e);
// console.log(!f);
// Hết Toán tử logic
// End Operators (Toán tử)

// Data Types (Kiểu dữ liệu)
// Nguyên thuỷ (Primitive Data)
// var a = 10;
// var b = "test";
// var c = 'test2';
// var d = `test3`;
// var e = true;
// var f;
// var g = null;

// console.log(f);
// console.log(g);
// Hết Nguyên thuỷ (Primitive Data)

// Dữ liệu phức tạp (Complex Data)
// function sum(a, b) {
//     console.log(a+b);
// }

// sum(10, 20);

// var infoUser = {
//     name: 'Nguyễn Thị Huyền',
//     age: 21,
//     email: "huyenmeroria@gmail.com",
//     phone: "0966556026",
//     sum: function(a, b) {
//         alert(a+b);
//     }
// }

// console.log(infoUser.name);
// console.log(infoUser.age);
// console.log(infoUser.email);
// console.log(infoUser.phone);

// infoUser.sum(10, 20);

// var listUser = [
//     "Nguyễn Thị Huyền",
//     "Vũ Công Chiến",
//     "Vũ Hồng Phong"
// ]

// console.log(listUser);
// console.log(listUser[1]);
// listUser.sum = function(a, b) {
//     alert(a+b);
// }
// console.log(listUser.sum(10, 20));
// Hết Dữ liệu phức tạp (Complex Data)
// End Data Types (Kiểu dữ liệu)

// Một số hàm built-in
// alert("Xin chào các bạn");

// var result = confirm("Bạn đủ 18 tuổi chưa?");

// if(result === true) {
//     console.log("Bạn được mua bia");
// } else {
//     console.warn("Bạn chưa đủ tuổi");
// }
// console.log(result);

// var result2 = prompt("Nhập tên của bạn: ", "Nguyễn Thị Huyền");

// console.log(result2);

// setTimeout(function() {
//     console.log("Bạn vừa đợi 5 giây");
// }, 5000);

// var counter = 0;

// setInterval(function() {
//     console.log(counter);
//     counter++;
// }, 3000);
// End Một số hàm built-in

// Typeof
// var a = 10;
// var b = "Nội dung...";
// var c;
// var d = null;
// var e = true;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);

// if((typeof a) == "number") {
//     console.log("Đây đúng là 1 số");
// }
// End Typeof

// Làm việc với String
// Length
// var a = "Nguyễn Thị Huyền";
// console.log(a.length);

// indexOf()
// var myString = `Xin chào! Tôi tên Huyền. Tôi năm nay 20 tuổi.`;
// console.log(myString.indexOf("Tôi")); // Trả về 10
// console.log(myString.indexOf("Hải")); // Trả về -1
// console.log(myString.indexOf("Huyền")); // Trả về 18
// console.log(myString.indexOf("huyền")); // Trả về -1
// console.log(myString.indexOf("Tôi", 11)); // Trả về 25

// lastIndexOf()
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 20 tuổi.`;
// console.log(myString.lastIndexOf("Tôi", 24)); // Trả về 23
// console.log(myString.lastIndexOf("Tôi", 22)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 10)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 9)); // Trả về -1

// slice()
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 20 tuổi.`;
// console.log(myString.slice(10, 21)); // Tôi tên Nam
// console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
// console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
// console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
// console.log(myString); // Vẫn giữ nguyên chuỗi gốc

// replace()
// var myString = `Xin chào! Tôi tên Huyền. Tôi năm nay 20 tuổi.`;
// console.log(myString.replace("Tôi", "Mình"));
// console.log(myString.replace(/Tôi/g, "Mình")); // cú pháp regex

// toUpperCase() và toLowerCase()
// var myString = `Xin chào! Tôi tên Huyền. Tôi năm nay 20 tuổi.`;
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// trim()
// var myString = ` Xin chào! Tôi tên Huyền. Tôi năm nay 20 tuổi. `;
// console.log(myString);
// console.log(myString.trim());

// chartAt()
// var myString = `Nguyễn Thị Huyền`;
// console.log(myString.charAt()); // Lấy ký tự đầu tiên
// console.log(myString.charAt(0)); // Lấy ký tự đầu tiên
// console.log(myString.charAt(1)); // Lấy ký tự thứ 2
// console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng

// split()
// var myString = `HTML5, CSS3, Javascript`;
// console.log(myString.split()); // Cả string là 1 phần tử
// console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
// console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử   
// End Làm việc với String

// Làm việc với Number
// isNaN()
// var a = 10;
// var b = "Test";
// var result = a / b;
// console.log(result); // Trả về NaN
// console.log(typeof result); // number
// console.log(isNaN(result)); // Trả về true

// toString()
// var a = 10;
// var b = a.toString();
// var c = (10).toString();
// console.log(a); // Trả về số 10
// console.log(typeof a); // Trả về kiểu number
// console.log(b); // Trả về chuỗi 10
// console.log(typeof b); // Trả về kiểu string
// console.log(c); // Trả về chuỗi 10
// console.log(typeof c); // Trả về kiểu string

// toFixed()
// var a = 12.3456;
// console.log(a.toFixed()); // Trả về 12 (Dạng String)
// console.log(a.toFixed(0)); // Trả về 12
// console.log(a.toFixed(1)); // Trả về 12.3
// console.log(a.toFixed(2)); // Trả về 12.35
// console.log(a.toFixed(3)); // Trả về 12.346

// var result = parseFloat(a.toFixed(3)); // Dạng số
// console.log(result);
// End Làm việc với Number

// Làm việc với Array
// toString()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.toString());
// // Trả về: "HTML5,CSS3,Javascript"

// join()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.join()); // Trả về: "HTML5,CSS3,Javascript"
// console.log(list.join(",")); // Trả về: "HTML5,CSS3,Javascript"
// console.log(list.join("")); // Trả về: "HTML5CSS3Javascript"
// console.log(list.join(", ")); // Trả về: "HTML5, CSS3, Javascript"
// console.log(list.join(" - ")); // Trả về: "HTML5 - CSS3 - Javascript"

// pop()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.pop()); // Trả về: "Javascript"
// console.log(list); // Trả về: ["HTML5", "CSS3"]

// push()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]

// shift()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.shift()); // Trả về: "HTML5"
// console.log(list); // Trả về: ["CSS3", "Javascript"]

// unshift()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.unshift("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);
// // Trả về: ["Bootstrap 4", "ReactJS", "HTML5", "CSS3", "Javascript"]

// splice()
// Ví dụ 1: Chèn phần tử mới vào mảng
    // var list = ["HTML5", "CSS3", "Javascript"];
    // console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Trả về: []
    // console.log(list); // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS", "Javascript"]

// Ví dụ 2: Xóa phần tử trong mảng
    // var list = ["HTML5", "CSS3", "Javascript"];
    // console.log(list.splice(1, 1)); // Trả về: ["CSS3"]
    // console.log(list); // Trả về: ["HTML5", "Javascript"]

// Ví dụ 3: Chèn và xóa phần tử trong mảng
    // var list = ["HTML5", "CSS3", "Javascript"];
    // console.log(list.splice(1, 1, "Bootstrap 4", "ReactJS")); // Trả về: ["CSS3"]
    // console.log(list); // Trả về: ["HTML5", "Bootstrap 4", "ReactJS", "Javascript"]

// concat()
// var list = ["HTML5", "CSS3", "Javascript"];
// var list2 = ["Bootstrap 4", "ReactJS"];
// console.log(list.concat(list2)); // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
// console.log(list); // Trả về: ["HTML5", "CSS3", "Javascript"]

// slice()
// var list = ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"];
// console.log(list.slice(3)); // Trả về: ["Bootstrap 4", "ReactJS"]
// console.log(list.slice(1, 3)); // Trả về: ["CSS3", "Javascript"]
// console.log(list.slice(-3, -1)); // Trả về: ["Javascript", "Bootstrap 4"]
// console.log(list); // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
// End Làm việc với Array