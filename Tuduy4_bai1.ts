// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap a: "));
let b: Number = Number(question("Nhap b: "));
// Output 
if (Number(a) > Number(b)) 
{ 
    console.log("Lon");
}
else if (Number(a) < Number(b)) {
    console.log("Nho");
}
else{
    console.log("Bang");
}
