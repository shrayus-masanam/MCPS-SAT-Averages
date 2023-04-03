const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
const config = require('./config.json');

//let master = {};
console.log("Analyzing " + config.documents.length + " documents...\n\n");
config.documents.forEach((document) => {
	pdfExtract.extract(document.path, {}, (err, data) => {
		if (err) return console.log(err);
		let str = "";
		let tblComposite = {};
		let tblEVBRW = {};
		let tblMath = {};
		data.pages.forEach(page => {
			//if (!JSON.stringify(page).toLowerCase().includes("average sat")) return; // using stringify actually makes this slower, so not needed
			let lastKey = ""; // used to store the last school name found
			page.content.forEach(content => {
				if (content.str.trim() == "") return;
				
				// scan for school name
				if (content.y > (document.nameCoords.y - document.nameCoords.yMoE) && content.y < (document.nameCoords.y + document.nameCoords.yMoE) && page.content[0].str.toLowerCase().includes("average sat")) {
					lastKey = content.str.trim().split(" - ")[0];
					str += lastKey + ": ";
					tblComposite[lastKey] = {};
				}/* else if (page.content[0].str.toLowerCase().includes("average sat") && content.str.includes("#")) {
					console.log("name not found but did find " + content.str + " at y = " + content.y);
				}*/

				// scan for composite score
				if (content.x > (document.compositeCoords.x - document.compositeCoords.xMoE) && content.x < (document.compositeCoords.x + document.compositeCoords.xMoE) && content.y > (document.compositeCoords.y - document.compositeCoords.yMoE) && content.y < (document.compositeCoords.y + document.compositeCoords.yMoE)) {
					if (lastKey.trim().length == 0) return;
					str += content.str + "\n";
					tblComposite[lastKey] = content.str;
				}/* else if (page.content[0].str.toLowerCase().includes("average sat") && content.str.includes("961")) {
					console.log("score not found but did find " + content.str + " at (" + content.x + ", " + content.y + ")");
				}*/

				// scan for EVBRW score
				if (content.x > (document.EVBRWCoords.x - document.EVBRWCoords.xMoE) && content.x < (document.EVBRWCoords.x + document.EVBRWCoords.xMoE) && content.y > (document.EVBRWCoords.y - document.EVBRWCoords.yMoE) && content.y < (document.EVBRWCoords.y + document.EVBRWCoords.yMoE)) {
					if (lastKey.trim().length == 0) return;
					str += content.str + "\n";
					tblEVBRW[lastKey] = content.str;
				}/* else if (page.content[0].str.toLowerCase().includes("average sat") && content.str.includes("533")) {
					console.log("score not found but did find " + content.str + " at (" + content.x + ", " + content.y + ")");
				}*/

				// scan for Math score
				if (content.x > (document.mathCoords.x - document.mathCoords.xMoE) && content.x < (document.mathCoords.x + document.mathCoords.xMoE) && content.y > (document.mathCoords.y - document.mathCoords.yMoE) && content.y < (document.mathCoords.y + document.mathCoords.yMoE)) {
					if (lastKey.trim().length == 0) return;
					str += content.str + "\n";
					tblMath[lastKey] = content.str;
				}/* else if (page.content[0].str.toLowerCase().includes("average sat") && content.str.includes("533")) {
					console.log("score not found but did find " + content.str + " at (" + content.x + ", " + content.y + ")");
				}*/

			});
		});
		console.log("----------"+document.name+"----------");
		console.log("----------Composite----------");
		console.table(tblComposite);
		console.log("----------EVBRW----------");
		console.table(tblEVBRW);
		console.log("----------Math----------");
		console.table(tblMath);

		/*
		for ([key, value] of Object.entries(tblComposite)) { // composite, EVBRW, or math
			if (master[key] == undefined) master[key] = "";
			master[key] += value + ",";
		}
		console.log("\n\n");
		for ([key, value] of Object.entries(master)) {
			console.log(key.split(" High")[0] + "," + value.slice(0, -1));
		}
		*/
	});

});