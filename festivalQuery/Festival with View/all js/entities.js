
// Genre constructor function and methods

function Genre(name) {
    this.name = name;
}
Genre.prototype.getData = function () {
    return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
};

// Movie constructor function and methods

function Movie(title, genre, length) {
    this.genre = genre;
    this.title = title;
    this.length = parseInt(length);
}
Movie.prototype.getData = function () {
    return this.title + ', duration: ' + this.length + ' min, genre: ' + this.genre.getData();
};

// Program constructor function and methods

function Program(name, date) {
    this.name = name;
    this.listOfMovies = [];
    this.totalNumbersOfMovies = 0;
    this.date = date;
}
Program.prototype.addMovie = function (newMovie) {
    this.listOfMovies.push(newMovie);
    this.totalNumbersOfMovies++;
}
Program.prototype.getData = function () {
    var allData = '';
    var movieLength = 0;

    for (var i = 0; i < this.listOfMovies.length; i++) {
        allData += this.listOfMovies[i].getData() + '\n';
        movieLength += this.listOfMovies[i].length;
    }

    var dd = this.date.getDate();
    var mm = this.date.getMonth() + 1;
    var yy = this.date.getFullYear();

    return 'Program date: ' + dd + '.' + mm + '.' + yy + '. ' + 'Number of movies: ' + this.totalNumbersOfMovies + ', Movies duration: ' + movieLength + ' min';
}

Program.prototype.getProgramDate = function () {

    var dd = this.date.getDate();
    var mm = this.date.getMonth() + 1;
    var yy = this.date.getFullYear();

    return ' Program ' + this.name + ', date: ' + dd + '.' + mm + '.' + yy + '.';


}

