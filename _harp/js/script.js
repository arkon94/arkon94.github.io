function scrollTo (element, to, duration) {
    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

var links = document.querySelectorAll('[href^="#"]');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();

        var link = this.getAttribute('href').substr(1);

        scrollTo(document.getElementById(link), 0, 500);
    }, false);
}
