let inputMPM = document.getElementById('maphieumuon');
let inputMSM = document.getElementById('masachmuon');
let inputMSV = document.getElementById('masinhvien');
let inputNGM = document.getElementById('ngaymuon');
let inputNGTR = document.getElementById('ngaytra');
let inputSLM = document.getElementById('soluongmuon'); 
inputMPM.onblur = function() { validateMPM(); }
inputMSM.onblur = function() { validateMSM(); }
inputMSV.onblur = function() { validateMSV(); }
inputNGM.onblur = function() { validateNGM(); }
inputNGTR.onblur = function() { validateNGTR(); }
inputSLM.onblur = function() { validateSLM(); }
inputMSM.onchange = function() { checkDuplicate(); }
inputNGM.onchange = function() { validateNGM(); }
inputNGTR.onchange = function() { validateNGTR(); }
inputMSV.addEventListener("onchange",checkDuplicate);
inputNGM.addEventListener("onchange",checkDuplicate);
inputNGTR.addEventListener("onchange",checkDuplicate);
inputMPM.onkeyup = function() { validateMPM(); }
inputMSV.onkeyup = function() { validateMSV(); }
inputSLM.onkeyup = function() { validateSLM(); }

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

function validateMPM3(id)
{       
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let kqmt = localStorage.getItem('kqmt') ? JSON.parse(localStorage.getItem('kqmt')) : [];
    let maphieumuon = document.getElementById('maphieumuon').value;
    function check()
    {
        if(dmmt.length > 0)
        {
            let mpmht;
            kqmt.forEach(function(mt,stt)
            {
                if(stt===id)
                    mpmht = mt.mpm;
            });
            let kt = dmmt.every(function(mt,stt)
            {
                if(mpmht!=mt.mpm)
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

function validateMSM3(id)
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
        if(checkDuplicate3(id))
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

function validateMSV3(id)
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
        if(checkDuplicate3(id))
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

function validateNGM3(id)
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
        if(checkDuplicate3(id))
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

function validateNGTR3(id)
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
        if(checkDuplicate3(id))
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

function validateSLM2(id)
{
    let soluongmuon = document.getElementById('soluongmuon').value;
    let masachmuon = document.getElementById('masachmuon').value;
    function ktsl()
    {
        let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
        let slmbd;
        dmmt.forEach(function(mt,stt)
        {
            if(stt === id)
                slmbd = Number(`${mt.slm}`);
        });
        let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
        soluongmuon = Number(`${soluongmuon.trim()}`);
        let kt = dms.every(function(sach)
        {
            if(slmbd===soluongmuon)
            {
                return true;
            }
            else
            {
                if(sach.ms.trim() === masachmuon.trim())
                {
                    sach.sl = Number(`${sach.sl}`);
                    if(soluongmuon>(sach.sl+slmbd))
                        return false;           
                }
                return true;
            }
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

function checkSL2(id)
{
    let soluongmuon = document.getElementById('soluongmuon').value;
    document.getElementById('masachmuon').classList.remove('invalid');
    document.getElementById('masachmuon').classList.remove('valid');
    document.getElementById('msm-error').innerHTML = '';
    if(!isEmpty(soluongmuon))
        validateSLM2(id);
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
    checkSL2(id);
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

function checkDuplicate3(id)
{
    checkSL2(id);
    let masachmuon = document.getElementById('masachmuon').value;
    let masinhvien = document.getElementById('masinhvien').value;
    let ngaymuon = new Date(`${document.getElementById('ngaymuon').value}`);
    let ngaytra = new Date(`${document.getElementById('ngaytra').value}`);
    if(!isEmpty(masachmuon) && !isEmpty(masinhvien) && !isNaN(ngaymuon.getTime()) && !isNaN(ngaytra.getTime()))
    {
        let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
        let kqmt = localStorage.getItem('kqmt') ? JSON.parse(localStorage.getItem('kqmt')) : [];
        let msmht;
        let msvht;
        let ngmht;
        let ngtrht;
        kqmt.forEach(function(mt,stt)
        {
            if(stt===id)
            {
                msmht = mt.msm;
                msvht = mt.msv;
                ngmht = mt.ngm;
                ngtrht = mt.ngtr;
            }
        });
        let ngmFormat = `${(ngaymuon.getDate()>=10)?ngaymuon.getDate():'0'+ngaymuon.getDate()}/${((ngaymuon.getMonth()+1)>=10)?ngaymuon.getMonth()+1:'0'+(ngaymuon.getMonth()+1)}/${ngaymuon.getFullYear()}`;
        let ngtrFormat = `${(ngaytra.getDate()>=10)?ngaytra.getDate():'0'+ngaytra.getDate()}/${((ngaytra.getMonth()+1)>=10)?ngaytra.getMonth()+1:'0'+(ngaytra.getMonth()+1)}/${ngaytra.getFullYear()}`;
        let kt = dmmt.every(function(mt,stt)
        {   
            if(msmht!=mt.msm || msvht!=mt.msv || ngmht!=mt.ngm || ngtrht!=mt.ngtr)
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