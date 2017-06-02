/**
 * Get around theme-flowdark using !important on color.
 */

function mutationHandler (mutationRecords) {
    $(".theme-flowdark .bubble[style*='color']:not(.great-again)").each(function(i, e) {
        var $e = $(e);
        var currentStyle = $e.attr('style');
        var newStyle = currentStyle.replace(/;color:(#.{3,6});/g, ';color:$1 !important;');
        $e.attr('style', newStyle);
        $e.addClass('great-again');
    });
    $(".theme-flowdark .bubble[style!='color']:not(.not-really-that-great-yet):not(.great-again)").each(function(i, e) {
        var $e = $(e);
        // TODO: When a user switches themes we need to remove the following;
        var backgroundColor = $e.css('backgroundColor');
        $e.attr('style', ''.concat("color:", backgroundColor, " !important"));
        $e.addClass('not-really-that-great-yet');
    });
}

function defer(method) {
    try {
        $
        method();
    }
    catch (ReferenceError) {
        setTimeout(function() { defer(method) }, 200);
    }
}

defer(function() {
    console.log('Making Flowdock great again...');

    var $targetNodes = $('body');
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    var observer = new MutationObserver(mutationHandler);
    var observerOptions = {
        childList: true,
        subtree: true,
    };

    $targetNodes.each (function () {
        observer.observe(this, observerOptions);
    });
});

