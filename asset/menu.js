var angle = 0;

function carrousel(sign){

    spinner=document.querySelector(".carrousel");
    
    if(!sign){angle = angle + 36 
    }else{ 
    
    angle = angle - 36
    
    }
    spinner.setAttribute("style","transform:rotateY("+ angle +"deg);")

}
