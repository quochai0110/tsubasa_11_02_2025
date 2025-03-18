/* 
    B1: đi tạo menu
    B2: tạo mảng chứa danh sách nhân viên
    B3: đi xử lý các case
*/
// tạo mảng để chứa danh sách nhân viên.
let employees = [
    {
        employeeId: 1,
        name:"vũ hồng vân",
        position:"dev",
        salary:5000,
    },
    {
        employeeId: 2,
        name:"lê phương thảo",
        position:"inter",
        salary:2000,
    }
];

while (true) {
    let choice = +prompt(
        `
            1. Thêm nhân viên mới.
            2. Hiển thị danh sách nhân viên.
            3. Tìm kiếm nhân viên theo tên.
            4. Cập nhật thông tin nhân viên theo ID.
            5. Xóa nhân viên theo ID.
            6. Tính lương trung bình của nhân viên.
            7. Thoát chương trình.
        `);
    if (choice == 7) {
        break; // thoát chương trình
    }
    switch (choice) {
        case 1:
            console.log("thêm nhân viên mới");
            let id;
            if (employees.length == 0) {
                // đầu tiên gán id =1 cho phần tử đầu tiên của mảng
                id = 1;
            } else {
                id = employees[employees.length - 1].employeeId + 1;
                // lấy phần tử cuối cùng, truy cập thuộc tính id tăng giá trị lên 1
            }
            let name= prompt("nhập tên nhân viên");
            let position=prompt("nhập vị trí");
            let salary= +prompt("nhập lương");// ép kiểu dữ liệu về dạng Number
            // khởi tạo đối tượng
            let employee= {
                employeeId: id,
                name:name,
                position:position,
                salary:salary,
            }
            // thêm đối tượng vào mảng nhân viên
            employees.push(employee);
            console.log("thêm nhân viên thành công!");
            break;
        case 2:
            // console.log("hiển thị nhân viên");
            for (let i = 0; i < employees.length; i++) {
                console.log(`nhân viên thứ ${i+1} có tên là : ${employees[i].name}_ 
                    vị trí: ${employees[i].position}`);
            }
            break;
        case 3:
            // console.log("Tìm kiếm nhân viên theo tên");
            let findByName= prompt("nhập tên nhân viên");
            let flag=1;
            for (let i = 0; i < employees.length; i++) {
                if(employees[i].name.includes(findByName)){
                    console.log(employees[i].name);
                    flag=0;
                }
            }
            if(flag){
                console.log("không có nhân viên có tên là ",findByName);  
            }
            break;
        case 4:
            console.log("cập nhật thông tin nhân viên theo ID");
            // cho người dùng nhập id
            let employeeId= +prompt("nhập id nhân viên");
            let index=-1;
            for (let i = 0; i < employees.length; i++) {
                    if(employees[i].employeeId==employeeId){
                        index=i;
                        break;
                    }
            }
            if(index==-1){
                console.log("id nhân viên không tồn tại!");
            }else{
                console.log("nhân viên tồn tại và có vị trí");
                 let name=prompt(`1. thay đổi tên. 2 giữ nguyên tên`);
                 if(name==1){
                    let newEmployee=prompt("mời nhập tên mới")
                 }else{
                    // giữ nguyên
                 }
                // let position=prompt("vị trí");
                // let salary=+prompt("nhập lương");
                let newEmployee={
                    employeeId: employeeId,
                    name:name,
                    position:employees[index].position,
                    salary:employees[index].salary,
                }
                employees[index]=newEmployee;
            }
            break;
        case 5:
            // console.log("xóa nhân viên theo id");
             let deleteId= +prompt("mời nhập id nhân viên cần xóa");
             let indexDelete=-1;
             for (let i = 0; i < employees.length; i++) {
                     if(employees[i].employeeId==deleteId){
                        indexDelete=i;
                         break;
                     }
             }
             if(indexDelete==-1){
                console.log("không tồn tại nhân viên có id là: ",deleteId);
             }else{
                employees.splice(indexDelete,1);
                console.log("xóa thành công!");
             }
            break;
        case 6:
            // console.log("tính lương trung bình của nhân viên");
            let sum=0;
            for (let i = 0; i < employees.length; i++) {
                // sum= sum + employees[i].salary;
                sum += employees[i].salary;
            }
            console.log("lương trung bình của nhân viên là :", sum/employees.length);
            break;
        default:
            break;
    }
}
// let students=["vũ hồng vân","lê minh thu","phạm hồng nhung","lê phương thảo"];
// let searchName= "hồng";
//  for (let i = 0; i < students.length; i++) {
//             if(students[i].includes(searchName)){
//                 console.log(students[i]);
//             }
    
//  }

 

