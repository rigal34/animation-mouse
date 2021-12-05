let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove",cursor);//dans ma fenetre ajout une surveillance des liste des mouvements du curseur

function cursor(e) {
    mouseCursor.getElementsByClassName.top = e.pageY + 'px';
}