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
//-- abre modal NuevoFacturacion --//
function myFunction() {
var option_value = document.getElementById("newAdd").value;
if (option_value == "addNew") {
  //  alert("Hai !");
   $("#exampleModal").modal();
 }
}
// Get the modal
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("closeX")[0];

span.onclick = function() {
  modal.style.display = "none";
}
