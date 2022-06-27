let xhr;
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
}else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.open("GET","test1.txt","true");
xhr.send();

//sort(a,b){}