function addCopycell (i, abbr){
	var copyCell = `<span id="` + heroNames[i][0] + `_` + abbr + `_text" class="copy-field">` + heroNames[i][0].replace(/_/g, " ") + ` ` + abbr + `</span><span class="herolist__hero ` + heroNames[i][0] + `"><a class="herolist__hero__link"><span class="herolist__hero__name"></span></a></span><button class="cp_btn" onclick="copyToClipboard('` + heroNames[i][0] + `_` + abbr + `text')">Copy</button>`;
	return copyCell;
}

function addQuotecell (i, tier){
	capitalTier = tier[0].toUpperCase() + tier.substring(1);
	var quoteCell = '<span id="dotaplus"><img id ="tier" title="' + capitalTier + '"  src="./assets/images/hero_badges/' + tier + '.png"></span><span id="speaker"><audio id="' + heroNames[i][0] + '_' + tier + '_audio" preload="none"><source src="./assets/audio/' + tier + '/' + heroNames[i][0] + '.mp3" type="audio/mpeg"></audio><a href="#" title="Play Audio" id="play" onclick="' + heroNames[i][0] + '_' + tier + '_audio.play();return false;"><img src="./assets/images/audio.png"></a></span><span id="message" class="' + tier + '">' + quotes[tier][i]; + '</span>';
	return quoteCell;
}

var div = document.createElement('div');
	div.setAttribute("id", "table_container");
	document.body.appendChild(div);

	//Build otherquotes table
var table = document.createElement('table'),
	thead = document.createElement('thead'),
	tbody = document.createElement('tbody'),
	th,
	tr,
	td;
	th = document.createElement('th'),
	table.setAttribute("id", "otherquotes");
	th.innerHTML= "Chat Wheel Keywords";
	thead.appendChild(th);
	th = document.createElement('th');
	th.innerHTML= "Quotes",
	thead.appendChild(th);
	th = document.createElement('th');
	th.innerHTML= "Alternate Keywords",
	thead.appendChild(th);
	table.appendChild(thead);
	table.appendChild(tbody);
	
	div.appendChild(table);
	
for(var i=0;i<otherNames.length;i++){
	//Other Keywords
	tr = document.createElement('tr'),
	copycell = document.createElement('td'),
	copycell.innerHTML = `<span id="` + otherNames[i][0] + `_text" class="copy-field">` + otherNames[i][0].replace(/_/g, " ") + `</span><button class="cp_btn" onclick="copyToClipboard('` + otherNames[i][0] + `_text')">Copy</button>`;
	tr.appendChild(copycell);

	//Other Quotes
	td = document.createElement('td');
	td.innerHTML='<span id="speaker"><audio id="' + otherNames[i][0] + '_default" preload="none"><source src="./assets/audio/other/' + otherNames[i][0] + '.mp3" type="audio/mpeg"></audio><a href="#" title="Play Audio" id="play" onclick="' + otherNames[i][0] + '_default.play();return false;"><img src="./assets/images/audio.png"></a></span><span id="message" class="default">' + otherQuotes[i]; + '</span>';
	tr.appendChild(td);
	tbody.appendChild(tr);
	
	//Alternate otherNames
	td = document.createElement('td');
	var cleanNames = otherNames[i].join(),
	cleanNames = cleanNames.replace(/_/g, " ").replace(/,/g, ", ");
	td.innerHTML = cleanNames;
	tr.appendChild(td);
}
	
	//Search field
	const searchDiv = document.createElement('div');
	searchDiv.setAttribute("id", "searchDiv"),
	searchDiv.innerHTML = `<span class="fas fa-search" style="position: absolute;font-size: 33px;margin: 11 15;color: #faeac9;"></span><input id="myInput" type="text" placeholder="Search heroes or quotes...">`,
	div.appendChild(searchDiv);
	
	//Build heroquotes table
	table = document.createElement('table'),
	thead = document.createElement('thead'),
	tbody = document.createElement('tbody'),
	th,
	tr,
	td;
	th = document.createElement('th'),
	th.innerHTML="Dota Plus Keywords";
	table.setAttribute("id", "heroquotes");
	thead.appendChild(th);
	th = document.createElement('th');
	th.innerHTML= "Quotes"
	thead.appendChild(th);
	th = document.createElement('th');
	th.innerHTML= "Alternate Hero Names"
	thead.appendChild(th);
	table.appendChild(thead);
	
	div.appendChild(table);
	
for(var i=1;i<heroNames.length;i++){
	tbody = document.createElement('tbody');
	table.appendChild(tbody);
	tbody.setAttribute("id", heroNames[i][0]);

	//Grandmaster Keywords
	firstRow = document.createElement('tr'),
	firstRow.id = heroNames[i][0]+"_grandmaster",
	copycell = document.createElement('td'),
	copycell.innerHTML = addCopycell(i, "gm"),
	firstRow.appendChild(copycell);
	//Grandmaster Quotes
	td = document.createElement('td'),
	td.innerHTML = addQuotecell(i, "grandmaster"),
	firstRow.appendChild(td);
	//Alternate hero names on first row
	altNames = document.createElement('td');
	var cleanNames = heroNames[i].join(),
	cleanNames = cleanNames.replace(/_/g, " ").replace(/,/g, ", ");
	altNames.innerHTML = cleanNames;
	altNames.setAttribute("id", heroNames[i][0]+"_aliases");
	altNames.setAttribute("rowspan", "7");
	firstRow.appendChild(altNames);
	
	tbody.appendChild(firstRow);

	//Master Keywords
	secondRow = document.createElement('tr'),
	secondRow.id = heroNames[i][0]+"_master",
	copycell = document.createElement('td'),
	copycell.innerHTML = addCopycell(i, "master"),
	secondRow.appendChild(copycell);
	//Master Quotes
	td = document.createElement('td'),
	td.innerHTML = addQuotecell(i, "master"),
	secondRow.appendChild(td);
	//Blank TD
	td = document.createElement('td'),
	blanktd = document.createElement('td'),
	blanktd.id = (heroNames[i][0]+"_blank"),
	blanktd.setAttribute("rowspan", "6"),
	blanktd.style.display = "none",
	secondRow.appendChild(blanktd);
	
	tbody.appendChild(secondRow);
	
	//Platinum Keywords
	thirdRow = document.createElement('tr'),	
	thirdRow.id = heroNames[i][0]+"_platinum",
	copycell = document.createElement('td'),
	copycell.innerHTML = addCopycell(i, "plat"),
	thirdRow.appendChild(copycell);
	//Platinum Quotes
	td = document.createElement('td'),
	td.innerHTML = addQuotecell(i, "platinum"),
	thirdRow.appendChild(td);
	//Blank TD
	td = document.createElement('td'),
	blanktd = document.createElement('td'),
	blanktd.id = (heroNames[i][0]+"_blank"),
	blanktd.setAttribute("rowspan", "5"),
	blanktd.style.display = "none",
	thirdRow.appendChild(blanktd);
	
	tbody.appendChild(thirdRow);
	
	//Gold Keywords
	fourthRow = document.createElement('tr'),
	fourthRow.id = heroNames[i][0]+"_gold",
	copycell = document.createElement('td'),
	copycell.innerHTML = addCopycell(i, "gold"),
	fourthRow.appendChild(copycell);
	//Gold Quotes
	td = document.createElement('td'),
	td.innerHTML = addQuotecell(i, "gold"),
	fourthRow.appendChild(td);
	//Blank TD
	td = document.createElement('td'),
	blanktd = document.createElement('td'),
	blanktd.id = (heroNames[i][0]+"_blank"),
	blanktd.setAttribute("rowspan", "4"),
	blanktd.style.display = "none",
	fourthRow.appendChild(blanktd);
	
	tbody.appendChild(fourthRow);
	
	//Silver Keywords
	fifthRow = document.createElement('tr'),
	fifthRow.id = heroNames[i][0]+"_silver",
	copycell = document.createElement('td'),
	copycell.innerHTML = addCopycell(i, "silver"),
	fifthRow.appendChild(copycell);
	//Silver Quotes
	td = document.createElement('td'),
	td.innerHTML = addQuotecell(i, "silver"),
	fifthRow.appendChild(td);
	//Blank TD
	td = document.createElement('td'),
	blanktd = document.createElement('td'),
	blanktd.id = (heroNames[i][0]+"_blank"),
	blanktd.setAttribute("rowspan", "3"),
	blanktd.style.display = "none",
	fifthRow.appendChild(blanktd);
	
	tbody.appendChild(fifthRow);
	
	//Bronze Keywords
	sixthRow = document.createElement('tr'),
	sixthRow.id = heroNames[i][0]+"_bronze",
	copycell = document.createElement('td'),
	copycell.innerHTML = addCopycell(i, "bronze"),
	sixthRow.appendChild(copycell);
	//Bronze Quotes
	copycell = document.createElement('td'),
	td.innerHTML = addQuotecell(i, "bronze"),
	sixthRow.appendChild(td);
	//Blank TD
	td = document.createElement('td'),
	blanktd = document.createElement('td'),
	blanktd.id = (heroNames[i][0]+"_blank"),
	blanktd.setAttribute("rowspan", "2"),
	blanktd.style.display = "none",
	sixthRow.appendChild(blanktd);
	
	tbody.appendChild(sixthRow);
	
	//Bonus Keywords
	seventhRow = document.createElement('tr'),
	seventhRow.id = heroNames[i][0]+"_bonus",
	copycell = document.createElement('td'),
	copycell.innerHTML = addCopycell(i, "bonus"),
	seventhRow.appendChild(copycell);
	//Bonus Quotes
	td = document.createElement('td'),
	td.innerHTML = addQuotecell(i, "bonus"),
	seventhRow.appendChild(td);
	//Blank TD
	td = document.createElement('td'),
	blanktd = document.createElement('td'),
	blanktd.id = (heroNames[i][0]+"_blank"),
	blanktd.setAttribute("rowspan", "1"),
	blanktd.style.display = "none",
	seventhRow.appendChild(blanktd);
	
	tbody.appendChild(seventhRow);
 }