var f= document.getElementById('frm');
var des = document.getElementById('desc');
var reg = document.getElementById('reg');
var hd = document.getElementById('head');
// Already assigned
var n = document.getElementById('fname');
var pn = document.getElementById('fnum');
var add = document.getElementById('fadd');
var dob = document.getElementById('fdob');
// Assigning
 var nm = document.getElementById('nm');
 var num = document.getElementById('pn');
 var ad = document.getElementById('add');
 var db = document.getElementById('dob');
 
 // function
 function myfun(){
    console.log('Hello');
    console.log(document.getElementById('fname').value);
    console.log(document.getElementById('fnum').value);
    console.log(document.getElementById('fadd').value);
    console.log(document.getElementById('fdob').value);

    nm.innerHTML = n.value;
    num.innerHTML = pn.value;
    ad.innerHTML = add.value;
    db.innerHTML = dob.value;
    document.getElementById('frm').style.opacity = '.3';
    des.style.opacity = '.3';
    reg.style.opacity = '1';
    reg.style.zIndex = '2';
    reg.style.border = '2px solid #000';
    reg.style.backgroundColor = 'rgb(181, 181, 182,.9)';
    reg.style.visibility = 'visible';
    hd.style.opacity = '.3';
    reg.style.transition = '1s all ease-in-out';
    reg.style.bottom = '45px';

}
function myfun2(){
    alert('Registration not done!');
    document.getElementById('frm').style.opacity = '1';
    des.style.opacity = '1';
    reg.style.opacity = '1';
    reg.style.zIndex = '1';
    reg.style.border = '2px solid #000';
    reg.style.backgroundColor = 'rgb(181, 181, 182,.9)';
    reg.style.visibility = 'hidden';
    hd.style.opacity = '1';
    reg.style.transition = '1s all ease-in-out';
    reg.style.bottom = '505px';

}