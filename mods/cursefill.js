var totalDownloads = 0;
var prevTotalDownloads = 0;
var elements = Array.from(document.getElementsByClassName("element"));
var totalElements = elements.length;
var doReplaceDownloads = true;
var iteration = 0;
getDownloads();
setInterval(reloadDownloads, 60000);

function reloadDownloads() {
	doReplaceDownloads = false;
	getDownloads();
}

function onLoadComplete() {
	if(iteration + 1 == totalElements) {
		replaceTotalDownloads();
	}
}

function getDownloads() {
	totalDownloads = 0;
	iteration = 0;
	elements.forEach(getDownloadsForElement);
}

function getDownloadsForElement(element, index, array) {
	var id = element.id;
	if(id != "") {
		httpGetAsync(element, element.getAttribute("api"), fillInfoForResponse);
	}
}

function httpGetAsync(element, theUrl, callback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(element, xmlHttp.responseText);
	}
	xmlHttp.open("GET", theUrl, true);
	xmlHttp.send(null);
}

function fillInfoForResponse(element, response) {
	var downloads = document.querySelectorAll("div#" + element.id + " .element_downloads");
	var title = document.querySelectorAll("div#" + element.id + " .element_text");
	var link = document.querySelectorAll("div#" + element.id + " .element_link");
	var img = document.querySelectorAll("div#" + element.id + " .element_img");
	var obj = JSON.parse(response);
	downloads[0].innerHTML = numberWithCommas(obj.downloads.total) + " Downloads";
	title[0].innerHTML = obj.title;
	link[0].setAttribute("href", obj.urls.curseforge);
	img[0].setAttribute("src", obj.thumbnail.replace("120/120/", "").replace("thumbnails/", ""));
	totalDownloads += obj.downloads.total;
	if(doReplaceDownloads) {
		replaceTotalDownloads();
	}
	iteration += 1;
	onLoadComplete();
}

function replaceTotalDownloads() {
	var total = document.getElementById("total_download_counter");
	total.innerHTML = numberWithCommas(totalDownloads) + " Total Downloads";
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}