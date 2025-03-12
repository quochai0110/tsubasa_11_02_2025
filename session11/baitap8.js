let day = +prompt("mời bạn nhập ngày sinh");
let month = Number(prompt("mời bạn nhập tháng"));
// let month= +prompt("mời bạn nhập tháng");

// khi nhập prom thì giá trị trả về sẽ là string "2"
// ép kiểu dữ liệu từ string sang number
let result;
switch (month) {
    case 1:
         if(day<=19){
            result="Ma Kết";
         }else{
            result="Bảo Bình";
         }
        break;
    case 2:
         if(day<=18){
            result="Bảo Bình";
         }else{
            result= "Song Ngư";
         }
        break;
    case 3:
        if(day<=20){
            result="Song Ngư"
        }else{
            result="Bạch Dương";
        }

        break;

    default:
        break;
}
