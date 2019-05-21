// JavaScript Document

//Når siden loader bliver siden sat til hjemme siden
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('page').innerHTML = home
});

									//NAVIGATION

//Front page
let home = `
<!--Forside-->
<!--Slideshow-->
<!--SLIDESHOW LARGE-->

<div class="row slideshowLarge">
  <div class="col-12">
    <div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active"> <img src="images/slideshow/ikea-tur.jpg" class="d-block w-100" alt="ikea slidehow" id="ikea">
            <div class="carousel-caption d-none d-md-block" id="ikea">
              <h3>Din første IKEA-tur!</h3>
              <p>Har du svært ved at finde ud af, hvad du skal købe i IKEA, så følg med!</p>
            </div>
          </div>
          <div class="carousel-item"> <img src="images/slideshow/flyttekasse_illustration.png" id="flyttemand" class="d-block w-100" alt="Flyttekasser i stabel">
            <div class="carousel-caption d-none d-md-block" id="flyttemand">
              <h3>Er du klar til din flyttemand?</h3>
              <p>Er du begravet i flytterod. Få gode tips til hvordan du bliver klar til flyttemanden!</p>
            </div>
          </div>
          <div class="carousel-item"> <img src="images/slideshow/huskeliste2.jpg" class="d-block w-100" alt="Huskeliste over flytning" id="flyttehuskeliste">
            <div class="carousel-caption d-none d-md-block" id="flyttehuskeliste">
              <h3>Huskeliste til din første flytning!</h3>
              <p>Få et nemt overblik over, hvad du skal have med dig når du flytter!</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div>
    </div>
  </div>
</div>
<!--Content start--> 
<div class="row align-content-center text-i-row">
  <div class="col-12">
    <h3 class="text-center">VELKOMMEN TIL FLYTTEKASSEN!</h3>
    <p>Her kan du lære hvordan du bedst muligt kan flyve fra reden. Du kan finde gode råd om alt fra indretning og økonomi til håndtering af roomie problemer. Denne hjemmeside samler alt, hvad der er værd at vide om din første flytning og forklarer det på en sådan måde, at selv den mest uerfarende kan følge med.</p>
  </div>
</div>
<div class="row align-content-center text-i-row">
  <div class="col-12">
    <h3 class="text-center nyeIndlag">NYESTE INDLÆG</h3>
  </div>
</div>
<div class="row align-content-center">
  <div class="card-columns">
    <div class="card"> <a href="#"> 
		<img class="card-img-top rounded-0" src="images/sengeset.png" id="sengeSat" alt="Sengesæt"> </a> 
	</div>
    <div class="card"> <a href="#"> 
		<img class="card-img-top rounded-0" src="images/hotel.jpg" id="insekt" alt="Insekthotel"> </a> 
	</div>
    <div class="card"> <a href="#"> 
		<img class="card-img-top rounded-0" src="images/eggs_kant.jpg" id="skrald" alt="Æggebakke med blomster"> </a> 
	</div>
    <div class="card"> <a href="#"> 
		<img class="card-img-top rounded-0" src="images/roomies.png" id="roomie" alt="Gode roomie råd"> </a> 
	</div>
    <div class="card"> <a href="#"> 
		<img class="card-img rounded-0" src="images/budget.jpg" id="ligBudget" alt="budget"> </a> 
	</div>
    <div class="card"> <a href="#"> 
		<img class="card-img rounded-0" src="images/badlang.jpg" id="makeoverBad" alt="Makeover af badeværelse"> </a> 
	</div>
    <div class="card"> <a href="#"> 
		<img class="card-img-top rounded-0" src="images/statestik_card.png" id="infografik" alt="Inforgrafik over flytning"> </a> </div>
    <div class="card"> <a href="#"> 
		<img class="card-img-top rounded-0" src="images/licens.png" id="licens" alt="licens"> </a> 
	</div>
    <div class="card"> <a href="#"> 
		<img class="card-img-top rounded-0" src="images/madbudget.png" id="budgetMad" alt="Madbudget"> </a> 
	</div>
  </div>
</div>


`
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

