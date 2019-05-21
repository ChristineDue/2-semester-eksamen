// JavaScript Document

//Når siden loader bliver siden sat til hjemme siden
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('page').innerHTML = home
});

									//NAVIGATION

//Front page
let home = ``
// inspiration
let inspiration = ``
//praktisk
let praktisk = ``
//Økonomisiden
let okonomi = ``
//comming soon
let commingSoon = ``

									//FORSIDE-SIDEN
//Indlæg om roomie
let roomie = ``
//Indlæg om infografik
let infografik = ``

									//ØKONOMI

//Indlæg om styr på budget
let styrBudget = ``
//Indlæg om lægger budget
let ligBudget = ``

									//ALTAN OG HAVE

//Altan- og havesiden
let altanHave = `` 
//Indlæg om altansæt
let altanSat = ``
//Indlæg om insekthotel
let insekt = ``
//Indlæg om fra skrald til køkkenhave
let skrald = ``

									//INDRETNINGSIDEN

//Indretningssiden
let indretning = ``
//Indlæg om pift stuen
let piftStuen = ``
//Indlæg omm makeover af badeværelse
let makeoverBad = ``
//Indlæg om sengesæt
let sengeSat = ``
//Indlæg om et-værelses
let etVarelse = ``

									//INDKØBSIDEN
//Indkøbssiden
let indkob = ``
//Indlæg om ikea
let ikea = ``
//Indlæg om føtex
let fotex = ``

									//OPSKRIFTSIDEN

//Opskriftsiden
let opskrift = ``
//Indlæg om budget madlavning
let budgetMad = ``
									//RENGØRINGSSIDEN


//Rengøring
let rengoring = ``
//Indlæg om få den plet væk
let plet = ``
//Indlæg om badeforhæng
let badeforhang = ``
//Indlæg om 5 tricks til rengøring
let femRen = ``

//Gør det selv siden
let gorDetSelv = ``


//Indlæg om flyttemand
let flyttemand = ``
//Indlæg om flyttehuskeliste
let flyttehuskeliste = ``


//Her sker alt magien, vi kigger på om en knap bliver trykket på
//Hvis den gør så sker følgende
document.getElementById('navPage').addEventListener('click', function (e){
	
	let pages = {
        inspiration: inspiration,
        home: home,
		praktisk: praktisk,
		okonomi: okonomi,
		commingSoon: commingSoon,
		
	//her starter indlæg
		styrBudget: styrBudget,
		ligBudget: ligBudget,
		altanHave: altanHave,
		indretning: indretning,
		piftStuen: piftStuen,
		makeoverBad: makeoverBad,
		insekt: insekt,
		etVarelse: etVarelse,
		indkob: indkob,
		opskrift: opskrift,
		budgetMad: budgetMad,
		rengoring: rengoring,
		plet: plet,
		badeforhang: badeforhang,
		femRen: femRen,
		skrald: skrald,
		altanSat: altanSat,
		sengeSat: sengeSat,
		gorDetSelv: gorDetSelv,
		flyttemand: flyttemand,
		roomie: roomie,
		infografik: infografik,
		ikea: ikea,
		fotex: fotex,
		flyttehuskeliste: flyttehuskeliste,
    }
	
	console.log('i am the navbar')
	console.log(e.target.id)
	
	if (e.target.id) {
//Hvis det er, så laver vi HTML'en om til den knap der er trykket på
//Vi forsøger kun at lave siden om hvis at id'et findes i objektet "pages"
        let id = e.target.id
		
        if(pages[id] != undefined){
            console.log("id found")
        e.preventDefault()
			
//https://stackoverflow.com/questions/4210798/how-to-scroll-to-top-of-page-with-javascript-jquery
        document.getElementById('page').innerHTML = pages[id],window.scrollTo(0, 0);
    }
    }
	
})
document.getElementById('page').addEventListener('click', function (e) {
	
// Vi har vores pages liggende i et objekt så vi let kan hente den side vi ønsker
// Hvis vi vil tilføje en ny side, er det eneste vi nu skal gøre at
//Tilføje den til pages objektet og selvfølgelig have en knap der linker dertil
// Men så er alt det andet faktisk automatisk :)
    let pages = {
        inspiration: inspiration,
        home: home,
		praktisk: praktisk,
		okonomi: okonomi,
		commingSoon: commingSoon,
		
	//her starter indlæg
		styrBudget: styrBudget,
		ligBudget: ligBudget,
		altanHave: altanHave,
		indretning: indretning,
		piftStuen: piftStuen,
		makeoverBad: makeoverBad,
		insekt: insekt,
		etVarelse: etVarelse,
		indkob: indkob,
		opskrift: opskrift,
		budgetMad: budgetMad,
		rengoring: rengoring,
		plet: plet,
		badeforhang: badeforhang,
		femRen: femRen,
		skrald: skrald,
		altanSat: altanSat,
		sengeSat: sengeSat,
		gorDetSelv: gorDetSelv,
		flyttemand: flyttemand,
		roomie: roomie,
		infografik: infografik,
		ikea: ikea,
		fotex: fotex,
		flyttehuskeliste: flyttehuskeliste,
    }
	console.log('i am the magic')
	console.log(e.target.id)
	
//Her ser vi om det er et id der er trykket på
    if (e.target.id) {
		
//Hvis det er, så laver vi HTML'en om til den knap der er trykket på
//Vi forsøger kun at lave siden om hvis at id'et findes i objektet "pages"
        let id = e.target.id
		
        if(pages[id] != undefined){
            console.log("id found")
        e.preventDefault()
        document.getElementById('page').innerHTML = pages[id], window.scrollTo(0, 0);
    }
    }
})

//// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};
//
//function scrollFunction() {
//  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//    document.getElementById("myBtn").style.display = "block";
//  } else {
//    document.getElementById("myBtn").style.display = "none";
//  }
//}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

