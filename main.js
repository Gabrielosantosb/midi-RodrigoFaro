function tocaSom (idElement) {
    document.querySelector(idElement  ).play();
}

const lista = document.querySelectorAll('.tecla');

for (let ct = 0; ct < lista.length; ct++) {

    const tecla = lista[ct];
    const sound = tecla.classList[1];
    const idAudio = `#som_${sound}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);    
    }
    tecla.onkeydown = function(event){
        console.log(event)
        if (event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('active');
        }
    }
    tecla.onkeyup =  function(event){
        tecla.classList.remove('active');
    }
}
