$(document).mousemove(function(e) {
    $('.rat').offset({
        left: e.pageX,
        top: e.pageY - 100
    });
});

var date = new Date();
