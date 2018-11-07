
// setInterval(function(){ alert("Hello"); }, 3000);


var $getMario =  querySelector('.mario');
var $getBody = querySelector('body');
$getBody.addEventListener('keypress', moveBody);
 
function moveBody(e) {
    
        if (e.keycode === 32) {
    $getMario.src = "./images/mario.running.gif";
        }


    // var x = event.clientX;
    // var y = event.clientY;

    // $getMario.style.left = x - 100 + 'px';
    // $getMario.style.top = y - 100 + 'px';
} 


// document.addEventListener('keypress', taster);

// function taster(e) {

//     if (e.keycode === 32) {
// $newSoccer.src = "./images/go.png";
//     }
// }