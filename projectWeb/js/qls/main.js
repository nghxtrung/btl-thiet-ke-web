function isEmpty(input) {
    return ((input === '') || (input.length === 0));
}

function validate1(dms)
{
    //Validate mã sách
    let msValidate = /^[a-zA-Z0-9]{8}$/;
    if(isEmpty(dms.masach))
    {
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(msValidate.test(dms.masach.trim())===false)
    {
        dms.masach = '';
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('masach').classList.remove('invalid');
        document.getElementById('ms-error').innerHTML = '';
    }

    //Validate tên sách
    let tsValidate = /[`~!@#$%^&*(\-_+={}\||[\]:;'"<,>.?/]{1,}/;
    if(isEmpty(dms.tensach))
    {
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(tsValidate.test(dms.tensach.trim()))
    {
        dms.tensach = '';
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('tensach').classList.remove('invalid');
        document.getElementById('ts-error').innerHTML = '';
    }

    //Validate tên tác giả
    let ttgValidate = /[`~!@#$%^&*(\-_+={}\||[\]:;'"<,>.?/\d]{1,}/;
    if(isEmpty(dms.tentacgia))
    {
        document.getElementById('tentacgia').classList.add('invalid');
        document.getElementById('ttg-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(ttgValidate.test(dms.tentacgia.trim()))
    {
        dms.tentacgia = ''
        document.getElementById('tentacgia').classList.add('invalid');
        document.getElementById('ttg-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('tentacgia').classList.remove('invalid');
        document.getElementById('ttg-error').innerHTML = '';
    }

    //Validate thể loại
    if(isEmpty(dms.theloai))
    {
        document.getElementById('theloai').classList.add('invalid');
        document.getElementById('tl-error').innerHTML = 'Vui lòng chọn thể loại';
    }
    else
    {
        document.getElementById('theloai').classList.remove('invalid');
        document.getElementById('tl-error').innerHTML = '';
    }

    //Validate năm xuất bản
    let nxbValidate = /^[\d]{4}$/;
    if(isEmpty(dms.namxuatban))
    {
        document.getElementById('namxuatban').classList.add('invalid');
        document.getElementById('nxb-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(nxbValidate.test(dms.namxuatban.trim())===false||dms.namxuatban.trim()<=1900||dms.namxuatban.trim()>=2020)
    {
        dms.namxuatban = '';
        document.getElementById('namxuatban').classList.add('invalid');
        document.getElementById('nxb-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('namxuatban').classList.remove('invalid');
        document.getElementById('nxb-error').innerHTML = '';
    }

    //Validate số lượng
    let slValidate = /^(0|[1-9][0-9]*)$/;
    if(isEmpty(dms.soluong))
    {
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(dms.soluong.trim()<=0)
    {
        dms.soluong = '';
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng nhập số lớn hơn 0';
    }
    else if(slValidate.test(dms.soluong.trim())===false)
    {
        dms.soluong = '';
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('soluong').classList.remove('invalid');
        document.getElementById('sl-error').innerHTML = '';
    }
}

function validate2(dms)
{
    //Validate mã sách
    let msValidate = /^[a-zA-Z0-9]{8}$/;
    if(isEmpty(dms.masach))
    {
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(msValidate.test(dms.masach.trim())===false)
    {
        dms.masach = '';
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('masach').classList.remove('invalid');
        document.getElementById('ms-error').innerHTML = '';
    }

    //Validate tên sách
    let tsValidate = /[`~!@#$%^&*(\-_+={}\||[\]:;'"<,>.?/]{1,}/;
    if(isEmpty(dms.tensach))
    {
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(tsValidate.test(dms.tensach.trim()))
    {
        dms.tensach = '';
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('tensach').classList.remove('invalid');
        document.getElementById('ts-error').innerHTML = '';
    }

    //Validate tên tác giả
    let ttgValidate = /[`~!@#$%^&*(\-_+={}\||[\]:;'"<,>.?/\d]{1,}/;
    if(isEmpty(dms.tentacgia))
    {
        document.getElementById('tentacgia').classList.add('invalid');
        document.getElementById('ttg-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(ttgValidate.test(dms.tentacgia.trim()))
    {
        dms.tentacgia = ''
        document.getElementById('tentacgia').classList.add('invalid');
        document.getElementById('ttg-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('tentacgia').classList.remove('invalid');
        document.getElementById('ttg-error').innerHTML = '';
    }

    //Validate thể loại
    if(isEmpty(dms.theloai))
    {
        document.getElementById('theloai').classList.add('invalid');
        document.getElementById('tl-error').innerHTML = 'Vui lòng chọn thể loại';
    }
    else
    {
        document.getElementById('theloai').classList.remove('invalid');
        document.getElementById('tl-error').innerHTML = '';
    }

    //Validate năm xuất bản
    let nxbValidate = /^[\d]{4}$/;
    if(isEmpty(dms.namxuatban))
    {
        document.getElementById('namxuatban').classList.add('invalid');
        document.getElementById('nxb-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(nxbValidate.test(dms.namxuatban.trim())===false||dms.namxuatban.trim()<=1900||dms.namxuatban.trim()>=2020)
    {
        dms.namxuatban = '';
        document.getElementById('namxuatban').classList.add('invalid');
        document.getElementById('nxb-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('namxuatban').classList.remove('invalid');
        document.getElementById('nxb-error').innerHTML = '';
    }

    //Validate số lượng
    let slValidate = /^(0|[1-9][0-9]*)$/;
    if(isEmpty(dms.soluong))
    {
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(dms.soluong.trim()<0)
    {
        dms.soluong = '';
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng nhập số lớn hơn hoặc bằng 0';
    }
    else if(slValidate.test(dms.soluong.trim())===false)
    {
        dms.soluong = '';
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('soluong').classList.remove('invalid');
        document.getElementById('sl-error').innerHTML = '';
    }
}

function themsach()
{
    //Lấy giá trị của từng phần tử để kiểm tra
    let masach = document.getElementById('masach').value;
    let tensach = document.getElementById('tensach').value;
    let tentacgia = document.getElementById('tentacgia').value;
    let theloai = document.getElementById('theloai').value;
    let namxuatban = document.getElementById('namxuatban').value;
    let soluong = document.getElementById('soluong').value;
    let DMS = {
        masach: masach,
        tensach: tensach,
        tentacgia: tentacgia,
        theloai: theloai,
        namxuatban: namxuatban,
        soluong: soluong,
    };
    validate1(DMS);
    //Lưu danh mục sách vào local storage
    if(DMS.masach && DMS.tensach && DMS.tentacgia && DMS.theloai && DMS.namxuatban && DMS.soluong)
    {
        let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
        //Lọc trùng thông tin
        if(dms.length === 0)
        {
            dms.push(
            {
                ms: masach,
                ts: tensach,
                ttg: tentacgia,
                tl: theloai,
                nxb: namxuatban,
                sl: soluong,
            });
            localStorage.setItem('dms',JSON.stringify(dms))
            luuDms();
        }
        else
        {
            let kt;
            dms.forEach(function(sach)
            {
                if(DMS.masach === sach.ms)
                {
                    kt=false;
                    DMS.masach = '';
                    document.getElementById('masach').classList.add('invalid');
                    document.getElementById('ms-error').innerHTML = 'Vui lòng không nhập trùng';
                }
                else if(DMS.tensach === sach.ts)
                {
                    kt=false;
                    DMS.tensach = '';
                    document.getElementById('tensach').classList.add('invalid');
                    document.getElementById('ts-error').innerHTML = 'Vui lòng không nhập trùng';
                }  
                else
                {
                    kt=true;
                }
            });
            if(kt)
            {
                dms.push(
                {
                    ms: masach,
                    ts: tensach,
                    ttg: tentacgia,
                    tl: theloai,
                    nxb: namxuatban,
                    sl: soluong,
                });
                localStorage.setItem('dms',JSON.stringify(dms))
                luuDms();
            }
        }
    }
}

function luuDms()
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let bangDms = `<tr>
    <th class="td1">STT</th>
    <th class="td2">Mã sách</th>
    <th class="td3">Tên sách</th>
    <th class="td4">Tên tác giả</th>
    <th class="td5">Thể loại</th>
    <th class="td6">NXB</th>
    <th class="td7">SL</th>
    <th class="td8">Thao tác</th>
    </tr>`;
    if(dms.length === 0)
    {
        bangDms += `<tr>
        <td colspan="8">Không tìm thấy dữ liệu</td>
        </tr>`;
    }
    let chonMs = `<option value="" disabled selected>Chọn mã sách</option>`;
    dms.forEach(function(sach,stt){
        let id = stt;
        ++stt;
        bangDms += `<tr>
        <td class="td1">${stt}</td>
        <td class="td2">${sach.ms}</td>
        <td class="td3">${sach.ts}</td>
        <td class="td4">${sach.ttg}</td>
        <td class="td5">${sach.tl}</td>
        <td class="td6">${sach.nxb}</td>
        <td class="td7">${sach.sl}</td>
        <td class="td8">
            <a class="action" href="javascript:void(0)" onclick="suasach(${id})">Sửa</a> | <a class="action" href="javascript:void(0)" onclick="xoasach(${id})">Xóa</a>
        </td>
        </tr>`;
        chonMs += `<option>${sach.ms}</option>`;
    });
    document.getElementById('dms').innerHTML = bangDms;
    document.getElementById('masachmuon').innerHTML = chonMs;
}

function xoasach(id)
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    dms.splice(id,1);
    localStorage.setItem('dms',JSON.stringify(dms));
    luuDms();
    clearinput();
}

function clearinput1()
{
    document.getElementById('masach').value = '';
    document.getElementById('masach').classList.remove('invalid');
    document.getElementById('ms-error').innerHTML = '';
    document.getElementById('tensach').value = '';
    document.getElementById('tensach').classList.remove('invalid');
    document.getElementById('ts-error').innerHTML = '';
    document.getElementById('tentacgia').value = '';
    document.getElementById('tentacgia').classList.remove('invalid');
    document.getElementById('ttg-error').innerHTML = '';
    document.getElementById('theloai').value = '';
    document.getElementById('theloai').classList.remove('invalid');
    document.getElementById('tl-error').innerHTML = '';
    document.getElementById('namxuatban').value = '';
    document.getElementById('namxuatban').classList.remove('invalid');
    document.getElementById('nxb-error').innerHTML = '';
    document.getElementById('soluong').value = '';
    document.getElementById('soluong').classList.remove('invalid');
    document.getElementById('sl-error').innerHTML = '';
}

function suasach(id)
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    dms.forEach(function(sach,stt)
    {
        if(stt === id)
        {
            document.getElementById('masach').value = sach.ms;
            document.getElementById('tensach').value = sach.ts;
            document.getElementById('tentacgia').value = sach.ttg;
            document.getElementById('theloai').value = sach.tl;
            document.getElementById('namxuatban').value = sach.nxb;
            document.getElementById('soluong').value = sach.sl;
            document.getElementById('nut1').innerHTML = 'Cập nhật';
            document.getElementById('nut1').removeAttribute('onclick');
            document.getElementById('nut1').setAttribute('onclick','capnhatsach('+id+')');
        }
    });
}

function capnhatsach(id)
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let masach = document.getElementById('masach').value;
    let tensach = document.getElementById('tensach').value;
    let tentacgia = document.getElementById('tentacgia').value;
    let theloai = document.getElementById('theloai').value;
    let namxuatban = document.getElementById('namxuatban').value;
    let soluong = document.getElementById('soluong').value;
    let DMS = {
        masach: masach,
        tensach: tensach,
        tentacgia: tentacgia,
        theloai: theloai,
        namxuatban: namxuatban,
        soluong: soluong,
    };
    validate2(DMS);
    if(DMS.masach && DMS.tensach && DMS.tentacgia && DMS.theloai && DMS.namxuatban && DMS.soluong)
    {
        let kt = dms.every(function(sach,stt)
        {
            if(stt != id)
            {
                if(DMS.masach === sach.ms)
                {
                    DMS.masach = '';
                    document.getElementById('masach').classList.add('invalid');
                    document.getElementById('ms-error').innerHTML = 'Vui lòng không nhập trùng';
                    return false;
                }
                else if(DMS.tensach === sach.ts)
                {
                    DMS.tensach = '';
                    document.getElementById('tensach').classList.add('invalid');
                    document.getElementById('ts-error').innerHTML = 'Vui lòng không nhập trùng';
                    return false;
                }
            }
            return true;
        });
        if(kt)
        {
            sachmoi = {
                ms: masach,
                ts: tensach,
                ttg: tentacgia,
                tl: theloai,
                nxb: namxuatban,
                sl: soluong,
            };
            dms.splice(id,1,sachmoi);
            localStorage.setItem('dms',JSON.stringify(dms));
            luuDms();
            clearinput1();
            document.getElementById('nut1').removeAttribute('onclick');
            document.getElementById('nut1').setAttribute('onclick','themsach()');
            document.getElementById('nut1').innerHTML = 'Thêm mới';
        }
    }
}

function timkiemsach()
{
    let tk = document.getElementById('timkiemsach').value;
    let theloai = document.getElementById('loctl').value;
    let kq = [];
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    if(dms.length===0)
    {
        alert("Chức năng này hiện không khả dụng do chưa có dữ liệu! Vui lòng nhập liệu trước khi sử dụng!");
    }
    else
    {
        dms.forEach(function(sach)
        {
            if(theloai==='Lọc theo thể loại'||theloai==='Tất cả')
            {
                if(sach.ms.indexOf(tk)!=-1||sach.ts.indexOf(tk)!=-1||sach.ttg.indexOf(tk)!=-1)
                    kq.push(sach);    
            }
            else if(sach.tl.indexOf(theloai)!=-1)
            {
                if(sach.ms.indexOf(tk)!=-1||sach.ts.indexOf(tk)!=-1||sach.ttg.indexOf(tk)!=-1)
                    kq.push(sach);    
            }
        });
        let bangkq = `<tr>
        <th class="td1">STT</th>
        <th class="td2">Mã sách</th>
        <th class="td3">Tên sách</th>
        <th class="td4">Tên tác giả</th>
        <th class="td5">Thể loại</th>
        <th class="td6">NXB</th>
        <th class="td7">SL</th>
        <th class="td8">Thao tác</th>
        </tr>`;
        if(kq.length === 0)
        {
            bangkq += `<tr>
            <td colspan="8">Không tìm thấy dữ liệu</td>
            </tr>`;
        }
        kq.forEach(function(sach,stt){
            let id = stt;
            ++stt;
            bangkq += `<tr>
            <td class="td1">${stt}</td>
            <td class="td2">${sach.ms}</td>
            <td class="td3">${sach.ts}</td>
            <td class="td4">${sach.ttg}</td>
            <td class="td5">${sach.tl}</td>
            <td class="td6">${sach.nxb}</td>
            <td class="td7">${sach.sl}</td>
            <td class="td8">
                <a class="action" href="javascript:void(0)" onclick="suasach(${id})">Sửa</a> | <a class="action" href="javascript:void(0)" onclick="xoasach(${id})">Xóa</a>
            </td>
            </tr>`;
        });
        document.getElementById('dms').innerHTML = bangkq;
    }
}

function thoigianhientai()
{
    let thoigian = new Date();
    let ngay = (thoigian.getDate()>=10) ? thoigian.getDate() : '0'+thoigian.getDate();
    let thang = ((thoigian.getMonth()+1)>=10) ? thoigian.getMonth()+1 : '0'+(thoigian.getMonth()+1);
    let nam = thoigian.getFullYear();
    let gio = (thoigian.getHours()>=10) ? thoigian.getHours() : '0'+thoigian.getHours();
    let phut = (thoigian.getMinutes()>=10) ? thoigian.getMinutes() : '0'+thoigian.getMinutes();
    let giay = (thoigian.getSeconds()>=10) ? thoigian.getSeconds() : '0'+thoigian.getSeconds();
    return ngay + '_' + thang + '_' + nam +  '_' + gio + phut + giay;
}

function txsach()
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    if(dms.length===0)
    {
        alert("Chức năng này hiện không khả dụng do chưa có dữ liệu! Vui lòng nhập liệu trước khi sử dụng!");
    }
    else
    {
        let tk = document.getElementById('timkiemsach').value;
        let theloai = document.getElementById('loctl').value;
        let kqtx = [];
        dms.forEach(function(sach)
        {
            if(theloai==='Lọc theo thể loại'||theloai==='Tất cả')
            {
                if(sach.ms.indexOf(tk)!=-1||sach.ts.indexOf(tk)!=-1||sach.ttg.indexOf(tk)!=-1)
                    kqtx.push(sach);    
            }
            else if(sach.tl.indexOf(theloai)!=-1)
            {
                if(sach.ms.indexOf(tk)!=-1||sach.ts.indexOf(tk)!=-1||sach.ttg.indexOf(tk)!=-1)
                    kqtx.push(sach);    
            }
        });
        if(kqtx.length===0)
        {
            alert("Chức năng này hiện không khả dụng do không có dữ liệu phù hợp! Vui lòng nhập và chọn lại điều kiện tìm kiếm/lọc trước khi tải file!");
        }
        else
        {
            let xuongdong = '\r\n';
            let noidungcsv = `\uFEFFSTT,Mã sách,Tên sách,Tên tác giả,Thể loại,Năm xuất bản,Số lượng${xuongdong}`;
            let tenfilecsv = `DS sach_${thoigianhientai()}.csv`;
            let sttcuoi = kqtx.length - 1;
            kqtx.forEach(function(kq,stt)
            {
                noidungcsv += `${stt + 1},${kq.ms},${kq.ts},${kq.ttg},${kq.tl},${kq.nxb},${kq.sl}`;
                if(stt<sttcuoi)
                {
                    noidungcsv += xuongdong;
                }
            });
            let linktaixuong = document.createElement('a'); //Thêm thẻ a
            linktaixuong.setAttribute('href','data:application/csv,' + encodeURIComponent(noidungcsv)); //Thêm thuộc tính href có giá trị là data url, cụ thể data url ở đây là data csv và mã hóa sang chuẩn UTF-8
            linktaixuong.setAttribute('download', tenfilecsv);  //Thêm thuộc tính download
            document.body.appendChild(linktaixuong);    //Thêm vào cuối body của html
            linktaixuong.click();   //Tạo hành động click
        }
    }
}