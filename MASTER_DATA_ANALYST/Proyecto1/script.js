let menuVisble = false;
//Funcion que muestra u oculta el menú
function mostrarOcultarMenu(){
    if(menuVisble){
        document.getElementById("nav").classList ="";
        menuVisble = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisble = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciona una opción
    document.getElementById("nav").classList="";
    menuVisble = false;
}
    //funcion para las animaciones de skills
    function efectoSkills(){
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if(distancia_skills >= 300){
            let habilidades = document.getElementsByClassName("progreso");
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlcss");
            habilidades[2].classList.add("photoshop");
            habilidades[3].classList.add("wordpress");
            habilidades[4].classList.add("drupal");
            habilidades[5].classList.add("comunicacion");
            habilidades[6].classList.add("trabajoenequipo");
            habilidades[7].classList.add("creatividad");
            habilidades[8].classList.add("dedicacion");
            habilidades[9].classList.add("projectmanagement");
        }
    }
    window.onscroll = function(){
        efectoSkills();
    }