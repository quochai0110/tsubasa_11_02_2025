// khi kết thúc dòng nên chấm phẩy
// code có hàng có lối
// khi đặt tên biến theo quy tắc, các tên biến đặt có ý nghĩa, camel_case

/* 
    giải phương trình bậc 2
    a X^2+ bx + c = 0;
    if(a==0){
        // giải phương trình bậc nhất: bx+c=0;
    }else{
        a khác 0
    }

*/
let a = prompt("mời bạn nhập giá trị của a");
let b = prompt("mời bạn nhập giá trị của b");
let c = prompt("mời bạn nhập giá trị của c");
if(a==0){
    // giải phương trình bậc nhất bx+c=0;
    if(b!=0){
        console.log("phương trình có 1 nghiệm x=", -c/b);
    }else{
       if(c==0){ // 0.x + 0=0
        console.log("phương trình vô số nghiệm");
       } else{
        console.log("phương trình vô nghiệm");
       }
    }
}else{
    let delta= b**2 - 4*a*c;
    if(delta<0){
        console.log("phương trình vô nghiệm");
    }else if(delta==0){
        console.log("phương trình có nghiệm kép x1=x2=",-b/(2*a));
    }else{
        // phương trình có 2 nghiệm phân biệt
        console.log("x1=",(-b+Math.sqrt(delta))/(2*a));
        console.log("x2=",(-b-Math.sqrt(delta))/(2*a));
    }
}
