function scrollTo (element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        if (element.scrollTop >= to) return;
        element.scrollTop = element.scrollTop + perTick;
        scrollTo(element, to, duration - 10);
    }, 10);
}

var links = document.querySelectorAll('[href^="#"]');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();

        var link = this.getAttribute('href').substr(1);
        if (link !== '') {
            scrollTo(document.body, document.getElementById(link).offsetTop, 350);
        }
    }, false);
}
