function increment(){
    document.getElementById("input").value++;
}
function decrement(){
    if(document.getElementById("input").value>0)
        document.getElementById("input").value--;
}
function reset(){
    document.getElementById("input").value=0;
}
function clicked(){
    document.getElementById("startButton").style.display="none";
 var x=document.getElementById("setValue")
 x.style.display="inline";
 x.focus();
 document.getElementById("setButton").style.display="inline";
}
function setValue(){
    var x=document.getElementById("input");
    var y=document.getElementById("setValue");
    x.value=y.value;
    y.style.display="none";
    y.value="";
    document.getElementById("setButton").style.display="none";
    document.getElementById("startButton").style.display="inline";
}
