const vegetables =  document.querySelectorAll(".vegetable")

vegetables.forEach((vegetable)=>{
    vegetable.addEventListener("click",() => {
        vegetable.classList.toggle("vegetable__active")
        let totalWeigth = 0;
        const activeVegetables =  document.querySelectorAll(".vegetable__active")
        activeVegetables.forEach((activeVegetable)=>{
            totalWeigth += Number(activeVegetable.children[1].textContent?.slice(0,-1))
        })
        const totalWeigthEl = document.querySelector(".total-weight"); 
        if(totalWeigthEl !== null){
            totalWeigthEl.textContent = `${totalWeigth}g`;
        }
    })
})
