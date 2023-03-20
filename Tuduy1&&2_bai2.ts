// Khai báo thư viện
import { question } from "readline-sync";
// Input
let a: Number = Number(question("Nhap mot so: "));
// Output 
if (a < 0) 
{ 
    console.log("Yes");
}
else {
    console.log("No");
}
