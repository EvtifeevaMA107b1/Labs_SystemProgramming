const btnMinus = document.getElementById("btnMinus");
const btnPlus = document.getElementById("btnPlus");
btnMinus.addEventListener("click", () => {
    
    const lbl_elem= document.getElementById("lblNum");
    let num=Number(lbl_elem.innerHTML);

    num-=1;
    lbl_elem.innerHTML=num;
    
  });

 btnPlus.addEventListener("click", () => {
    
    const lbl_elem= document.getElementById("lblNum");
    let num=Number(lbl_elem.innerHTML);

    num+=1;
    lbl_elem.innerHTML=num;
    
  });