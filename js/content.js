window.onload = function() {
	

	(function () {
	    function checkTime(i) {
	        return (i < 10) ? "0" + i : i;
	    }

	    function startTime() {
	        var today = new Date(),
	            h = checkTime(today.getHours()),
	            m = checkTime(today.getMinutes()),
	            s = checkTime(today.getSeconds());
	            var tag = 'AM';
		  checkTime();
		  if(h > 12) {
		   h -= 12
		   tag = 'PM';
		  }
	        document.getElementById('timedate').innerHTML = h + ":" + m +  ":" + s;
	        document.getElementById('ampm').innerHTML = tag;
	        t = setTimeout(function () {
	            startTime()
	        }, 500);
	    }

	    startTime();
	})();

	var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning!';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Night';


    document.getElementById('greetings').innerHTML =
        '' + greet;


}
