{let headEl=document.getElementById("hello")
 document.body.style.backgroundColor="black"
headEl.textContent="NUMBER COUNT"
headEl.style.color="pink"
headEl.style.textShadow="5px 5px 10px skyblue"

let buttonEl=document.getElementById("btn")
buttonEl.style.backgroundColor="green"
buttonEl.style.boxShadow="0px 0px 5px white"
 
let button2El=document.getElementById("btn2")
button2El.style.backgroundColor="red"
button2El.style.boxShadow="0px 0px 5px white"

let button3El=document.getElementById("btn3")
button3El.style.boxShadow="0px 0px 5px white"


}
let pEl =document.getElementById("count")
pEl.style.color="white"
pEl.style.fontSize="100px"
let num=0


function onChangeEvent(){
  
  let value=num++
  pEl.textContent=value 
  
}
function change(){
  let value2=num--
  pEl.textContent=value2 

}
function onReset(){
  num=0
  let value3=num
  pEl.textContent=value3
  return num
}
