// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap canh a: "));
let b: Number = Number(question("Nhap canh b: "));
let c: Number = Number(question("Nhap canh c: "));
// Output 
if( Math.pow(Number(a),2) == Math.pow(Number(b),2)+Math.pow(Number(c),2) 
|| Math.pow(Number(b),2) == Math.pow(Number(a),2)+Math.pow(Number(c),2) 
|| Math.pow(Number(c),2) == Math.pow(Number(a),2)+Math.pow(Number(b),2)){ // Kiem tra 3 canh cua tam giac deu
    console.log("Yes");
}
else {
    console.log("No");
}
