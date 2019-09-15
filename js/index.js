var scrollFunction = function() {
    var top = $(".topBtn");
    if (!events.buttonAnimating) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            showButton.play();
        } else {
            hideButton.play();        
        }
    }
}

window.onload = function() {
    
    loadInternationalGraph();
    loadDistributionGraph();
    loadEuropeGraph();

    prepareAnimations();
}


window.onscroll = function() {scrollFunction()};
