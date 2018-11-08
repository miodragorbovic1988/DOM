var dataModel = (function () {

    var data = {
        movies: []
    }

    function Movie(title, genre, length) {
        this.genre = genre;
        this.title = title;
        this.length = length;
    }
    Movie.prototype.getData = function () {
        return this.title + ', duration: ' + this.length + ' min, genre: ' + this.genre;
    };

    function createMovieData(title, genre, length) {
        return new Movie(title, genre, length);
    }

    function addMovieToList(movie) {
        data.movies.push(movie);
    }

    return {
        createMovieData: createMovieData,
        addMovieToList: addMovieToList
    }

})();

var uiModel = (function () {


    var $title = document.querySelector("#title");
    var $movieLength = document.querySelector("#movieLength");
    var $genre = document.querySelector("#genre");

    function collectFormInput() {

        var movieTitle = $title.value.trim();
        var movieLength = parseFloat($movieLength.value);
        var movieGenre = $genre.value;

        return {
            title: movieTitle,
            length: movieLength,
            genre: movieGenre
        }

    }

    function displeyMovieData(movieData) {
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = movieData;
        var ul = document.querySelector("#movieList");
        ul.appendChild(li);
    }

    return {
        collectFormInput: collectFormInput,
        displeyMovieData: displeyMovieData
    }
})();



var controler = (function (data, ui) {
    var $createMovie = document.querySelector("#createMovie");
    $createMovie.addEventListener("click", function () {

        var inputData = ui.collectFormInput();
        var movie = data.createMovieData(inputData.title, inputData.genre, inputData.length);

        data.addMovieToList(movie);
        ui.displeyMovieData(movie.getData());

    });


})(dataModel, uiModel);