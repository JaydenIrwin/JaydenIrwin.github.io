var targetDate = new Date();

function loadDate() {
	var url_string = window.location.href; //"http://www.jayden.com/?date=1576162894000"
	var url = new URL(url_string);
	var date_text = url.searchParams.get("date");
	targetDate = new Date(parseInt(date_text));
	console.log(targetDate);
	updateTime();
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(loadDate);

function treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}
function daysBetween(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}
function updateTime() {
	var days = daysBetween(Date(), targetDate);
	$("#countdown").text(Math.round(days)+"d");
	setTimeout(updateTime, 1000);
}