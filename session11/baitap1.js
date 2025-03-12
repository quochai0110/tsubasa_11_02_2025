/* 
    viết chương trình cho phép người dùng nhập vào năm
    kiểm tra xem năm đó có phải là năm nhuận hay không?
    thế nào là năm nhuận:
        + là năm chia hết cho 4
            + nếu chia hết cho 100 thì phải chia hết cho 400
        1100 không phải năm nhuận vì chia hết cho 100 nhưng không chia hết cho 400

*/
// B1: lấy giá trị người dùng nhập vào
 let year = prompt("mời bạn nhập năm cần kiểm tra");
 if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("năm nhuận");  
        }else{
            console.log("không phải năm nhuận");
        }
    }else{
        console.log("là năm nhuận");
    }
 }else{
    console.log("không phải năm nhuận");
    
 }