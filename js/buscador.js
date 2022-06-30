document.addEventListener("keyup", buscador=>{

    
    if (buscador.target.matches("#buscador")){
    document.querySelectorAll(".card-title").forEach(items=> {
        items.textContent.toLowerCase().includes(buscador.target.value.toLowerCase())
            ?items.classList.add('filtro')  
            :items.classList.add('filtro')
    }) 

    }

})