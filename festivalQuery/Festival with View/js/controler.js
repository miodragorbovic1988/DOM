var controler = (function (data, ui) {


    function init() {
        console.log("App initalized");

    }

    var $createMovie = document.querySelector("#createMovie");

    $createMovie.addEventListener("click", function () {

        if (ui.validateInputData()) {
            return;
        }
        var inputData = ui.collectFormInput();

        var movie = data.createMovieData(inputData.title, inputData.genre, inputData.length);

        data.addMovieToList(movie);
        var allMovieLength = data.addTotalLength(movie);

        ui.displeyMovieData(movie.getData());
        ui.displeyTotalLength(allMovieLength);
        ui.resetForm();


    });

    return {
        init: init
    }

})(dataModel, uiModel)