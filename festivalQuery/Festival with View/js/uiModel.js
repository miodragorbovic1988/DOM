var uiModel = (function () {
    var $title = document.querySelector("#title");
    var $movieLength = document.querySelector("#movieLength");
    var $genre = document.querySelector("#genre");
    var $totalLength = document.querySelector("#lengthSum");

    function validateInputData() {

        var movieTitle = $title.value.trim();
        var movieLength = parseFloat($movieLength.value);
        var movieGenre = $genre.value;


        function createError(pText, element) {
            var p = document.createElement("p");
            p.innerHTML = pText;
            element.nextElementSibling.appendChild(p);
        }

        function deleteError(element) {
            element.nextElementSibling.innerHTML = "";
        }

        deleteError($title);
        deleteError($movieLength);
        deleteError($genre);

        if (!movieTitle) {
            createError("Title are required!", $title);
            return true;

        } else if (!$movieLength.value) {
            deleteError($title);
            createError("Movie length are required!", $movieLength);
            return true;

        } else if (movieLength > 400) {
            deleteError($title);
            deleteError($movieLength);
            createError("Movie length have to be less than 400 min", $movieLength);
            return true;

        } else if (movieGenre == "-") {
            deleteError($movieLength);
            createError("Genre are required!", $genre);
            return true;

        }


        return false;
    }

    function collectFormInput() {
        var movieTitle = $title.value.trim();
        var movieLength = parseFloat($movieLength.value);
        var movieGenre = $genre.value;
        if (validateInputData()) {
            return;
        }


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

    function displeyTotalLength(allMovieLength) {
        $totalLength.innerHTML = "All movies length: " + allMovieLength + " min";
    }

    function resetForm() {
        $title.value = "";
        $genre.value = "-";
        $movieLength.value = "";
    }






    return {
        collectFormInput: collectFormInput,
        displeyMovieData: displeyMovieData,
        displeyTotalLength: displeyTotalLength,
        resetForm: resetForm,
        validateInputData: validateInputData
    }
})()