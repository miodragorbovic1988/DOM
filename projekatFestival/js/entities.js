function Genre(name) {
    this.name = name;
}
Genre.prototype.getData = function () {
    return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

}
Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min" + ", " + this.genre.getData();
}


var movieLists = [];
function addMovie(movie) {
    movieLists.push(movie);
}
function allMoviesLength() {
    var sum = 0;
    for (var i = 0; i < movieLists.length; i++) {
        sum += movieLists[i].length;
    }
    return sum;
}


function Program(name, date) {
    this.name = name;
    this.date = date;
    this.movieList = [];
}
Program.prototype.addMovie = function (movie) {
    this.movieList.push(movie);

}
Program.prototype.getData = function () {
    string = "";
    var sum = 0;
    for (var i = 0; i < this.movieList.length; i++) {
        sum += this.movieList[i].length;
    }

    string = "Program Date: " + this.date + " Number of movies: " + this.movieList.length + ", Movies duration: " + sum + " min.";
    return string;
}

var programList = [];
function addProgram(program) {
    programList.push(program);
}

var ulid = [];
function addIdToUl(id) {
    ulid.push(id);
}

