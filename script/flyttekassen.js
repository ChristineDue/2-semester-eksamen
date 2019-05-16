// JavaScript Document

//Når siden loader bliver siden sat til hjemme siden
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('page').innerHTML = home
});

//Front page
let home = ``
// Boligsiden
let bolig = ``
//Køkkensiden
let koekken = ``
//Soveværelsesiden
let sovevaerelse = ``
//Stuesiden
let stue = ``
//Altan- og havesiden
let altanHave = ``
//Badeværeslessiden
let bad = ``
//Entrésiden
let entre = ``
//Huskelisten
let huskelisten = ``
//Økonomisiden
let okonomi = ``
//Gode råd siden
let godeRaadSiden = ``
//
let  = ``
//
let  = ``
//
let  = ``
//
let  = ``

//Her sker alt magien, vi kigger på om en knap bliver trykket på
//Hvis den gør så sker følgende
document.getElementById('navPage').addEventListener('click', function (e){
	
	let pages = {
        bolig: bolig,
        koekken: koekken,
        home: home
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
        document.getElementById('page').innerHTML = pages[id]
    }
    }
	
})
document.getElementById('page').addEventListener('click', function (e) {
	
// Vi har vores pages liggende i et objekt så vi let kan hente den side vi ønsker
// Hvis vi vil tilføje en ny side, er det eneste vi nu skal gøre at
//Tilføje den til pages objektet og selvfølgelig have en knap der linker dertil
// Men så er alt det andet faktisk automatisk :)
    let pages = {
        bolig: bolig,
        koekken: koekken,
        home: home
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
        document.getElementById('page').innerHTML = pages[id]
    }
    }
})