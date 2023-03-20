// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap a: "));
let b: Number = Number(question("Nhap b: "));
let c: Number = Number(question("Nhap c: "));
let dem: Number = 0;
// Output 
if( a < 0 && b < 0 && c < 0 ){  
    dem = Number(dem) + 3;
}
else if ( a < 0) {
    dem= Number(dem) + 1;
}
if ( b < 0) {
    dem= Number(dem)  + 1;
}
if ( c < 0) {
    dem= Number(dem)  + 1;
}
console.log(dem);
