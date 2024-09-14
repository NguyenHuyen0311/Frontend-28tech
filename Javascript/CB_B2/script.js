// If Else
// var a = 7; 
// var a = 0; 
// var a = ""; 
// var a = null; 

// if (a) {
//     console.log("a lớn hơn 5");
// }

// var diemThi = 6;

// if(diemThi >= 8) {
//     console.log("Học sinh giỏi");
// } else if (diemThi < 8 && diemThi >= 6.5) {
//     console.log("Học sinh khá");
// } else if (diemThi < 6.5 && diemThi >= 4) {
//     console.log("Học sinh trung bình");
// } else {
//     console.log("Ở lại lớp");
// }

// var a = 10;
// var b = 20;

// if(a != undefined && b != undefined) {
//     if(a == b) {
//         console.log("a bằng b");
//     } else {
//         console.log("a khác b");
//     }
// }  else {
//     console.log("a hoặc b chưa được gán giá trị");
// }

// var age = 16;

// var result = age >= 18 ? "Đã đủ 18 tuổi" : "Chưa đủ 18 tuổi";

// console.log(result);
// End If Else

// Switch Case
// var a = 3;

// switch (a) {
//     case 1:
//     case 2:
//     case 3:
//         console.log(" <= 3");
//         break;
//     case 4:
//         console.log("Đây là giá trị 4");
//         break;
//     default:
//         console.log("Không xác định");
//         break;
// }
// End Switch Case

// Vòng lặp For
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (var i = 0; i < 10; i+=3) {
//     console.log(i);
// }

// for (var i = 9; i >= 0; i--) {
//     console.log(i);
// }
// End Vòng lặp For

// Vòng lặp For In (Object hoặc array, string)
// var inforUser = {
//     fullName: "Nguyễn Thị Huyền",
//     age: 18,
//     email: "huyenmeroria@gmail.com",
//     phone: "0966556026"
// };

// var keyTest = "email";

// console.log(inforUser.email);
// console.log(inforUser[keyTest]);


// for (const key in inforUser) {
//     console.log(key, inforUser[key]);
// }
// End Vòng lặp For In

// Vòng lặp For Of
// var listUser = [
//     "Nguyễn Thị Huyền",
//     "Phạm Hoài Nam",
//     "Nguyễn Đức Luật"
// ];

// for (var item of listUser) {
//     console.log(item);
// }

// var listUser = [
//     {
//         fullName: "Nguyễn Thị Huyền",
//         age: 20
//     },
//     {
//         fullName: "Phạm Hoài Nam",
//         age: 19
//     },
//     {
//         fullName: "Nguyễn Đức Luật",
//         age: 22
//     }
// ];

// for (var item of listUser) {
//     console.log(item);
//     for (key in item) {
//         console.log(item[key]);
//     }
//     console.log("----------------");
// }
// End Vòng lặp For Of

// Vòng lặp While
// While
// var i = 0;

// while(i < 10) {
//     console.log(i);
//     i++;
// }
// End While

// do while
// var i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i <= 3);
// End do while
// End Vòng lặp While

// Break
// for(var i = 0; i < 10; i++) {
//     if (i == 5) {
//         break;
//     }
//     console.log(i);
// }
// End Break

// Continue
// for(var i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }
// End Continue

// Các cách khai báo biến
// Từ khóa var (biến toàn cục)
// var a = 10;
// var b = 20;
// var c = a + b;

// console.log(c);
// End Từ khóa var (biến toàn cục)

// Từ khóa let (trong khối khai báo)
// var a = 10;
// if (a == 10) {
//     let b = 20;
//     b = 30; // gán lại được giá trị
//     console.log(b);
// }
// console.log(b); // Lỗi
// End Từ khóa let (trong khối khai báo)

// Từ khóa const (trong khối khai báo)
// var a = 10;
// if (a == 10) {
//     const b = 20;
//     b = 30; // không gán lại được giá trị
//     console.log(b);
// }
// console.log(b); // Lỗi
// End Từ khóa const (trong khối khai báo)

// Khai báo biến k cần dùng từ khoá (không nên)
// a = 20;
// console.log(a);
// End Khai báo biến k cần dùng từ khoá
// End Các cách khai báo biến