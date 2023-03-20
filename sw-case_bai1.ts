// Khai báo thư viện
import { question } from "readline-sync";
// Input
let unit: Number = Number(question("Nhap 1 so: "));
// Output 
switch(unit){
    case 0: {
        console.log("không");break;
    }
    case 1: {
        console.log("một");break;
    }
    case 2: {
        console.log("hai");break;
    }
    case 3: {
        console.log("ba");break;
    }
    case 4: {
        console.log("bốn");break;
    }
    case 5: {
        console.log("năm");break;
    }
    case 6: {
        console.log("sáu");break;
    }
    case 7: {
        console.log("bảy");break;
    }
    case 8: {
        console.log("tám");break;
    }
    case 9: {
        console.log("chín");break;
    }
    default: {
        console.log("không đọc được");break;
    }
}