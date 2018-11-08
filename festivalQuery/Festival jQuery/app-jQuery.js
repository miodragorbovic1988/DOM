var dataModel = (function () {

    var storage = {
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

    function createMovieData(name, genre, length) {

        return new Movie(name, genre, length);
    }


    return {
        createMovieData: createMovieData
    }

})()


var uiModel = (function () {

    var $title = $('#title');
    var $length = $('#movieLength');
    var $genre = $('#genre');




    function collectFormInput() {

        var movieTitle = $title.val();
        var movieLength = $length.val();
        var movieGenre = $genre.val();
        return {
            title: movieTitle,
            length: movieLength,
            genre: movieGenre
        }
    }

    function displeyMovieData(movieData) {
        var $li = $("<li>").addClass('list-group-item').text(movieData);
        var $ul = $('#movieList');
        $ul.after($li);
    }


    return {
        collectFormInput: collectFormInput,
        displeyMovieData: displeyMovieData
    }

})()


var controler = (function (data, ui) {

    function init() {
        setupEventListeners();
    }
    function setupEventListeners() {
        $('#createMovie').on('click', onAddMovieHandler);
        $('#createProgram').on('click', onAddProgramHandler);
    }
    function onAddMovieHandler() {

        var movieObj = ui.collectFormInput();
        var movie = data.createMovieData(movieObj.title, movieObj.genre, movieObj.length);
        ui.displeyMovieData(movie.getData());

    }

    function onAddProgramHandler() {




    }




    return {
        init: init
    }

})(dataModel, uiModel)