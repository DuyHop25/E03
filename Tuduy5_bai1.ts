// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap a: "));
let b: Number = Number(question("Nhap b: "));
// Output 
if (a == 0) { 
    if (b == 0) { 
        console.log("VSN");
    }   
    else{
        console.log("VN");
    }
}
else{
    console.log("Phuong trinh co 1 nghiem = ", -b / Number(a));
}
