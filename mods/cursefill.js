var totalDownloads = 0;

function reloadDownloads(cards) {
	var iteration = 0;
	var totalElements = cards.length;
	getDownloads(cards, function(card, obj) {
		replaceDownloads(card, obj);
		iteration++;
		if(iteration == totalElements) {
			replaceTotalDownloads(card, obj);
			iteration = 0;
		}
	});
}

function getDownloads(cards, onComplete) {
	totalDownloads = 0;
	cards.forEach((c, i, a) => getDownloadsForElement(c, i, a, onComplete));
}

function getDownloadsForElement(card, index, array, onComplete) {
	var id = card.id;
	if(id != "") {
		httpGetAsync(card, card.getAttribute("api"), updateInformation, onComplete);
	}
}

function httpGetAsync(card, url, callback, onCompleteCallback) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(onCompleteCallback, card, xmlHttp.responseText);
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

function updateInformation(onComplete, card, response) {
	var obj = JSON.parse(response);
	onComplete(card, obj);
}

function replaceAll(card, obj) {
	replaceInformation(card, obj);
	//replaceTotalDownloads(card, obj);
}

function replaceInformation(card, obj) {
	var title = document.querySelectorAll("div#" + card.id + " .element_text");
	var lnk = document.querySelectorAll("div#" + card.id + " .element_link");
	var img = document.querySelectorAll("div#" + card.id + " .element_img");
	replaceDownloads(card, obj);
	title[0].innerHTML = obj.title;
	lnk[0].setAttribute("href", obj.urls.curseforge);
	img[0].setAttribute("src", obj.thumbnail.replace("120/120/", "").replace("thumbnails/", ""));
}

function replaceDownloads(card, obj) {
	var downloads = document.querySelectorAll("div#" + card.id + " .element_downloads");
	downloads[0].innerHTML = "<img class=\"cfbadge\" src=\"https://cf.way2muchnoise.eu/full_" + obj.id + "_downloads.svg\">"//numberWithCommas(obj.downloads.total) + " Downloads";
	totalDownloads += obj.downloads.total;
}

function replaceTotalDownloads(card, obj) {
	var total = document.getElementById("total_download_counter");
	total.innerHTML = numberWithCommas(totalDownloads) + " Total Downloads";
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}