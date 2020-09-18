// Device list
function shareListHideShow(actionId){
	var divs = document.getElementsByClassName("oem");
	for(var i=0;i<divs.length;i++) {
		if(divs[i].id == actionId){
		if(divs[i].style.display === "block"){
			divs[i].style.display = "none";
		}else{
			divs[i].style.display = "block";
			}
		}
		else
		divs[i].style.display = "none";
	}
}

// Downloads counter
var wrathSourceForge = 'https://sourceforge.net/projects/wrathos/files/stats/json?start_date=2020-01-01&end_date=2021-01-01';
var wrathDevices = 'https://raw.githubusercontent.com/WrathOS-Devices/official_devices/ten/devices.json';

$.getJSON(wrathSourceForge, function(wrathStats) {

	console.log("WrathSourceForge loaded!");
	$(".totalDownloads").html(wrathStats.total);

	$(".topGeo").html(wrathStats.summaries.geo.top);
	$(".topGeoPercent").html(" (" + wrathStats.summaries.geo.percent + "%)");

	$(".topOs").html(wrathStats.summaries.os.top);
	$(".topOsPercent").html(" (" + wrathStats.summaries.os.percent + "%)");

	$(".statsUpdated").html(wrathStats.stats_updated);

});

$.getJSON(wrathDevices, function(wrathDevices) {

	console.log("WrathDevices loaded!");
	$(".supportedDevices").html(wrathDevices.totalDevices);

});
