"use strict"

var ecran=document.querySelector('.ecran')
let table=document.querySelectorAll('.commun');
console.log(table);
table.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
    // console.log(e.target.id);
    ecran.textContent +=e.target.id;
  });

  const pourcentage=document.querySelector('.pourcentage');
  pourcentage.addEventListener("click", ()=>{
    ecran.textContent=ecran.textContent/100;
});
});
equal.addEventListener("click",()=>{
    ecran.textContent=eval(ecran.textContent);
})


clear.addEventListener("click",()=>{
    ecran.textContent='';
});



