// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap a: "));
let b: Number = Number(question("Nhap b: "));
let c: Number = Number(question("Nhap c: "));
let dem: Number = 0;
// Output 
if( Number(a) % 2 == 0 && Number(b) % 2 == 0 && Number(c) % 2 == 0 ){  
    dem = Number(dem) + 3;
}
else if ( Number(a) % 2 == 0) {
    dem= Number(dem) + 1;
}
if ( Number(b) % 2 == 0) {
    dem= Number(dem)  + 1;
}
if ( Number(c) % 2 == 0) {
    dem= Number(dem)  + 1;
}
console.log(dem);
