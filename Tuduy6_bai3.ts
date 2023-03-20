// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap a: "));
let b: Number = Number(question("Nhap b: "));
let c: Number = Number(question("Nhap c: "));
let S: Number = 0;
// Output 
if( a <  0 && b < 0 && c < 0 ){  
    S = Number(a) + Number(b) + Number(c);
}
else if ( a < 0) {
    S= Number(S) + Number(a);
}
if ( b < 0) {
    S= Number(S) + Number(b);
}
if ( c < 0) {
    S= Number(S) + Number(c);
}
console.log(S);
