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
    let bangDmmt = `<tr class="header">
    <th class="td1">STT</th>
    <th class="td2">Mã phiếu mượn</th>
    <th class="td3">Mã sách</th>
    <th class="td4">Mã sinh viên</th>
    <th class="td5">Ngày mượn</th>
    <th class="td6">Ngày trả</th>
    <th class="td7">SL</th>
    <th class="td8">Thao tác</th>
    </tr>`;
    if(dmmt.length === 0)
    {
        bangDmmt += `<tr>
        <td colspan="8" class="no-data">Không tìm thấy dữ liệu</td>
        </tr>`;
    }
    dmmt.forEach(function(mt,stt)
    {
        let id = stt;
        ++stt;
        bangDmmt += `<tr id="ss${stt}">
        <td class="td1">${stt}</td>
        <td class="td2">${mt.mpm}</td>
        <td class="td3">${mt.msm}</td>  
        <td class="td4">${mt.msv}</td>
        <td class="td5">${mt.ngm}</td>
        <td class="td6">${mt.ngtr}</td>
        <td class="td7">${mt.slm}</td>
        <td class="td8">
            <a class="action" href="javascript:void(0)"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)"><i class="fas fa-trash"></i></a> &ensp; <a class="action" href="javascript:void(0)"><i class="fas fa-check"></i></a>
        </td>
        </tr>`
    });
    document.getElementById('dmmt').innerHTML = bangDmmt; 
    let td1 = document.querySelectorAll('#dmmt tbody tr td.td1');
    let td2 = document.querySelectorAll('#dmmt tbody tr td.td2');
    let td3 = document.querySelectorAll('#dmmt tbody tr td.td3');
    let td4 = document.querySelectorAll('#dmmt tbody tr td.td4');
    let td5 = document.querySelectorAll('#dmmt tbody tr td.td5');
    let td6 = document.querySelectorAll('#dmmt tbody tr td.td6');
    let td7 = document.querySelectorAll('#dmmt tbody tr td.td7');
    let functionElement1 = document.querySelectorAll('#dmmt tbody tr td.td8 a .fas.fa-pen');
    let functionElement2 = document.querySelectorAll('#dmmt tbody tr td.td8 a .fas.fa-trash');
    let functionElement3 = document.querySelectorAll('#dmmt tbody tr td.td8 a .fas.fa-check');
    for(let i=0;i<td1.length;++i)
        td1[i].onclick = function() { suamt(i); }
    for(let i=0;i<td2.length;++i)
        td2[i].onclick = function() { suamt(i); }
    for(let i=0;i<td3.length;++i)
        td3[i].onclick = function() { suamt(i); }
    for(let i=0;i<td4.length;++i)
        td4[i].onclick = function() { suamt(i); }
    for(let i=0;i<td5.length;++i)
        td5[i].onclick = function() { suamt(i); }
    for(let i=0;i<td6.length;++i)
        td6[i].onclick = function() { suamt(i); }
    for(let i=0;i<td7.length;++i)
        td7[i].onclick = function() { suamt(i); }
    for(let i=0;i<functionElement1.length;++i)
        functionElement1[i].onclick = function() { suamt(i); }
    for(let i=0;i<functionElement2.length;++i)
        functionElement2[i].onclick = function() { xoamt(i); }
    for(let i=0;i<functionElement3.length;++i)
        functionElement3[i].onclick = function() { trasach(i); }
}

function luuDmmt2()
{
    let kqmt = localStorage.getItem('kqmt') ? JSON.parse(localStorage.getItem('kqmt')) : [];
    let bangDmmt = `<tr class="header">
    <th class="td1">STT</th>
    <th class="td2">Mã phiếu mượn</th>
    <th class="td3">Mã sách</th>
    <th class="td4">Mã sinh viên</th>
    <th class="td5">Ngày mượn</th>
    <th class="td6">Ngày trả</th>
    <th class="td7">SL</th>
    <th class="td8">Thao tác</th>
    </tr>`;
    if(kqmt.length === 0)
    {
        bangDmmt += `<tr>
        <td colspan="8" class="no-data">Không tìm thấy dữ liệu</td>
        </tr>`;
    }
    kqmt.forEach(function(mt,stt)
    {
        let id = stt;
        ++stt;
        bangDmmt += `<tr id="ss${stt}">
        <td class="td1">${stt}</td>
        <td class="td2">${mt.mpm}</td>
        <td class="td3">${mt.msm}</td>  
        <td class="td4">${mt.msv}</td>
        <td class="td5">${mt.ngm}</td>
        <td class="td6">${mt.ngtr}</td>
        <td class="td7">${mt.slm}</td>
        <td class="td8">
            <a class="action" href="javascript:void(0)"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)"><i class="fas fa-trash"></i></a> &ensp; <a class="action" href="javascript:void(0)"><i class="fas fa-check"></i></a>
        </td>
        </tr>`
    });
    document.getElementById('dmmt').innerHTML = bangDmmt; 
    let td1 = document.querySelectorAll('#dmmt tbody tr td.td1');
    let td2 = document.querySelectorAll('#dmmt tbody tr td.td2');
    let td3 = document.querySelectorAll('#dmmt tbody tr td.td3');
    let td4 = document.querySelectorAll('#dmmt tbody tr td.td4');
    let td5 = document.querySelectorAll('#dmmt tbody tr td.td5');
    let td6 = document.querySelectorAll('#dmmt tbody tr td.td6');
    let td7 = document.querySelectorAll('#dmmt tbody tr td.td7');
    let functionElement1 = document.querySelectorAll('#dmmt tbody tr td.td8 a .fas.fa-pen');
    let functionElement2 = document.querySelectorAll('#dmmt tbody tr td.td8 a .fas.fa-trash');
    let functionElement3 = document.querySelectorAll('#dmmt tbody tr td.td8 a .fas.fa-check');
    for(let i=0;i<td1.length;++i)
        td1[i].onclick = function() { suamt2(i); }
    for(let i=0;i<td2.length;++i)
        td2[i].onclick = function() { suamt2(i); }
    for(let i=0;i<td3.length;++i)
        td3[i].onclick = function() { suamt2(i); }
    for(let i=0;i<td4.length;++i)
        td4[i].onclick = function() { suamt2(i); }
    for(let i=0;i<td5.length;++i)
        td5[i].onclick = function() { suamt2(i); }
    for(let i=0;i<td6.length;++i)
        td6[i].onclick = function() { suamt2(i); }
    for(let i=0;i<td7.length;++i)
        td7[i].onclick = function() { suamt2(i); }
    for(let i=0;i<functionElement1.length;++i)
        functionElement1[i].onclick = function() { suamt2(i); }
    for(let i=0;i<functionElement2.length;++i)
        functionElement2[i].onclick = function() { xoamt2(i); }
    for(let i=0;i<functionElement3.length;++i)
        functionElement3[i].onclick = function() { trasach2(i); }
}

function xoamt(id)
{
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
        document.getElementById('nut2').onclick = function() { themmt(); };
        document.getElementById('nut2').innerHTML = 'Thêm mới';
    }
    else
    {
        clearinput2();
        document.getElementById('nut2').onclick = function() { themmt(); };
        document.getElementById('nut2').innerHTML = 'Thêm mới';
    }
}

function xoamt2(id)
{
    let check = confirm("Bạn có chắc chắn muốn xóa thông tin này?");
    if(check)
    {
        let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
        let kqmt = localStorage.getItem('kqmt') ? JSON.parse(localStorage.getItem('kqmt')) : [];
        let mpmkt;
        let sttbd;
        let soluongmuon;
        let masachmuon;
        kqmt.forEach(function(mt,stt)
        {
            if(stt===id)
                mpmkt = mt.mpm;
        });
        dmmt.forEach(function(mt,stt)
        {
            if(mpmkt===mt.mpm)
            {
                sttbd = stt;
                masachmuon = mt.msm;
                soluongmuon = Number(`${mt.slm}`);
            }
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
        dmmt.splice(sttbd,1);
        kqmt.splice(id,1);
        localStorage.setItem('dmmt',JSON.stringify(dmmt));
        localStorage.setItem('kqmt',JSON.stringify(kqmt));
        luuDmmt2();
        clearinput2();
        document.getElementById('nut2').onclick = function() { themmt(); };
        document.getElementById('nut2').innerHTML = 'Thêm mới';
    }
    else
    {
        clearinput2();
        document.getElementById('nut2').onclick = function() { themmt(); };
        document.getElementById('nut2').innerHTML = 'Thêm mới';
    }
}

function suamt(id)
{
    clearinput2();
    resetStyleElement2();
    changeStyleElement2(id);
    if(checkWidth1())
        scollToTop();
    else if(checkWidth2())
        scollToForm1();
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
            document.getElementById('nut2').onclick = function() { capnhatmt(id); }
            inputMPM.onblur = function() { validateMPM2(id); }
            inputMSM.onblur = function() { validateMSM2(id); }
            inputMSV.onblur = function() { validateMSV2(id); }
            inputNGM.onblur = function() { validateNGM2(id); }
            inputNGTR.onblur = function() { validateNGTR2(id); }
            inputSLM.onblur = function() { validateSLM2(id); }
            inputMSM.onchange = function() { checkDuplicate2(id); }
            inputNGM.onchange = function() { validateNGM2(id); }
            inputNGTR.onchange = function() { validateNGTR2(id); }
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
            inputMPM.onkeyup = function() { validateMPM2(id); }
            inputMSV.onkeyup = function() { validateMSV2(id); };
            inputSLM.onkeyup = function() { validateSLM2(id); }
        }
    });
}

function suamt2(id)
{
    clearinput2();
    resetStyleElement2();
    changeStyleElement2(id);
    if(checkWidth1())
        scollToTop();
    else if(checkWidth2())
        scollToForm1();
    let kqmt = localStorage.getItem('kqmt') ? JSON.parse(localStorage.getItem('kqmt')) : [];
    kqmt.forEach(function(mt,stt)
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
            document.getElementById('nut2').onclick = function() { capnhatmt2(id); }
            inputMPM.onblur = function() { validateMPM3(id); }
            inputMSM.onblur = function() { validateMSM3(id); }
            inputMSV.onblur = function() { validateMSV3(id); }
            inputNGM.onblur = function() { validateNGM3(id); }
            inputNGTR.onblur = function() { validateNGTR3(id); }
            inputSLM.onblur = function() { validateSLM3(id); }
            inputMSM.onchange = function() { checkDuplicate3(id); }
            inputNGM.onchange = function() { validateNGM3(id); }
            inputNGTR.onchange = function() { validateNGTR3(id); }
            inputMSV.removeEventListener("onchange",checkDuplicate);
            inputNGM.removeEventListener("onchange",checkDuplicate);
            inputNGTR.removeEventListener("onchange",checkDuplicate);
            inputMSV.addEventListener("onchange",function()
            {
                checkDuplicate3(id);
            });
            inputNGM.addEventListener("onchange",function()
            {
                checkDuplicate3(id);
            });
            inputNGTR.addEventListener("onchange",function()
            {
                checkDuplicate3(id);
            });
            inputMPM.onkeyup = function() { validateMPM3(id); }
            inputMSV.onkeyup = function() { validateMSV3(id); }
            inputSLM.onkeyup = function() { validateSLM3(id); }
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
    validateSLM2(id);
    if(validateMPM2(id) && validateMSM2(id) && validateMSV2(id) && validateNGM2(id) && validateNGTR2(id) && validateSLM2(id))
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
            if(checkWidth1())
            {
                scollToElement(id);
                changeStyleElement(id);
            }
            else
                changeStyleElement2(id);
            document.getElementById('nut2').onclick = function() { themmt(); }
            document.getElementById('nut2').innerHTML = 'Thêm mới';
            inputMPM.onblur = function() { validateMPM(); }
            inputMSM.onblur = function() { validateMSM(); }
            inputMSV.onblur = function() { validateMSV(); }
            inputNGM.onblur = function() { validateNGM(); }
            inputNGTR.onblur = function() { validateNGTR(); }
            inputSLM.onblur = function() { validateSLM(); }
            inputMSM.onchange = function() { checkDuplicate(); }
            inputNGM.onchange = function() { validateNGM(); }
            inputNGTR.onchange = function() { validateNGTR(); }
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
            inputMPM.onkeyup = function() { validateMPM(); }
            inputMSV.onkeyup = function() { validateMSV(); }
            inputSLM.onkeyup = function() { validateSLM(); }
        }
    }
}

function capnhatmt2(id)
{
    let dmmt = localStorage.getItem('dmmt') ? JSON.parse(localStorage.getItem('dmmt')) : [];
    let kqmt = localStorage.getItem('kqmt') ? JSON.parse(localStorage.getItem('kqmt')) : [];
    let dms = localStorage.getItem('dms') ? JSON.parse(localStorage.getItem('dms')) : [];
    validateMPM3(id); 
    validateMSM3(id);
    validateMSV3(id); 
    validateNGM3(id); 
    validateNGTR3(id); 
    validateSLM2(id);
    if(validateMPM3(id) && validateMSM3(id) && validateMSV3(id) && validateNGM3(id) && validateNGTR3(id) && validateSLM2(id))
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
            kqmt.splice(id,1,mtmoi);
            localStorage.setItem('dmmt',JSON.stringify(dmmt));
            localStorage.setItem('kqmt',JSON.stringify(kqmt));
            luuDmmt2();
            clearinput2();
            if(checkWidth1())
            {
                scollToElement(id);
                changeStyleElement(id);
            }
            else
                changeStyleElement2(id);
            document.getElementById('nut2').onclick = function() { themmt(); }
            document.getElementById('nut2').innerHTML = 'Thêm mới';
            inputMPM.onblur = function() { validateMPM(); }
            inputMSM.onblur = function() { validateMSM(); }
            inputMSV.onblur = function() { validateMSV(); }
            inputNGM.onblur = function() { validateNGM(); }
            inputNGTR.onblur = function() { validateNGTR(); }
            inputSLM.onblur = function() { validateSLM(); }
            inputMSM.onchange = function() { checkDuplicate(); }
            inputNGM.onchange = function() { validateNGM(); }
            inputNGTR.onchange = function() { validateNGTR(); }
            inputMSV.removeEventListener("onchange",function()
            {
                checkDuplicate3(id);
            });
            inputNGM.removeEventListener("onchange",function()
            {
                checkDuplicate3(id);
            });
            inputNGTR.removeEventListener("onchange",function()
            {
                checkDuplicate3(id);
            });
            inputMSV.addEventListener("onchange",checkDuplicate);
            inputNGM.addEventListener("onchange",checkDuplicate);
            inputNGTR.addEventListener("onchange",checkDuplicate);
            inputMPM.onkeyup = function() { validateMPM(); }
            inputMSV.onkeyup = function() { validateMSV(); }
            inputSLM.onkeyup = function() { validateSLM(); }
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
        let kqmt = localStorage.getItem('kqmt') ? JSON.parse(localStorage.getItem('kqmt')) : [];
        kqmt = [];
        let tght = new Date;
        dmmt.forEach(function(mt)
        {
            if(thoigian==='Lọc theo thời gian'||thoigian==='Tất cả')
            {
                if(mt.mpm.indexOf(tk)!=-1||mt.msm.indexOf(tk)!=-1||mt.msv.indexOf(tk)!=-1)
                {
                    kqmt.push(mt);
                    localStorage.setItem('kqmt',JSON.stringify(kqmt));
                }
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
                        kqmt.push(mt);
                        localStorage.setItem('kqmt',JSON.stringify(kqmt));
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
                        kqmt.push(mt);
                        localStorage.setItem('kqmt',JSON.stringify(kqmt));
                    }
                }
            }
        });
        let bangkq = `<tr class="header">
        <th class="td1">STT</th>
        <th class="td2">Mã phiếu mượn</th>
        <th class="td3">Mã sách</th>
        <th class="td4">Mã sinh viên</th>
        <th class="td5">Ngày mượn</th>
        <th class="td6">Ngày trả</th>
        <th class="td7">SL</th>
        <th class="td8">Thao tác</th>
        </tr>`;
        if(kqmt.length===0)
        {
            bangkq += `<tr>
            <td colspan="8" class="no-data">Không tìm thấy dữ liệu</td>
            </tr>`;
            document.getElementById('dmmt').innerHTML = bangkq;
        }
        kqmt.forEach(function(mt,stt)
        {
            let id = stt;
            ++stt;
            bangkq += `<tr id="ss${stt}">
            <td class="td1">${stt}</td>
            <td class="td2">${mt.mpm}</td>
            <td class="td3">${mt.msm}</td>  
            <td class="td4">${mt.msv}</td>
            <td class="td5">${mt.ngm}</td>
            <td class="td6">${mt.ngtr}</td>
            <td class="td7">${mt.slm}</td>
            <td class="td8">
                <a class="action" href="javascript:void(0)"><i class="fas fa-pen"></i></a> &ensp; <a class="action" href="javascript:void(0)"><i class="fas fa-trash"></i></a> &ensp; <a class="action" href="javascript:void(0)"><i class="fas fa-check"></i></a>
            </td>
            </tr>`
        });
        document.getElementById('dmmt').innerHTML = bangkq;
        let td1 = document.querySelectorAll('#dmmt tbody tr td.td1');
        let td2 = document.querySelectorAll('#dmmt tbody tr td.td2');
        let td3 = document.querySelectorAll('#dmmt tbody tr td.td3');
        let td4 = document.querySelectorAll('#dmmt tbody tr td.td4');
        let td5 = document.querySelectorAll('#dmmt tbody tr td.td5');
        let td6 = document.querySelectorAll('#dmmt tbody tr td.td6');
        let td7 = document.querySelectorAll('#dmmt tbody tr td.td7');
        let functionElement1 = document.querySelectorAll('#dmmt tbody tr td.td8 a .fas.fa-pen');
        let functionElement2 = document.querySelectorAll('#dmmt tbody tr td.td8 a .fas.fa-trash');
        let functionElement3 = document.querySelectorAll('#dmmt tbody tr td.td8 a .fas.fa-check');
        for(let i=0;i<td1.length;++i)
            td1[i].onclick = function() { suamt2(i); }
        for(let i=0;i<td2.length;++i)
            td2[i].onclick = function() { suamt2(i); }
        for(let i=0;i<td3.length;++i)
            td3[i].onclick = function() { suamt2(i); }
        for(let i=0;i<td4.length;++i)
            td4[i].onclick = function() { suamt2(i); }
        for(let i=0;i<td5.length;++i)
            td5[i].onclick = function() { suamt2(i); }
        for(let i=0;i<td6.length;++i)
            td6[i].onclick = function() { suamt2(i); }
        for(let i=0;i<td7.length;++i)
            td7[i].onclick = function() { suamt2(i); }
        for(let i=0;i<functionElement1.length;++i)
            functionElement1[i].onclick = function() { suamt2(i); }
        for(let i=0;i<functionElement2.length;++i)
            functionElement2[i].onclick = function() { xoamt2(i); }
        for(let i=0;i<functionElement3.length;++i)
            functionElement3[i].onclick = function() { trasach2(i); }
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