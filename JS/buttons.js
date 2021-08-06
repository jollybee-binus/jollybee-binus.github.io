function filterSelection(s) {
    toggleButton(s);
    showSelection(s);
}

function showSelection(s) {
    var x = document.getElementsByClassName(s);
    var y = document.getElementsByClassName("content");
    for (var i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    for (var j = 0; j < x.length; j++) {
        x[j].style.display = "block";
    }
}

function toggleButton(s) {
    var y = document.getElementsByClassName("navButton");
    for (var i = 0; i < y.length; i++) {
        if (y[i].id == s) {
            y[i].classList.add("active");
        }
        else {
            y[i].classList.remove("active");
        }
    }
}

filterSelection('about')
