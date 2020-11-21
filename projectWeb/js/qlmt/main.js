function isEmpty(input) 
{
    return ((input === '') || (input.length === 0));
}

function formatTime(timeString)
{
    let time = timeString.split('-');
    let newTime = [time[2],time[1],time[0]].join('/');
    return newTime;
}

function formatTime2(timeString)
{
    let time = timeString.split('/');
    let newTime = [time[2],time[1],time[0]].join('-');
    return newTime;
}

function validateMPM()
{       
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let maphieumuon = document.getElementById('maphieumuon').value;
    function check()
    {
        if(dmmt.length > 0)
        {
            let kt = dmmt.every(function(mt)
            {
                if(maphieumuon === mt.mpm)
                {
                    maphieumuon = '';
                    document.getElementById('maphieumuon').classList.remove('valid');
                    document.getElementById('maphieumuon').classList.add('invalid');
                    document.getElementById('mpm-error').innerHTML = 'Vui lòng không nhập trùng';
                    return false;
                }
                return true;
            });
            return kt;
        }
    }
    let mpmValidate = /^[a-zA-Z0-9]{6}$/;
    if(isEmpty(maphieumuon))
    {
        document.getElementById('maphieumuon').classList.remove('valid');
        document.getElementById('maphieumuon').classList.add('invalid');
        document.getElementById('mpm-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(mpmValidate.test(maphieumuon.trim())===false)
    {
        maphieumuon = '';
        document.getElementById('maphieumuon').classList.remove('valid');
        document.getElementById('maphieumuon').classList.add('invalid');
        document.getElementById('mpm-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        if(dmmt.length===0)
        {
            document.getElementById('maphieumuon').classList.remove('invalid');
            document.getElementById('maphieumuon').classList.add('valid');
            document.getElementById('mpm-error').innerHTML = '';
            return true;
        }
        else
        {
            if(check())
            {
                document.getElementById('maphieumuon').classList.remove('invalid');
                document.getElementById('maphieumuon').classList.add('valid');
                document.getElementById('mpm-error').innerHTML = '';
                return true;
            }
            else
                return false;
        }
    }
}

function validateMPM2(id)
{       
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let maphieumuon = document.getElementById('maphieumuon').value;
    function check()
    {
        if(dmmt.length > 0)
        {
            let kt = dmmt.every(function(mt,stt)
            {
                if(stt != id)
                {
                    if(maphieumuon === mt.mpm)
                    {
                        maphieumuon = '';
                        document.getElementById('maphieumuon').classList.remove('valid');
                        document.getElementById('maphieumuon').classList.add('invalid');
                        document.getElementById('mpm-error').innerHTML = 'Vui lòng không nhập trùng';
                        return false;
                    }
                    return true;
                }
                return true;
            });
            return kt;
        }
    }
    let mpmValidate = /^[a-zA-Z0-9]{6}$/;
    if(isEmpty(maphieumuon))
    {
        document.getElementById('maphieumuon').classList.remove('valid');
        document.getElementById('maphieumuon').classList.add('invalid');
        document.getElementById('mpm-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(mpmValidate.test(maphieumuon.trim())===false)
    {
        maphieumuon = '';
        document.getElementById('maphieumuon').classList.remove('valid');
        document.getElementById('maphieumuon').classList.add('invalid');
        document.getElementById('mpm-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        if(check())
        {
            document.getElementById('maphieumuon').classList.remove('invalid');
            document.getElementById('maphieumuon').classList.add('valid');
            document.getElementById('mpm-error').innerHTML = '';
            return true;
        }
        else
            return false;
    }
}

function validateMSM()
{
    let masachmuon = document.getElementById('masachmuon').value;
    if(isEmpty(masachmuon))
    {
        document.getElementById('masachmuon').classList.remove('valid');
        document.getElementById('masachmuon').classList.add('invalid');
        document.getElementById('msm-error').innerHTML = 'Vui lòng chọn mã sách';
        return false;
    }
    else
    {
        if(checkDuplicate())
        {
            document.getElementById('masachmuon').classList.remove('invalid');
            document.getElementById('masachmuon').classList.add('valid');
            document.getElementById('msm-error').innerHTML = '';
            return true;
        }
        else
            return false;
    }
}

function validateMSM2(id)
{
    let masachmuon = document.getElementById('masachmuon').value;
    if(isEmpty(masachmuon))
    {
        document.getElementById('masachmuon').classList.remove('valid');
        document.getElementById('masachmuon').classList.add('invalid');
        document.getElementById('msm-error').innerHTML = 'Vui lòng chọn mã sách';
        return false;
    }
    else
    {
        if(checkDuplicate2(id))
        {
            document.getElementById('masachmuon').classList.remove('invalid');
            document.getElementById('masachmuon').classList.add('valid');
            document.getElementById('msm-error').innerHTML = '';
            return true;
        }
        else
            return false;
    }
}

function validateMSV()
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let masinhvien = document.getElementById('masinhvien').value;
    let msvValidate = /^[\d]{9}$/;
    if(isEmpty(masinhvien))
    {
        document.getElementById('masinhvien').classList.remove('valid');
        document.getElementById('masinhvien').classList.add('invalid');
        document.getElementById('msv-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(msvValidate.test(masinhvien.trim())===false)
    {
        masinhvien = '';
        document.getElementById('masinhvien').classList.remove('valid');
        document.getElementById('masinhvien').classList.add('invalid');
        document.getElementById('msv-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        if(dmmt.length===0)
        {
            document.getElementById('masinhvien').classList.remove('invalid');
            document.getElementById('masinhvien').classList.add('valid');
            document.getElementById('msv-error').innerHTML = '';
            return true;
        }
        else
        {
            document.getElementById('masinhvien').classList.remove('invalid');
            document.getElementById('masinhvien').classList.add('valid');
            document.getElementById('msv-error').innerHTML = '';
            if(checkDuplicate())
            {
                document.getElementById('masinhvien').classList.remove('invalid');
                document.getElementById('masinhvien').classList.add('valid');
                document.getElementById('msv-error').innerHTML = '';
                return true;
            }
            else
                return false;
        }
    }
}

function validateMSV2(id)
{
    let masinhvien = document.getElementById('masinhvien').value;
    let msvValidate = /^[\d]{9}$/;
    if(isEmpty(masinhvien))
    {
        document.getElementById('masinhvien').classList.remove('valid');
        document.getElementById('masinhvien').classList.add('invalid');
        document.getElementById('msv-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(msvValidate.test(masinhvien.trim())===false)
    {
        masinhvien = '';
        document.getElementById('masinhvien').classList.remove('valid');
        document.getElementById('masinhvien').classList.add('invalid');
        document.getElementById('msv-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        document.getElementById('masinhvien').classList.remove('invalid');
        document.getElementById('masinhvien').classList.add('valid');
        document.getElementById('msv-error').innerHTML = '';
        if(checkDuplicate2(id))
        {
            document.getElementById('masinhvien').classList.remove('invalid');
            document.getElementById('masinhvien').classList.add('valid');
            document.getElementById('msv-error').innerHTML = '';
            return true;
        }
        else
            return false;
    }
}

function validateNGM()
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let ngaymuon = new Date(`${document.getElementById('ngaymuon').value}`);
    if(isNaN(ngaymuon.getTime()))
    {
        ngaymuon = '';
        document.getElementById('ngaymuon').classList.remove('valid');
        document.getElementById('ngaymuon').classList.add('invalid');
        document.getElementById('ngm-error').innerHTML = 'Vui lòng chọn thời gian';
        return false;
    }
    else
    {
        if(dmmt.length===0)
        {
            document.getElementById('ngaymuon').classList.remove('invalid');
            document.getElementById('ngaymuon').classList.remove('valid');
            document.getElementById('ngm-error').innerHTML = '';
            return true;
        }
        else
        {
            document.getElementById('ngaymuon').classList.remove('invalid');
            document.getElementById('ngaymuon').classList.remove('valid');
            document.getElementById('ngm-error').innerHTML = '';
            if(checkDuplicate())
            {
                document.getElementById('ngaymuon').classList.remove('invalid');
                document.getElementById('ngaymuon').classList.add('valid');
                document.getElementById('ngm-error').innerHTML = '';
                return true;
            }
            else
                return false;
        }
    }
}

function validateNGM2(id)
{
    let ngaymuon = new Date(`${document.getElementById('ngaymuon').value}`);
    if(isNaN(ngaymuon.getTime()))
    {
        ngaymuon = '';
        document.getElementById('ngaymuon').classList.remove('valid');
        document.getElementById('ngaymuon').classList.add('invalid');
        document.getElementById('ngm-error').innerHTML = 'Vui lòng chọn thời gian';
        return false;
    }
    else
    {
        document.getElementById('ngaymuon').classList.remove('invalid');
        document.getElementById('ngaymuon').classList.remove('valid');
        document.getElementById('ngm-error').innerHTML = '';
        if(checkDuplicate2(id))
        {
            document.getElementById('ngaymuon').classList.remove('invalid');
            document.getElementById('ngaymuon').classList.add('valid');
            document.getElementById('ngm-error').innerHTML = '';
            return true;
        }
        else
            return false;
    }
}

function validateNGTR()
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let ngaymuon = new Date(`${document.getElementById('ngaymuon').value}`);
    let ngaytra = new Date(`${document.getElementById('ngaytra').value}`);
    if(isNaN(ngaytra.getTime()))
    {
        ngaytra = '';
        document.getElementById('ngaytra').classList.remove('valid');
        document.getElementById('ngaytra').classList.add('invalid');
        document.getElementById('ngtr-error').innerHTML = 'Vui lòng chọn thời gian';
        return false;
    }
    else if(ngaytra.getTime()<=ngaymuon.getTime())
    {
        ngaytra = '';
        document.getElementById('ngaytra').classList.remove('valid');
        document.getElementById('ngaytra').classList.add('invalid');
        document.getElementById('ngtr-error').innerHTML = 'Vui lòng chọn thời gian lớn hơn';
        return false;
    }
    else
    {
        if(dmmt.length===0)
        {
            document.getElementById('ngaytra').classList.remove('invalid');
            document.getElementById('ngaytra').classList.remove('valid');
            document.getElementById('ngtr-error').innerHTML = '';
            return true;
        }
        else
        {
            document.getElementById('ngaytra').classList.remove('invalid');
            document.getElementById('ngaytra').classList.remove('valid');
            document.getElementById('ngtr-error').innerHTML = '';
            if(checkDuplicate())
            {
                document.getElementById('ngaytra').classList.remove('invalid');
                document.getElementById('ngaytra').classList.add('valid');
                document.getElementById('ngtr-error').innerHTML = '';
                return true;
            }
            else
                return false;
        }
    }
}

function validateNGTR2(id)
{
    let ngaymuon = new Date(`${document.getElementById('ngaymuon').value}`);
    let ngaytra = new Date(`${document.getElementById('ngaytra').value}`);
    if(isNaN(ngaytra.getTime()))
    {
        ngaytra = '';
        document.getElementById('ngaytra').classList.remove('valid');
        document.getElementById('ngaytra').classList.add('invalid');
        document.getElementById('ngtr-error').innerHTML = 'Vui lòng chọn thời gian';
        return false;
    }
    else if(ngaytra.getTime()<=ngaymuon.getTime())
    {
        ngaytra = '';
        document.getElementById('ngaytra').classList.remove('valid');
        document.getElementById('ngaytra').classList.add('invalid');
        document.getElementById('ngtr-error').innerHTML = 'Vui lòng chọn thời gian lớn hơn';
        return false;
    }
    else
    {
        document.getElementById('ngaytra').classList.remove('invalid');
        document.getElementById('ngaytra').classList.remove('valid');
        document.getElementById('ngtr-error').innerHTML = '';
        if(checkDuplicate2(id))
        {
            document.getElementById('ngaytra').classList.remove('invalid');
            document.getElementById('ngaytra').classList.add('valid');
            document.getElementById('ngtr-error').innerHTML = '';
            return true;
        }
        else
            return false;
    }
}

function validateSLM()
{
    let soluongmuon = document.getElementById('soluongmuon').value;
    let masachmuon = document.getElementById('masachmuon').value;
    function ktsl()
    {
        let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
        soluongmuon = Number(`${soluongmuon.trim()}`);
        let kt = dms.every(function(sach)
        {
            sach.sl = Number(`${sach.sl}`);
            if(sach.ms.trim() === masachmuon.trim())
            {
                if(soluongmuon>sach.sl)
                    return false;           
            }
            return true;
        });
        return kt;
    }
    if(isEmpty(soluongmuon))
    {
        document.getElementById('soluongmuon').classList.remove('valid');
        document.getElementById('soluongmuon').classList.add('invalid');
        document.getElementById('slm-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(soluongmuon.trim()<=0)
    {
        soluongmuon = '';
        document.getElementById('soluongmuon').classList.remove('valid');
        document.getElementById('soluongmuon').classList.add('invalid');
        document.getElementById('slm-error').innerHTML = 'Vui lòng nhập lớn hơn 0';
        return false;
    }
    else
    {
        if(ktsl())
        {
            document.getElementById('soluongmuon').classList.remove('invalid');
            document.getElementById('soluongmuon').classList.add('valid');
            document.getElementById('slm-error').innerHTML = '';
            return true;
        }
        else
        {
            soluongmuon = '';
            document.getElementById('soluongmuon').classList.remove('valid');
            document.getElementById('soluongmuon').classList.add('invalid');
            document.getElementById('slm-error').innerHTML = 'Vui lòng nhập nhỏ hơn hoặc bằng';
            return false;
        }
    }
}

function checkSL()
{
    let soluongmuon = document.getElementById('soluongmuon').value;
    document.getElementById('masachmuon').classList.remove('invalid');
    document.getElementById('masachmuon').classList.remove('valid');
    document.getElementById('msm-error').innerHTML = '';
    if(!isEmpty(soluongmuon))
        validateSLM();
}

function checkDuplicate()
{
    checkSL();
    let masachmuon = document.getElementById('masachmuon').value;
    let masinhvien = document.getElementById('masinhvien').value;
    let ngaymuon = new Date(`${document.getElementById('ngaymuon').value}`);
    let ngaytra = new Date(`${document.getElementById('ngaytra').value}`);
    if(!isEmpty(masachmuon) && !isEmpty(masinhvien) && !isNaN(ngaymuon.getTime()) && !isNaN(ngaytra.getTime()))
    {
        let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
        let ngmFormat = `${(ngaymuon.getDate()>=10)?ngaymuon.getDate():'0'+ngaymuon.getDate()}/${((ngaymuon.getMonth()+1)>=10)?ngaymuon.getMonth()+1:'0'+(ngaymuon.getMonth()+1)}/${ngaymuon.getFullYear()}`;
        let ngtrFormat = `${(ngaytra.getDate()>=10)?ngaytra.getDate():'0'+ngaytra.getDate()}/${((ngaytra.getMonth()+1)>=10)?ngaytra.getMonth()+1:'0'+(ngaytra.getMonth()+1)}/${ngaytra.getFullYear()}`;
        let kt = dmmt.every(function(mt)
        {   
            if(masachmuon === mt.msm && masinhvien === mt.msv && ngmFormat === mt.ngm && ngtrFormat === mt.ngtr)
            {
                masachmuon = '';
                masinhvien= '';
                ngaymuon = '';
                ngaytra = '';
                document.getElementById('masachmuon').classList.remove('valid');
                document.getElementById('masachmuon').classList.add('invalid');
                document.getElementById('msm-error').innerHTML = 'Vui lòng không nhập trùng';
                document.getElementById('masinhvien').classList.remove('valid');
                document.getElementById('masinhvien').classList.add('invalid');
                document.getElementById('msv-error').innerHTML = 'Vui lòng không nhập trùng';
                document.getElementById('ngaymuon').classList.remove('valid');
                document.getElementById('ngaymuon').classList.add('invalid');
                document.getElementById('ngm-error').innerHTML = 'Vui lòng không chọn trùng';
                document.getElementById('ngaytra').classList.remove('valid');
                document.getElementById('ngaytra').classList.add('invalid');
                document.getElementById('ngtr-error').innerHTML = 'Vui lòng không chọn trùng';
                return false;
            }
            else
            {
                document.getElementById('masachmuon').classList.add('valid');
                document.getElementById('masachmuon').classList.remove('invalid');
                document.getElementById('msm-error').innerHTML = '';
                document.getElementById('masinhvien').classList.add('valid');
                document.getElementById('masinhvien').classList.remove('invalid');
                document.getElementById('msv-error').innerHTML = '';
                document.getElementById('ngaymuon').classList.add('valid');
                document.getElementById('ngaymuon').classList.remove('invalid');
                document.getElementById('ngm-error').innerHTML = '';
                document.getElementById('ngaytra').classList.add('valid');
                document.getElementById('ngaytra').classList.remove('invalid');
                document.getElementById('ngtr-error').innerHTML = '';
                return true;
            }
        });
        return kt;
    }
} 

function checkDuplicate2(id)
{
    checkSL();
    let masachmuon = document.getElementById('masachmuon').value;
    let masinhvien = document.getElementById('masinhvien').value;
    let ngaymuon = new Date(`${document.getElementById('ngaymuon').value}`);
    let ngaytra = new Date(`${document.getElementById('ngaytra').value}`);
    if(!isEmpty(masachmuon) && !isEmpty(masinhvien) && !isNaN(ngaymuon.getTime()) && !isNaN(ngaytra.getTime()))
    {
        let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
        let ngmFormat = `${(ngaymuon.getDate()>=10)?ngaymuon.getDate():'0'+ngaymuon.getDate()}/${((ngaymuon.getMonth()+1)>=10)?ngaymuon.getMonth()+1:'0'+(ngaymuon.getMonth()+1)}/${ngaymuon.getFullYear()}`;
        let ngtrFormat = `${(ngaytra.getDate()>=10)?ngaytra.getDate():'0'+ngaytra.getDate()}/${((ngaytra.getMonth()+1)>=10)?ngaytra.getMonth()+1:'0'+(ngaytra.getMonth()+1)}/${ngaytra.getFullYear()}`;
        let kt = dmmt.every(function(mt,stt)
        {   
            if(stt != id)
            {
                if(masachmuon === mt.msm && masinhvien === mt.msv && ngmFormat === mt.ngm && ngtrFormat === mt.ngtr)
                {
                    masachmuon = '';
                    masinhvien= '';
                    ngaymuon = '';
                    ngaytra = '';
                    document.getElementById('masachmuon').classList.remove('valid');
                    document.getElementById('masachmuon').classList.add('invalid');
                    document.getElementById('msm-error').innerHTML = 'Vui lòng không nhập trùng';
                    document.getElementById('masinhvien').classList.remove('valid');
                    document.getElementById('masinhvien').classList.add('invalid');
                    document.getElementById('msv-error').innerHTML = 'Vui lòng không nhập trùng';
                    document.getElementById('ngaymuon').classList.remove('valid');
                    document.getElementById('ngaymuon').classList.add('invalid');
                    document.getElementById('ngm-error').innerHTML = 'Vui lòng không chọn trùng';
                    document.getElementById('ngaytra').classList.remove('valid');
                    document.getElementById('ngaytra').classList.add('invalid');
                    document.getElementById('ngtr-error').innerHTML = 'Vui lòng không chọn trùng';
                    return false;
                }
                else
                {
                    document.getElementById('masachmuon').classList.add('valid');
                    document.getElementById('masachmuon').classList.remove('invalid');
                    document.getElementById('msm-error').innerHTML = '';
                    document.getElementById('masinhvien').classList.add('valid');
                    document.getElementById('masinhvien').classList.remove('invalid');
                    document.getElementById('msv-error').innerHTML = '';
                    document.getElementById('ngaymuon').classList.add('valid');
                    document.getElementById('ngaymuon').classList.remove('invalid');
                    document.getElementById('ngm-error').innerHTML = '';
                    document.getElementById('ngaytra').classList.add('valid');
                    document.getElementById('ngaytra').classList.remove('invalid');
                    document.getElementById('ngtr-error').innerHTML = '';
                    return true;
                }
            }
            return true;
        });
        return kt;
    }
}

let inputMPM = document.getElementById('maphieumuon');
let inputMSM = document.getElementById('masachmuon');
let inputMSV = document.getElementById('masinhvien');
let inputNGM = document.getElementById('ngaymuon');
let inputNGTR = document.getElementById('ngaytra');
let inputSLM = document.getElementById('soluongmuon'); 
inputMPM.setAttribute('onblur','validateMPM()');
inputMSM.setAttribute('onblur','validateMSM()');
inputMSV.setAttribute('onblur','validateMSV()');
inputNGM.setAttribute('onblur','validateNGM()');
inputNGTR.setAttribute('onblur','validateNGTR()');
inputSLM.setAttribute('onblur','validateSLM()');
inputMSM.setAttribute("onchange",'checkDuplicate()');
inputNGM.setAttribute('onchange','validateNGM()');
inputNGTR.setAttribute('onchange','validateNGTR()');
inputMSV.addEventListener("onchange",checkDuplicate);
inputNGM.addEventListener("onchange",checkDuplicate);
inputNGTR.addEventListener("onchange",checkDuplicate);
inputMPM.setAttribute('onkeyup','validateMPM()');
inputMSV.setAttribute('onkeyup','validateMSV()');
inputSLM.setAttribute('onkeyup','validateSLM()');

function themmt()
{
    validateMPM(); 
    validateMSM();
    validateMSV(); 
    validateNGM(); 
    validateNGTR(); 
    validateSLM();
    if(validateMPM() && validateMSM() && validateMSV() && validateNGM() && validateNGTR() && validateSLM())
    {
        let check = confirm("Bạn có chắc chắn muốn thêm thông tin này?");
        if(check)
        {
            let maphieumuon = document.getElementById('maphieumuon').value;
            let masachmuon = document.getElementById('masachmuon').value;
            let masinhvien = document.getElementById('masinhvien').value;
            let ngaymuon = document.getElementById('ngaymuon').value;
            let ngmFormat = formatTime(ngaymuon);
            let ngaytra = document.getElementById('ngaytra').value;
            let ngtrFormat = formatTime(ngaytra);
            let soluongmuon = document.getElementById('soluongmuon').value;
            let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];        
            let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
            dms.forEach(function(sach)
            {
                if(sach.ms === masachmuon)
                {
                    sach.sl -= soluongmuon;
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
            clearinput2();
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
        bangDmmt += `<tr onclick="suamt(${id})">
        <td class="td1">${stt}</td>
        <td class="td2">${mt.mpm}</td>
        <td class="td3">${mt.msm}</td>  
        <td class="td4">${mt.msv}</td>
        <td class="td5">${mt.ngm}</td>
        <td class="td6">${mt.ngtr}</td>
        <td class="td7">${mt.slm}</td>
        <td class="td8">
            <a class="action" href="javascript:void(0)" onclick="suamt(${id})"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)" onclick="xoamt(${id})"><i class="fas fa-trash"></i></a> &ensp; <a class="action" href="javascript:void(0)" onclick="trasach(${id})"><i class="fas fa-check"></i></a>
        </td>
        </tr>`
    });
    document.getElementById('dmmt').innerHTML = bangDmmt; 
}

function clearinput2()
{
    document.getElementById('maphieumuon').value = '';
    document.getElementById('maphieumuon').classList.remove('invalid');
    document.getElementById('maphieumuon').classList.remove('valid');
    document.getElementById('mpm-error').innerHTML = '';
    document.getElementById('masachmuon').value = '';
    document.getElementById('masachmuon').classList.remove('invalid');
    document.getElementById('masachmuon').classList.remove('valid');
    document.getElementById('msm-error').innerHTML = '';
    document.getElementById('masinhvien').value = '';
    document.getElementById('masinhvien').classList.remove('invalid');
    document.getElementById('masinhvien').classList.remove('valid');
    document.getElementById('msv-error').innerHTML = '';
    document.getElementById('ngaymuon').value = '';
    document.getElementById('ngaymuon').classList.remove('invalid');
    document.getElementById('ngaymuon').classList.remove('valid');
    document.getElementById('ngm-error').innerHTML = '';
    document.getElementById('ngaytra').value = '';
    document.getElementById('ngaytra').classList.remove('invalid');
    document.getElementById('ngaytra').classList.remove('valid');
    document.getElementById('ngtr-error').innerHTML = '';
    document.getElementById('soluongmuon').value = '';
    document.getElementById('soluongmuon').classList.remove('invalid');
    document.getElementById('soluongmuon').classList.remove('valid');
    document.getElementById('slm-error').innerHTML = '';
}

function xoamt(id)
{
    let tableLength = document.getElementById("dmmt").rows.length;
    for(let i=1;i<tableLength;++i)
    {
        document.getElementById("dmmt").rows[i].removeAttribute("onclick");
    }
    let check = confirm("Bạn có chắc chắn muốn xóa thông tin này?");
    if(check)
    {
        let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
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
        clearinput2();
        document.getElementById('nut2').setAttribute('onclick','themmt()');
        document.getElementById('nut2').innerHTML = 'Thêm mới';
    }
    else
    {
        luuDmmt();
        clearinput2();
        document.getElementById('nut2').setAttribute('onclick','themmt()');
        document.getElementById('nut2').innerHTML = 'Thêm mới';
    }
}

function suamt(id)
{
    clearinput2();
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    dmmt.forEach(function(mt,stt)
    {
        if(stt === id)
        {
            document.getElementById('maphieumuon').classList.add('valid');
            document.getElementById('masachmuon').classList.add('valid');
            document.getElementById('masinhvien').classList.add('valid');
            document.getElementById('ngaymuon').classList.add('valid');
            document.getElementById('ngaytra').classList.add('valid');
            document.getElementById('soluongmuon').classList.add('valid');
            document.getElementById('maphieumuon').value = mt.mpm;
            document.getElementById('masachmuon').value = mt.msm;
            document.getElementById('masinhvien').value = mt.msv;
            document.getElementById('ngaymuon').value = formatTime2(mt.ngm);
            document.getElementById('ngaytra').value = formatTime2(mt.ngtr);
            document.getElementById('soluongmuon').value = mt.slm;
            document.getElementById('nut2').innerHTML = 'Cập nhật';
            document.getElementById('nut2').setAttribute('onclick','capnhatmt('+id+')');
            inputMPM.removeAttribute("onblur");
            inputMSM.removeAttribute("onblur");
            inputMSV.removeAttribute("onblur");
            inputNGM.removeAttribute("onblur");
            inputNGTR.removeAttribute("onblur");
            inputSLM.removeAttribute("onblur");
            inputMSM.setAttribute("onchange",'checkDuplicate2('+id+')');
            inputNGM.setAttribute('onchange','validateNGM2('+id+')');
            inputNGTR.setAttribute('onchange','validateNGTR2('+id+')');
            inputMSV.removeEventListener("onchange",checkDuplicate);
            inputNGM.removeEventListener("onchange",checkDuplicate);
            inputNGTR.removeEventListener("onchange",checkDuplicate);
            inputMSV.addEventListener("onchange",function()
            {
                checkDuplicate2(id);
            });
            inputNGM.addEventListener("onchange",function()
            {
                checkDuplicate2(id);
            });
            inputNGTR.addEventListener("onchange",function()
            {
                checkDuplicate2(id);
            });
            inputMPM.setAttribute('onkeyup','validateMPM2('+id+')');
            inputMSV.setAttribute('onkeyup','validateMSV2('+id+')');
        }
    });
}

function capnhatmt(id)
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    validateMPM2(id); 
    validateMSM2(id);
    validateMSV2(id); 
    validateNGM2(id); 
    validateNGTR2(id); 
    validateSLM();
    if(validateMPM2(id) && validateMSM2(id) && validateMSV2(id) && validateNGM2(id) && validateNGTR2(id) && validateSLM())
    {
        let check = confirm("Bạn có chắc chắn muốn cập nhật thông tin này?");
        if(check)
        {
            let maphieumuon = document.getElementById('maphieumuon').value;
            let masachmuon = document.getElementById('masachmuon').value;
            let masinhvien = document.getElementById('masinhvien').value;
            let ngaymuon = document.getElementById('ngaymuon').value;
            let ngmFormat = formatTime(ngaymuon);
            let ngaytra = document.getElementById('ngaytra').value;
            let ngtrFormat = formatTime(ngaytra);
            let soluongmuon = document.getElementById('soluongmuon').value;
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
                if(masachmuon === MSM)
                {
                    if(masachmuon === sach.ms)
                    {
                        sach.sl = Number(`${sach.sl}`);
                        sach.sl += SLM;
                        sach.sl -= soluongmuon;
                        localStorage.setItem('dms',JSON.stringify(dms));
                        luuDms();
                    }
                }
                else
                {
                    if(masachmuon === sach.ms)
                    {
                        sach.sl = Number(`${sach.sl}`);
                        sach.sl -= soluongmuon;
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
            clearinput2();
            document.getElementById('nut2').setAttribute('onclick','themmt()');
            document.getElementById('nut2').innerHTML = 'Thêm mới';
            inputMPM.setAttribute('onblur','validateMPM()');
            inputMSM.setAttribute('onblur','validateMSM()');
            inputMSV.setAttribute('onblur','validateMSV()');
            inputNGM.setAttribute('onblur','validateNGM()');
            inputNGTR.setAttribute('onblur','validateNGTR()');
            inputSLM.setAttribute('onblur','validateSLM()');
            inputMSM.setAttribute("onchange",'checkDuplicate()');
            inputNGM.setAttribute('onchange','validateNGM()');
            inputNGTR.setAttribute('onchange','validateNGTR()');
            inputMSV.removeEventListener("onchange",function()
            {
                checkDuplicate2(id);
            });
            inputNGM.removeEventListener("onchange",function()
            {
                checkDuplicate2(id);
            });
            inputNGTR.removeEventListener("onchange",function()
            {
                checkDuplicate2(id);
            });
            inputMSV.addEventListener("onchange",checkDuplicate);
            inputNGM.addEventListener("onchange",checkDuplicate);
            inputNGTR.addEventListener("onchange",checkDuplicate);
            inputMPM.setAttribute('onkeyup','validateMPM()');
            inputMSV.setAttribute('onkeyup','validateMSV()');
        }
    }
}

function timkiemmt()
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    if(dmmt.length===0)
    {
        alert("Chức năng này hiện không khả dụng do chưa có dữ liệu! Vui lòng nhập liệu trước khi sử dụng!");
    }
    else
    {
        let tk = document.getElementById('timkiemmt').value;
        let thoigian = document.getElementById('loctg').value;
        let kq1 = [];
        let kq2 = [];
        let kq3 = [];
        let tght = new Date;
        dmmt.forEach(function(mt)
        {
            if(thoigian==='Lọc theo thời gian'||thoigian==='Tất cả')
            {
                if(mt.mpm.indexOf(tk)!=-1||mt.msm.indexOf(tk)!=-1||mt.msv.indexOf(tk)!=-1)
                    kq1.push(mt);
            }
            else if(thoigian==='Còn hạn')
            {
                
                mt.ngtr = formatTime2(mt.ngtr);
                let tgkt = new Date(`${mt.ngtr}`);
                if(tgkt.getDate()>=tght.getDate() && tgkt.getMonth()>=tght.getMonth() && tgkt.getFullYear()>=tght.getFullYear())
                {
                    if(mt.mpm.indexOf(tk)!=-1||mt.msm.indexOf(tk)!=-1||mt.msv.indexOf(tk)!=-1)
                    {
                        mt.ngtr = formatTime(mt.ngtr);
                        kq2.push(mt);
                    }
                }
            }
            else if(thoigian==='Quá hạn')
            {
                mt.ngtr = formatTime2(mt.ngtr);
                let tgkt = new Date(`${mt.ngtr}`);
                if(tgkt.getDate()<tght.getDate() && tgkt.getMonth()<=tght.getMonth() && tgkt.getFullYear()<=tght.getFullYear())
                {
                    if(mt.mpm.indexOf(tk)!=-1||mt.msm.indexOf(tk)!=-1||mt.msv.indexOf(tk)!=-1)
                    {
                        mt.ngtr = formatTime(mt.ngtr);
                        kq3.push(mt);
                    }
                }
            }
        });
        let bangkq = `<tr>
        <th class="td1">STT</th>
        <th class="td2b">Mã phiếu mượn</th>
        <th class="td3b">Mã sách</th>
        <th class="td4b">Mã sinh viên</th>
        <th class="td5b">Ngày mượn</th>
        <th class="td6b">Ngày trả</th>
        <th class="td7b">SL</th>
        <th class="td8b">Thao tác</th>
        </tr>`;
        if(kq1.length===0 && kq2.length===0 && kq3.length===0)
        {
            bangkq += `<tr>
            <td colspan="8">Không tìm thấy dữ liệu</td>
            </tr>`;
            document.getElementById('dmmt').innerHTML = bangkq;
        }
        else if(kq1.length>0)
        {
            kq1.forEach(function(mt,stt)
            {
                let id = stt;
                ++stt;
                bangkq += `<tr onclick="suamt(${id})">
                <td class="td1">${stt}</td>
                <td class="td2">${mt.mpm}</td>
                <td class="td3">${mt.msm}</td>  
                <td class="td4">${mt.msv}</td>
                <td class="td5">${mt.ngm}</td>
                <td class="td6">${mt.ngtr}</td>
                <td class="td7">${mt.slm}</td>
                <td class="td8">
                    <a class="action" href="javascript:void(0)" onclick="suamt(${id})"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)" onclick="xoamt(${id})"><i class="fas fa-trash"></i></a> &ensp; <a class="action" href="javascript:void(0)" onclick="trasach(${id})"><i class="fas fa-check"></i></a>
                </td>
                </tr>`
            });
            document.getElementById('dmmt').innerHTML = bangkq;
        }
        else if(kq2.length>0)
        {
            kq2.forEach(function(mt,stt)
            {
                let id = stt;
                ++stt;
                bangkq += `<tr onclick="suamt(${id})">
                <td class="td1">${stt}</td>
                <td class="td2">${mt.mpm}</td>
                <td class="td3">${mt.msm}</td>  
                <td class="td4">${mt.msv}</td>
                <td class="td5">${mt.ngm}</td>
                <td class="td6">${mt.ngtr}</td>
                <td class="td7">${mt.slm}</td>
                <td class="td8">
                    <a class="action" href="javascript:void(0)" onclick="suamt(${id})"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)" onclick="xoamt(${id})"><i class="fas fa-trash"></i></a> &ensp; <a class="action" href="javascript:void(0)" onclick="trasach(${id})"><i class="fas fa-check"></i></a>
                </td>
                </tr>`
            });
            document.getElementById('dmmt').innerHTML = bangkq;
        }
        else if(kq3.length>0)
        {
            kq3.forEach(function(mt,stt)
            {
                let id = stt;
                ++stt;
                bangkq += `<tr onclick="suamt(${id})">
                <td class="td1">${stt}</td>
                <td class="td2">${mt.mpm}</td>
                <td class="td3">${mt.msm}</td>  
                <td class="td4">${mt.msv}</td>
                <td class="td5">${mt.ngm}</td>
                <td class="td6">${mt.ngtr}</td>
                <td class="td7">${mt.slm}</td>
                <td class="td8">
                    <a class="action" href="javascript:void(0)" onclick="suamt(${id})"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)" onclick="xoamt(${id})"><i class="fas fa-trash"></i></a> &ensp; <a class="action" href="javascript:void(0)" onclick="trasach(${id})"><i class="fas fa-check"></i></a>
                </td>
                </tr>`
            });
            document.getElementById('dmmt').innerHTML = bangkq;
        }
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

function txmt()
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    if(dmmt.length===0)
    {
        alert("Chức năng này hiện không khả dụng do chưa có dữ liệu! Vui lòng nhập liệu trước khi sử dụng!");
    }
    else
    {
        let tk = document.getElementById('timkiemmt').value;
        let thoigian = document.getElementById('loctg').value;
        let kq1 = [];
        let kq2 = [];
        let kq3 = [];
        let xuongdong = '\r\n';
        let noidungcsv = `\uFEFFSTT,Mã phiếu mượn,Mã sách,Mã sinh viên,Ngày mượn,Ngày trả,Số lượng${xuongdong}`;
        let tenfilecsv;
        let tght = new Date;
        dmmt.forEach(function(mt)
        {
            if(thoigian==='Lọc theo thời gian'||thoigian==='Tất cả')
            {
                if(mt.mpm.indexOf(tk)!=-1||mt.msm.indexOf(tk)!=-1||mt.msv.indexOf(tk)!=-1)
                    kq1.push(mt);
            }
            else if(thoigian==='Còn hạn')
            {
                mt.ngtr = formatTime2(mt.ngtr);
                let tgkt = new Date(`${mt.ngtr}`);
                if(tgkt.getDate()>=tght.getDate() && tgkt.getMonth()>=tght.getMonth() && tgkt.getFullYear()>=tght.getFullYear())
                {
                    if(mt.mpm.indexOf(tk)!=-1||mt.msm.indexOf(tk)!=-1||mt.msv.indexOf(tk)!=-1)
                    {
                        mt.ngtr = formatTime(mt.ngtr);
                        kq2.push(mt);
                    }
                }
            }
            else if(thoigian==='Quá hạn')
            {
                mt.ngtr = formatTime2(mt.ngtr);
                let tgkt = new Date(`${mt.ngtr}`);
                if(tgkt.getDate()<tght.getDate() && tgkt.getMonth()<=tght.getMonth() && tgkt.getFullYear()<=tght.getFullYear())
                {
                    if(mt.mpm.indexOf(tk)!=-1||mt.msm.indexOf(tk)!=-1||mt.msv.indexOf(tk)!=-1)
                    {
                        mt.ngtr = formatTime(mt.ngtr);
                        kq3.push(mt);
                    }
                }
            }
        });
        if(kq1.length===0 && kq2.length===0 && kq3.length===0)
        {
            alert("Chức năng này hiện không khả dụng do không có dữ liệu phù hợp! Vui lòng nhập và chọn lại điều kiện tìm kiếm/lọc trước khi tải file!");
        }
        else if(kq1.length>0)
        {
            let sttcuoi = kq1.length - 1;
            tenfilecsv = `DS muon tra_${thoigianhientai()}.csv`;
            kq1.forEach(function(kq,stt)
            {
                noidungcsv += `${stt + 1},${kq.mpm},${kq.msm},${kq.msv},${kq.ngm},${kq.ngtr},${kq.slm}`;
                if(stt<sttcuoi)
                {
                    noidungcsv += xuongdong;
                }
            });
            let linktaixuong = document.createElement('a');
            linktaixuong.setAttribute('href','data:application/csv,' + encodeURIComponent(noidungcsv));
            linktaixuong.setAttribute('download', tenfilecsv);
            document.body.appendChild(linktaixuong);
            linktaixuong.click();
        }
        else if(kq2.length>0)
        {
            let sttcuoi = kq2.length - 1;
            tenfilecsv = `DS con han_${thoigianhientai()}.csv`;
            kq2.forEach(function(kq,stt)
            {
                noidungcsv += `${stt + 1},${kq.mpm},${kq.msm},${kq.msv},${kq.ngm},${kq.ngtr},${kq.slm}`;
                if(stt<sttcuoi)
                {
                    noidungcsv += xuongdong;
                }
            });
            let linktaixuong = document.createElement('a');
            linktaixuong.setAttribute('href','data:application/csv,' + encodeURIComponent(noidungcsv));
            linktaixuong.setAttribute('download', tenfilecsv);
            document.body.appendChild(linktaixuong);
            linktaixuong.click();
        }
        else if(kq3.length>0)
        {
            let sttcuoi = kq3.length - 1;
            tenfilecsv = `DS qua han_${thoigianhientai()}.csv`;
            kq3.forEach(function(kq,stt)
            {
                noidungcsv += `${stt + 1},${kq.mpm},${kq.msm},${kq.msv},${kq.ngm},${kq.ngtr},${kq.slm}`;
                if(stt<sttcuoi)
                {
                    noidungcsv += xuongdong;
                }
            });
            let linktaixuong = document.createElement('a');
            linktaixuong.setAttribute('href','data:application/csv,' + encodeURIComponent(noidungcsv));
            linktaixuong.setAttribute('download', tenfilecsv);
            document.body.appendChild(linktaixuong);
            linktaixuong.click();
        }
    }
}