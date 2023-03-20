// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap mot so: "));
// Output 
if (Number(a) % 2 == 0) 
{ 
    console.log("Chan");
}
else {
    console.log("Le");
}
