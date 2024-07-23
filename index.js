var inputElements = document.getElementsByClassName("input");
var appendElements = document.getElementsByClassName("append");

function Accept() {
    if (inputElements.length > 0 && appendElements.length > 0 && inputElements[0].value !== "") {
        var input = inputElements[0].value;
        var append = appendElements[0];

        var arr = ["define frontend", "define backend", "define fullstack", "define html"];
        var matchFound = false;
        for (var i = 0; i < arr.length; i++) {
            if (input == arr[i]) {
                var p = document.createElement('p');
                p.textContent = "accept!!!";
                append.appendChild(p);
                matchFound = true;
                inputElements[0].value="";
                break;
            }
        }
        if (!matchFound) {
            var p = document.createElement('p');
            p.textContent = "wrong!!!";
            inputElements[0].value="";
            append.appendChild(p);
        }
    }
}

function decline() {
    if (inputElements.length > 0) {
        inputElements[0].value = "";
    }
}
