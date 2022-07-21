// Bài 1

var diemChuan = 0;
var diem1 = 0;
var diem2 = 0;
var diem3 = 0;
var khuVucUT = 0;
var doiTuongUT = 0;

function ketQua() {
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var khuVucUT = Number(document.getElementById("khuVucUT").value);
    var doiTuongUT = Number(document.getElementById("doiTuongUT").value);

    var diem1 = Number(document.getElementById("diem1").value);
    var diem2 = Number(document.getElementById("diem2").value);
    var diem3 = Number(document.getElementById("diem3").value);

    var tongDiem = diem1 + diem2 + diem3 + khuVucUT + doiTuongUT;

    if (diem1 <= 0 || diem2 <= 0 || diem3 <= 0) {
        document.getElementById("txtResult").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    } else if(tongDiem >= diemChuan) {
        document.getElementById("txtResult").innerHTML = "Bạn đã đậu. Tổng điểm bạn là " + tongDiem;
    } else {
        document.getElementById("txtResult").innerHTML = "Bạn đã rớt. Tổng điểm bạn là " + tongDiem;
    }
}
document.getElementById("ketQua").onclick = ketQua;

// Bài 2

var hoTen = "";
var soKw = 0;
var tongTienDien = 0;

const kw50dau = 500;
const kw50ke = 650;
const kw100ke = 850;
const kw150ke = 1100;
const kwConLai = 1300;

function tinhTienDien() {
    var hoTen = document.getElementById("hoTen").value;
    var soKw = Number(document.getElementById("soKw").value);

    if (soKw <= 50) {
        tongTienDien = soKw * kw50dau;
        document.getElementById("txtResult1").innerHTML = "Họ tên " + hoTen + " Tiền điện là: " + tongTienDien.toLocaleString();
    } else if(50 < soKw && soKw <= 100){
        tongTienDien = (50 * kw50dau) + (soKw - 50) * kw50ke;
        document.getElementById("txtResult1").innerHTML = "Họ tên " + hoTen + " Tiền điện là: " + tongTienDien.toLocaleString();
    } else if (100 < soKw && soKw <= 200) {
        tongTienDien = (50 * kw50dau) + (50 * kw50ke) + (soKw - 100) * kw100ke;
        document.getElementById("txtResult1").innerHTML = "Họ tên " + hoTen + " Tiền điện là: " + tongTienDien.toLocaleString();
    } else if (200 < soKw && soKw <= 350) {
        tongTienDien = (50 * kw50dau) + (50 * kw50ke) + (100 * kw100ke) + (soKw - 200) * kw150ke;
        document.getElementById("txtResult1").innerHTML = "Họ tên " + hoTen + " Tiền điện là: " + tongTienDien.toLocaleString();
    } else if (soKw > 350) {
        tongTienDien = (50 * kw50dau) + (50 * kw50ke) + (100 * kw100ke) + (150 * kw150ke) + (soKw - 350) * kwConLai;
        document.getElementById("txtResult1").innerHTML = "Họ tên " + hoTen + " Tiền điện là: " + tongTienDien.toLocaleString();
    }
}
document.getElementById("tinhTien").onclick = tinhTienDien;