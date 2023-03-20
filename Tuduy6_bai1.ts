// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap a: "));
let b: Number = Number(question("Nhap b: "));
let c: Number = Number(question("Nhap c: "));
// Output 
if ( a <  0 && b < 0 && c < 0  ){ 
    console.log(a,b,c);
}
else if ( a <  0) {
    console.log(a);
}
if ( b <  0) {
    console.log(b);
}
if ( c <  0) {
    console.log(c);
}
