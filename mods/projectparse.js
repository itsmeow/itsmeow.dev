function fillProjects(includeInfo, xmlHttpResponse, callback) {
	var projects = JSON.parse(xmlHttpResponse);
	if(includeInfo) {
		for(var listIndex in projects) {
			var list = projects[listIndex];
			var listHTML = document.getElementById(listIndex);
			putData(includeInfo, listHTML, list);
		}
	} else {
		for(var listIndex in projects) {
			var list = projects[listIndex];
			var listHTML = document.getElementById("all");
			putData(includeInfo, listHTML, list);
		}
	}
	callback();
}

function putData(includeInfo, listHTML, list) {
	if(listHTML != null) {
		for(var modIndex in list) {
			var mod = list[modIndex];
			listHTML.innerHTML = listHTML.innerHTML + "\n" + `
				<div class="element" id="` + modIndex + "\" api=\"" + mod.api + "\">" + (includeInfo ? `
					<a class="element_link" href="">
					<img class="element_img" src="" alt="No Connection to CF API">
					<h5 class="element_text">?</h5>
					<div class="element_downloads">? downloads</div>
					<div class="element_subtext_role">` + mod.role + `</div>
					<div class="element_subtext_info">` + mod.info + `</div>
					</a>`
				: "") + "</div>";
		}
	}
}

function getData(url, callback, callbackCallback, includeInfo) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.overrideMimeType("application/json");
	xmlHttp.onreadystatechange = function() { 
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(includeInfo, xmlHttp.responseText, callbackCallback);
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}