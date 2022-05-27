let boton = document.getElementById('nocturno');
boton.addEventListener('click', function(){
    const formato = document.querySelector('link');
    const linkFormato = document.getElementById('nocturno');
    if(formato.getAttribute('href')=='styles/style.css'){
        formato.setAttribute('href', 'styles/style2.css');
        linkFormato.innerHTML = 'Modo normal';
    }else if(formato.getAttribute('href')=='styles/style2.css'){
        formato.setAttribute('href', 'styles/style.css');
        linkFormato.innerHTML = 'Modo nocturno';
    }
});

let enviarConsulta = function(event){
    event.preventDefault();
    let nombre = document.querySelector('#input-nombre').value;
    let mail = document.querySelector('#input-mail').value;
    let consulta = document.querySelector('#input-consulta').value;
    let error3 = document.querySelector('#error3');
    if(nombre.length > 20){
        error3.innerHTML = 'La cantidad máxima de caracteres permitidos es 20.';
        error3.style.setProperty("border", "solid 1px red");
        return false;
    }
    if(!mail.includes('@')){
        error3.innerHTML = 'El formato de mail no es válido.';
        error3.style.setProperty("border", "solid 1px red");
        error3.style.setProperty("border-radius", "10px");
        return false;
    }
    if(consulta.length > 500){
        error3.innerHTML = 'La cantidad máxima de caracteres permitidos es 500.';
        error3.style.setProperty("border", "solid 1px red");
        return false;
    }
    error3.innerHTML = 'Tu consulta se envió correctamente.';
    error3.style.setProperty("border", "solid 1px green");
    error3.style.setProperty("border-radius", "10px");
}





