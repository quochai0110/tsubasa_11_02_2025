// tạo mảng chứa các số tự nhiên

let numbers= [5, 6, 2, 3, 8];// [5, 6, 1, 2, 3, 8]
let students=[ "hoa","hồng","nhung","minh anh"];
// students.splice(2, 0,"nhung" );
// students[0]="minh thu";
// students.splice(1, 1,"hồng vân" );
students.splice(2, 1)
console.log(students);

// console.log(students[0]);

// console.log(numbers[1]);
/* 
    CRUD
    1. C CREATE THÊM
        push(): thêm phần tử vào cuối mảng
        unshift(): thêm phần tử vào đầu mảng
        splice(): thêm phần tử vào vị trí mong muốn
    2. R READ HIỂN THỊ
    3. U UPDATE CẬP NHẬT
        - cập nhật theo vị trí
        - dùng splice để cập nhật
    4. D DELETE XÓA
        - pop(): xóa phần tử cuối
        - shift(): xóa phần tử đầu
        - splice(): xóa theo vị trí mong muốn
*/
for (let i = 0; i < numbers.length; i++) {
        // console.log(`phần tử thứ ${i+1} là: ${numbers[i]}`);
        // literal || template string
        // truyền giá trị của biến vào trong string
}
// numbers.push(9);
// thêm phần tử có giá trị là 9 vào cuối mảng
numbers.splice(2, 0, 1);
console.log("numbers",numbers);




