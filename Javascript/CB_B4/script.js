// BOM Window
// console.log(window);
// console.log(window.innerHeight);
// console.log(window.innerWidth);

// let tab;

// function openTab() {
//     tab = window.open("http://127.0.0.1:5500/Javascript/CB_B4/28tech.html", "_blank", "width= 1200, height=600, top=200, left=100");
// }

// function closeTab() {
//     tab.close();
// }

// let href = window.location.href;

// setTimeout(() => {
//     console.log(href);
// }, 5000);
// End BOM Window

// BOM Screen
// let screenWidth = window.screen.width;
// let screenHeight = window.screen.height;

// setTimeout(() => {
//     console.log(screenWidth);
//     console.log(screenHeight);
// }, 5000);

// console.log(screen.width);
// console.log(screen.height);
// End BOM Screen

// BOM Location
// console.log(window.location);
// function reloadWeb() {
//     window.location.reload();
// }

// setInterval(() => {
//     window.location.reload();
// }, 5000);
// End BOM Location

// BOM History
// console.log(window.history);
// history.back(); // console
// history.foward(); // console
// history.go(3); // console
// End BOM History

// BOM Navigator
// console.log(navigator);
// End BOM Navigator

// BOM Popup
    // alert(), confirm(), prompt()
// End BOM Popup

// BOM Timing
// setTimeout(), setInterval()
// End BOM Timing

// Cookies
// Hàm thiết lập giá trị cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// Hàm để lấy một giá trị cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
    c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
    }
    }
    return "";
}

// Hàm xóa cookie
function deleteCookie(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}

function login() {
    if(true) {
        // document.cookie = 'token=daeDFVXBvsjasdFSGHAssydh';
        // document.cookie = 'email=huyenmeroria@gmail.com';
        // document.cookie = 'fullName=Nguyễn Thị Huyền';
        setCookie("token", "daeDFVXBvsjasdFSGHAssydh", 1);
        setCookie("email", "huyenmeroria@gmail.com", 1);
        setCookie("fullName", "Nguyễn Thị Huyền", 1);
    }
}

let allCookie = document.cookie;
console.log(allCookie);
let email = getCookie("email");
let token = getCookie("token");
let fullName = getCookie("fullName");
console.log(email);
console.log(token);
console.log(fullName);

function updateInfo() {
    document.cookie = 'email=huyen0311@gmail.com';
}

function deleteInfo() {
    // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    // document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    // document.cookie = "fullName=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    deleteCookie("token");
    deleteCookie("email");
    deleteCookie("fullName");
}
// End Cookies