// khai báo đối tượng sinh viên
let student={
    address:"Hà Nội",
    key:123
};
/* 
    CRUD với object 
    1. CREATE_ thêm thuộc tính cho đối tượng
    2. READ _ hiển thị các thuộc tính và giá trị
        + thuộc tính: for_in
        + giá trị TÊN_ĐT[key]
    3. UPDATE_ cập nhật giá trị của thuộc tính
    4. DELETE_ xóa thuộc tính
        delete TÊN_ĐT.thuộc tính
*/
 student.name="Minh Thu";// thêm thuộc tính name cho d/t student
 student["age"]=20;// thêm thuộc tính age:20 cho d/t student
//  console.log("student",student);
for (const key in student) {
    // console.log("các thuộc tính:",key);
    // console.log("giá trị các thuộc tính", student.key);
}
student.address="Hồ Chí Minh";
delete student.key;// xóa thuộc tính key của đối tượng student
console.log("student",student);

 