/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
	var app = {
    initialize: function() {
		console.log('geinitialiseerd');
		this.bind();
    },
	leftCount: 0,
	rightCount: 0,
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
		app.startGame();
    },
	startGame: function() {
		console.log('game started');
		animatie();
	}
};




/*
* Deze functie initialiseert het spell
* - verbergt de start knop
* - haalt de canvas leeg
* geen parameters en geen return waarde
*/
function initialiseerSpel() {
	$('#start').hide();

	//schoonmaken van de canvas
	var elem = document.getElementById('myCanvas');
	var context = elem.getContext('2d');
	context.clearRect(0, 0, elem.width, elem.height);
	
	$('#status').html('Raad het woord door een letter uit het alfabet te kiezen.');
	stap = 0;
}

/*
* Deze functie tekent de galg als animatie in 12 stappen
* geen parameters/return waarde
*/
function animatie() {	
	if (stap < 12) {
		tekenGalgje();
		setTimeout(animatie,100);
		stap++;
	}
	else {
		$('#status').html('Je hangt !!<br><button id="start" onclick="galgje();">Start spel</button>');
	}
}

/*
* De functie tekent 1 stap van de galg aan de hand van de globale variabel stap
* in een switch case statement in de canvas met id='myCanvas'
* geen parameters of return waarde
*/
function tekenGalgje() {
	var elem = document.getElementById('myCanvas');
	// Always check for properties and methods, to make sure your code doesn't break 
	// in other browsers.
	$('#status').html(stap);
	if (elem && elem.getContext) {
	  // Get the 2d context.
	  // Remember: you can only initialize one context per element.
	  var ctx = elem.getContext('2d');
	  if (ctx) {
			switch(stap) {
			case 0:
			// eerste lijn
			ctx.beginPath();              
			ctx.lineWidth= "5";
			ctx.strokeStyle= "black";  // black path
			ctx.moveTo(5,150);
			ctx.lineTo(250,150);
			ctx.stroke();  // Draw it
			break;
			//tweede lijn
			case 1:
			ctx.beginPath();              
			ctx.lineWidth= "7";
			ctx.strokeStyle= "black";  // black path
			ctx.moveTo(100,20);
			ctx.lineTo(100,150);
			ctx.stroke();  // Draw it
			break;
			case 2:
			//derde lijn
			ctx.beginPath();              
			ctx.lineWidth= "5";
			ctx.strokeStyle= "black";  // black path
			ctx.moveTo(20,20);
			ctx.lineTo(240,20);
			ctx.stroke();  // Draw it
			break;
			case 3:
			//vierde lijn
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "black";  // black path
			ctx.moveTo(100,50);
			ctx.lineTo(150,20);
			ctx.stroke();  // Draw it
			break;
			case 4:
			//vijfde lijn
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "yellow";  // black path
			ctx.moveTo(100,50);
			ctx.lineTo(150,20);
			ctx.stroke();  // Draw it
			break;
			case 5:
			//zesde lijn
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "yellow";  // black path
			ctx.moveTo(240,20);
			ctx.lineTo(240,40);
			ctx.stroke();  // Draw it	
			break;
			case 6:
			//het hoofd			
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "orange";  // black path
			ctx.arc(240,50,10,0,2*Math.PI);
			ctx.stroke();  // Draw it	
			break;
			case 7:
			//het lichaam		
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "orange";  // black path
			ctx.arc(240,80,15,0,2*Math.PI);
			ctx.stroke();  // Draw it
			break;
			case 8:
			//arm 1		
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "orange";  // black path
			ctx.moveTo(225,70);
			ctx.lineTo(180,60);
			ctx.stroke();  // Draw it
			break;
			case 9:
			//arm 2		
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "orange";  // black path
			ctx.moveTo(250,70);
			ctx.lineTo(295,60);
			ctx.stroke();  // Draw it
			break;
			case 10:
			//been 1		
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "red";  // black path
			ctx.moveTo(230,95);
			ctx.lineTo(200,120);
			ctx.stroke();  // Draw it
			break;
			case 11:
			//been 2		
			ctx.beginPath();              
			ctx.lineWidth= "3";
			ctx.strokeStyle= "red";  // black path
			ctx.moveTo(250,95);
			ctx.lineTo(280,120);
			ctx.stroke();  // Draw it
			break;
			default:
				alert ('nothing');
			break;
			};
		}
	}
}

/* Dit is een globale variabele met een lijst van lange woorden */
var woorden = ['campylobacteriose'
,'basaalcelcarcinoom'
,'zoutwateraquariums'
,'basisberoepsgericht'
,'identificatienummer'
,'baarmoedermonderosie'
,'overzichtelijkshalve'
,'aandrangincontinentie'
,'calamiteitenhospitaal'
,'aanwezigheidsindicatie'
,'ongezond'
,'desoxyribonucleinezuur'
,'ruitensproeiervloestof'
,'paraskevidekatriafobie '
,'veronderstellenderwijs'
,'fietspompreparatiesetje '
,'hooggeindustrialiseerde'
,'natuurkundigheidsmuseum'
,'webdeveloper'
,'langeafstandsbommenwerper'
,'Gasselterboerveenschemond'
,'raceautobandventieldopje'
,'terugkoppelingsmechanisme'
,'vijfhonderdduizendklapper'
,'aandeelhoudersovereenkomst'
,'gehandicaptenparkeerplaats'
,'hottentottententoonstelling'
,'persoonlijkheidsstoornissen'
,'frikandel'
,'milieubeschermingsmaatregelen'
,'centraleverwarmingsinstallatie'
,'huwelijksvruchtbaarheidscijfer'
,'levensverzekeringsmaatschappij'
, 'applicatie'
,'televisieproductiemaatschappij'
,'telecommunicatieinfrastructuur'
,'afvalwaterzuiveringsinstallatie'
,'bejaardenziekenfondsverzekering'
,'chronischevermoeidheidssyndroom'
,'levensmiddelendistributiesector'
,'rioolwaterzuiveringsinstallatie'
,'studentenuitwisselingsprogramma'
,'vertegenwoordigingsovereenkomst'
,'wapenstilstandsonderhandelingen'
,'aankoopwaardegarantieverzekering'
,'accountantadministratieconsulent'
,'geneesmiddelenvergoedingssysteem'
,'gelegenheidskledingverhuurbedrijf'
,'onderzeebootbestrijdingsvliegtuig'
,'pensioenfondstoetredingsvoorwaarden'
,'arbeidsongeschiktheidsverzekeringsformulier'];