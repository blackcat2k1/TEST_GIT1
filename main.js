console.log("hello");

/**
 * Biến
 */
// string
var username ="Dang Ngoc Chien";
var address="112 Thu Duc";

// number
var age=18;

// boolean
var status = true;

//NULL
var numberStudent = null;

// undefined
var people;

var firstName="Dang";
var lastName="Chien";


// console.log(firstName,lastName)
// console.log(username , address);
// // console.log("ten la: " + username);
// // console.log("dia chi: " + address);

// Hoisting
var fullName="Dang Ngoc Chien";
console.log("fullname: " + fullName);

isLogin = true;
console.log("isLogin: " + isLogin);

const PI = 3.14;



//  Câu lệnh đk

// so sánh kiểu dữ liệu và giá trị
if("1"===1){
    console.log("DK dung");
} else{
    console.log("DK sai");
}

//so sánh giá trị
if("1"==1){
    console.log("DK dung");
} else{
    console.log("DK sai");
}

//toán tử 3 ngôi
//Cú pháp: <Điều_kiện>? <câu_lệnh_khi_đúng> : <câu_lệnh_khi_sai>;
1==1? console.log("DK dung"):console.log("DK sai");
1==="1"? console.log("DK dung"):console.log("DK sai");

var btA=true;
var btB=false;
console.log("Ket qua &&: ", btA && btB)
console.log("Ket qua ||: ", btA || btB)
console.log("Phu dịnh của btA: ", !btA)

switch (0){
    case 0:
        console.log("This is 0");
        break;
    case 1:
        console.log("This is 1");
        break;
    case 2:
        console.log("This is 2");
        break;
    default:
        console.log("not defined")
        break;
}

var list=["Nguyen","Tay","Long","Nam"];
console.log(list[0]);

//Vòng lập forfu

for(var i=0;i<list.length;i++){
    console.log(list[i]);
}

var number1=10;
var number2=5;
var number3=20;
var number4=7;
var number5=201;
var number6=77;

var total = number1 + number2;
console.log("Tong la: ",total);
var total2 = number3 + number4;
console.log("Tong la: ",total2);
var total3 = number5 + number6;
console.log("Tong la: ",total3);

//Hàm
//Hàm không có tham số
//Hàm có tham số
//Hàm ko có gt trả về
//Hàm có gt trả về
// function tinhTong(){
//     var sum = number1 + number2;
//     console.log("sum la: ", sum);
// }

// function tinhTong34(){
//     var sum = number3 + number4;
//     console.log("sum la: ", sum);
// }

// tinhTong();
// tinhTong34();

function Tong(numberX,numberY){
    var sum = numberX + numberY;
    return sum;
}

// Tong(number1,number2);
// Tong(number2,number6);
// Tong(50,100);
var totalX=Tong(50,50);
console.log("Tong la: ",totalX);

//Bài tập tính điểm trung bình: Toan, Ly, Hoa.
//dtb =( toan + ly + hoa )/3
//xếp loại:
//9->10 =>Xuất sắc
//8->9 =>Giỏi
//7->8 => Khá
//5->7 => TB
//<5 => yếu


function tinhDTB(toan, ly, hoa){
    return (toan + ly + hoa) / 3;
}

function xepLoai(dtb){
    if(9 <= dtb && dtb <= 10){
        return "Xuat sac";
    } else if(8 <= dtb && dtb < 9){
        return "Gioi";
    } else if(7 <= dtb && dtb < 8){
        return "Kha";
    } else if(5 <= dtb && dtb < 7){
        return "TB";
    } else {
        return "Yeu";
    }
}

var dtb = tinhDTB(9, 9, 9);
console.log(xepLoai(dtb)) ;

/**
 * DOM
*/
var txtInput = document.getElementById("txtInput").value;
console.log(txtInput);

var pText = document.getElementById("pTxt");
console.log(pText.innerHTML);


// C1
// function eventClick(){
//     console.log("That is right");
//     var x=document.getElementById("txtInput").value;
//     console.log(x);
// }

// C2
// document.getElementById("ptnclick").onclick=function(){
//     console.log("That is right");
//     var x=document.getElementById("txtInput").value;
//     console.log(x);
// }

// C3:callback function
// document.getElementById("ptnclick").addEventListener("click",function(){
//     var x = document.getElementById("txtInput").value;
//     console.log(x);
// });
function demoClick (){
    var x= document.getElementById("txtInput").value;
    console.log(x);
}
document.getElementById("ptnclick").addEventListener("click",demoClick);

document.getElementById("btnNhanEmDi").addEventListener("click",function(){
    document.getElementById("NoiDung").innerHTML="Thay đổi rồi nè";
    document.getElementById("NoiDung").style.backgroundColor="aqua";
    document.getElementById("NoiDung").style.textAlign="center";
    document.getElementById("NoiDung").style.fontSize="30pt";
})

document.getElementById("disapp").addEventListener("click",function(){
    document.getElementById("NoiDung").style.display="none";
})
document.getElementById("app").addEventListener("click",function(){
    document.getElementById("NoiDung").style.display="block";
})

document.getElementById("btnDisable").addEventListener("click",function(){
    document.getElementById("btnNhanEmDi").disabled=true;
})


document.getElementById("btnRemoveDisable").addEventListener("click",function(){
    document.getElementById("btnNhanEmDi").disabled=false;
})

document.getElementById("btnBulOn").addEventListener("click",function(){
    document.getElementById("imgBulb").src="./img/imgs/pic_bulbon.gif";
})

document.getElementById("btnBulOff").addEventListener("click",function(){
    document.getElementById("imgBulb").src="./img/imgs/pic_bulboff.gif";
})

document.getElementById("login").addEventListener("click",function(){
    var a=document.getElementById("username1").value;
    var b=document.getElementById("password1").value;
    if(a==="Cybersoft" && b==="Cybersoft"){
        // changeColor("Login success","green");
        changeColor1("Login success","alert alert-success");
    } else{
        // changeColor("Login unsuccess","red");
        changeColor1("Login unsuccess","alert alert-danger");
    }
})

function changeColor(mess,bgColor){
    document.getElementById("txtThongBao").innerHTML=mess;
    document.getElementById("txtThongBao").style.display="block";
    document.getElementById("txtThongBao").style.backgroundColor=bgColor;
}
function changeColor1(mess,classes){
    document.getElementById("txtThongBao").innerHTML=mess;
    document.getElementById("txtThongBao").className=classes;
    document.getElementById("txtThongBao").style.display="block";
}

// DOM TagName
var tagName0 = document.getElementsByTagName("button")[0];
console.log(tagName0);

//DOM ClassName
var _className = document.getElementsByClassName("btn")[0];
console.log(_className);

//DOM querySelector
var _querySelector =document.querySelector("container #txtThongBao");
console.log(_querySelector);

//DOM querySelectorAll
var _querySelectorAll =document.querySelectorAll("container .form-control");
console.log(_querySelectorAll);

document.getElementById("btnTinhTienTip").addEventListener("click",function(){
   var a = document.getElementById("txtTongTien").value;
   var b = document.getElementById("slPhanTramTip").value;
   var c = document.getElementById("txtSoNguoi").value;
   ThongBao("Thông báo tiền típ mỗi người: "+ Tinh(a,b,c) )
})

function Tinh(a,b,c){
    return (a*(b/100))/c;
}
function ThongBao(mess){
    document.getElementById("txtThongBaoTienTip").innerHTML=mess;
    document.getElementById("txtThongBaoTienTip").className="";
}



























