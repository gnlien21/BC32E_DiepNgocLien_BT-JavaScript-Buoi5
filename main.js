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


//Bài 3: Tính thuế thu nhập cá nhân

document.getElementById('btnTinhThue').onclick = function () {
    //input: name (string), tongThuNhap (number), soNguoiPhuThuoc (number)
    var name = document.getElementById('name').value;
    var tongThuNhap = +document.getElementById('tongThuNhap').value;
    var soNguoiPhuThuoc = +document.getElementById('soNguoiPhuThuoc').value;

    //output: taxAmount (number)

    var taxAmount = taxCal(tongThuNhap, soNguoiPhuThuoc);

    //progress:

    //in output ra giao diện
    document.getElementById('ketQua_B3').innerHTML = 'Họ tên: ' + name + ' Tiền thuế thu nhập cá nhân: ' + new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(taxAmount);
}

function taxCal (tongThuNhap, soNguoiPhuThuoc) {
    var thuNhapChiuThue = 0;

    thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoiPhuThuoc*1.6e+6;
    
    if (thuNhapChiuThue <= 60e+6) {
        taxAmount = thuNhapChiuThue*0.05 ;
    }else if (thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6) {
        taxAmount = 60e+6*0.05 + (thuNhapChiuThue - 60e+6)*0.1;
    } else if (thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6) {
        taxAmount = 60e+6*0.05 + 90e+6*0.1 + (thuNhapChiuThue - 150e+6)*0.15;
    } else if (thuNhapChiuThue > 21e+8 && thuNhapChiuThue <= 384e+6) {
        taxAmount = 60e+6*0.05 + 90e+6*0.1 + 174e+6*0.15 (thuNhapChiuThue - 324e+6)*0.2;
    } else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        taxAmount = 60e+6*0.05 + 90e+6*0.1 + 174e+6*0.15 + 240e+6*0.2 (thuNhapChiuThue - 564e+6)*0.25;

    } else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        taxAmount = 60e+6*0.05 + 90e+6*0.1 + 174e+6*0.15 + 240e+6*0.2 + 336e+6*0.25  (thuNhapChiuThue - 900e+6)*0.3;

    } else if (thuNhapChiuThue > 960e+6) {
        taxAmount = 60e+6*0.05 + 90e+6*0.1 + 174e+6*0.15 + 240e+6*0.2 + 336e+6*0.25 + 60e+6*0.3 (thuNhapChiuThue - 960e+6)*0.35;
    } else {
        taxAmount = null;
    }

    return taxAmount;
}

//Bài 4:
document.getElementById('userType').onchange = function(){ disableInput() };

function disableInput (){
    var option = document.getElementById('userType').value;
    var connections = document.getElementById('connections');
    if (option == "business"){
        connections.style.display = "block";
    } else {
        connections.style.display = "none";
    }

}

document.getElementById('btnTinhCap').onclick = function (){
    var userType = document.getElementById('userType').value;
    var userID = document.getElementById('userID').value;
    var premiumChannel = +document.getElementById('premiumChannel').value;
    var ketNoi = +document.getElementById('connections').value;

    //output: 

    var tienCap = 0;

    //progress:

    if (userType == "personal"){
        tienCap = tinhTienPersonal (premiumChannel);
    } else if (userType == "business"){
        tienCap = tinhTienBusiness (premiumChannel, ketNoi);
    } else {
        tienCap = null;
    }

    //in output ra giao diện

    document.getElementById('ketQua_B4').innerHTML = 'Khách hàng ' + userType + ' ID: ' + userID + ' Tiền cáp: ' + tienCap +'$';
}

function tinhTienPersonal (premiumChannel) {
    const billingFee = 4.5;
    const serviceFee = 20.5;
    const premiumCFee = 7.5;

    tienCap = billingFee + serviceFee + premiumCFee*premiumChannel;

    return tienCap;
}

function tinhTienBusiness (premiumChannel, ketNoi){
    const billingFee = 15;
    const premiumCFee = 50;
    var serviceFee = 0;
    if (ketNoi <= 10){
        serviceFee = 75;
    } if (ketNoi > 10){
        serviceFee = 75 + (ketNoi - 10)*5;
    }

    tienCap = billingFee + serviceFee + premiumCFee*premiumChannel;

    return tienCap;
}