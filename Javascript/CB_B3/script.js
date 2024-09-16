// Function (Hàm)
// function tinhTong(a, b) {
//     return (a + b);
// }

// let ketQua = tinhTong(10, 20);
// console.log(ketQua);

// function tinhTong() {
//     console.log(arguments);
//     let tong = 0;
//     for (item of arguments) {
//         // console.log(item);
//         tong += item;
//     }
//     return tong;
// }

// let ketQua = tinhTong(10, 20, 30, 40);
// console.log(ketQua);

// function func() {
//     console.log("Hàm 1");
// }

// function func() {
//     console.log("Hàm 2");
// }

// func();

// function func1() {
//     var a = 10;
//     console.log(a);
// }

// console.log(a); // lỗi

// func1();

// function funcA() {
//     console.log("Hàm A");

//     function funcB() {
//         console.log("Hàm B");
//     }

//     funcB();
// }

// funcA();
// funcB(); // lỗi

// Declaration function (Hàm định nghĩa)
// let ketQua = tinhTong(10, 20, 30, 40);
// console.log(ketQua);

// function tinhTong() {
//     let tong = 0;
//     for (item of arguments) {
//         tong += item;
//     }
//     return tong;
// }
// End Declaration function (Hàm định nghĩa)

// Expression function (Hàm biểu thức)
// let ketQua = tinhTong(10, 20, 30, 40);
// console.log(ketQua); // lỗi

// const tinhTong = function() {
//     let tong = 0;
//     for (item of arguments) {
//         tong += item;
//     }
//     return tong;
// }

// let ketQua = tinhTong(10, 20, 30, 40);
// console.log(ketQua);
// End Expression function (Hàm biểu thức)

// Arrow function (Hàm mũi tên)
// tinhTong(); // lỗi

// const tinhTong = (...args) => {
//     console.log(args);
    
//     let tong = 0;
//     for (item of args) {
//         tong += item;
//     }
//     return tong;
// }

// let ketQua = tinhTong(10, 20, 30, 40);
// console.log(ketQua);
// End Arrow function (Hàm mũi tên)

// Ví dụ 1: Tổng các số chẵn
// var mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const tongChan = (array) => {
//     let tong = 0;
//     for (const number of array) {
//         if(number % 2 == 0) {
//             tong += number;
//         }
//     }
//     return tong;
// }

// const ketQua = tongChan(mang);
// console.log(ketQua);
// End Ví dụ 1

// Ví dụ 2: Viết chương trình cho người dùng nhập vào số n lớn hơn 0. Sau đó dựa vào n tính giá trị bieuThuc = 1/n + 2/n + 3/n + ... + n/n
// function tinhBieuThuc(n) {
//     console.log(n);
//     let tong = 0;
//     for (let i = 1; i <= n; i++) {
//         tong += i/n;
//     }
//     return tong;
// }

// let n; 

// do {
//     n = prompt("Nhập n");
//     n = parseInt(n);
//     // console.log(n);
//     if(n <= 0) {
//         console.log("Vui lòng nhập số lớn hơn 0");
//     } else {
//         let ketQua = tinhBieuThuc(n);
//         console.log(ketQua);
//     }
// } while (n <= 0);
// End Ví dụ 2
// End Function (Hàm)

// Try Catch
// let a = 10;

// try {
//     console.log(a);
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log("Luôn chạy vài đây!");
// }
// End Try Catch

// Làm việc với Object nâng cao
// Cách thêm 1 key mới và xóa 1 key trong object
// let infoUser = {
//     fullName: "Nguyễn Thị Huyền",
//     age: 20,
//     password: "123456"
// };

// infoUser.email = "huyenmeroria@gmail.com";
// infoUser["dia-chi"] = "306Đ Mỹ Đình, Mỹ Đình 1, Hà Nội";

// delete infoUser.age;

// console.log(infoUser);
// console.log(infoUser.email);
// console.log(infoUser["dia-chi"]);
// End Cách thêm 1 key mới và xóa 1 key trong object
// End Làm việc với Object nâng cao

// Làm việc với Array nâng cao
// forEach()
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let tong = 0;

// numbers.forEach(function(item, index, array) {
//     // console.log(item, index, array);
//     tong += item;
//     numbers[index] = 20;
// });

// console.log(tong);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ketQua = numbers.forEach(item => {
//     return item; // undefined
// });

// console.log(ketQua);
// End forEach()

// every()
// const monHoc = [
//     {
//         ten: "Toán",
//         diem: 8.6
//     },
//     {
//         ten: "Lý",
//         diem: 9.2
//     },
//     {
//         ten: "Hóa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 7.8
//     }
// ]

// const hocSinhGioi = monHoc.every(function(item) {
//     return item.diem >= 8;
// });

// console.log(hocSinhGioi);

// if(hocSinhGioi) {
//     console.log("Đây là học sinh giỏi");
// } else {
//     console.log("Đây không phải là học sinh giỏi");
// }
// End every()

// some()
// const monHoc = [
//     {
//         ten: "Toán",
//         diem: 8.6
//     },
//     {
//         ten: "Lý",
//         diem: 9.2
//     },
//     {
//         ten: "Hóa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 3.8
//     }
// ]
// const oLaiLop = monHoc.some((item) => {
//     return item.diem < 4;
// });

// // console.log(oLaiLop);

// if (oLaiLop === true) {
//     console.log("Ở lại lớp!");
// }else {
//     console.log("Lên lớp!");
// }
// End some()

// find() & filter()
// const monHoc = [
//     {
//         ten: "Toán",
//         diem: 8.6
//     },
//     {
//         ten: "Lý",
//         diem: 9.2
//     },
//     {
//         ten: "Hóa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 3.8
//     },
//     {
//         ten: "Tin",
//         diem: 5
//     }
// ]

// const xemDiemTin = monHoc.find((item) => {
//     return item.ten === "Tin";
// });

// // console.log(xemDiemTin);
// // console.log(xemDiemTin.diem);

// if(xemDiemTin) {
//     console.log("Điểm tin của bạn là: ", xemDiemTin.diem);
// } else {
//     console.log("Không tìm thấy môn học");
// }

// const xemDiemTin = monHoc.filter((item) => {
//     return item.ten === "Tin";
// });

// console.log(xemDiemTin);
// End find() & filter()

// map()
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let ketQua = numbers.map(item => {
//     return undefined; // mảng mới
// });

// console.log(ketQua);

// const monHoc = [
//     {
//         ten: "Toán",
//         diem: 8.6
//     },
//     {
//         ten: "Lý",
//         diem: 7.2
//     },
//     {
//         ten: "Hóa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 4.8
//     }
// ];

// let danhSachMoi = monHoc.map(item => {
//     // console.log(item);
//     let hocLuc = "";
//     if(item.diem >= 8) {
//         hocLuc = "Giỏi";
//     } else if (item.diem < 8 && item.diem >= 6.5) {
//         hocLuc = "Khá";
//     } else {
//         hocLuc = "Trung bình";
//     }
//     return {
//         ten: item.ten,
//         hocLuc: hocLuc
//     };
// });

// console.log(monHoc);
// console.log(danhSachMoi);
// End map()

// reduce()
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let tong = numbers.reduce((total, item) => {
//     // console.log(total);
    
//     return total + item;
// });

// let trungBinh = numbers.reduce((total, item) => {
//     console.log(total);
    
//     return total + item/numbers.length;
// }, 0);

// console.log("---------------------");
// console.log(tong);
// console.log(trungBinh);

// const monHoc = [
//     {
//         ten: "Toán",
//         diem: 8.6
//     },
//     {
//         ten: "Lý",
//         diem: 9.2
//     },
//     {
//         ten: "Hóa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 7.8
//     }
// ];

// let tong = monHoc.reduce((total, item) => {
//     // console.log(total);

//     return total + item.diem;
// }, 0);

// let trungBinh = monHoc.reduce((total, item) => {
//     console.log(total);
    
//     return total + item.diem/monHoc.length;
// }, 0);

// console.log("---------------------");
// console.log(tong);
// console.log(trungBinh);
// End reduce()
// End Làm việc với Array nâng cao