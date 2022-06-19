//Bài 1: Quản lí tuyển sinh:


document.getElementById('btnTinhDiem').onclick = function () {
    //input: điểm chuẩn (number), điểm thi 3 môn (number), khu vực và đối tượng (string)
    var diemChuan = +document.getElementById('diemChuan').value;
    var diem1 = +document.getElementById('monThu1').value;
    var diem2 = +document.getElementById('monThu2').value;
    var diem3 = +document.getElementById('monThu3').value;

    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;

    //output: kết quả thi (string), tổng điểm thi (number)
    var tongDiem = 0;
    var ketQuaThi = '';

    //progress:
    
    tongDiem = tinhDiem (diem1, diem2, diem3, khuVuc, doiTuong);

    
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        ketQuaThi = 'Bạn đã tạch =))';
    } else if (tongDiem >= diemChuan){
        ketQuaThi = 'Bạn đã đậu';
    } else if (tongDiem < diemChuan){
        ketQuaThi = 'Bạn đã tạch :((';
    } else {
        ketQuaThi = null;
    }

    //in output ra giao diện:

    document.getElementById('ketQua_B1').innerHTML = ketQuaThi + ' Điểm thi = ' + tongDiem;
}

function tinhDiem (diem1, diem2, diem3, khuVuc, doiTuong) { 
    var diemKhuVuc = 0;
    var diemDoiTuong = 0;

    switch (khuVuc) {
        case "A":{
            diemKhuVuc = 2;
        };break;
        case "B":{
            diemKhuVuc = 1;
        };break;
        case "C":{
            diemKhuVuc = 0.5;
        };break;
        case "X":{
            diemKhuVuc = 0;
        };break;
        default: {
            diemKhuVuc = 'error';
        }
    }

    switch (doiTuong) {
        case "1": {
            diemDoiTuong = 2.5;
        };break;
        case "2":{
            diemDoiTuong = 1.5;
        };break;
        case "3":{
            diemDoiTuong = 1;
        };break;
        case "X":{
            diemDoiTuong = 0;
        };break;
        default:{
            diemDoiTuong = error;
        }
    }

    tongDiem = diemKhuVuc + diemDoiTuong + diem1 + diem2 + diem3;

    return tongDiem;
}

//Bài 2: Tính tiền điện

document.getElementById('btnTinhTienDien').onclick = function () {
    //input: hoTen (string), soKw (number)
    var hoTen = document.getElementById('hoTen').value;
    var soKw = +document.getElementById('soKw').value;

    //output: số tiền điện (number)
    var tienDien = 0;

    //progress: 
    tienDien = tinhTienDien (soKw)
    //in output ra màn hềnh

    document.getElementById('ketQua_B2').innerHTML = 'Tiền điện của ' + hoTen+ ' tháng này là: ' + tienDien;
}

function tinhTienDien(soKw) {
    if (soKw <= 50) {
        tienDien = soKw*500;
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = 50*500 + (soKw - 50)*650;
    } else if (soKw > 100 && soKw <= 200){
        tienDien = 50*500 + 50*650 + (soKw - 100)*850;
    } else if (soKw > 200 && soKw <= 350){
        tienDien = 50*500 + 50*650 + 100*850 + (soKw - 200)*1100;
    } else if (soKw > 350) {
        tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + (soKw - 350)*1300;
    } else {
        tienDien = null;
    }

    return tienDien;
}