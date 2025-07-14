let boxes=document.querySelectorAll(".box");
let exp= document.querySelector(".exp");

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
      
        exp.innerText+=box.innerText;
 
    
    })
});

let isequal= document.querySelector(".box2");
isequal.addEventListener("click",()=>{
    exp.innerText = eval(exp.innerText);
})

let clear= document.querySelector(".box3");
clear.addEventListener("click",()=>{
    exp.innerText=" ";
})