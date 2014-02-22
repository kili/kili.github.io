function findPos(obj) {
    var l = 0, t = 0;
    if (obj.offsetParent) {
        do {
            l += obj.offsetLeft;
            t += obj.offsetTop;
        } while (obj === obj.offsetParent);
    }
    return this;
}

function interpolate(source, target, pos) { return (source + (target - source) * pos); }
function easing(pos) { return (-Math.cos(pos * Math.PI) / 2) + 0.5; }
function scrollToA(target, duration) {
    duration = duration || 1000;
    var startY = window.pageYOffset,
        start  = Number(new Date()),
        finish = start + duration,
        interval = setInterval(function () {
            var now = Number(new Date()),
                pos = (now > finish) ? 1 : (now - start) / duration;
            window.scrollTo(0, interpolate(startY, findPos(target).t, easing(pos)));
            if (now > finish) {
                clearInterval(interval);
            }
        }, 15);
    return false;
}

var EXCHANGE_RATE = 86;

function swapCurr() {
    var USD = $("#pricing")[0].dataset.currency === "USD",
        prices = $("[data-prinf] b"),
        i = 0;

    for (i = 0; i < prices.length; i++) {
        prices[i].innerHTML = ((USD ? EXCHANGE_RATE : 1 / EXCHANGE_RATE) * parseFloat(prices[i].innerHTML.replace(/,/g , ''))).formatMoney(2);   
    }
    
    $("#pricing")[0].dataset.currency = USD ? "KES" : "USD";
}

Number.prototype.formatMoney = function (c, d, t) {
    var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "." : d, 
        t = t == undefined ? "," : t, s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");}

$("#currSwitch > b > a").on("click", function(e){ swapCurr(); });
