function modalPopsUp () {
    const modalContainer = document.querySelector(".modal__container");
    const buttons = document.querySelectorAll(".modal__openbtn")
   
    for (let i = 0 ; i < buttons.length ; i++){
       console.log(buttons[i]); 
       buttons[i].addEventListener("click", () => {
            modalContainer.showModal()
        })
    }
}

modalPopsUp();
