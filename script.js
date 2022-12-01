let t = 0
let sec
let a = 1
let b = 1
let c = 1
let p = 1
let n
let i
var chis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var muArray = ["+", "/","*","-"];
            function init(){
                if(t == 0){
                    sec = 0;
                    setInterval(tick, 1000);
                    t++;  
                }
            }
            
            function tick(){
                sec++;
                document.getElementById("timer").
                    childNodes[0].nodeValue = sec;
            }
let prim = 0;
function primer(){
        b = Math.floor(Math.random() * chis.length);
        c = Math.floor(Math.random() * chis.length);
        if(prim == 0){
            p = muArray[Math.floor(Math.random()* muArray.length)];
        }
            if(prim == 0){
document.getElementById('game').innerHTML+="<div class='block'><div id='one'></div> <div id='znak'></div>  <div id='two'></div> <div>=<input type='Text' id='otvet0'></input> </div>"+
"<div><button onclick='knop0()'>отправить</button></div></div>";
document.getElementById("one").innerHTML = b;
document.getElementById("two").innerHTML = c;
document.getElementById("znak").innerHTML = p;
b = parseInt(b);
c = parseInt(c);
            };
            if(prim == 0){
                if(p = '*'){
                     n = b * c
                };}
            if(prim == 0){
                if(p = '-'){
                    n = b - c
                };}
            if(prim == 0){
                if(p = '+'){
                    n = b + c
                };}
            if(prim == 0){
                 if(p = '/'){
                     n = b / c 
                };}
            console.log(n);
}
function knop0(){
    let otvet0 = document.getElementById("otvet0").value;
        otvet0 = Number.parseInt(otvet0);
        if (otvet0 == n) {
            $('#otvet0').css('background-color', 'green');
document.getElementById('game').innerHTML+="<div class='block'>12 * 4 =<input type='Text' id='otvet1'></input><button onclick='knop1()'>отправить</button></div>";
        }
        else{
            $('#otvet0').css('background-color', 'red');
        };
}
function knop1(){
    let otvet1 = document.getElementById("otvet1").value;
        otvet1 = Number.parseInt(otvet1);
        if (otvet1 == 48) {
            $('#otvet1').css('background-color', 'green');
            document.getElementById('game').innerHTML+="<div class='block'>81 / 9 =<input type='Text' id='otvet2'></input><button onclick='knop2()'>отправить</button></div>";

        }
        else{
            $('#otvet1').css('background-color', 'red');
        };
}
function knop2(){
    let otvet2 = document.getElementById("otvet2").value;
        otvet2 = Number.parseInt(otvet2);
        if (otvet2 == 9) {
            $('#otvet2').css('background-color', 'green');
            document.getElementById('game').innerHTML+="<div class='block'>164 - 46 =<input type='Text' id='otvet3'></input><button onclick='knop3()'>отправить</button></div>";
        }
        else{
            $('#otvet2').css('background-color', 'red');
        };
}
function knop3(){
    let otvet3 = document.getElementById("otvet3").value;
        otvet3 = Number.parseInt(otvet3);
        if (otvet3 == 118) {
            $('#otvet3').css('background-color', 'green');
            document.getElementById('game').innerHTML+="<div class='block'>37 + 42 - 78 =<input type='Text' id='otvet4'></input><button onclick='knop4()'>отправить</button></div>";
        }
        else{
            $('#otvet3').css('background-color', 'red');
        };
}
function knop4(){
    let otvet4 = document.getElementById("otvet4").value;
        otvet4 = Number.parseInt(otvet4);
        if (otvet4 == 1) {
            $('#otvet4').css('background-color', 'green');
            document.getElementById('game').innerHTML+="<div class='block'>55 + 35 / 7 =<input type='Text' id='otvet5'></input><button onclick='knop5()'>отправить</button></div>";
        }
        else{
            $('#otvet4').css('background-color', 'red');
        };
}
function knop5(){
    let otvet5 = document.getElementById("otvet5").value;
        otvet5 = Number.parseInt(otvet5);
        if (otvet5 == 60) {
            $('#otvet5').css('background-color', 'green');
            document.getElementById('game').innerHTML+="<div class='block'>5 * 8 + 60 =<input type='Text' id='otvet6'></input><button onclick='knop6()'>отправить</button></div>";
        }
        else{
            $('#otvet5').css('background-color', 'red');
        };
}
function knop6(){
    let otvet6 = document.getElementById("otvet6").value;
        otvet6 = Number.parseInt(otvet6);
        if (otvet6 == 100) {
            $('#otvet6').css('background-color', 'green');
            document.getElementById('game').innerHTML+="<div class='block'>30 / 6 * 7 =<input type='Text' id='otvet7'></input><button onclick='knop7()'>отправить</button></div>";
        }
        else{
            $('#otvet6').css('background-color', 'red');
        };
}
function knop7(){
    let otvet7 = document.getElementById("otvet7").value;
        otvet7 = Number.parseInt(otvet7);
        if (otvet7 == 35) {
            $('#otvet7').css('background-color', 'green');
            document.getElementById('game').innerHTML+="<div class='block'>11 * (62 - 35) =<input type='Text' id='otvet8'></input><button onclick='knop8()'>отправить</button></div>";
        }
        else{
            $('#otvet7').css('background-color', 'red');
        };
}
function knop8(){
    let otvet8 = document.getElementById("otvet8").value;
        otvet8 = Number.parseInt(otvet8);
        if (otvet8 == 297) {
            $('#otvet8').css('background-color', 'green');
            document.getElementById('game').innerHTML+="<div class='block'>15 + 15 =<input type='Text' id='otvet9'></input><button onclick='knop9()'>отправить</button></div>";
        }
        else{
            $('#otvet8').css('background-color', 'red');
        };
}
function knop9(){
    let otvet9 = document.getElementById("otvet9").value;
        otvet9 = Number.parseInt(otvet9);
        if (otvet9 == 30) {
            $('#otvet9').css('background-color', 'green');
            alert("Вы прошли тест за: "+sec+" Секунд");
        }
        else{
            $('#otvet9').css('background-color', 'red');
        };
}