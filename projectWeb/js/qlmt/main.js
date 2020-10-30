function themmt()
{
    //giá trị của từng phần tử để kiểm tra
    let maphieumuon = document.getElementById('maphieumuon').value;
    let masachmuon = document.getElementById('masachmuon').value;
    let masinhvien = document.getElementById('masinhvien').value;
    let ngaymuon = new Date(`${document.getElementById('ngaymuon').value}`);
    let ngaytra = new Date(`${document.getElementById('ngaytra').value}`);
    let soluongmuon = document.getElementById('soluongmuon').value;

    //Validate mã phiếu mượn
    let mpmValidate = /^[a-zA-Z0-9]{6}$/;
    if(_.isEmpty(maphieumuon))
    {
        document.getElementById('maphieumuon').classList.add('invalid');
        document.getElementById('mpm-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(mpmValidate.test(maphieumuon.trim())===false)
    {
        maphieumuon = '';
        document.getElementById('maphieumuon').classList.add('invalid');
        document.getElementById('mpm-error').innerHTML = 'Vui lòng nhập 6 kí tự gồm chữ và số';
    }
    else
    {
        document.getElementById('maphieumuon').classList.remove('invalid');
        document.getElementById('mpm-error').innerHTML = '';
    }

    //Validate mã sách mượn
    if(_.isEmpty(masachmuon))
    {
        document.getElementById('masachmuon').classList.add('invalid');
        document.getElementById('msm-error').innerHTML = 'Vui lòng chọn mã sách';
    }
    else
    {
        document.getElementById('masachmuon').classList.remove('invalid');
        document.getElementById('msm-error').innerHTML = '';
    }

    //Validate mã sinh viên
    let msvValidate = /^[\d]{9}$/;
    if(_.isEmpty(masinhvien))
    {
        document.getElementById('masinhvien').classList.add('invalid');
        document.getElementById('msv-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(msvValidate.test(masinhvien.trim())===false)
    {
        masinhvien = '';
        document.getElementById('masinhvien').classList.add('invalid');
        document.getElementById('msv-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('masinhvien').classList.remove('invalid');
        document.getElementById('msv-error').innerHTML = '';
    }

    //Validate ngày mượn
    if(isNaN(ngaymuon.getTime()))
    {
        document.getElementById('ngaymuon').classList.add('invalid');
        document.getElementById('ngm-error').innerHTML = 'Vui lòng chọn thời gian';
    }
    else
    {
        document.getElementById('ngaymuon').classList.remove('invalid');
        document.getElementById('ngm-error').innerHTML = '';
    }

    //Validate ngày trả
    if(isNaN(ngaytra.getTime()))
    {
        document.getElementById('ngaytra').classList.add('invalid');
        document.getElementById('ngtr-error').innerHTML = 'Vui lòng chọn thời gian';
    }
    else if(ngaytra.getTime()<=ngaymuon.getTime())
    {
        document.getElementById('ngaytra').classList.add('invalid');
        document.getElementById('ngtr-error').innerHTML = 'Vui lòng chọn thời gian lớn hơn';
    }
    else
    {
        document.getElementById('ngaytra').classList.remove('invalid');
        document.getElementById('ngtr-error').innerHTML = '';
    }

    //Validate số lượng mượn
    function ktsl()
    {
        let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
        let msm = document.getElementById('masachmuon').value.trim();
        let slmN = Number(`${soluongmuon.trim()}`);
        let kt;
        dms.forEach(function(sach)
        {
            let slN = Number(`${sach.sl.trim()}`);
            if(sach.ms.trim() === msm)
            {
                if(slmN<=slN)
                    kt=true;
                else
                    kt=false;        
            }
        });
        if(kt===false)
        {
            document.getElementById('soluongmuon').classList.add('invalid');
            document.getElementById('slm-error').innerHTML = 'Vui lòng nhập nhỏ hơn hoặc bằng';
        }
        else
        {
            document.getElementById('soluongmuon').classList.remove('invalid');
            document.getElementById('slm-error').innerHTML = '';
        }
    }
    if(_.isEmpty(soluongmuon))
    {
        document.getElementById('soluongmuon').classList.add('invalid');
        document.getElementById('slm-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(soluongmuon.trim()<=0)
    {
        document.getElementById('soluongmuon').classList.add('invalid');
        document.getElementById('slm-error').innerHTML = 'Vui lòng nhập lớn hơn 0';
    }
    else
    {
        ktsl();
    }

    //Lưu danh mục mượn - trả vào local storage
    if(maphieumuon && masachmuon && masinhvien && ngaymuon && ngaytra && soluongmuon)
    {
        let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
        let ngmFormat = `${ngaymuon.getDay()}/${ngaymuon.getMonth()}/${ngaymuon.getFullYear}`;
        let ngtrFormat = `${ngaytra.getDay()}/${ngaytra.getMonth()}/${ngaytra.getFullYear}`;
        dmmt.push(
        {
            mpm: maphieumuon,
            msm: masachmuon,
            msv: masinhvien,
            ngm: ngmFormat,
            ngtr: ngtrFormat,
            slm: soluongmuon,
        });
        localStorage.setItem('dmmt',JSON.stringify(dmmt));
        luuDmmt();
    }
}

function luuDmmt()
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    if(dmmt.length === 0)
        return false;
    let bangDmmt = `<th class="td1">STT</th>
    <th class="td2b">Mã phiếu mượn</th>
    <th class="td3b">Mã sách</th>
    <th class="td4b">Mã sinh viên</th>
    <th class="td5b">Ngày mượn</th>
    <th class="td6b">Ngày trả</th>
    <th class="td7b">SL</th>
    <th class="td8b">Thao tác</th>`;
    dmmt.forEach(function(mt,stt)
    {
        let id = stt;
        ++stt;
        bangDmmt += `<tr>
        <td class="td1">${stt}</td>
        <td class="td2">${mt.mpm}</td>
        <td class="td3">${mt.msm}</td>  
        <td class="td4">${mt.msv}</td>
        <td class="td5">${mt.ngm}</td>
        <td class="td6">${mt.ngtr}</td>
        <td class="td7">${mt.slm}</td>
        <td class="td8">
            <a href="#">Sửa</a> | <a href="#" onclick='xoamt(${id})'>Xóa</a>
        </td>
        </tr>`
    });
    document.getElementById('dmmt').innerHTML = bangDmmt; 
}

function xoamt(id)
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    dmmt.splice(id,1)
    localStorage.setItem('dmmt',JSON.stringify(dmmt))
    luuDmmt();
}