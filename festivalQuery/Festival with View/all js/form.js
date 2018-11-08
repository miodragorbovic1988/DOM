var $createMovie = document.querySelector("#createMovie");
var $createProgram = document.querySelector("#create-program");
var $addMovie = document.querySelector("#add-movie");
var allMovieLength = 0;
var allMovie = [];
var allMovieCount = 0;
var allProgram = [];
var allProgramCount = 0;

$createMovie.addEventListener("click", createMovie);
$createProgram.addEventListener("click", createProgram);
$addMovie.addEventListener("click", addMovie);



function createError(pText, element) {
	var p = document.createElement("p");
	p.innerHTML = pText;
	element.nextElementSibling.appendChild(p);
}

function deleteError(element) {
	element.nextElementSibling.innerHTML = "";
}


function createListItemInList(queryLi, contentLi, liClassName, selectUl) {
	var li = document.createElement(queryLi);
	li.className = liClassName;
	li.textContent = contentLi;
	var ul = document.querySelector(selectUl);
	ul.appendChild(li);
}
function createOptionInSelect(
	queryOption,
	optionContent,
	optionValue,
	querySelect
) {
	var option = document.createElement(queryOption);
	option.textContent = optionContent;
	option.value = optionValue;
	// optionValue++;
	var select = document.querySelector(querySelect);
	select.appendChild(option);
}



function createMovie() {
	var $title = document.querySelector("#title");
	var $movieLength = document.querySelector("#movieLength");
	var $genre = document.querySelector("#genre");

	var title = $title.value.trim();
	var movieLength = parseFloat($movieLength.value);
	var genre = $genre.value;


	if (!title) {
		createError("Title are required!", $title);

	} else if (!$movieLength.value) {
		deleteError($title);
		createError("Movie length are required!", $movieLength);

	} else if (movieLength > 400) {
		deleteError($title);
		deleteError($movieLength);
		createError("Movie length have to be less than 400 min", $movieLength);

	} else if (!genre) {
		deleteError($movieLength);
		createError("Genre are required!", $genre);

	} else {

		deleteError($title);
		deleteError($movieLength);
		deleteError($genre);

		var genre = new Genre($genre.value);
		var movie = new Movie(title, genre, movieLength);


		for (var i = 0; i < allMovie.length; i++) {
			var currentMovie = allMovie[i];
			if (movie.genre.name == currentMovie.genre.name && movie.title == currentMovie.title && movie.length == currentMovie.length) {
				createError("You already have that movie!", $genre);
				document.querySelector("#movieForm").reset();
				return;
			}
		}

		allMovie.push(movie);

		createListItemInList(
			"li",
			movie.getData(),
			"list-group-item",
			"#movieList"
		);


		allMovieLength += movieLength;
		var lengthSum = document.querySelector("#lengthSum");
		lengthSum.innerHTML = "All movies length: " + allMovieLength + " min";

		createOptionInSelect("option", movie.getData(), allMovieCount, "#movie-select");
		allMovieCount++;


		document.querySelector("#movieForm").reset();

	}
};



function createProgram() {
	var $programName = document.querySelector("#program-name");
	var $date = document.querySelector("#program-date");
	var date = new Date($date.value)

	deleteError($programName)
	deleteError($date)




	if (!$programName.value) {
		createError("Name are required", $programName);
	}
	else if (isNaN(date)) {

		createError("Date must be in mm/dd/yyyy format", $date);
		deleteError($programName);
	} else {
		deleteError($date);


		var today = new Date;
		var result = date - today;

		if (result < 0) {
			createError("Date can not be in past", $date);
			return;
		}


		var program = new Program($programName.value, date);


		for (var i = 0; i < allProgram.length; i++) {
			var currentMovie = allProgram[i];
			if (program.name == currentMovie.name && program.date.toDateString() == currentMovie.date.toDateString()) {
				createError("You already have that program", $date);
				document.querySelector("#program-form").reset();
				return;
			}
		}


		allProgram.push(program);

		createOptionInSelect("option", program.getProgramDate(), allProgramCount, "#program-select");
		allProgramCount++;

		document.querySelector("#program-form").reset();
	}
};


function addMovie() {
	var selectedMovie = parseInt(document.querySelector("#movie-select").value);
	var selectedProgram = parseInt(
		document.querySelector("#program-select").value
	);

	allProgram[selectedProgram].addMovie(allMovie[selectedMovie]);

	var liForDelete = document.querySelectorAll(".for-delete");
	var ulProgram = document.querySelector("#program-list");

	for (var i = 0; i < liForDelete.length; i++) {
		ulProgram.removeChild(liForDelete[i]);
	}

	for (var i = 0; i < allProgram.length; i++) {
		createListItemInList(
			"li",
			allProgram[i].getData(),
			"for-delete list-group-item",
			"#program-list"
		);
	}
};
