function scrollToA(target) { 
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1000); 
    return true; 
}

var EXCHANGE_RATE = 86;

function swapCurr() {
    var USD = $("#pricing")[0].dataset.currency === "USD",
        prices = $("[data-prinf] b"),
        i = 0;

    for (i = 0; i < prices.length; i++) {
        prices[i].innerHTML = $.number(((USD ? EXCHANGE_RATE : 1 / EXCHANGE_RATE) * parseFloat(prices[i].innerHTML.replace(/,/g , ''))), 2 ).replace(".00","");
    }
    
    $("#pricing")[0].dataset.currency = USD ? "KES" : "USD";
}

$("#currSwitch > b > a").on("click", function(e){ swapCurr(); });

swapCurr();
$(document).ready(function() {
    $('.carousel').carousel({ interval: false });
    $("[rel=tooltip]").tooltip();
    $('.tabbable a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });

        $('.toggle').toggles({text:{on:'USD', off:'KES'}, width:110, height:40 , type:'select'});
        $('.toggle').on('toggle', function (e, active) { swapCurr(); 
    });

    // navigation scrolling
    function scrollHere(target, end){
        $(target).on('click', function(e){
            e.preventDefault();
            $.scrollTo( $(end).offset().top-69, 600)
        })
    }
    scrollHere('#features-nav', '#features')
    scrollHere('#pricing-nav', '#pricing')
    scrollHere('#cta-nav', '#cta')
    scrollHere('#team-nav', '#team')
});
