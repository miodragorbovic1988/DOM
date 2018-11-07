export function error() {
    var $errorTitle = document.querySelector(".title-error");
    var $errorLength = document.querySelector(".length-error");
    var $errorSelect = document.querySelector(".select-error");

    if (!titleInput && !lengthInput && selectInput == "-") {
        $errorTitle.textContent = "Fill out Movie Title!";
        $errorLength.textContent = "Fill out Movie Length!";
        $errorSelect.textContent = "Please select genre!";
        return;
    } else if (!titleInput && !lengthInput) {
        $errorTitle.textContent = "Fill out Movie Title!";
        $errorLength.textContent = "Fill out Movie Length!";
        $errorSelect.textContent = "";
        return;
    } else if (!titleInput && selectInput == "-") {
        $errorTitle.textContent = "Fill out Movie Title!";
        $errorSelect.textContent = "Please select genre!";
        $errorLength.textContent = "";
        return;
    } else if (!lengthInput && selectInput == "-") {
        $errorLength.textContent = "Fill out Movie Length!";
        $errorSelect.textContent = "Please select genre!";
        $errorTitle.textContent = "";
        return;
    } else if (!titleInput) {
        $errorTitle.textContent = "Fill out Movie Title!";
        $errorLength.textContent = "";
        $errorSelect.textContent = "";
        return;
    } else if (!lengthInput) {
        $errorLength.textContent = "Fill out Movie Length!";
        $errorTitle.textContent = "";
        $errorSelect.textContent = "";
        return;
    } else if (selectInput == "-") {
        $errorSelect.textContent = "Please select genre!";
        $errorLength.textContent = "";
        $errorTitle.textContent = "";
        return;
    } else if (lengthInput < 0 && selectInput == "-") {
        $errorLength.textContent = "Length can not be negative!";
        $errorTitle.textContent = "";
        $errorSelect.textContent = "Please select genre!";
        return;
    } else if (lengthInput > 500 && selectInput == "-") {
        $errorLength.textContent = "Length can not be more then 500min!";
        $errorSelect.textContent = "Please select genre!";
        $errorTitle.textContent = "";
        return;
    } else if (lengthInput < 0) {
        $errorLength.textContent = "Length can not be negative!";
        $errorTitle.textContent = "";
        $errorSelect.textContent = "";
        return;
    } else if (lengthInput > 500) {
        $errorLength.textContent = "Length can not be more then 500min!";
        $errorSelect.textContent = "";
        $errorTitle.textContent = "";
        return;
    }
}