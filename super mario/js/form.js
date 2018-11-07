
// setInterval(function(){ alert("Hello"); }, 3000);


var $getMario = querySelector('.mario');
var $getBody = querySelector('body');



function moveBody() {


    $getMario.src = "./images/mario_running.gif";



    // var x = event.clientX;
    // var y = event.clientY;

    // $getMario.style.left = x - 100 + 'px';
    // $getMario.style.top = y - 100 + 'px';
}

$getBody.addEventListener('keydown', moveBody);



// document.addEventListener('keypress', taster);

// function taster(e) {

//     if (e.keycode === 32) {
// $newSoccer.src = "./images/go.png";
//     }
// }