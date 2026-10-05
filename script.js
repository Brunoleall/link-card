function toggleModel(){
    
    const html = document.documentElement;
     html.classList.toggle("light")

     //----O .toggle faz examente essa condição de IF e ELse.-----

            // if(html.classList.contains("light")){
            //     html.classList.remove("light");
            // } else {
            //     html.classList.add("light");
            // } 

    const img = document.querySelector("#profile img")
    
    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-light-mode.png")
    } else{
        img.setAttribute("src", "./assets/avatar.png")
        
    }
}