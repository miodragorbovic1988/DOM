var dataModule = (function () {
    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
    }

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    };

    Movie.prototype.getData = function () {
        return this.title + ', ' + this.length + ', ' + this.genre.getData();

    }

    var validation = function () { };

    function createMovie(title, length, genre) {
        return new Movie(title, length, new Genre(genre));
    }


    var movieLists = [];
    Movie.prototype.addMovieToList = function (movie) {
        movieLists.push(movie);
    }

    function allMoviesLength() {
        var sum = 0;
        for (var i = 0; i < movieLists.length; i++) {
            sum += movieLists[i].length;
        }
        return sum;
    }

    return {
        createMovie: createMovie
    }
})();

var uiModule = (function () {

    var title = document.querySelector('#titleInput');
    var duration = document.querySelector('#lengthInput');
    var genre = document.querySelector('#selectInput');



    function collectFormInput() {
        var movieTitle = title.value;
        var movieDuration = duration.value;
        var movieGenre = genre.value;
        return {
            movieTitle: movieTitle,
            movieGenre: movieGenre,
            movieDuration: movieDuration
        }
    }

    function displayMovie(movie) {
        document.querySelector('#movieUl').innerHTML += movie.getData();
    }


    return {
        displayMovie: displayMovie,
        collectFormInput: collectFormInput
    }


})();

var controler = (function (displayMovie) {

    var addMovieButton = document.querySelector('#buttonMovie');
    // setup event listener
    addMovieButton.addEventListener('click', function (e) {


        var movieObj = uiModule.collectFormInput()
        var movie = dataModule.createMovie(movieObj.movieTitle, movieObj.movieDuration, movieObj.movieGenre)



        uiModule.displayMovie(movie);
    })

})();