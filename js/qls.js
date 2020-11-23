function themsach()
{
    validateMS(); 
    validateTS(); 
    validateTTG(); 
    validateTL(); 
    validateNXB(); 
    validateSL();
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
    let bangDms = `<tr class="header">
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
        <td colspan="8" class="no-data">Không tìm thấy dữ liệu</td>
        </tr>`;
    }
    let chonMs = `<option value="" disabled selected>Chọn mã sách</option>`;
    dms.forEach(function(sach,stt){
        let id = stt;
        ++stt;
        bangDms += `<tr id="s${stt}">
        <td class="td1">${stt}</td>
        <td class="td2">${sach.ms}</td>
        <td class="td3">${sach.ts}</td>
        <td class="td4">${sach.ttg}</td>
        <td class="td5">${sach.tl}</td>
        <td class="td6">${sach.nxb}</td>
        <td class="td7">${sach.sl}</td>
        <td class="td8">
            <a class="action" href="javascript:void(0)"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)"><i class="fas fa-trash"></i></a>
        </td>
        </tr>`;
        chonMs += `<option>${sach.ms}</option>`;
    });
    document.getElementById('dms').innerHTML = bangDms;
    document.getElementById('masachmuon').innerHTML = chonMs;
    let td1 = document.querySelectorAll('#dms tbody tr td.td1');
    let td2 = document.querySelectorAll('#dms tbody tr td.td2');
    let td3 = document.querySelectorAll('#dms tbody tr td.td3');
    let td4 = document.querySelectorAll('#dms tbody tr td.td4');
    let td5 = document.querySelectorAll('#dms tbody tr td.td5');
    let td6 = document.querySelectorAll('#dms tbody tr td.td6');
    let td7 = document.querySelectorAll('#dms tbody tr td.td7');
    let functionElement1 = document.querySelectorAll('#dms tbody tr td.td8 a .fas.fa-pen');
    let functionElement2 = document.querySelectorAll('#dms tbody tr td.td8 a .fas.fa-trash');
    for(let i=0;i<td1.length;++i)
        td1[i].onclick = function() { suasach(i); }
    for(let i=0;i<td2.length;++i)
        td2[i].onclick = function() { suasach(i); }
    for(let i=0;i<td3.length;++i)
        td3[i].onclick = function() { suasach(i); }
    for(let i=0;i<td4.length;++i)
        td4[i].onclick = function() { suasach(i); }
    for(let i=0;i<td5.length;++i)
        td5[i].onclick = function() { suasach(i); }
    for(let i=0;i<td6.length;++i)
        td6[i].onclick = function() { suasach(i); }
    for(let i=0;i<td7.length;++i)
        td7[i].onclick = function() { suasach(i); }
    for(let i=0;i<functionElement1.length;++i)
        functionElement1[i].onclick = function() { suasach(i); }
    for(let i=0;i<functionElement2.length;++i)
        functionElement2[i].onclick = function() { xoasach(i); }
}

function luuDms2()
{
    let kqs = localStorage.getItem('kqs') ? JSON.parse(localStorage.getItem('kqs')) : [];
    let bangDms = `<tr class="header">
    <th class="td1">STT</th>
    <th class="td2">Mã sách</th>
    <th class="td3">Tên sách</th>
    <th class="td4">Tên tác giả</th>
    <th class="td5">Thể loại</th>
    <th class="td6">NXB</th>
    <th class="td7">SL</th>
    <th class="td8">Thao tác</th>
    </tr>`;
    if(kqs.length === 0)
    {
        bangDms += `<tr>
        <td colspan="8" class="no-data">Không tìm thấy dữ liệu</td>
        </tr>`;
    }
    let chonMs = `<option value="" disabled selected>Chọn mã sách</option>`;
    kqs.forEach(function(sach,stt){
        let id = stt;
        ++stt;
        bangDms += `<tr id="s${stt}">
        <td class="td1">${stt}</td>
        <td class="td2">${sach.ms}</td>
        <td class="td3">${sach.ts}</td>
        <td class="td4">${sach.ttg}</td>
        <td class="td5">${sach.tl}</td>
        <td class="td6">${sach.nxb}</td>
        <td class="td7">${sach.sl}</td>
        <td class="td8">
            <a class="action" href="javascript:void(0)"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)"><i class="fas fa-trash"></i></a>
        </td>
        </tr>`;
        chonMs += `<option>${sach.ms}</option>`;
    });
    document.getElementById('dms').innerHTML = bangDms;
    document.getElementById('masachmuon').innerHTML = chonMs;
    let td1 = document.querySelectorAll('#dms tbody tr td.td1');
    let td2 = document.querySelectorAll('#dms tbody tr td.td2');
    let td3 = document.querySelectorAll('#dms tbody tr td.td3');
    let td4 = document.querySelectorAll('#dms tbody tr td.td4');
    let td5 = document.querySelectorAll('#dms tbody tr td.td5');
    let td6 = document.querySelectorAll('#dms tbody tr td.td6');
    let td7 = document.querySelectorAll('#dms tbody tr td.td7');
    let functionElement1 = document.querySelectorAll('#dms tbody tr td.td8 a .fas.fa-pen');
    let functionElement2 = document.querySelectorAll('#dms tbody tr td.td8 a .fas.fa-trash');
    for(let i=0;i<td1.length;++i)
        td1[i].onclick = function() { suasach2(i); }
    for(let i=0;i<td2.length;++i)
        td2[i].onclick = function() { suasach2(i); }
    for(let i=0;i<td3.length;++i)
        td3[i].onclick = function() { suasach2(i); }
    for(let i=0;i<td4.length;++i)
        td4[i].onclick = function() { suasach2(i); }
    for(let i=0;i<td5.length;++i)
        td5[i].onclick = function() { suasach2(i); }
    for(let i=0;i<td6.length;++i)
        td6[i].onclick = function() { suasach2(i); }
    for(let i=0;i<td7.length;++i)
        td7[i].onclick = function() { suasach2(i); }
    for(let i=0;i<functionElement1.length;++i)
        functionElement1[i].onclick = function() { suasach2(i); }
    for(let i=0;i<functionElement2.length;++i)
        functionElement2[i].onclick = function() { xoasach2(i); }
}

function xoasach(id)
{
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
            document.getElementById('nut1').onclick = function() { themsach(); };
            document.getElementById('nut1').innerHTML = 'Thêm mới';
            resetStyleElement();
        }
        else
        {
            alert("Chức năng này hiện không khả dụng do dữ liệu sách cần xóa xuất hiện trong danh mục mượn - trả! Vui lòng kiểm tra lại!");
        }
    }
    else
    {
        clearinput1();
        document.getElementById('nut1').onclick = function() { themsach(); };
        document.getElementById('nut1').innerHTML = 'Thêm mới';
    }
}

function xoasach2(id)
{
    let check = confirm("Bạn có chắc chắn muốn xóa thông tin sách này?");
    if(check)
    {
        let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
        let kqs = localStorage.getItem('kqs') ? JSON.parse(localStorage.getItem('kqs')) : [];
        let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
        let mskt;
        let sttbd;
        let kt=true;
        kqs.forEach(function(sach,stt)
        {
            if(stt===id)
                mskt = sach.ms;
        });
        dms.forEach(function(sach,stt)
        {
            if(mskt===sach.ms)
                sttbd = stt;
        });
        dmmt.forEach(function(mt)
        {
            if(mskt===mt.msm)
                kt=false;
        });
        if(kt)
        {
            dms.splice(sttbd,1);
            kqs.splice(id,1);
            localStorage.setItem('dms',JSON.stringify(dms));
            localStorage.setItem('kqs',JSON.stringify(kqs));
            luuDms2();
            clearinput1();
            document.getElementById('nut1').onclick = function() { themsach(); };
            document.getElementById('nut1').innerHTML = 'Thêm mới';
            resetStyleElement();
        }
        else
        {
            alert("Chức năng này hiện không khả dụng do dữ liệu sách cần xóa xuất hiện trong danh mục mượn - trả! Vui lòng kiểm tra lại!");
        }
    }
    else
    {
        clearinput1();
        document.getElementById('nut1').onclick = function() { themsach(); };
        document.getElementById('nut1').innerHTML = 'Thêm mới';
    }
}

function suasach(id)
{
    clearinput1();
    resetStyleElement();
    changeStyleElement(id);
    if(checkWidth1())
        scollToTop();
    else if(checkWidth2())
        scollToForm1();    
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
            document.getElementById('nut1').onclick = function() { capnhatsach(id); }
            inputMS.onblur = function() { validateMS2(id); }
            inputTS.onblur = function() { validateTS2(id); }
            inputMS.onkeyup = function() { validateMS2(id); }
            inputTS.onkeyup = function() { validateTS2(id); }
            inputSL.onkeyup = function() { validateSL2(id); }
        }
    });
}

function suasach2(id)
{
    clearinput1();
    resetStyleElement();
    changeStyleElement(id);
    if(checkWidth1())
        scollToTop();
    else if(checkWidth2())
        scollToForm1();    
    let kqs = localStorage.getItem('kqs') ? JSON.parse(localStorage.getItem('kqs')) : [];
    kqs.forEach(function(sach,stt)
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
            document.getElementById('nut1').onclick = function() { capnhatsach2(id); }
            inputMS.onblur = function() { validateMS3(id); }
            inputTS.onblur = function() { validateTS3(id); }
            inputMS.onkeyup = function() { validateMS3(id); }
            inputTS.onkeyup = function() { validateTS3(id); }
            inputSL.onkeyup = function() { validateSL2(); }
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
            if(checkWidth1())
            {
                scollToElement(id);
                changeStyleElement(id);
            }
            else
                changeStyleElement(id);
            document.getElementById('nut1').onclick = function() { themsach(); }
            document.getElementById('nut1').innerHTML = 'Thêm mới';
            inputMS.onblur = function() { validateMS(); }
            inputTS.onblur = function() { validateTS(); }
            inputTTG.onblur = function() { validateTTG(); }
            inputTL.onblur = function() { validateTL(); }
            inputNXB.onblur = function() { validateNXB(); }
            inputSL.onblur  = function() { validateSL(); }
            inputMS.onkeyup = function() { validateMS(); }
            inputTS.onkeyup = function() { validateTS(); }
            inputSL.onkeyup = function() { validateSL(); }
        }
    }
}

function capnhatsach2(id)
{
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let kqs = localStorage.getItem('kqs') ? JSON.parse(localStorage.getItem('kqs')) : [];
    validateMS3(id);
    validateTS3(id);
    validateTTG();
    validateTL();
    validateNXB();
    validateSL2();
    if(validateMS3(id) && validateTS3(id) && validateTTG() && validateTL() && validateNXB() && validateSL2())
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
            kqs.splice(id,1,sachmoi);
            localStorage.setItem('dms',JSON.stringify(dms));
            localStorage.setItem('kqs',JSON.stringify(kqs));
            luuDms2();
            clearinput1();
            if(checkWidth1())
            {
                scollToElement(id);
                changeStyleElement(id);
            }
            else
                changeStyleElement(id);
            document.getElementById('nut1').onclick = function() { themsach(); }
            document.getElementById('nut1').innerHTML = 'Thêm mới';
            inputMS.onblur = function() { validateMS(); }
            inputTS.onblur = function() { validateTS(); }
            inputTTG.onblur = function() { validateTTG(); }
            inputTL.onblur = function() { validateTL(); }
            inputNXB.onblur = function() { validateNXB(); }
            inputSL.onblur  = function() { validateSL(); }
            inputMS.onkeyup = function() { validateMS(); }
            inputTS.onkeyup = function() { validateTS(); }
            inputSL.onkeyup = function() { validateSL(); }
        }
    }
}

function timkiemsach()
{
    clearinput1();
    resetForm();
    resetStyleElement();
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
        let kqs = localStorage.getItem('kqs') ? JSON.parse(localStorage.getItem('kqs')) : [];
        kqs = [];
        dms.forEach(function(sach)
        {
            if(soluong==='Lọc theo số lượng'||soluong==='Tất cả')
            {
                if(theloai==='Lọc theo thể loại'||theloai==='Tất cả')
                {
                    if(sach.ms.indexOf(tk)!=-1||sach.ts.indexOf(tk)!=-1||sach.ttg.indexOf(tk)!=-1)
                    {
                        kqs.push(sach);
                        localStorage.setItem('kqs',JSON.stringify(kqs));    
                    }
                }
                else if(sach.tl.indexOf(theloai)!=-1)
                {
                    if(sach.ms.indexOf(tk)!=-1||sach.ts.indexOf(tk)!=-1||sach.ttg.indexOf(tk)!=-1)
                    {
                        kqs.push(sach);
                        localStorage.setItem('kqs',JSON.stringify(kqs));    
                    }
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
                        {
                            kqs.push(sach);
                            localStorage.setItem('kqs',JSON.stringify(kqs));    
                        }    
                    }
                    else if(sach.tl.indexOf(theloai)!=-1)
                    {
                        if(sach.ms.indexOf(tk)!=-1||sach.ts.indexOf(tk)!=-1||sach.ttg.indexOf(tk)!=-1)
                        {
                            kqs.push(sach);
                            localStorage.setItem('kqs',JSON.stringify(kqs));    
                        }    
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
                        {
                            kqs.push(sach);
                            localStorage.setItem('kqs',JSON.stringify(kqs))    
                        }    
                    }
                    else if(sach.tl.indexOf(theloai)!=-1)
                    {
                        if(sach.ms.indexOf(tk)!=-1||sach.ts.indexOf(tk)!=-1||sach.ttg.indexOf(tk)!=-1)
                        {
                            kqs.push(sach);
                            localStorage.setItem('kqs',JSON.stringify(kqs))    
                        }    
                    }
                }
            }
        });
        let bangkq = `<tr class="header">
        <th class="td1">STT</th>
        <th class="td2">Mã sách</th>
        <th class="td3">Tên sách</th>
        <th class="td4">Tên tác giả</th>
        <th class="td5">Thể loại</th>
        <th class="td6">NXB</th>
        <th class="td7">SL</th>
        <th class="td8">Thao tác</th>
        </tr>`;
        if(kqs.length === 0)
        {
            bangkq += `<tr>
            <td colspan="8" class="no-data">Không tìm thấy dữ liệu</td>
            </tr>`;
        }
        kqs.forEach(function(sach,stt){
            let id = stt;
            ++stt;
            bangkq += `<tr id="s${stt}">
            <td class="td1">${stt}</td>
            <td class="td2">${sach.ms}</td>
            <td class="td3">${sach.ts}</td>
            <td class="td4">${sach.ttg}</td>
            <td class="td5">${sach.tl}</td>
            <td class="td6">${sach.nxb}</td>
            <td class="td7">${sach.sl}</td>
            <td class="td8">
                <a class="action" href="javascript:void(0)"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)"><i class="fas fa-trash"></i></a>
            </td>
            </tr>`;
        });
        document.getElementById('dms').innerHTML = bangkq;
        let td1 = document.querySelectorAll('#dms tbody tr td.td1');
        let td2 = document.querySelectorAll('#dms tbody tr td.td2');
        let td3 = document.querySelectorAll('#dms tbody tr td.td3');
        let td4 = document.querySelectorAll('#dms tbody tr td.td4');
        let td5 = document.querySelectorAll('#dms tbody tr td.td5');
        let td6 = document.querySelectorAll('#dms tbody tr td.td6');
        let td7 = document.querySelectorAll('#dms tbody tr td.td7');
        let functionElement1 = document.querySelectorAll('#dms tbody tr td.td8 a .fas.fa-pen');
        let functionElement2 = document.querySelectorAll('#dms tbody tr td.td8 a .fas.fa-trash');
        for(let i=0;i<td1.length;++i)
            td1[i].onclick = function() { suasach2(i); }
        for(let i=0;i<td2.length;++i)
            td2[i].onclick = function() { suasach2(i); }
        for(let i=0;i<td3.length;++i)
            td3[i].onclick = function() { suasach2(i); }
        for(let i=0;i<td4.length;++i)
            td4[i].onclick = function() { suasach2(i); }
        for(let i=0;i<td5.length;++i)
            td5[i].onclick = function() { suasach2(i); }
        for(let i=0;i<td6.length;++i)
            td6[i].onclick = function() { suasach2(i); }
        for(let i=0;i<td7.length;++i)
            td7[i].onclick = function() { suasach2(i); }
        for(let i=0;i<functionElement1.length;++i)
            functionElement1[i].onclick = function() { suasach2(i); }
        for(let i=0;i<functionElement2.length;++i)
            functionElement2[i].onclick = function() { xoasach2(i); }
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
    clearinput1();
    resetForm();
    resetStyleElement();
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