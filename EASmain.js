
var con =  document.body.appendChild(document.createElement("div"));
con.className = "con";
con.appendChild(document.createElement("h4")).innerHTML ="Click change to select the number of grid boxes ";

var b = document.createElement("button");
b.innerHTML ="change";
var myButton = con.appendChild(b).id="myButton";

var bigCon = document.body.appendChild(document.createElement("div"));
bigCon.className = "bigCon";

function calcolatDiv(n){
   var a = 800/n;
   return a  - (a*0.2);
    
};
function calcoMarg(n){
    let a = 800/n;
    return a*0.095;
};

function creatNetwark(num,parant){
    
    for (i=0;i<num*num;i++){
            var box = document.createElement("div");
            parant.appendChild(box).className = "box";
            box.style.width = calcolatDiv(num) +"px";
            box.style.height = calcolatDiv(num) +"px";
            box.style.margin = calcoMarg(num) +"px";
    }
    
    for(i=0;i<parant.childElementCount;i++){
        let box = parant.getElementsByTagName("div");
        box[i].onmouseenter = function(){
            this.style.backgroundColor = randomColor();
        }
        
       
   }
};

// this function warks at create rondom color;
function randomColor(){
    let r= Math.floor(Math.random()*250);
    let g= Math.floor(Math.random()*250);
    let b= Math.floor(Math.random()*250) ;
        
    return "rgb("+r+","+g+","+(b*0.10)+")";
};
creatNetwark(16,bigCon);

b.onmousedown = function(){
    bigCon.innerHTML ="";
}
b.onmouseup = function(){
    let num = prompt ("pleas enter youer number to create new netwark","16");
    let num1 = parseInt(num);
    return creatNetwark(num1, bigCon);
};















 




