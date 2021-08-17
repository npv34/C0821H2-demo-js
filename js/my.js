// tao 1 bien co ten la number -> luu gia tri cua ham prompt()
/*
  - c1.prompt() -> nhan du lieu tu ban phim duoi dang 1 popup

  - c2. nhan du lieu tu phan tu html -> thong qua thuoc tinh value
 */
function diem_trung_binh() {
    let toan = +document.getElementById('diem_toan').value;
    let ly = +document.getElementById('diem_ly').value;
    let hoa = +document.getElementById('diem_hoa').value;
    let tb = (toan + ly + hoa) / 3;
    if (tb > 8) {
        // dk dunng
        document.getElementById('result').innerHTML = "Hoc sinh dat";
    } else {
        // dk sai
        document.getElementById('result').innerHTML = "Khong dat";
    }
}


/*
 - Cac ham dau ra: hien thi ket qua;
 + alert() -> hien thi ket qua duoi dang 1 popup
 + Thay doi noi dung cua 1 phan tu html -> inertHTML
 + console.log(c) -> hien thi ket qua o cua so console khi bam f12 -> giup xem lai du lieu
 + document.write(c); -> hien thi du lieu ra man hinh -> xoa het cac phan tu html
 */
// alert('day la ket qua phep tinh ' + c)
