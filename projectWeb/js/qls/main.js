function isEmpty(input) 
{
    return ((input === '') || (input.length === 0));
}

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
    let ttgValidate = /[`~!@#$%^&*_+={}\-()|[\]:;'"<,>./?]/;
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

let inputMS = document.getElementById('masach');
let inputTS = document.getElementById('tensach');
let inputTTG = document.getElementById('tentacgia');
let inputTL = document.getElementById('theloai');
let inputNXB = document.getElementById('namxuatban');
let inputSL = document.getElementById('soluong');
inputMS.setAttribute("onblur","validateMS()");
inputTS.setAttribute("onblur","validateTS()");
inputTTG.setAttribute("onblur","validateTTG()");
inputTL.setAttribute("onblur","validateTL()");
inputNXB.setAttribute("onblur","validateNXB()");
inputSL.setAttribute("onblur","validateSL()");
inputMS.setAttribute("onkeyup","validateMS()");
inputTS.setAttribute("onkeyup","validateTS()");
inputTTG.setAttribute("onkeyup","validateTTG()");
inputTL.setAttribute("onchange","validateTL()");
inputNXB.setAttribute("onkeyup","validateNXB()");
inputSL.setAttribute("onkeyup","validateSL()");


function themsach()
{
    validateMS(); 
    validateTS(); 
    validateTTG(); 
    validateTL(); 
    validateNXB(); 
    validateSL();
    console.log(validateMS(), validateTS(), validateTTG(), validateTL(), validateNXB(), validateSL());
    if(validateMS() && validateTS() && validateTTG() && validateTL() && validateNXB() && validateSL())
    {
        let check = confirm("Bạn có chắc chắn muốn thêm sách này?");
        if(check)
        {
            let masach = document.getElementById('masach').value;
            let tensach = document.getElementById('tensach').value;
            let tentacgia = document.getElementById('tentacgia').value;
            let theloai = document.getElementById('theloai').value;
            let namxuatban = document.getElementById('namxuatban').value;
            let soluong = document.getElementById('soluong').value;
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
            clearinput1();
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
        bangDms += `<tr onclick="suasach(${id})">
        <td class="td1">${stt}</td>
        <td class="td2">${sach.ms}</td>
        <td class="td3">${sach.ts}</td>
        <td class="td4">${sach.ttg}</td>
        <td class="td5">${sach.tl}</td>
        <td class="td6">${sach.nxb}</td>
        <td class="td7">${sach.sl}</td>
        <td class="td8">
            <a class="action" href="javascript:void(0)" onclick="suasach(${id})"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)" onclick="xoasach(${id})"><i class="fas fa-trash"></i></a>
        </td>
        </tr>`;
        chonMs += `<option>${sach.ms}</option>`;
    });
    document.getElementById('dms').innerHTML = bangDms;
    document.getElementById('masachmuon').innerHTML = chonMs;
}

function xoasach(id)
{
    let tableLength = document.getElementById("dms").rows.length;
    for(let i=1;i<tableLength;++i)
    {
        document.getElementById("dms").rows[i].removeAttribute("onclick");
    }
    let check = confirm("Bạn có chắc chắn muốn xóa thông tin sách này?");
    if(check)
    {
        let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
        let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
        let mskt;
        let kt=true;
        dms.forEach(function(sach,stt)
        {
            if(stt===id)
                mskt=sach.ms;
        });
        dmmt.forEach(function(mt)
        {
            if(mskt===mt.msm)
                kt=false;
        });
        if(kt)
        {
            dms.splice(id,1);
            localStorage.setItem('dms',JSON.stringify(dms));
            luuDms();
            clearinput1();
            document.getElementById('nut1').removeAttribute('onclick');
            document.getElementById('nut1').setAttribute('onclick','themsach()');
            document.getElementById('nut1').innerHTML = 'Thêm mới';
        }
        else
        {
            alert("Chức năng này hiện không khả dụng do dữ liệu sách cần xóa xuất hiện trong danh mục mượn - trả! Vui lòng kiểm tra lại!");
        }
    }
    else
    {
        luuDms();
        clearinput1();
        document.getElementById('nut1').removeAttribute('onclick');
        document.getElementById('nut1').setAttribute('onclick','themsach()');
        document.getElementById('nut1').innerHTML = 'Thêm mới';
    }
}

function clearinput1()
{
    document.getElementById('masach').value = '';
    document.getElementById('masach').classList.remove('invalid');
    document.getElementById('masach').classList.remove('valid');
    document.getElementById('ms-error').innerHTML = '';
    document.getElementById('tensach').value = '';
    document.getElementById('tensach').classList.remove('invalid');
    document.getElementById('tensach').classList.remove('valid');
    document.getElementById('ts-error').innerHTML = '';
    document.getElementById('tentacgia').value = '';
    document.getElementById('tentacgia').classList.remove('invalid');
    document.getElementById('tentacgia').classList.remove('valid');
    document.getElementById('ttg-error').innerHTML = '';
    document.getElementById('theloai').value = '';
    document.getElementById('theloai').classList.remove('invalid');
    document.getElementById('theloai').classList.remove('valid');
    document.getElementById('tl-error').innerHTML = '';
    document.getElementById('namxuatban').value = '';
    document.getElementById('namxuatban').classList.remove('invalid');
    document.getElementById('namxuatban').classList.remove('valid');
    document.getElementById('nxb-error').innerHTML = '';
    document.getElementById('soluong').value = '';
    document.getElementById('soluong').classList.remove('invalid');
    document.getElementById('soluong').classList.remove('valid');
    document.getElementById('sl-error').innerHTML = '';
}

function suasach(id)
{
    clearinput1();
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    dms.forEach(function(sach,stt)
    {
        if(stt === id)
        {
            document.getElementById('masach').classList.add('valid');
            document.getElementById('tensach').classList.add('valid');
            document.getElementById('tentacgia').classList.add('valid');
            document.getElementById('theloai').classList.add('valid');
            document.getElementById('namxuatban').classList.add('valid');
            document.getElementById('soluong').classList.add('valid');
            document.getElementById('masach').value = sach.ms;
            document.getElementById('tensach').value = sach.ts;
            document.getElementById('tentacgia').value = sach.ttg;
            document.getElementById('theloai').value = sach.tl;
            document.getElementById('namxuatban').value = sach.nxb;
            document.getElementById('soluong').value = sach.sl;
            document.getElementById('nut1').innerHTML = 'Cập nhật';
            document.getElementById('nut1').setAttribute('onclick','capnhatsach('+id+')');
            inputMS.removeAttribute("onblur");
            inputTS.removeAttribute("onblur");
            inputTTG.removeAttribute("onblur");
            inputTL.removeAttribute("onblur");
            inputNXB.removeAttribute("onblur");
            inputSL.removeAttribute("onblur");
            inputMS.setAttribute("onkeyup",'validateMS2('+id+')');
            inputTS.setAttribute("onkeyup",'validateTS2('+id+')');
            inputSL.setAttribute("onkeyup",'validateSL2('+id+')');
        }
    });
}

function capnhatsach(id)
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    validateMS2(id);
    validateTS2(id);
    validateTTG();
    validateTL();
    validateNXB();
    validateSL2();
    if(validateMS2(id) && validateTS2(id) && validateTTG() && validateTL() && validateNXB() && validateSL2())
    {
        let check = confirm("Bạn có chắc chắn muốn cập nhật thông tin sách này?");
        if(check)
        {
            let masach = document.getElementById('masach').value;
            let tensach = document.getElementById('tensach').value;
            let tentacgia = document.getElementById('tentacgia').value;
            let theloai = document.getElementById('theloai').value;
            let namxuatban = document.getElementById('namxuatban').value;
            let soluong = document.getElementById('soluong').value;
            let msMoi;
            dms.forEach(function(sach,stt)
            {
                if(stt===id)
                    msMoi = sach.ms;
            });
            dmmt.forEach(function(mt)
            {
                if(msMoi === mt.msm)
                {
                    mt.msm = masach;
                    localStorage.setItem('dmmt',JSON.stringify(dmmt));
                }
            });
            luuDmmt();
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
            inputMS.setAttribute("onblur","validateMS()");
            inputTS.setAttribute("onblur","validateTS()");
            inputTTG.setAttribute("onblur","validateTTG()");
            inputTL.setAttribute("onblur","validateTL()");
            inputNXB.setAttribute("onblur","validateNXB()");
            inputSL.setAttribute("onblur","validateSL()");
            inputMS.setAttribute("onkeyup","validateMS()");
            inputTS.setAttribute("onkeyup","validateTS()");
            inputSL.setAttribute("onkeyup","validateSL()");
        }
    }
}

function timkiemsach()
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
        let soluong = document.getElementById('locsl').value;
        let kq = [];
        dms.forEach(function(sach)
        {
            if(soluong==='Lọc theo số lượng'||soluong==='Tất cả')
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
            }
            else if(soluong==='Còn')
            {
                sach.sl = Number(`${sach.sl}`);
                if(sach.sl>0)
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
                }
            }
            else if(soluong==='Hết')
            {
                sach.sl = Number(`${sach.sl}`);
                if(sach.sl===0)
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
                }
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
            bangkq += `<tr onclick="suasach(${id})">
            <td class="td1">${stt}</td>
            <td class="td2">${sach.ms}</td>
            <td class="td3">${sach.ts}</td>
            <td class="td4">${sach.ttg}</td>
            <td class="td5">${sach.tl}</td>
            <td class="td6">${sach.nxb}</td>
            <td class="td7">${sach.sl}</td>
            <td class="td8">
                <a class="action" href="javascript:void(0)" onclick="suasach(${id})"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)" onclick="xoasach(${id})"><i class="fas fa-trash"></i></a>
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
        let soluong = document.getElementById('locsl').value;
        let kqtx = [];
        dms.forEach(function(sach)
        {
            if(soluong==='Lọc theo số lượng'||soluong==='Tất cả')
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
            }
            else if(soluong==='Còn')
            {
                if(sach.sl>0)
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
                }
            }
            else if(soluong==='Hết')
            {
                if(sach.sl===0)
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
                }
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