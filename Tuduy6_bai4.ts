// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap a: "));
let b: Number = Number(question("Nhap b: "));
let c: Number = Number(question("Nhap c: "));
let S: Number = 0;
// Output 
if( Number(a) % 2 == 0 && Number(b) % 2 == 0 && Number(c) % 2 == 0 ){  
    S = Number(a) + Number(b) + Number(c);
}
else if ( Number(a) % 2 == 0 ) {
    S= Number(S) + Number(a);
}
if ( Number(b) % 2 == 0 ) {
    S= Number(S) + Number(b);
}
if ( Number(c) % 2 == 0) {
    S= Number(S) + Number(c);
}
console.log(S);
