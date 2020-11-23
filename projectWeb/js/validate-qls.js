let inputMS = document.getElementById('masach');
let inputTS = document.getElementById('tensach');
let inputTTG = document.getElementById('tentacgia');
let inputTL = document.getElementById('theloai');
let inputNXB = document.getElementById('namxuatban');
let inputSL = document.getElementById('soluong');
inputMS.onblur = function() { validateMS(); }
inputTS.onblur = function() { validateTS(); }
inputTTG.onblur = function() { validateTTG(); }
inputTL.onblur = function() { validateTL(); }
inputNXB.onblur = function() { validateNXB(); }
inputSL.onblur  = function() { validateSL(); }
inputMS.onkeyup = function() { validateMS(); }
inputTS.onkeyup = function() { validateTS(); }
inputTTG.onkeyup = function() { validateTTG(); }
inputTL.onchange = function() { validateTL(); }
inputNXB.onkeyup = function() { validateNXB(); }
inputSL.onkeyup = function() { validateSL(); }

function validateMS()
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let masach = document.getElementById('masach').value;
    function check()
    {
        if(dms.length>0)
        {
            let kt = dms.every(function(sach)
            {
                if(masach.trim().toLowerCase() === sach.ms.toLowerCase())
                {
                    masach = '';
                    document.getElementById('masach').classList.add('invalid');
                    document.getElementById('ms-error').innerHTML = 'Vui lòng không nhập trùng';
                    return false;
                }
                return true;
            });
            return kt;
        }
    }
    let msValidate = /^[a-zA-Z0-9]{8}$/;
    if(isEmpty(masach))
    {
        document.getElementById('masach').classList.remove('valid');
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(msValidate.test(masach.trim())===false)
    {
        masach = '';
        document.getElementById('masach').classList.remove('valid');
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        if(dms.length===0)
        {
            document.getElementById('masach').classList.remove('invalid');
            document.getElementById('masach').classList.add('valid');
            document.getElementById('ms-error').innerHTML = '';
            return true;
        }
        else
        {
            if(check())
            {
                document.getElementById('masach').classList.remove('invalid');
                document.getElementById('masach').classList.add('valid');
                document.getElementById('ms-error').innerHTML = '';
                return true;
            }
            else
                return false;  
        }
    }
}

function validateTS()
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let tensach = document.getElementById('tensach').value;
    function check()
    {
        if(dms.length>0)
        {
            let kt = dms.every(function(sach)
            {
                if(tensach.trim().toLowerCase() === sach.ts.toLowerCase())
                {
                    tensach = '';
                    document.getElementById('tensach').classList.remove('valid');
                    document.getElementById('tensach').classList.add('invalid');
                    document.getElementById('ts-error').innerHTML = 'Vui lòng không nhập trùng';
                    return false;
                }
                return true;
            });
            return kt;
        }
    }
    let tsValidate = /[`~!@#$%^&*_+={}\-()|[\]:;'"<,>./?]/;
    if(isEmpty(tensach))
    {
        document.getElementById('tensach').classList.remove('valid');
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(tsValidate.test(tensach.trim()))
    {
        tensach = '';
        document.getElementById('tensach').classList.remove('valid');
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        if(dms.length===0)
        {
            document.getElementById('tensach').classList.remove('invalid');
            document.getElementById('tensach').classList.add('valid');
            document.getElementById('ts-error').innerHTML = '';
            return true;
        }
        else
        {
            if(check())
            {
                document.getElementById('tensach').classList.remove('invalid');
                document.getElementById('tensach').classList.add('valid');
                document.getElementById('ts-error').innerHTML = '';
                return true;
            }
            else
                return false;
        }
    }
}

function validateTTG()
{
    let tentacgia = document.getElementById('tentacgia').value;
    let ttgValidate = /[`~!@#$%^&*_+={}\-()|[\]:;'"<,>./?0-9]/;
    if(isEmpty(tentacgia))
    {
        document.getElementById('tentacgia').classList.remove('valid');
        document.getElementById('tentacgia').classList.add('invalid');
        document.getElementById('ttg-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(ttgValidate.test(tentacgia.trim()))
    {
        tentacgia = '';
        document.getElementById('tentacgia').classList.remove('valid');
        document.getElementById('tentacgia').classList.add('invalid');
        document.getElementById('ttg-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        document.getElementById('tentacgia').classList.remove('invalid');
        document.getElementById('tentacgia').classList.add('valid');
        document.getElementById('ttg-error').innerHTML = '';
        return true;
    }
}

function validateTL()
{
    let theloai = document.getElementById('theloai').value;
    if(isEmpty(theloai))
    {
        document.getElementById('theloai').classList.remove('valid');
        document.getElementById('theloai').classList.add('invalid');
        document.getElementById('tl-error').innerHTML = 'Vui lòng chọn thể loại';
        return false;
    }
    else
    {
        document.getElementById('theloai').classList.remove('invalid');
        document.getElementById('theloai').classList.add('valid');
        document.getElementById('tl-error').innerHTML = '';
        return true;
    }
}

function validateNXB()
{
    let namxuatban = document.getElementById('namxuatban').value;
    let nxbValidate = /^[\d]{4}$/;
    if(isEmpty(namxuatban))
    {
        document.getElementById('namxuatban').classList.remove('valid');
        document.getElementById('namxuatban').classList.add('invalid');
        document.getElementById('nxb-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(nxbValidate.test(namxuatban.trim())===false||namxuatban.trim()<=1900||namxuatban.trim()>=2020)
    {
        namxuatban = '';
        document.getElementById('namxuatban').classList.remove('valid');
        document.getElementById('namxuatban').classList.add('invalid');
        document.getElementById('nxb-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        document.getElementById('namxuatban').classList.remove('invalid');
        document.getElementById('namxuatban').classList.add('valid');
        document.getElementById('nxb-error').innerHTML = '';
        return true;
    }
}

function validateSL()
{
    let soluong = document.getElementById('soluong').value;
    let slValidate = /^(0|[1-9][0-9]*)$/;
    if(isEmpty(soluong))
    {
        document.getElementById('soluong').classList.remove('valid');
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(soluong.trim()<=0)
    {
        soluong = '';
        document.getElementById('soluong').classList.remove('valid');
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng nhập số lớn hơn 0';
        return false;
    }
    else if(slValidate.test(soluong.trim())===false)
    {
        soluong = '';
        document.getElementById('soluong').classList.remove('valid');
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        document.getElementById('soluong').classList.remove('invalid');
        document.getElementById('soluong').classList.add('valid');
        document.getElementById('sl-error').innerHTML = '';
        return true;
    }
}

function validateMS2(id)
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let masach = document.getElementById('masach').value;
    function check()
    {
        if(dms.length>0)
        {
            let kt = dms.every(function(sach,stt)
            {
                if(stt != id)
                {
                    if(masach.trim().toLowerCase() === sach.ms.toLowerCase())
                    {
                        masach = '';
                        document.getElementById('masach').classList.remove('valid');
                        document.getElementById('masach').classList.add('invalid');
                        document.getElementById('ms-error').innerHTML = 'Vui lòng không nhập trùng';
                        return false;
                    }
                    return true;
                }
                return true;
            });
            return kt;
        }
    }
    let msValidate = /^[a-zA-Z0-9]{8}$/;
    if(isEmpty(masach))
    {
        document.getElementById('masach').classList.remove('valid');
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(msValidate.test(masach.trim())===false)
    {
        masach = '';
        document.getElementById('masach').classList.remove('valid');
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        if(check())
        {
            document.getElementById('masach').classList.remove('invalid');
            document.getElementById('masach').classList.add('valid');
            document.getElementById('ms-error').innerHTML = '';
            return true;
        }
        else
            return false;  
    }
}

function validateTS2(id)
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let tensach = document.getElementById('tensach').value;
    function check()
    {
        if(dms.length>0)
        {
            let kt = dms.every(function(sach,stt)
            {
                if(stt != id)
                {
                    if(tensach.trim().toLowerCase() === sach.ts.toLowerCase())
                    {
                        tensach = '';
                        document.getElementById('tensach').classList.remove('valid');
                        document.getElementById('tensach').classList.add('invalid');
                        document.getElementById('ts-error').innerHTML = 'Vui lòng không nhập trùng';
                        return false;
                    }
                    return true;
                }
                return true;
            });
            return kt;
        }
    }
    let tsValidate = /[`~!@#$%^&*_+={}\-()|[\]:;'"<,>./?]/;
    if(isEmpty(tensach))
    {
        document.getElementById('tensach').classList.remove('valid');
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(tsValidate.test(tensach.trim()))
    {
        tensach = '';
        document.getElementById('tensach').classList.remove('valid');
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        if(check())
        {
            document.getElementById('tensach').classList.remove('invalid');
            document.getElementById('tensach').classList.add('valid');
            document.getElementById('ts-error').innerHTML = '';
            return true;
        }
        else
            return false;
    }
}

function validateSL2()
{
    let soluong = document.getElementById('soluong').value;
    let slValidate = /^(0|[1-9][0-9]*)$/;
    if(isEmpty(soluong))
    {
        document.getElementById('soluong').classList.remove('valid');
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(soluong.trim()<0)
    {
        soluong = '';
        document.getElementById('soluong').classList.remove('valid');
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng nhập số lớn hơn hoặc bằng 0';
        return false;
    }
    else if(slValidate.test(soluong.trim())===false)
    {
        soluong = '';
        document.getElementById('soluong').classList.remove('valid');
        document.getElementById('soluong').classList.add('invalid');
        document.getElementById('sl-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        document.getElementById('soluong').classList.remove('invalid');
        document.getElementById('soluong').classList.add('valid');
        document.getElementById('sl-error').innerHTML = '';
        return true;
    }
}

function validateMS3(id)
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let kqs = localStorage.getItem('kqs') ? JSON.parse(localStorage.getItem('kqs')) : [];
    let masach = document.getElementById('masach').value;
    function check()
    {
        if(dms.length>0)
        {
            let msht;
            let tsht;
            kqs.forEach(function(sach,stt)
            {
                if(stt===id)
                {
                    msht = sach.ms;
                    tsht = sach.ht;
                }
            });
            let kt = dms.every(function(sach)
            {
                if(msht!=sach.ms && tsht!=sach.ts)
                {
                    if(masach.trim().toLowerCase() === sach.ms.toLowerCase())
                    {
                        masach = '';
                        document.getElementById('masach').classList.remove('valid');
                        document.getElementById('masach').classList.add('invalid');
                        document.getElementById('ms-error').innerHTML = 'Vui lòng không nhập trùng';
                        return false;
                    }
                    return true;
                }
                return true;
            });
            return kt;
        }
    }
    let msValidate = /^[a-zA-Z0-9]{8}$/;
    if(isEmpty(masach))
    {
        document.getElementById('masach').classList.remove('valid');
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(msValidate.test(masach.trim())===false)
    {
        masach = '';
        document.getElementById('masach').classList.remove('valid');
        document.getElementById('masach').classList.add('invalid');
        document.getElementById('ms-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        if(check())
        {
            document.getElementById('masach').classList.remove('invalid');
            document.getElementById('masach').classList.add('valid');
            document.getElementById('ms-error').innerHTML = '';
            return true;
        }
        else
            return false;  
    }
}

function validateTS3(id)
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let kqs = localStorage.getItem('kqs') ? JSON.parse(localStorage.getItem('kqs')) : [];
    let tensach = document.getElementById('tensach').value;
    function check()
    {
        if(dms.length>0)
        {
            let msht;
            let tsht;
            kqs.forEach(function(sach,stt)
            {
                if(stt===id)
                {
                    msht = sach.ms;
                    tsht = sach.ht;
                }
            });
            let kt = dms.every(function(sach,stt)
            {
                if(msht!=sach.ms && tsht!=sach.ts)
                {
                    if(tensach.trim().toLowerCase() === sach.ts.toLowerCase())
                    {
                        tensach = '';
                        document.getElementById('tensach').classList.remove('valid');
                        document.getElementById('tensach').classList.add('invalid');
                        document.getElementById('ts-error').innerHTML = 'Vui lòng không nhập trùng';
                        return false;
                    }
                    return true;
                }
                return true;
            });
            return kt;
        }
    }
    let tsValidate = /[`~!@#$%^&*_+={}\-()|[\]:;'"<,>./?]/;
    if(isEmpty(tensach))
    {
        document.getElementById('tensach').classList.remove('valid');
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng không bỏ trống';
        return false;
    }
    else if(tsValidate.test(tensach.trim()))
    {
        tensach = '';
        document.getElementById('tensach').classList.remove('valid');
        document.getElementById('tensach').classList.add('invalid');
        document.getElementById('ts-error').innerHTML = 'Vui lòng nhập đúng định dạng';
        return false;
    }
    else
    {
        if(check())
        {
            document.getElementById('tensach').classList.remove('invalid');
            document.getElementById('tensach').classList.add('valid');
            document.getElementById('ts-error').innerHTML = '';
            return true;
        }
        else
            return false;
    }
}