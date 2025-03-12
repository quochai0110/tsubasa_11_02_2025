let choice ;
let fullName;// tên đầy đủ
let age; // tuổi người dùng
while (choice != 10) {
    choice = Number(prompt("mời bạn nhập lựa chọn"));
    switch (choice) {
        case 1:
            // nhập tên người dùng
            fullName=prompt("mời bạn nhập tên đầy đủ");
            break;
        case 2:
            // nhập tuổi người dùng
            age= +prompt("mời bạn nhập tuổi");
            // + để ép kiểu dữ liệu từ string sang number
            break;
        case 3:
            // in tên và tuổi
            console.log("tên của bạn là ", fullName);
            
            console.log("tuổi của bạn là:", age);
            
            break;
        case 4:

            break;

        default:
            break;
    }
}