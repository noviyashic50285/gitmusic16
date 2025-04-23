var a;
function show_hide1()
{
if(a==1) {
    document.getElementById("image1").style.display="none";
    document.getElementById("marq1").style.display="none";
    const butkn1 = document.getElementById('butkn1');
    butkn1.textContent = 'Показать';
    return a=0;
}
else{ obnulenie();
    document.getElementById("image1").style.display="inline";
    document.getElementById("marq1").style.display="inline";
    const butkn1 = document.getElementById('butkn1');
    butkn1.textContent = 'Скрыть';
    return a=1;
}
}
var b;
function show_hide2()
{
if(b==1) {
    document.getElementById("image2").style.display="none";
    document.getElementById("marq2").style.display="none";
    const butkn2 = document.getElementById('butkn2');
    butkn2.textContent = 'Показать';
    return b=0;
}
else{ obnulenie();
    document.getElementById("image2").style.display="inline";
    document.getElementById("marq2").style.display="inline";
    const butkn2 = document.getElementById('butkn2');
    butkn2.textContent = 'Скрыть';
    return b=1;
}
}
var c;
function show_hide3()
{
if(c==1) {
    document.getElementById("image3").style.display="none";
    document.getElementById("marq3").style.display="none";
    const butkn3 = document.getElementById('butkn3');
    butkn3.textContent = 'Показать';
    return c=0;
}
else{ obnulenie();
    document.getElementById("image3").style.display="inline";
    document.getElementById("marq3").style.display="inline";
    const butkn3 = document.getElementById('butkn3');
    butkn3.textContent = 'Скрыть';
    return c=1;
}
}
var d;
function show_hide4()
{
if(d==1) {
    document.getElementById("image4").style.display="none";
    document.getElementById("marq4").style.display="none";
    const butkn4 = document.getElementById('butkn4');
    butkn4.textContent = 'Показать';
    return d=0;
}
else{ obnulenie();
    document.getElementById("image4").style.display="inline";
    document.getElementById("marq4").style.display="inline";
    const butkn4 = document.getElementById('butkn4');
    butkn4.textContent = 'Скрыть';
    return d=1;
}
}
var e;
function show_hide5()
{
if(e==1) {
    document.getElementById("image5").style.display="none";
    document.getElementById("marq5").style.display="none";
    const butkn5 = document.getElementById('butkn5');
    butkn5.textContent = 'Показать';
    return e=0;
}
else{ obnulenie();
    document.getElementById("image5").style.display="inline";
    document.getElementById("marq5").style.display="inline";
    const butkn5 = document.getElementById('butkn5');
    butkn5.textContent = 'Скрыть';
    return e=1;
}
}
var f;
function show_hide6()
{
if(f==1) {
    document.getElementById("image6").style.display="none";
    document.getElementById("marq6").style.display="none";
    const butkn6 = document.getElementById('butkn6');
    butkn6.textContent = 'Показать';
    return f=0;
}
else{ obnulenie();
    document.getElementById("image6").style.display="inline";
    document.getElementById("marq6").style.display="inline";
    const butkn6 = document.getElementById('butkn6');
    butkn6.textContent = 'Скрыть';
    return f=1;
}
}
function obnulenie()
{   document.getElementById("image1").style.display="none";
    document.getElementById("marq1").style.display="none";
    document.getElementById("image2").style.display="none";
    document.getElementById("marq2").style.display="none";
    document.getElementById("image3").style.display="none";
    document.getElementById("marq3").style.display="none";
    document.getElementById("image4").style.display="none";
    document.getElementById("marq4").style.display="none";
    document.getElementById("image5").style.display="none";
    document.getElementById("marq5").style.display="none";
    document.getElementById("image6").style.display="none";
    document.getElementById("marq6").style.display="none";
}
