function sc()
{
    Webcam.attach("#camera")
}
Webcam.set({
    height:270, width:360,image_format:'jpg',jpg_quality:90
    });
camera = document.getElementById("camera")
function bac()
{
    window.location ="index.html";
}
function savy()
{
    setTimeout(function(){
        pic();
        save()
    },2000)
}
function pic()
{
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML ="<img src="+data_uri+" id='pictur'>"
    })
}
function save()
{
    l = document.getElementById('lins');
    p = document.getElementById('pictur').src;
    l.href = p;
    l.click()
}