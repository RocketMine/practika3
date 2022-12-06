let t = 0
let sec
let a = 1
let b = 1
let c = 1
let p = 1
var result
var noon = 0
var sum 
var chis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var muArray = ["+","-","*","-"];
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
function block(){
document.getElementById('game').innerHTML+="<div class='block'><div id='one'></div> <div id='znak'></div>  <div id='two'></div><div>=</div> "+
"<div><input type='Text' id='otvet0'></input> </div><div><button class='knopk' onclick='knop0();'>отправить</button></div></div>";
b = Math.floor(Math.random() * chis.length);
        c = Math.floor(Math.random() * chis.length);
        p = muArray[Math.floor(Math.random()* muArray.length)];
        sum = 1;
            document.getElementById("one").innerHTML = b;
            document.getElementById("two").innerHTML = c;
            document.getElementById("znak").innerHTML = p;
    b = parseInt(b);
    c = parseInt(c);         
    switch(p){
        case '*': result = b*c;
        break;
        case '+': result = b+c;
        break;
        case '-': result = b-c;
        break;
        case '/': result = b*c;
        break;
    } 
}
function knop0(){   
    let otvet0 = document.getElementById("otvet0").value;
        otvet0 = Number.parseInt(otvet0);
        if (otvet0 == result) {
            sum++;
            if(sum == 10){
                alert('Поздравляю вы прошли тест за: '+sec+' секунд');
            }
            else{
            noon++; 
            $('#noon').css('background-color', 'green');
                b = Math.floor(Math.random() * chis.length);
                c = Math.floor(Math.random() * chis.length);
                p = muArray[Math.floor(Math.random()* muArray.length)];
                    document.getElementById("one").innerHTML = b;
                    document.getElementById("two").innerHTML = c;
                    document.getElementById("znak").innerHTML = p;
            b = parseInt(b);
            c = parseInt(c);         
            switch(p){
                case '*': result = b*c;
                break;
                case '+': result = b+c;
                break;
                case '-': result = b-c;
                break;
                case '/': result = b/c;
                break;
        
                }    }
        }
        else{
            $('#noon').css('background-color', 'red');
        };
}
// $('#otvet0').css('background-color', 'red');