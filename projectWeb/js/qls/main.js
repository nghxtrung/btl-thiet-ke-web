function themsach()
{
    //Lấy giá trị của từng phần tử để kiểm tra
    let masach = document.getElementById('masach').value;
    let tensach = document.getElementById('tensach').value;
    let tentacgia = document.getElementById('tentacgia').value;
    let theloai = document.getElementById('theloai').value;
    let namxuatban = document.getElementById('namxuatban').value;
    let soluong = document.getElementById('soluong').value;

    //Validate mã sách
    let msValidate = /^[a-zA-Z0-9]{8}$/;
    if(_.isEmpty(masach))
    {
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(msValidate.test(masach.trim())===false)
    {
        masach = '';
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng nhập 8 kí tự gồm chữ và số';
    }
    else
    {
        document.getElementById('masach').classList.remove('invalid');
        document.getElementById('ms-error').innerHTML = '';
    }

    //Validate tên sách
    let tsValidate = /[`~!@#$%^&*(\-_+={}\||[\]:;'"<,>.?/]{1,}/;
    if(_.isEmpty(tensach))
    {
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(tsValidate.test(tensach.trim()))
    {
        tensach = '';
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
    if(_.isEmpty(tentacgia))
    {
        document.getElementById('tentacgia').classList.add('invalid');
        document.getElementById('ttg-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(ttgValidate.test(tentacgia.trim()))
    {
        tentacgia = ''
        document.getElementById('tentacgia').classList.add('invalid');
        document.getElementById('ttg-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('tentacgia').classList.remove('invalid');
        document.getElementById('ttg-error').innerHTML = '';
    }

    //Validate thể loại
    if(_.isEmpty(theloai))
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
    if(_.isEmpty(namxuatban))
    {
        document.getElementById('namxuatban').classList.add('invalid');
        document.getElementById('nxb-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(nxbValidate.test(namxuatban.trim())===false||namxuatban.trim()<=1900||namxuatban.trim()>=2020)
    {
        namxuatban = '';
        document.getElementById('namxuatban').classList.add('invalid');
        document.getElementById('nxb-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('namxuatban').classList.remove('invalid');
        document.getElementById('nxb-error').innerHTML = '';
    }

    //Validate số lượng
    let slValidate = /^[\d]{1,}$/;
    if(_.isEmpty(soluong))
    {
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(soluong.trim()<=0)
    {
        soluong = '';
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng nhập số lớn hơn 0';
    }
    else if(slValidate.test(soluong.trim())===false)
    {
        soluong = '';
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('soluong').classList.remove('invalid');
        document.getElementById('sl-error').innerHTML = '';
    }

    //Lưu danh mục sách vào local storage
    if(masach && tensach && tentacgia && theloai && namxuatban && soluong)
    {
        let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
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

function luuDms()
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    if(dms.length === 0)
        return false;
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
            <a href="#">Sửa</a> | <a href="#" onclick='xoasach(${id})'>Xóa</a>
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
}