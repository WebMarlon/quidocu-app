//-- Open Video --//
window.addEventListener('load', init, false);
function init() {
    let div = document.querySelector('#VideoPlayer');
    div.style.visibility = 'hidden';
    div.style.opacity = '100';
    let boton = document.querySelector('#BVideoPlayer');
    boton.addEventListener('click', function (e) {
        if(div.style.visibility === 'visible'){
        }else{
            div.style.visibility = 'visible';
        }
    }, false);
};
//-- Close Video --//
function ocultar(){
  document.getElementById('VideoPlayer').style.visibility='hidden';
};
