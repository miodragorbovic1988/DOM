var dataModel = (function () {

    var storage = {
        movies: [],
        totalLength: 0
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
        storage.movies.push(movie);
    }

    function addTotalLength(movie) {
        return storage.totalLength += movie.length;
    }



    return {
        createMovieData: createMovieData,
        addMovieToList: addMovieToList,
        addTotalLength: addTotalLength
    }

})()