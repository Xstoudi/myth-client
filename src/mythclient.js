var myth = require("myth");

var linkElem = document.querySelectorAll("link");

for (var i = 0; i < linkElem.length; ++i) {
    var item = linkElem.item(i);

    if(item.getAttribute("rel") !== "stylesheet/myth") continue;

    var link = item.getAttribute("href");

    var request = new XMLHttpRequest();
    request.open("GET", link, false);
    request.send(null);

    if (request.status !== 200) console.log("[WebMyth] Can't get myth file \"" + link +"\"");

    var styleContentElement = document.createElement("style");
    styleContentElement.innerHTML = myth(request.responseText);

    document.head.appendChild(styleContentElement);
    document.head.insertBefore(styleContentElement, item);
}