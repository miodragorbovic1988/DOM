$(function () {

    $('li').css('border-bottom', '1px solid black');
    $('li').text().toUpperCase();
    $('li.active').css('color', 'red');

    var $listItems = $('li');
    var middle = ($listItems.length - 1) / 2;//dobio je poslednji element niza ne niz

    $($listItems.get(middle)).css('background-color', 'green');
})
