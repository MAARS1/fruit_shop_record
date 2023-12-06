{function myfunction(){
    var string,boolean;
    var x=document.getElementById("fruitname").value;
    var y=document.getElementById("count").value;
    var z=document.getElementById("price").value;
    var v=y*z;
    var w=document.getElementById("image").value;
    document.getElementById("demo1").innerHTML="NAME OF THE FRUIT  :"+x+"<br>COUNT :"+y+"<br>PRICE :"+z+"<br>IMAGE :"+w+"<br>TOTAL :"+v;

}


}