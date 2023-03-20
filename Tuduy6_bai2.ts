// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap a: "));
let b: Number = Number(question("Nhap b: "));
let c: Number = Number(question("Nhap c: "));
// Output 
if( Number(a) % 2 == 0 && Number(b)  % 2 == 0 && Number(c) % 2 == 0 ){ 
    console.log(a,b,c);
}
else if ( Number(a) % 2 == 0) {
    console.log(a);
}
if ( Number(b) % 2 == 0) {
    console.log(b);
}
if ( Number(c) % 2 == 0) {
    console.log(c);
}
