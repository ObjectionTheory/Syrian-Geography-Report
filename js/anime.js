var events = {
    timelineLoaded: false,
    buttonAnimating: false
}
var prepareAnimations = function() {
    anime.set(".container", {
        translateY: "-75"
    });
}

var animateTimeline = function() {
    var animation = anime({
        targets: ".container",
        translateY: "0",
        opacity: 1,
        duration: 1500,
        delay: anime.stagger(200) 
    });
}

$(".timeline").one("mouseenter", function() {
    if (!events.timelineLoaded) {
        animateTimeline();
        events.timelineLoaded = true;
        console.log("Revealed");
    }
});

var showButton = anime({
    targets: ".topBtn",
    opacity: 1,
    duration: 2000,
    begin: function(anim) {
        events.buttonAnimating = true;
    },
    complete: function(anim) {
        events.buttonAnimating = false;
    }
})


var hideButton = anime({
    targets: ".topBtn",
    opacity: 0,
    duration: 2000,
    begin: function(anim) {
        events.buttonAnimating = true;
    },
    complete: function(anim) {
        events.buttonAnimating = false;
    }
})
