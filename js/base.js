function scrollToA(target) { $('html').animate({ scrollTop: $(target).offset().top }, 1000); return true; }

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
