$image = document.querySelectorAll('img');
for (var i = 0; i < $image.length; i++) {
    $image[i].addEventListener('click', addBorder);
}

function addBorder(event) {

    event.target.style.border = '5px solid red';
}