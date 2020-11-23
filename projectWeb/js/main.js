window.onload = function()
{
    checkNavbar();
    luuDms();
    luuDmmt();
    luuls();
}
document.getElementById('nut1').onclick = function() { themsach(); }
document.getElementById('tk1').onclick = function() { timkiemsach(); }
document.getElementById('clr1').onclick = function() { clearinput1(); }
document.getElementById('tx1').onclick = function() { txsach(); }
document.getElementById('nut2').onclick = function() { themmt(); }
document.getElementById('clr2').onclick = function() { clearinput2(); }
document.getElementById('tk2').onclick = function() { timkiemmt(); }
document.getElementById('tx2').onclick = function() { txmt(); }
document.getElementById('tk3').onclick = function() { timkiemls(); }
document.getElementById('tx3').onclick = function() { txlichsu(); }

function isEmpty(input) 
{
    return ((input === '') || (input.length === 0));
}

function checkNavbar()
{
    let navItem = document.getElementsByClassName('nav-link');
    for(let i=0;i<navItem.length;++i)
    {
        navItem[i].onclick = function()
        {
            document.getElementById('collapsibleNavbar').classList.remove('show');
        }
    }
}

function checkWidth1()
{
    let x = window.matchMedia("(max-width: 1405px)");
    if(x.matches)
        return true;
    else
        return false;    
}

function checkWidth2()
{
    let x = window.matchMedia("(max-width: 1000px)");
    if(x.matches)
        return true;
    else
        return false;
}

function scollToTop()
{
    window.scrollTo(0,0);
}

function scollToForm1()
{
    let form = document.querySelector('.form-1');
    form.scrollIntoView();
}

function scollToElement(id)
{
    let elem = document.querySelector('#s'+(id+1));
    elem.scrollIntoView();
}

function changeStyleElement(id)
{
    let elem = document.querySelector('#s'+(id+1));
    let elem2 = elem.getElementsByTagName('td');
    elem.style.backgroundColor = "#c5c4c4";
    for(let i=0;i<elem2.length;++i)
    {
        elem2[i].style.color = '#4000ff';
    }
}

function changeStyleElement2(id)
{
    let elem = document.querySelector('#ss'+(id+1));
    let elem2 = elem.getElementsByTagName('td');
    elem.style.backgroundColor = "#c5c4c4";
    for(let i=0;i<elem2.length;++i)
    {
        elem2[i].style.color = '#4000ff';
    }
}
 
function resetStyleElement()
{
    let elem = document.querySelectorAll('#dms tbody tr');
    for(let i=1;i<elem.length;++i)
    {
        if(i%2===0)
            elem[i].style.backgroundColor = " #d4d4d4";
        else
            elem[i].style.backgroundColor = "";     
    }
    let elem2 = document.querySelectorAll('#dms tbody tr td');
    for(let i=0;i<elem2.length;++i)
    {
        elem2[i].style.color = '#271756';
    }
}

function resetStyleElement2()
{
    let elem = document.querySelectorAll('#dmmt tbody tr');
    for(let i=1;i<elem.length;++i)
    {
        if(i%2===0)
            elem[i].style.backgroundColor = " #d4d4d4";
        else
            elem[i].style.backgroundColor = "";     
    }
    let elem2 = document.querySelectorAll('#dmmt tbody tr td');
    for(let i=0;i<elem2.length;++i)
    {
        elem2[i].style.color = '#271756';
    }
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