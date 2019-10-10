function fillProjects(includeInfo, xmlHttpResponse) {
    var projects = JSON.parse(xmlHttpResponse);
    if (includeInfo) {
        for (var listIndex in projects) {
            var list = projects[listIndex];
            var listHTML = document.getElementById(listIndex);
            putData(includeInfo, listHTML, list);
        }
    } else {
        for (var listIndex in projects) {
            var list = projects[listIndex];
            var listHTML = document.getElementById("all");
            putData(includeInfo, listHTML, list);
        }
    }
}

function putData(includeInfo, listHTML, list) {
    if (listHTML != null) {
        for (var modIndex in list) {
            var mod = list[modIndex];
            listHTML.innerHTML = listHTML.innerHTML + "\n" + `
				<div class="element" id="` + modIndex + "\">" + (includeInfo ? `
					<a class="element_link" href="` + (mod.hasOwnProperty('url') ? mod.url : ("https://curseforge.com/minecraft/mc-mods/" + modIndex)) + `">
					<img class="element_img" src="` + mod.thumbnail + `" alt="Unable to get thumbnail">
					<h5 class="element_text">` + mod.title + `</h5>
					<div class="element_downloads">` + "<img class=\"cfbadge\" src=\"https://cf.way2muchnoise.eu/full_" + (mod.hasOwnProperty('customid') ? mod.customid : modIndex) + "_downloads.svg\">" + `</div>
					<div class="element_subtext_role">` + mod.role + `</div>
					<div class="element_subtext_info">` + mod.info + `</div>
					</a>` :
                "") + "</div>";
        }
    }
}

function getData(url, callback, includeInfo) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.overrideMimeType("application/json");
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(includeInfo, xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}