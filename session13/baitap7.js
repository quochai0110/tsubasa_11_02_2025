/* 
Bài toán khai báo mảng số nguyên có sẵn các phần tử từ 10 đến 20
phần tử, thực hiện nhập vào một số nguyên để kiểm tra (k),
thực hiện đếm số lần xuất hiện của k trong mảng.
và hiển thị ra màn hình
*/
let numbers=[3,4,3,3,45,6,4,3,4,6,7,8,4,6];
// tạo biến cho người dùng nhập
let k= +prompt("mời nhập số nguyên bất kì!");
// tạo biến đếm số lần xuất hiện
let count=0;
for (let i = 0; i < numbers.length; i++) {
    if(k==numbers[i]){
        count++;// tăng giá trị count lên 1
    }
}
console.log(`phần tử ${k} xuất hiện ${count} lần!`);
