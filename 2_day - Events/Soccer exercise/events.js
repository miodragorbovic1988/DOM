var $body = document.querySelector('body');
var $newSoccer = document.querySelector('.soccerPlayer');
var isActive;
var $btn = document.querySelector('.stopBtn');

function movePlayer(event) {

    var x = event.clientX;
    var y = event.clientY;

    $newSoccer.style.left = x - 100 + 'px';
    $newSoccer.style.top = y - 100 + 'px';


}

$body.addEventListener('click', movePlayer);

$btn.addEventListener('click', stopMovePlayer);

function stopMovePlayer() {

    $body.removeEventListener('click', movePlayer);
    // if (!isActive) {
    //     $body.addEventListener('click', movePlayer);
    //     $btn.innerText = "Stop Moving";
    //     isActive = true;
    // } else {
    //     $body.removeEventListener('click', movePlayer);
    //     $btn.innerText = "Start Moving";
    //     isActive = false;
    // }
}

// TO DO!
// document.addEventListener('keypress', taster);

// function taster(e) {

//     if (e.keycode === 32) {
// $newSoccer.src = "./images/go.png";
//     }
// }

