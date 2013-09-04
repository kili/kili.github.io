//for convenience
function el(id){ return document.getElementById(id); }

function findPos(obj) {
	var l = t = 0;
	if (obj.offsetParent) 
        do {
                l += obj.offsetLeft;
                t += obj.offsetTop;
            } while (obj = obj.offsetParent);
	return this;}
function interpolate( source,target,pos ) { return ( source + (target - source) * pos ); }
function easing( pos ) { return ( -Math.cos( pos * Math.PI ) / 2 ) + 0.5; }
function scrollToA( target, duration ) {
	duration = duration || 1000;
	var startY = window.pageYOffset,
		start  = Number(new Date()),
		finish = start + duration;
	var interval = setInterval(function() {
		var now = Number(new Date()),
		pos = (now > finish) ? 1 : (now - start) / duration;
		scrollTo(0, interpolate( startY, findPos(target).t, easing(pos) ));
		if ( now > finish )
			clearInterval( interval );
	}, 15);
	return false;};