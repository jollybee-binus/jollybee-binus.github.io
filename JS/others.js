function fixScrollbar() {
    var isMobile = window.orientation > -1;
    if (isMobile) {
        var sbroot = document.querySelector(":root");
        sbroot.style.setProperty("--pseudo-sb-w", "15px");
    }
}
