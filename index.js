var button1=document.getElementById("signupsideb")
var button2=document.getElementById("signin")
var pg1=document.getElementById("page1")
var pg2=document.getElementById("page2")
button1.onclick=page2
button2.onclick=page1

function page2(){
    pg2.style.display="flex"
    pg1.style.display="none"

}
function page1(){
    pg2.style.display="none"
    pg1.style.display="flex"
}