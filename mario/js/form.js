// setInterval(function(){ alert("Hello"); }, 3000);

var myIntervalRight = null;
var myIntervalLeft = null;
var jumpMarioInterval = null;
var $getMario = document.querySelector('.mario');
var $getBody = document.querySelector('body');
$getBody.addEventListener('keydown', function (event) {
    if (event.keyCode === 39 && myIntervalRight === null) {
        // $getMario.style.transform = 'scaleX(1)';

        $getMario.src = "./images/mario_running.gif";
        $getMario.style.transform = ''; //na ovaj nacin restartujem sva podesavanja transforma(moze i za bilo koji drugi style.property).To se odnosi na ono sto je setivano direktno na elementu, ne moze da se resetuje(ali moze da se menja) nesto sto je zakucano u cssu
        myIntervalRight = setInterval(moveBackgroundRight, 30);

    }
    if (event.keyCode === 37 && myIntervalLeft === null) {

        $getMario.src = "./images/mario_running.gif";
        $getMario.style.transform = 'scaleX(-1)';
        myIntervalLeft = setInterval(moveBackgroundLeft, 30);

    }

});

$getBody.addEventListener('keypress', function (event) {
    if (event.keyCode === 32 && jumpMarioInterval === null) {
        jumpMarioInterval = setInterval(jumpMario, 30);
    }
});


$getBody.addEventListener('keyup', function (e) {
    if (e.keyCode === 39 || e.keyCode === 37) {
        $getMario.src = "./images/mario.png";
        clearInterval(myIntervalRight);
        myIntervalRight = null;
        clearInterval(myIntervalLeft);
        myIntervalLeft = null;
    }

});
var backgroundPosX = 0;
function moveBackgroundRight() {
    backgroundPosX -= 15;
    $getBody.style.backgroundPositionX = backgroundPosX + "px";
}



function moveBackgroundLeft() {
    backgroundPosX += 15;
    $getBody.style.backgroundPositionX = backgroundPosX + "px";
}

var curentH = 0;
var deltaH = 20;
function jumpMario() {
    curentH = curentH + deltaH;

    if (curentH >= 200) {
        deltaH = -deltaH;        
    } 
    if (curentH <= 0 ){
        clearInterval(jumpMarioInterval);
        jumpMarioInterval = null;
        deltaH = -deltaH;
    }

    $getMario.style.bottom = 90 + curentH + 'px';
}


// var x = event.clientX;
// var y = event.clientY;

// $getMario.style.left = x - 100 + 'px';
// $getMario.style.top = y - 100 + 'px';



// document.addEventListener('keypress', taster);

// function taster(e) {

//     if (e.keycode === 32) {
// $newSoccer.src = "./images/go.png";
//     }
// }