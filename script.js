let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove",cursor);//dans ma fenetre ajout une surveillance des liste des mouvements du curseur
                                            // mousemove évènement de javascript
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px'; //LE TOP ET LEFT est exatement l'endroit de la souris
}


//le curseur qui grossit

let navLink = document.querySelectorAll(".nav-links li");

navLink.forEach(link => {
    //quand on survole les li sa ajoute une class qui s'appele link-grow et une 2iém class hovered-link
    link.addEventListener("mouseover",() =>{//1er élément mouseover =>évènement et 2ièm élément une fonction
mouseCursor.classList.add("link-grow");
link.classList.add("hovered-link");
    });


//quand la souris va quitter les li on enleve link-grow et hovered-link
link.addEventListener("mouseleave",() =>{
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
        });
    });

    //CONCLUSION
    //ON MET UN addEventListener ENSUITE ON DIT QUELLE EVENEMENT EN JAVASCRIPT (mousemove) ON DIT QUELLE CONSIGNE QUE L'ON VEUT QU'IL FASSE en fonction de cette evenement (cursor)
    //pour appliquer cette fonction