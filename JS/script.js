document.querySelector(".appli").addEventListener("click", opacite);

function opacite(){
    let compte = document.getElementsByClassName('app').length;
    if(compte>=1){
        document.querySelector(".app").className="app2";
        document.querySelector(".appli").className="appli2 click";
        document.querySelector(".points").classList.add("points2");
    }
    else{
        document.querySelector(".app2").className="app";
        document.querySelector(".appli2").className="appli click";
        document.querySelector(".points2").classList.remove("points2");
    }
}

let curseur = document.querySelector(".curseur");
document.addEventListener("mousemove", e=> {
    curseur.setAttribute("style", "top:"+(e.pageY - 30)+"px; left:"+(e.pageX - 30)+"px;");
})

/*document.querySelector(".bas").addEventListener("mouseenter", souris);
function souris(){
    curseur.style.opacity="0";
}*/