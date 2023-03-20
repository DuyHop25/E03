// Khai báo thư viện
import { question } from "readline-sync";
// Input
let month: Number = Number(question("Nhap 1 thang: "));
// Output 
switch(month){
    case 2: {
        console.log("28");break;
    }
    case 4:case 6:case 9:case 11: {
        console.log("30");break;
    }
    default: {
        console.log("31");break;
    }
}