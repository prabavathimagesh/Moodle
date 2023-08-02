let pEl=document.getElementById("para")
let para1El=document.getElementById("para1")
let para2El=document.getElementById("para2")
let para3El=document.getElementById("para3")
let dateEl=document.getElementById("date")
let headEl=document.getElementById("mmm")

function change(){
    let nameEl=document.getElementById("name").value
    pEl.textContent=nameEl
    

    let EmailEl=document.getElementById("mail").value
    para1El.textContent=EmailEl

     let Number=document.getElementById("num").value
    para2El.textContent=Number

     let Add=document.getElementById("add").value
    para3El.textContent=Add

    let dEl=document.getElementById("date1").value
    dateEl.textContent=dEl

    let geneEl=document.getElementById("gene").value
    headEl.textContent= geneEl

    document.body.style.backgroundImage="url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQt7t-GISNwizxMKGPhsQn65AVwXY7-XWMQU29SpeeBDUfjYnzg')"
    document.body.style.backgroundSize="cover"
    pEl.style.color="blue"
    pEl.style.textShadow="5px 5px  5px black"


}
 