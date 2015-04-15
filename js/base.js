var EXCHANGE_RATE = 94;

function swapCurr() {
    var USD = $("#pricing")[0].dataset.currency === "USD",
        prices = $("[data-price-info] b"),
        i = 0;

    for (i = 0; i < prices.length; i++) {
        prices[i].innerHTML = $.number(((USD ? EXCHANGE_RATE : 1 / EXCHANGE_RATE) * parseFloat(prices[i].innerHTML.replace(/,/g , ''))), 2 ).replace(".00","");
    }
    
    $("#pricing")[0].dataset.currency = USD ? "KES" : "USD";
}

$("#currSwitch > b > a").on("click", function(e){ swapCurr(); });

$(document).ready(function() {
    $('.carousel').carousel({ interval: false });
    $("[rel=tooltip]").tooltip();
    $('.tabbable a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });

        $('.toggle').toggles({text:{on:'KES', off:'USD'}, width:110, height:40 , type:'select'});
        $('.toggle').on('toggle', function (e, active) { swapCurr(); 
    });

    $('.toggle').click()
});
