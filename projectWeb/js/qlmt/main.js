function isEmpty(input) {
    return ((input === '') || (input.length === 0));
}

function validate3(dmmt)
{
    //Validate mã phiếu mượn
    let mpmValidate = /^[a-zA-Z0-9]{6}$/;
    if(isEmpty(dmmt.maphieumuon))
    {
        document.getElementById('maphieumuon').classList.add('invalid');
        document.getElementById('mpm-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(mpmValidate.test(dmmt.maphieumuon.trim())===false)
    {
        dmmt.maphieumuon = '';
        document.getElementById('maphieumuon').classList.add('invalid');
        document.getElementById('mpm-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('maphieumuon').classList.remove('invalid');
        document.getElementById('mpm-error').innerHTML = '';
    }

    //Validate mã sách mượn
    if(isEmpty(dmmt.masachmuon))
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
    if(isEmpty(dmmt.masinhvien))
    {
        document.getElementById('masinhvien').classList.add('invalid');
        document.getElementById('msv-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(msvValidate.test(dmmt.masinhvien.trim())===false)
    {
        dmmt.masinhvien = '';
        document.getElementById('masinhvien').classList.add('invalid');
        document.getElementById('msv-error').innerHTML = 'Vui lòng nhập đúng định dạng';
    }
    else
    {
        document.getElementById('masinhvien').classList.remove('invalid');
        document.getElementById('msv-error').innerHTML = '';
    }

    //Validate ngày mượn
    if(isNaN(dmmt.ngaymuon.getTime()))
    {
        dmmt.ngaymuon = '';
        document.getElementById('ngaymuon').classList.add('invalid');
        document.getElementById('ngm-error').innerHTML = 'Vui lòng chọn thời gian';
    }
    else
    {
        document.getElementById('ngaymuon').classList.remove('invalid');
        document.getElementById('ngm-error').innerHTML = '';
    }

    //Validate ngày trả
    if(isNaN(dmmt.ngaytra.getTime()))
    {
        dmmt.ngaytra = '';
        document.getElementById('ngaytra').classList.add('invalid');
        document.getElementById('ngtr-error').innerHTML = 'Vui lòng chọn thời gian';
    }
    else if(dmmt.ngaytra.getTime()<=dmmt.ngaymuon.getTime())
    {
        dmmt.ngaytra = '';
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
        dmmt.soluongmuon = Number(`${dmmt.soluongmuon.trim()}`);
        dms.forEach(function(sach)
        {
            sach.sl = Number(`${sach.sl}`);
            if(sach.ms.trim() === dmmt.masachmuon.trim())
            {
                if(dmmt.soluongmuon<=sach.sl)
                    kt=true;
                else
                    kt=false;           
            }
        });
        if(kt===false)
        {
            dmmt.soluongmuon = '';
            document.getElementById('soluongmuon').classList.add('invalid');
            document.getElementById('slm-error').innerHTML = 'Vui lòng nhập nhỏ hơn hoặc bằng';
        }
        else
        {
            document.getElementById('soluongmuon').classList.remove('invalid');
            document.getElementById('slm-error').innerHTML = '';
        }
    }
    if(isEmpty(dmmt.soluongmuon))
    {
        document.getElementById('soluongmuon').classList.add('invalid');
        document.getElementById('slm-error').innerHTML = 'Vui lòng không bỏ trống';
    }
    else if(dmmt.soluongmuon.trim()<=0)
    {
        dmmt.soluongmuon = '';
        document.getElementById('soluongmuon').classList.add('invalid');
        document.getElementById('slm-error').innerHTML = 'Vui lòng nhập lớn hơn 0';
    }
    else
    {
        ktsl();
    }
}

function themmt()
{
    //giá trị của từng phần tử để kiểm tra
    let maphieumuon = document.getElementById('maphieumuon').value;
    let masachmuon = document.getElementById('masachmuon').value;
    let masinhvien = document.getElementById('masinhvien').value;
    let ngaymuon = new Date(`${document.getElementById('ngaymuon').value}`);
    let ngaytra = new Date(`${document.getElementById('ngaytra').value}`);
    let soluongmuon = document.getElementById('soluongmuon').value;
    let DMMT = {
        maphieumuon: maphieumuon,
        masachmuon: masachmuon,
        masinhvien: masinhvien,
        ngaymuon: ngaymuon,
        ngaytra: ngaytra,
        soluongmuon: soluongmuon,
    };
    validate3(DMMT);  
    //Lưu danh mục mượn - trả vào local storage
    if(DMMT.maphieumuon && DMMT.masachmuon && DMMT.masinhvien && DMMT.ngaymuon && DMMT.ngaytra && DMMT.soluongmuon)
    {
        //cập nhật số lượng sách
        let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];        
        let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
        //Lọc trùng thông tin
        if(dmmt.length === 0)
        {
            let tg = localStorage.getItem('tg') ? JSON.parse(localStorage.getItem('tg')) : [];
            let muon = `${DMMT.ngaymuon.getFullYear()}-${((DMMT.ngaymuon.getMonth()+1)>=10)?DMMT.ngaymuon.getMonth()+1:'0'+(DMMT.ngaymuon.getMonth()+1)}-${(DMMT.ngaymuon.getDate()>=10)?DMMT.ngaymuon.getDate():'0'+DMMT.ngaymuon.getDate()}`;
            let tra = `${DMMT.ngaytra.getFullYear()}-${((DMMT.ngaytra.getMonth()+1)>=10)?DMMT.ngaytra.getMonth()+1:'0'+(DMMT.ngaytra.getMonth()+1)}-${(DMMT.ngaytra.getDate()>=10)?DMMT.ngaytra.getDate():'0'+DMMT.ngaytra.getDate()}`;
            tg.push(
            {
                muon: muon,
                tra: tra,
            });
            localStorage.setItem('tg',JSON.stringify(tg));
            let ngmFormat = `${(DMMT.ngaymuon.getDate()>=10)?DMMT.ngaymuon.getDate():'0'+DMMT.ngaymuon.getDate()}/${((DMMT.ngaymuon.getMonth()+1)>=10)?DMMT.ngaymuon.getMonth()+1:'0'+(DMMT.ngaymuon.getMonth()+1)}/${DMMT.ngaymuon.getFullYear()}`;
            let ngtrFormat = `${(DMMT.ngaytra.getDate()>=10)?DMMT.ngaytra.getDate():'0'+DMMT.ngaytra.getDate()}/${((DMMT.ngaytra.getMonth()+1)>=10)?DMMT.ngaytra.getMonth()+1:'0'+(DMMT.ngaytra.getMonth()+1)}/${DMMT.ngaytra.getFullYear()}`;
            dms.forEach(function(sach)
            {
                if(sach.ms === DMMT.masachmuon)
                {
                    sach.sl -= DMMT.soluongmuon;
                    localStorage.setItem('dms',JSON.stringify(dms));
                    luuDms();
                } 
            });
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
        else
        {
            let ngmFormat = `${(DMMT.ngaymuon.getDate()>=10)?DMMT.ngaymuon.getDate():'0'+DMMT.ngaymuon.getDate()}/${((DMMT.ngaymuon.getMonth()+1)>=10)?DMMT.ngaymuon.getMonth()+1:'0'+(DMMT.ngaymuon.getMonth()+1)}/${DMMT.ngaymuon.getFullYear()}`;
            let ngtrFormat = `${(DMMT.ngaytra.getDate()>=10)?DMMT.ngaytra.getDate():'0'+DMMT.ngaytra.getDate()}/${((DMMT.ngaytra.getMonth()+1)>=10)?DMMT.ngaytra.getMonth()+1:'0'+(DMMT.ngaytra.getMonth()+1)}/${DMMT.ngaytra.getFullYear()}`;
            let kt;
            dmmt.forEach(function(mt,stt)
            {
                if(DMMT.maphieumuon === mt.mpm)
                {
                    kt=false;
                    DMMT.maphieumuon = '';
                    document.getElementById('maphieumuon').classList.add('invalid');
                    document.getElementById('mpm-error').innerHTML = 'Vui lòng không nhập trùng';
                }
                else if(DMMT.masachmuon === mt.msm && DMMT.masinhvien === mt.msv && ngmFormat === mt.ngm && ngtrFormat === mt.ngtr)
                {
                    kt=false;
                    DMMT.masachmuon = '';
                    DMMT.masinhvien= '';
                    DMMT.ngaymuon = '';
                    DMMT.ngaytra = '';
                    document.getElementById('masachmuon').classList.add('invalid');
                    document.getElementById('msm-error').innerHTML = 'Vui lòng không nhập trùng';
                    document.getElementById('masinhvien').classList.add('invalid');
                    document.getElementById('msv-error').innerHTML = 'Vui lòng không nhập trùng';
                    document.getElementById('ngaymuon').classList.add('invalid');
                    document.getElementById('ngm-error').innerHTML = 'Vui lòng không chọn trùng';
                    document.getElementById('ngaytra').classList.add('invalid');
                    document.getElementById('ngtr-error').innerHTML = 'Vui lòng không chọn trùng';
                }
                else
                {
                    kt=true;
                }
            });
            if(kt)
            {
                let tg = localStorage.getItem('tg') ? JSON.parse(localStorage.getItem('tg')) : [];
                let muon = `${DMMT.ngaymuon.getFullYear()}-${((DMMT.ngaymuon.getMonth()+1)>=10)?DMMT.ngaymuon.getMonth()+1:'0'+(DMMT.ngaymuon.getMonth()+1)}-${(DMMT.ngaymuon.getDate()>=10)?DMMT.ngaymuon.getDate():'0'+DMMT.ngaymuon.getDate()}`;
                let tra = `${DMMT.ngaytra.getFullYear()}-${((DMMT.ngaytra.getMonth()+1)>=10)?DMMT.ngaytra.getMonth()+1:'0'+(DMMT.ngaytra.getMonth()+1)}-${(DMMT.ngaytra.getDate()>=10)?DMMT.ngaytra.getDate():'0'+DMMT.ngaytra.getDate()}`;
                tg.push(
                {
                    muon: muon,
                    tra: tra,
                });
                localStorage.setItem('tg',JSON.stringify(tg));
                let ngmFormat = `${(DMMT.ngaymuon.getDate()>=10)?DMMT.ngaymuon.getDate():'0'+DMMT.ngaymuon.getDate()}/${((DMMT.ngaymuon.getMonth()+1)>=10)?DMMT.ngaymuon.getMonth()+1:'0'+(DMMT.ngaymuon.getMonth()+1)}/${DMMT.ngaymuon.getFullYear()}`;
                let ngtrFormat = `${(DMMT.ngaytra.getDate()>=10)?DMMT.ngaytra.getDate():'0'+DMMT.ngaytra.getDate()}/${((DMMT.ngaytra.getMonth()+1)>=10)?DMMT.ngaytra.getMonth()+1:'0'+(DMMT.ngaytra.getMonth()+1)}/${DMMT.ngaytra.getFullYear()}`;
                dms.forEach(function(sach)
                {
                    if(sach.ms === DMMT.masachmuon)
                    {
                        sach.sl -= DMMT.soluongmuon;
                        localStorage.setItem('dms',JSON.stringify(dms));
                        luuDms();
                    } 
                });
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
    }
}

function luuDmmt()
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let bangDmmt = `<th class="td1">STT</th>
    <th class="td2b">Mã phiếu mượn</th>
    <th class="td3b">Mã sách</th>
    <th class="td4b">Mã sinh viên</th>
    <th class="td5b">Ngày mượn</th>
    <th class="td6b">Ngày trả</th>
    <th class="td7b">SL</th>
    <th class="td8b">Thao tác</th>`;
    if(dmmt.length === 0)
    {
        bangDmmt += `<tr>
        <td colspan="8">Không tìm thấy dữ liệu</td>
        </tr>`;
    }
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
            <a class="chuc-nang" href="javascript:void(0)" onclick='suamt(${id})'>Sửa</a> | <a class="chuc-nang" href="javascript:void(0)" onclick='xoamt(${id})'>Xóa</a>
        </td>
        </tr>`
    });
    document.getElementById('dmmt').innerHTML = bangDmmt; 
}

function xoamt(id)
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let tg = localStorage.getItem('tg') ? JSON.parse(localStorage.getItem('tg')) : [];
    //Cập nhật lại số lượng sách sau khi xóa
    let soluongmuon;
    let masachmuon;
    dmmt.forEach(function(mt)
    {
        masachmuon = mt.msm;
        soluongmuon = Number(`${mt.slm}`);
    });
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    dms.forEach(function(sach)
    {
        if(masachmuon === sach.ms)
        {
            sach.sl = Number(`${sach.sl}`);
            sach.sl += soluongmuon;
            localStorage.setItem('dms',JSON.stringify(dms));
            luuDms();
        }
    });
    dmmt.splice(id,1);
    localStorage.setItem('dmmt',JSON.stringify(dmmt));
    luuDmmt();
    tg.splice(id,1);
    localStorage.setItem('tg',JSON.stringify(tg));
}

function suamt(id)
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let tg = localStorage.getItem('tg') ? JSON.parse(localStorage.getItem('tg')) : [];
    tg.forEach(function(tg,stt)
    {
        if(stt === id)
        {
            document.getElementById('ngaymuon').value = tg.muon;
            document.getElementById('ngaytra').value = tg.tra;
        }
    });
    dmmt.forEach(function(mt,stt)
    {
        if(stt === id)
        {
            document.getElementById('maphieumuon').value = mt.mpm;
            document.getElementById('masachmuon').value = mt.msm;
            document.getElementById('masinhvien').value = mt.msv;
            document.getElementById('soluongmuon').value = mt.slm;
            document.getElementById('nut2').innerHTML = 'Cập nhật';
            document.getElementById('nut2').removeAttribute('onclick');
            document.getElementById('nut2').setAttribute('onclick','capnhatmt('+id+')');
        }
    });
}

function capnhatmt(id)
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let tg = localStorage.getItem('tg') ? JSON.parse(localStorage.getItem('tg')) : [];
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let maphieumuon = document.getElementById('maphieumuon').value;
    let masachmuon = document.getElementById('masachmuon').value;
    let masinhvien = document.getElementById('masinhvien').value;
    let ngaymuon = new Date(`${document.getElementById('ngaymuon').value}`);
    let ngaytra = new Date(`${document.getElementById('ngaytra').value}`);
    let soluongmuon = document.getElementById('soluongmuon').value;
    let DMMT = {
        maphieumuon: maphieumuon,
        masachmuon: masachmuon,
        masinhvien: masinhvien,
        ngaymuon: ngaymuon,
        ngaytra: ngaytra,
        soluongmuon: soluongmuon,
    };
    validate3(DMMT);
    if(DMMT.maphieumuon && DMMT.masachmuon && DMMT.masinhvien && DMMT.ngaymuon && DMMT.ngaytra && DMMT.soluongmuon)
    {
        let kt = dmmt.every(function(mt,stt)
        {
            if(stt != id)
            {
                let ngmFormat = `${(DMMT.ngaymuon.getDate()>=10)?DMMT.ngaymuon.getDate():'0'+DMMT.ngaymuon.getDate()}/${((DMMT.ngaymuon.getMonth()+1)>=10)?DMMT.ngaymuon.getMonth()+1:'0'+(DMMT.ngaymuon.getMonth()+1)}/${DMMT.ngaymuon.getFullYear()}`;
                let ngtrFormat = `${(DMMT.ngaytra.getDate()>=10)?DMMT.ngaytra.getDate():'0'+DMMT.ngaytra.getDate()}/${((DMMT.ngaytra.getMonth()+1)>=10)?DMMT.ngaytra.getMonth()+1:'0'+(DMMT.ngaytra.getMonth()+1)}/${DMMT.ngaytra.getFullYear()}`;
                if(DMMT.maphieumuon === mt.mpm)
                {   
                    DMMT.maphieumuon = '';
                    document.getElementById('maphieumuon').classList.add('invalid');
                    document.getElementById('mpm-error').innerHTML = 'Vui lòng không nhập trùng';
                    return false;
                }
                else if(DMMT.masachmuon === mt.msm && DMMT.masinhvien === mt.msv && ngmFormat === mt.ngm && ngtrFormat === mt.ngtr)
                {
                    DMMT.masachmuon = '';
                    DMMT.masinhvien= '';
                    DMMT.ngaymuon = '';
                    DMMT.ngaytra = '';
                    document.getElementById('masachmuon').classList.add('invalid');
                    document.getElementById('msm-error').innerHTML = 'Vui lòng không nhập trùng';
                    document.getElementById('masinhvien').classList.add('invalid');
                    document.getElementById('msv-error').innerHTML = 'Vui lòng không nhập trùng';
                    document.getElementById('ngaymuon').classList.add('invalid');
                    document.getElementById('ngm-error').innerHTML = 'Vui lòng không chọn trùng';
                    document.getElementById('ngaytra').classList.add('invalid');
                    document.getElementById('ngtr-error').innerHTML = 'Vui lòng không chọn trùng';
                    return false;
                }
            }
            return true;
        });
        if(kt)
        {
            let muon = `${DMMT.ngaymuon.getFullYear()}-${((DMMT.ngaymuon.getMonth()+1)>=10)?DMMT.ngaymuon.getMonth()+1:'0'+(DMMT.ngaymuon.getMonth()+1)}-${(DMMT.ngaymuon.getDate()>=10)?DMMT.ngaymuon.getDate():'0'+DMMT.ngaymuon.getDate()}`;
            let tra = `${DMMT.ngaytra.getFullYear()}-${((DMMT.ngaytra.getMonth()+1)>=10)?DMMT.ngaytra.getMonth()+1:'0'+(DMMT.ngaytra.getMonth()+1)}-${(DMMT.ngaytra.getDate()>=10)?DMMT.ngaytra.getDate():'0'+DMMT.ngaytra.getDate()}`;
            tgmoi = {
                muon: muon,
                tra: tra,
            };
            tg.splice(id,1,tgmoi);
            localStorage.setItem('tg',JSON.stringify(tg));
            //Đồng bộ số lượng
            let SLM;
            let MSM;
            dmmt.forEach(function(mt,stt)
            {
                if(stt === id)
                {
                    MSM = mt.msm;
                    SLM = Number(`${mt.slm}`);
                }
            });
            dms.forEach(function(sach)
            {
                if(DMMT.masachmuon === MSM)
                {
                    if(DMMT.masachmuon === sach.ms)
                    {
                        sach.sl = Number(`${sach.sl}`);
                        sach.sl += SLM;
                        sach.sl -= DMMT.soluongmuon;
                        localStorage.setItem('dms',JSON.stringify(dms));
                        luuDms();
                    }
                }
                else
                {
                    if(DMMT.masachmuon === sach.ms)
                    {
                        sach.sl = Number(`${sach.sl}`);
                        sach.sl -= DMMT.soluongmuon;
                        localStorage.setItem('dms',JSON.stringify(dms)); 
                    }
                    if(MSM === sach.ms)
                    {
                        sach.sl = Number(`${sach.sl}`);
                        sach.sl += SLM;
                        localStorage.setItem('dms',JSON.stringify(dms));
                    }
                    luuDms();
                }
            });
            let ngmFormat = `${(DMMT.ngaymuon.getDate()>=10)?DMMT.ngaymuon.getDate():'0'+DMMT.ngaymuon.getDate()}/${((DMMT.ngaymuon.getMonth()+1)>=10)?DMMT.ngaymuon.getMonth()+1:'0'+(DMMT.ngaymuon.getMonth()+1)}/${DMMT.ngaymuon.getFullYear()}`;
            let ngtrFormat = `${(DMMT.ngaytra.getDate()>=10)?DMMT.ngaytra.getDate():'0'+DMMT.ngaytra.getDate()}/${((DMMT.ngaytra.getMonth()+1)>=10)?DMMT.ngaytra.getMonth()+1:'0'+(DMMT.ngaytra.getMonth()+1)}/${DMMT.ngaytra.getFullYear()}`;
            mtmoi = {
                mpm: maphieumuon,
                msm: masachmuon,
                msv: masinhvien,
                ngm: ngmFormat,
                ngtr: ngtrFormat,
                slm: soluongmuon,
            };
            dmmt.splice(id,1,mtmoi);
            localStorage.setItem('dmmt',JSON.stringify(dmmt));
            luuDmmt();
            document.getElementById('nut2').removeAttribute('onclick');
            document.getElementById('nut2').setAttribute('onclick','themmt()');
            document.getElementById('nut2').innerHTML = 'Thêm mới';
        }
    }
}