
var buttonSelect = document.querySelector("#buttonMovie");
buttonSelect.onclick = function () {
    var titleInput = document.querySelector("#titleInput").value.trim();
    var lengthInput = document.querySelector("#lengthInput").value;
    var selectInput = document.querySelector("#selectInput").value;


    if (!titleInput) {
        var $error = document.querySelector(".title-error");
        $error.textContent = "Fill out Movie Title!";
        document.querySelector(".select-error").textContent = "";
        document.querySelector(".length-error").textContent = "";
        return;
    }
    if (!lengthInput) {
        var $error = document.querySelector(".length-error");
        $error.textContent = "Fill out Movie Length!";
        document.querySelector(".title-error").textContent = "";
        document.querySelector(".select-error").textContent = "";
        return;
    }
    if (lengthInput > 500) {
        var $error = document.querySelector(".length-error");
        $error.textContent = "Length can not be more then 500min!";
        document.querySelector(".title-error").textContent = "";
        document.querySelector(".select-error").textContent = "";
        return;
    }
    if (lengthInput < 0) {
        var $error = document.querySelector(".length-error");
        $error.textContent = "Length can not be negative!";
        document.querySelector(".title-error").textContent = "";
        document.querySelector(".select-error").textContent = "";
        return;
    }
    if (selectInput == "-") {
        var $error = document.querySelector(".select-error");
        $error.textContent = "Please select genre!";
        document.querySelector(".title-error").textContent = "";
        document.querySelector(".length-error").textContent = "";
        return;
    }


    var lenNum = parseFloat(lengthInput);


    for (var i = 0; i < movieLists.length; i++) {
        if (movieLists[i].title == titleInput && movieLists[i].length == lenNum && movieLists[i].genre.name == selectInput) {
            var sameMovie = document.querySelector(".same-movie").textContent = "You can not add same movie twice!";
            return;
        }
    }
    document.querySelector(".same-movie").textContent = "";
    var genre = new Genre(selectInput);
    var movie = new Movie(titleInput, genre, lenNum);

    addMovie(movie);


    document.querySelector(".title-error").textContent = "";
    document.querySelector(".length-error").textContent = "";
    document.querySelector(".select-error").textContent = "";


    var ul = document.querySelector("#movieUl");
    ul.innerHTML += "<li>" + movie.getData() + "</li>";

    var movieSelect = document.querySelector("#movieSelect");

    var index = movieLists.length - 1;

    movieSelect.innerHTML += "<option value='" + index + "'>" + movie.getData() + "</option>";


    var allMovie = allMoviesLength();
    document.querySelector("#allMoviesLength").innerText = "All movies length: " + allMovie;

    document.querySelector("#titleInput").value = "";
    document.querySelector("#lengthInput").value = "";
    document.querySelector("#selectInput").value = "-";
}

var buttonAddProgram = document.querySelector("#buttonAddProgram");
buttonAddProgram.onclick = function () {
    var dateInput = document.querySelector("#dateInput").value;
    var nameInput = document.querySelector("#nameInput").value;
    var dateError = document.querySelector(".date-error");
    var nameError = document.querySelector(".name-error");
    var todayDate = new Date();
    var date = new Date(dateInput);

    var isNegative = date - todayDate;

    if (isNegative < 0) {

        dateError.textContent = "Date can not be in the past!";
        return;
    }

    dateError.textContent = "";

    for (var i = 0; i < programList.length; i++) {
        if (programList[i].date == dateInput && programList[i].name == nameInput) {
            nameError.textContent = "You can not add same program twice!";
            return;
        }
    }

    nameError.textContent = "";
    var programInstance = new Program(nameInput, dateInput);
    addProgram(programInstance);
    console.log(programInstance);

    var index = programList.length - 1;
    var programSelect = document.querySelector("#programSelect");
    programSelect.innerHTML += "<option value='" + index + "'>Program name: " + programInstance.name + " - Program Date: " + programInstance.date + "</option>";


    document.querySelector("#dateInput").value = "";
}

var buttonAddMovieToProgram = document.querySelector("#buttonAddMovieToProgram");
buttonAddMovieToProgram.onclick = function () {

    var movieSelect = document.querySelector("#movieSelect").value;
    var programSelect = document.querySelector("#programSelect").value;



    programList[programSelect].addMovie(movieLists[movieSelect]);


    var programUl = document.querySelector("#programUl");

    var idLi = programSelect;
    if (ulid.indexOf(programSelect) == -1) {
        programUl.innerHTML += "<li id='program" + idLi + "'>" + programList[programSelect].getData() + "</li>";
        addIdToUl(programSelect);
    } else {
        var liid = "#program" + programSelect;
        var liSelector = document.querySelector(liid);
        liSelector.innerText = programList[programSelect].getData();
    }

    document.querySelector("#movieSelect").value = "";
    document.querySelector("#programSelect").value = "";

}
