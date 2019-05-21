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
		<img class="card-img-top rounded-0" src="images/licens.png" id="commingSoonOko" alt="licens"> </a> 
	</div>
    <div class="card"> <a href="#"> 
		<img class="card-img-top rounded-0" src="images/madbudget.png" id="budgetMad" alt="Madbudget"> </a> 
	</div>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
// inspiration
let inspiration = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li class="sidsteCrumb">INSPIRATION</li>
    </ul>
  </div>
</div>
<!--content--> 
<!--iNSPIRATIONSSIDE-->
<div class="row">
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/altanoghave.png" id="altanHave" class="card-img rounded-0" alt="altan og have"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/indretning.png" id="indretning" class="card-img rounded-0" alt="indretning"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/indkoeb.jpg" id="indkob" class="card-img rounded-0" alt="Indkøb"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/opskrifter.jpg" id="opskrift" class="card-img rounded-0" alt="opskirfter"> </a> </div>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//praktisk
let praktisk = ``
//Økonomisiden
let okonomi = `
<!--BREADCRUMBSTIEN-->
<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li class="sidsteCrumb">ØKONOMI</li>
    </ul>
  </div>
</div>
<!--content--> 
<!--Økonomisiden-->
<div class="row">
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/hold_budget.jpg" id="styrBudget" class="card-img rounded-0" alt="Hold styr på dit budget"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/faellesoekonomi.jpg" id="commingSoonOko" class="card-img rounded-0" alt="Overbliv over fællesøkonomi"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/su.png" id="commingSoonOko" class="card-img rounded-0" alt="SU"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/licens.png" id="commingSoonOko" class="card-img rounded-0" alt="Licens"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/budget.jpg" id="ligBudget" class="card-img rounded-0" alt="Lig budget"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/forsikringer.jpg" id="commingSoonOko" class="card-img rounded-0" alt="Forsikringer"> </a> </div>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//comming soon
let commingSoonPrakRen = `
<!--INDLÆG KOMMER SNART-->
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HJEM</a></li>
			  <li><a href="#" id="praktisk">DET PRAKTISKE</a></li>
			  <li><a href="#" id="rengoring">RENGØRING</a></li>
			  <li class="sidsteCrumb">KOMMER SNART</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Indlæg "KOMMER SNART"-->
	<div class="row text-center text-i-row">
		<div class="col-12 kommerSnart">
			<h1>KOMMER SNART...</h1>
		</div>
	</div>

`
let commingSoonPrakGorSelv = `
<!--INDLÆG KOMMER SNART-->
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HJEM</a></li>
			  <li><a href="#" id="praktisk">DET PRAKTISKE</a></li>
			  <li><a href="#" id="gorDetSelv">GØR DET SELV</a></li>
			  <li class="sidsteCrumb">KOMMER SNART</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Indlæg "KOMMER SNART"-->
	<div class="row text-center text-i-row">
		<div class="col-12 kommerSnart">
			<h1>KOMMER SNART...</h1>
		</div>
	</div>

`
let commingSoonInspiHave = `
<!--INDLÆG KOMMER SNART-->
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HJEM</a></li>
			  <li><a href="#" id="inspiration">INSPIRATION</a></li>
			  <li><a href="#" id="altanHave">ALTAN OG HAVE</a></li>
			  <li class="sidsteCrumb">KOMMER SNART</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Indlæg "KOMMER SNART"-->
	<div class="row text-center text-i-row">
		<div class="col-12 kommerSnart">
			<h1>KOMMER SNART...</h1>
		</div>
	</div>

`
let commingSoonInspiIndret = `
<!--INDLÆG KOMMER SNART-->
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HJEM</a></li>
			  <li><a href="#" id="inspiration">INSPIRATION</a></li>
			  <li><a href="#" id="indretning">INDRETNING</a></li>
			  <li class="sidsteCrumb">KOMMER SNART</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Indlæg "KOMMER SNART"-->
	<div class="row text-center text-i-row">
		<div class="col-12 kommerSnart">
			<h1>KOMMER SNART...</h1>
		</div>
	</div>

`
let commingSoonInspiIndkob = `
<!--INDLÆG KOMMER SNART-->
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HJEM</a></li>
			  <li><a href="#" id="inspiration">INSPIRATION</a></li>
			  <li><a href="#" id="indkob">INDKØB</a></li>
			  <li class="sidsteCrumb">KOMMER SNART</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Indlæg "KOMMER SNART"-->
	<div class="row text-center text-i-row">
		<div class="col-12 kommerSnart">
			<h1>KOMMER SNART...</h1>
		</div>
	</div>

`
let commingSoonInspiOpskrift = `
<!--INDLÆG KOMMER SNART-->
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HJEM</a></li>
			  <li><a href="#" id="inspiration">INSPIRATION</a></li>
			  <li><a href="#" id="opskrift">OPSKRFTER</a></li>
			  <li class="sidsteCrumb">KOMMER SNART</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Indlæg "KOMMER SNART"-->
	<div class="row text-center text-i-row">
		<div class="col-12 kommerSnart">
			<h1>KOMMER SNART...</h1>
		</div>
	</div>

`
let commingSoonOko = `
<!--INDLÆG KOMMER SNART-->
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HJEM</a></li>
			  <li><a href="#" id="okonomi">ØKONOMI</a></li>
			  <li class="sidsteCrumb">KOMMER SNART</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Indlæg "KOMMER SNART"-->
	<div class="row text-center text-i-row">
		<div class="col-12 kommerSnart">
			<h1>KOMMER SNART...</h1>
		</div>
	</div>

`

									//FORSIDE-SIDEN
//Indlæg om roomie
let roomie = ``
//Indlæg om infografik
let infografik = ``

									//ØKONOMI

//Indlæg om styr på budget
let styrBudget = `
<!--INDLÆG FÅ ØKONOMISK OVERSKUD-->
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="okonomi">ØKONOMI</a></li>
      <li class="sidsteCrumb">HOLD STYR PÅ DIT BUGDET</li>
    </ul>
  </div>
</div>
<!--content--> 
<!--Indlæg FÅ ØKONOMISK OVERSKUD-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>HOLD STYR PÅ DIT BUGDET</h1>
  </div>
</div>
<div class="row text-center text-i-row">
  <div class="col-2"></div>
  <div class="col-8">
    <p>En kreativ måde at holde styr på din økonomi.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center altan">
  <div class="col-12"> <img class="img-fluid" src="images/faa_overskud_i_hverdagen.jpg" alt="Få overskud i hverdagen"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>1. Tegn firkanter, så de er lig med/repræsentere det antal dage, der er i måneden. </p>
    <p>2. Skriv månedens datoer ovenfor dine firkanter, så du kan se hvilke dage der bliver brugt penge. </p>
    <p>3. Tag et kig på dit budget og beslut dig for, hvor mange penge du har om måneden. (( Hvis du er i tvivl om, hvordan man lægger et budget kan du læse mere på her: (link). )) </p>
    <p>4. Få gang i farverne! Opskriv kategorier, som giver mening for dig og brug endeligt farver. Jeg har valgt at bruge farverne grøn, gul, orange og rød, men du kan vælge din helt egen farvepalette! </p>
    <p>Du kan nu få overblik af dine køb på en visuel måde. Budget kan give dig muligheden for at hele tiden vide, hvor meget du har tilbage til resterende af måneden og sammenligne dit forbrug med andre måneder. </p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>
`
//Indlæg om lægger budget
let ligBudget = ``

									//ALTAN OG HAVE

//Altan- og havesiden
let altanHave = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li class="sidsteCrumb">ALTAN OG HAVE</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row">
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/gronne_fingre.jpg" id="commingSoonInspiHave" class="card-img rounded-0" alt="Grønne fingre"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/altan.png" id="altanSat" class="card-img rounded-0" alt="Altansæt"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/hotel.jpg" id="insekt" class="card-img rounded-0" alt="Insekthotel"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/katus.jpg" id="commingSoonInspiHave" class="card-img rounded-0" alt="Kaktus"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/eggs_kant.jpg" id="skrald" class="card-img rounded-0" alt="Æggebakke med blomster"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/pimp_krukker.jpg" id="commingSoonInspiHave" class="card-img rounded-0" alt="Krukker"> </a> </div>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>
` 
//Indlæg om altansæt
let altanSat = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li><a href="#" id="altanHave">ALTAN OG HAVE</a></li>
      <li class="sidsteCrumb">FIND DIT ALTANSÆT</li>
    </ul>
  </div>
</div>
<!--content--> 
<!--Indlæg om altansæt-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>FIND DIT ALTANSÆT</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Ligemeget om du kun har en lille altan eller om du har en stor have, så har man altid brug for noget at sidde i når man er ude i det fri. Det er en ren luksus i sig selv at man har muligheden for at sidde ude, men hvis man ikke lige kan finde et altan/have sæt der passer til dig, har vi fundet nogle frem i forskellige størrelser</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Ligemeget om du kun har en lille altan eller om du har en stor have, så har man altid brug for noget at sidde i når man er ude i det fri. Det er en ren luksus i sig selv at man har muligheden for at sidde ude, men hvis man ikke lige kan finde et altan/have sæt der passer til dig, har vi fundet nogle frem i forskellige størrelser</p>
  </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET HYGGELIGE SÆT</h4>
    <div class="text-center altan">
      <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/hyggeligemobler.jpg" alt="Altansæt"> </div>
    </div>
    <p>Det her sæt er et cafesæt, og den slags kan fås i de fleste møbelforretninger som også har havemøbler bare i forskellige udgaver. Et godt tip er at købe det i en frisk farve, så man kan komme i endnu højere humør når man skal sidde ude og nyde solen. </p>
    <p>Find det<a href="https://www.beliani.dk/cafesaet-foldebord-med-2-stol-bla-fiori.html"> her</a></p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET HOLDBARE OG TRADITIONELLE SÆT</h4>
    <div class="text-center altan">
      <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/traemobler.jpg" alt="Altansæt"> </div>
    </div>
    <p>Nogen gange er det man kender altså bare bedst. De fleste kender nogle der har et havemøbelsæt i træ, da det er praktisk, pænt og komfortabelt. Dette sæt vi har fundet til jer, er med et bord som også kan fungere som bakke. Det kan være super praktisk når du skal have din mad eller andre ting med inde fra huset og ud på altanen.</p>
    <p>Find det<a href="https://www.beliani.dk/altanet-havemobelset-tre-2stole-1bord-toscana.html"> her</a></p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET MERE FANCY SÆT</h4>
    <div class="text-center altan">
      <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/fancymobler.jpg" alt="Altansæt"> </div>
    </div>
    <p>Sættet her er mere til dem der går op i kvalitet og udseende. Det er det helt rigtige sæt til dig der gerne vil have de fede instagram altan billeder. Udover at det ser godt ud, så kan vi næsten garanterer for at det også er komfortabelt.</p>
    <p>Find det<a href="https://www.beliani.dk/udendors-indendors-cafe-sat-altan-sat-bord-og-2-stole-hvid-acapulco.html"> her</a></p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om insekthotel
let insekt = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li><a href="#" id="altanHave">ALTAN OG HAVE</a></li>
      <li class="sidsteCrumb">INSEKTHOTEL</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>INSEKTHOTEL</h1>
    <p>Byg dit eget Insekthotel og giv de små venner en hjælpende hånd!</p>
  </div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Byg dit eget Insekthotel og giv de små venner en hjælpende hånd! </p>
  </div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/insekthus.jpg" alt="Insekthotel"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">INSTRUKTIONER</h4>
    <p>Insekter spiller en væsentlig rolle i vores økosystem og det er vigtigt at vi passer på dem.
      Hvad skal du bruge: En beholder, træstykker, pinde, brak,nedfaldende blad og grankogler. <br>
      Sådan bygger du nemt og hurtigt et insekthotel.</p>
    <p>1. Anskaf en beholder, som kan skabe rammer for hotellet. Dette kan eksempelvis være en dåse eller en gamle kasse, som du har liggende.</p>
    <p>2. Gå en tur i haven eller naturen og indsaml nedfaldne blade, træstykker, grankogler og pinde. Disse skal du bruge til at udfylde dit hotel. Pak det så tæt som muligt.</p>
    <p>3. Dit hotel er nu klar til gæster! Du skal blot placér hotellet et solrigt sted, som er i ly for vind og vejr. Et oplagt sted kunne eksempelvis være på din terrassen/altanen eller i enden af haven.</p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om fra skrald til køkkenhave
let skrald = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li><a href="#" id="altanHave">ALTAN OG HAVE</a></li>
      <li class="sidsteCrumb">FRA SKRALD TIL KØKKENHAVE</li>
    </ul>
  </div>
</div>
<!--content--> 
<!--Indlæg "skrald i køkkenhaven"-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>FRA SKRALD TIL KØKKENHAVE</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Forvandle dine æggeskaller til din helt egen køkkenhave!</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Forvandle dine æggeskaller til din helt egen køkkenhave!</p>
  </div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/eggsforside.jpg" alt="Æggebakke uden blomster"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Du skal bruge: en smule jord, æggeskaller, en æggebakke, plantefrø og en lille portion tålmodighed</p>
    <p>1. Prik et lille drænhul i bunden af din æggeskal</p>
    <p>2. Fyld æggeskallerne næsten op til toppen med fugtigt jord</p>
    <p>3. Brug derefter din finger til at lave et hul i jorden, det skal cirka være en 1 cm dybt</p>
    <p>4. Plant dine frø og dæk dem til med jord</p>
    <p>5. Placer æggebakken et solrigt og varmt sted</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Æggeskaller indeholder en masse calcium som planterne kan nyde godt af, og som kan give gode vækstbetingelser. Æggeskallerne vil skabe den perfekte grobund for din køkkenhave og når frøene er vokset kan du omplante dem i større krukker eller beholdere.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/potteplante.jpg" alt="Potte plante"> </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`

									//INDRETNINGSIDEN

//Indretningssiden
let indretning = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li class="sidsteCrumb">INDRETNING</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row">
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/1-room.png" id="etVarelse" class="card-img rounded-0" alt="Et værelses lejlighed"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/piftstue.jpg" id="piftStuen" class="card-img rounded-0" alt="Pift stuen"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/mereplads.jpg" id="commingSoonInspiIndret" class="card-img rounded-0" alt="Få mere plads"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/fem_fejl.png" id="commingSoonInspiIndret" class="card-img rounded-0" alt="Fem fejl i din indretning"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/badkort.jpg" id="makeoverBad" class="card-img rounded-0" alt="Makeover badeværelse"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/pynt.jpg" id="commingSoonInspiIndret" class="card-img rounded-0" alt="Pynt dit soverværelse"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/nogleskab2.jpg" id="commingSoonInspiIndret" class="card-img rounded-0" alt="Nøgleskab"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/sengeset.png" id="sengeSat" class="card-img rounded-0" alt="Sengesæt"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/skabsplads.jpg" id="commingSoonInspiIndret" class="card-img rounded-0" alt="Få god skabsplads"> </a> </div>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om pift stuen
let piftStuen = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li><a href="#" id="indretning">INDRETNING</a></li>
      <li class="sidsteCrumb">4 GODE IDÉER TIL AT PIFTE DIN STUE OP</li>
    </ul>
  </div>
</div>
<!--content--> 
<!--indlæg pift din stue-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>4 GODE IDÉER TIL AT PIFTE DIN STUE OP</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>At få en lækker stue kan ofte være en dyr fornøjelse. Her får du tips og tricks til, hvordan du billigt kan pifte din stue op til billige penge! </p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>At få en lækker stue kan ofte være en dyr fornøjelse. Her får du tips og tricks til, hvordan du billigt kan pifte din stue op til billige penge! </p>
  </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">1. MASSER AF GRØNNE PLANTER</h4>
    <p>Planter og blomster kan hjælpe din stue med at få nyt liv. Anskaf dig derfor grønne planter og blomster og placer dem i flotte krukker rundt omkring i din stue på gulvet og i vindueskarmen.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/plants.jpg" alt="Planter"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>2. PLAKATER PÅ DINE HVIDE VÆGGE</h4>
    <p>Hvide vægge giver ofte et kedeligt og upersonligt udtryk. Køb billige plakater og billeder på loppemarkeder og hæng dem op. Du kan finde en guide til hvordan du nemt hænger plakater op her (lav en button hvor en html side med en guide kommer frem når der trykkes)</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/poster.jpg" alt="Plakat"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>3. PUDER I SOFAEN</h4>
    <p>En sort sofa der passer til alle farver kan let piftes op med puder i alverdens farver. Find billige puder på loppemarkeder eller i IKEA. </p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/puder.jpg" alt="Puder"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>4. NIPS I BOGREOLEN</h4>
    <p>En bogreol er ofte kedelig at kigge på og giver meget lidt til indretningen. Stil dine nips ting foran dine bøger. Det skaber et legende udtryk samtidig med, at de lidt kedelige studiebøger bliver gemt væk når der kommer gæster. </p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/skabmedfigurer.png" alt="Reol med figurer"> </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg omm makeover af badeværelse
let makeoverBad = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li><a href="#" id="indretning">INDRETNING</a></li>
      <li class="sidsteCrumb">BADEVÆRELSESMAKEOVER</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>BADEVÆRELSESMAKEOVER</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Giv dit badeværelse en makeover! Lever du også med et badeværelse, som har nogle karakteristiske klinker og mangler et lille pift er dette den perfekte guid til dig! 
      Denne guide er nemlig til dig, som ikke har mange penge mellem hænder og gerne på en nem, hurtigt og billig måde gøre dit badeværelse til noget specielt. </p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Giv dit badeværelse en makeover! Lever du også med et badeværelse, som har nogle karakteristiske klinker og mangler et lille pift er dette den perfekte guid til dig! 
      Denne guide er nemlig til dig, som ikke har mange penge mellem hænder og gerne på en nem, hurtigt og billig måde gøre dit badeværelse til noget specielt. </p>
  </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">1. HÆNG SKABE OG HYLDER OP</h4>
    <p>Hvis du står og mangler skabsplads, kan investere i nogle nye skabe, ikke blot løse dit skabsplads problem, men også giv badeværelset et helt nyt look!  
      Med hylder kan du pimpe badeværelset op med dine bedste brugsgenstand og andre nips ting.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/hylde.jpg" alt="Hylde"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>2. BRUG DINE KLINKER</h4>
    <p>80ér klinker behøver ikke være dit badeværelses svaghed. Ram genbrugsbutikkerne og grav gamle møbler, vaser, spejle og små ting, fra samme periode frem! Vær badeværelses periode tro og få et stilmæssigt mere sammenhængende værelse.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/klinker.png" alt="Klinker"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>3. SKIFT DINE GREB OG ARMATUR</h4>
    <p>Det er utroligt, hvad de små detaljer kan gøre for dit badeværelse. Udskift dine greb og armatur og se dit badeværelse forvandle sig. Greb kan du både være heldig og finde hos din genbrug ellers kan du investerer, til næsten ingen penge, i nogle nye fra en boligbutik.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/badearmatur.jpg" alt="Armaturgreb"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>4. VÆR IKKE BANGE FOR AT MALE VÆGGEN</h4>
    <p>Få gang i farverne og vær ikke bange for at give den for meget! Stærke farver er et hit. Køb billig maling fra DBA og giv dit badeværelse en helt ny karakter.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/mal.jpg" alt="Malet væg"> </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om sengesæt
let sengeSat = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li><a href="#" id="indretning">INDRETNING</a></li>
      <li class="sidsteCrumb">LÆKRE SENGESÆT</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>SOV GODT MED LÆKRE SENGESÆT</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Et lækkert sengesæt kan gøre meget for dit soveværelse. Hvis du har hvide vægge og en rimelig almindelig seng, kan sengesættet være det der pifter dit værelse op. Der findes flere tusind forskellige varianter af sengesæt, derfor kan det være svært at finde det der passer lige præcis til dig. Om du er til god kvalitet, det farverige eller det ekstra lange har vi samlet 10 forskellige slags, så du bedre kan finde det der passer til dig</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Et lækkert sengesæt kan gøre meget for dit soveværelse. Hvis du har hvide vægge og en rimelig almindelig seng, kan sengesættet være det der pifter dit værelse op. Der findes flere tusind forskellige varianter af sengesæt, derfor kan det være svært at finde det der passer lige præcis til dig. Om du er til god kvalitet, det farverige eller det ekstra lange har vi samlet 10 forskellige slags, så du bedre kan finde det der passer til dig</p>
  </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET GLATTE</h4>
    <div class="text-center altan">
      <div class="col-12"> <a href="https://jysk.dk/sovevaerelse/sengesaet/glat/basic/sengesaet-nova-sgl-lilla" target="_blank"> <img src="images/indlagsbilleder/glatte.jpeg" alt="Glat sengebetræk"> </a> </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET MED TERN </h4>
    <div class="text-center altan">
      <div class="col-12"> <a href="https://jysk.dk/sovevaerelse/sengesaet/glat/plus/sengesaet-pamela-sgl" target="_blank"> <img src="images/indlagsbilleder/tern.jpeg" alt="Ternet sengebetræk"> </a> </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET MED TEKST</h4>
    <div class="text-center altan">
      <div class="col-12"> <a href="https://jysk.dk/sovevaerelse/sengesaet/glat/gold/sengesaet-dicte-sgl-kronborg" target="_blank"> <img src="images/indlagsbilleder/tekst.jpeg" alt="Sengesæt med tekst"> </a> </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET MED PRIKKER</h4>
    <div class="text-center altan">
      <div class="col-12"> <a href="https://jysk.dk/sovevaerelse/sengesaet/glat/plus/sengesaet-thea-sgl-koral" target="_blank"> <img src="images/indlagsbilleder/prikker.jpeg" alt="Sengesæt med prikker"> </a> </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET MED STRIBER</h4>
    <div class="text-center altan">
      <div class="col-12"> <a href="https://jysk.dk/sovevaerelse/sengesaet/glat/gold/sengesaet-anneline-sgl-bla-hoie" target="_blank"> <img src="images/indlagsbilleder/striber.jpeg" alt="Stribet sengesæt"> </a> </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET MED CIRKLER</h4>
    <div class="text-center altan">
      <div class="col-12"> <a href="https://jysk.dk/sovevaerelse/sengesaet/glat/plus/sengesaet-freydis-sgl" target="_blank"> <img src="images/indlagsbilleder/cirkler.jpeg" alt="Sengesæt med cirkler"> </a> </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET MED BLOMSTER</h4>
    <div class="text-center altan">
      <div class="col-12"> <a href="https://jysk.dk/sovevaerelse/sengesaet/krep/basic/sengesaet-alvina-krep-sgl" target="_blank"> <img src="images/indlagsbilleder/blomster.jpeg" alt="Sengesæt med blomster"> </a> </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET MED BØLGER</h4>
    <div class="text-center altan">
      <div class="col-12"> <a href="https://jysk.dk/sovevaerelse/sengesaet/krep/basic/sengesaet-sinja-krep-sgl" target="_blank"> <img src="images/indlagsbilleder/bolger.jpeg" alt="Sengesæt med bølger"> </a> </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET HVIDE OG DET DOBBELTE</h4>
    <div class="text-center altan">
      <div class="col-12"> <a href="https://jysk.dk/sovevaerelse/sengesaet/satin/gold/sengesaet-ingeborg-satin-dob-hvid-0" target="_blank"> <img src="images/indlagsbilleder/hvide.jpeg" alt="Det hvide sengesæt"> </a> </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET FINE MØNSTER</h4>
    <div class="text-center altan">
      <div class="col-12"> <a href="https://jysk.dk/sovevaerelse/sengesaet/glat/gold/sengesaet-paula-sgl" target="_blank"> <img src="images/indlagsbilleder/monster.jpeg" alt="Sengesæt med mønster"> </a> </div>
    </div>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om et-værelses
let etVarelse = ``

									//INDKØBSIDEN
//Indkøbssiden
let indkob = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li class="sidsteCrumb">INDKØB</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row">
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/ikea.png" id="ikea" class="card-img rounded-0" alt="IKEA"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/forste_indkobstur.jpg" id="fotex" class="card-img rounded-0" alt="Føtex"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/studierabat.png" id="commingSoonInspiIndkob" class="card-img rounded-0" alt="Indkøbsliste"> </a> </div>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om ikea
let ikea = ``
//Indlæg om føtex
let fotex = ``

									//OPSKRIFTSIDEN

//Opskriftsiden
let opskrift = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li class="sidsteCrumb">OPSKRIFTER</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row">
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/madbudget.png" id="budgetMad" class="card-img rounded-0" alt="Madbudget"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/vegetar.jpg" id="commingSoonInspiOpskrift" class="card-img rounded-0" alt="Vegetar"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/vegan.jpg" id="commingSoonInspiOpskrift" class="card-img rounded-0" alt="Veganer"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/kod.jpg" id="commingSoonInspiOpskrift" class="card-img rounded-0" alt="Kødspiseren"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/tom.jpg" id="commingSoonInspiOpskrift" class="card-img rounded-0" alt="Tøm køleskabet"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/ukrudt.jpg" id="commingSoonInspiOpskrift" class="card-img rounded-0" alt="Spis dit ukrudt"> </a> </div>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om budget madlavning
let budgetMad = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li> <a href="#" id="opskrift">OPSKRIFTER</a></li>
      <li class="sidsteCrumb">MADLAVNING PÅ BUDGET</li>
    </ul>
  </div>
</div>
<!--content--> 

<!--indlæg om "simpel madlavning"-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>MADLAVNING PÅ BUDGET</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Er du lige flyttet hjemmefra og har været vant til, at det var mor der stod for aftensmaden? Så bare rolig vi lære dig her hvordan du kan lave den simpleste og lækreste mad helt selv </p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Er du lige flyttet hjemmefra og har været vant til, at det var mor der stod for aftensmaden? Så bare rolig vi lære dig her hvordan du kan lave den simpleste og lækreste mad helt selv </p>
  </div>
</div>
<div class="row text-center">
  <div class="col-12 col-md-6 mad"> <img src="images/indlagsbilleder/ris2.png" alt="Ris"> </div>
  <div class="col-12 col-md-6 mad"> <img src="images/indlagsbilleder/kodsovs1.png" alt="Kødsovs"> </div>
</div>
<div class="row text-center">
  <div class="col-12 col-md-6 mad"> <img src="images/indlagsbilleder/nudler.png" alt="Nudler"> </div>
  <div class="col-12 col-md-6 mad"> <img src="images/indlagsbilleder/salat.png" alt="Salat"> </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
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
		commingSoonInspiHave: commingSoonInspiHave,
		commingSoonInspiIndret: commingSoonInspiIndret,
		commingSoonInspiIndkob: commingSoonInspiIndkob,
		commingSoonInspiOpskrift: commingSoonInspiOpskrift,
		commingSoonOko: commingSoonOko,
		commingSoonPrakRen: commingSoonPrakRen,
		commingSoonPrakGorSelv: commingSoonPrakGorSelv,
		
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
		commingSoonInspiHave: commingSoonInspiHave,
		commingSoonInspiIndret: commingSoonInspiIndret,
		commingSoonInspiIndkob: commingSoonInspiIndkob,
		commingSoonInspiOpskrift: commingSoonInspiOpskrift,
		commingSoonOko: commingSoonOko,
		commingSoonPrakRen: commingSoonPrakRen,
		commingSoonPrakGorSelv: commingSoonPrakGorSelv,
		
		
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
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

