// JavaScript Document

//Når siden loader registreres home som forside 
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
<div class="row text-center text-i-row text-intro">
  <div class="col-12">
    <h1>VELKOMMEN TIL FLYTTEKASSEN</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Her kan du lære om, hvordan du bedst muligt kan flytte hjemmefra. Du kan finde gode råd om alt fra indretning og økonomi til håndtering af roomie problemer. Denne hjemmeside samler alt, hvad der er værd at vide om at flytte hjemmefra, og forklarer det på en måde, så selv den mest uerfarende kan følge med.</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Her kan du lære om, hvordan du bedst muligt kan flytte hjemmefra. Du kan finde gode råd om alt fra indretning og økonomi til håndtering af roomie problemer. Denne hjemmeside samler alt, hvad der er værd at vide om at flytte hjemmefra, og forklarer det på en måde, så selv den mest uerfarende kan følge med.</p>
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

<div class="col-12 banner">
		<iframe src="//cdn.bannersnack.com/banners/bt3er8fi1/embed/index.html?userId=39096226&t=1558522136" width="100%" height="100%" scrolling="no" frameborder="0" allowtransparency="true" allow="autoplay" allowfullscreen="true"></iframe>
  	
  </div>
<div class="row text-center text-i-row text-intro">
  <div class="col-12">
    <h1>INSPIRATION</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>En side, som kan give dig nye ideer og inspiration til din altan og have, indretning, indkøb og opskrifter. Herunder kan du blandt andet lære om, hvordan du optimerer din indretning, og hvad der er smart at købe på din første indkøbstur</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>En side, som kan give dig nye ideer og inspiration til din altan og have, indretning, indkøb og opskrifter. Herunder kan du blandt andet lære om, hvordan du optimerer din indretning og hvad der er smart at købe på din første indkøbstur</p>
  </div>
</div>

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
let praktisk = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li class="sidsteCrumb">DET PRAKTISKE</li>
    </ul>
  </div>
</div>
<!--content--> 
<div class="row text-center text-i-row text-intro">
  <div class="col-12">
    <h1>DET PRAKTISKE</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Denne side samler alt det dine forældre plejede at hjælpe dig med. Fik du ikke lært at rense afløbet, da du boede hjemme? Intet problem. Under vores side rengøring kan du finde tips og tricks, så dit nye hjem kan blive spotless.</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Denne side samler alt det dine forældre plejede at hjælpe dig med. Fik du ikke lært at rense afløbet, da du boede hjemme? Intet problem. Under vores side rengøring kan du finde tips og tricks, så dit nye hjem kan blive spotless.</p>
  </div>
</div>

<div class="row">
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/rengoring1.png" id="rengoring" class="card-img rounded-0" alt="Rengøring"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/bestil_flyt.jpg" id="flyttemand" class="card-img rounded-0" alt="Flyttemand"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/gordetselv.jpg" id="gorDetSelv" class="card-img rounded-0" alt="Gør det selv"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/flytteliste.jpg" id="flyttehuskeliste" class="card-img rounded-0" alt="Flyttehuskeliste"> </a> </div>
  </div>
</div>
<div class="col-12 banner">
		<iframe src="//cdn.bannersnack.com/banners/builg3i97/embed/index.html?userId=39096226&t=1558522195" width="100%" height="100%" scrolling="no" frameborder="0" allowtransparency="true" allow="autoplay" allowfullscreen="true"></iframe>
  	
  </div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
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
<div class="row text-center text-i-row text-intro">
  <div class="col-12">
    <h1>ØKONOMI</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>På denne side kan du lære om alt det du har brug for at vide om økonomi, når du flytter hjemmefra. Du kan få tips og tricks til hvordan du kan holde styr på din økonomi, og hvad du skal sørge for at få i orden og gode råd.</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>På denne side kan du lære om alt det du har brug for at vide om økonomi, når du flytter hjemmefra. Du kan få tips og tricks til hvordan du kan holde styr på din økonomi, hvad du skal sørge for at få i orden og gode råd.</p>
  </div>
</div>

<div class="row">
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/hold_budget.jpg" id="styrBudget" class="card-img rounded-0" alt="Hold styr på dit budget"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/faellesoekonomi.jpg" id="commingSoonOko" class="card-img rounded-0" alt="Overbliv over fællesøkonomi"> </a> </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card bg-dark"> <a href=""> <img src="images/su.png" id="commingSoonOko" class="card-img rounded-0" alt="SU"></a> </div>
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
let roomie = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li class="sidsteCrumb">BLIV GODE ROOMIES</li>
    </ul>
  </div>
</div>
<!--content--> 
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>BLIV GODE ROOMIES!</h1>
  </div>
</div>
<div class="row text-center text-i-row">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Dette er guide til, hvordan du kan undgå diverse roomie problemer.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/roomie_2.png" alt="Roomie"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Vi vil give dig eksempler på god-roomie-pli, hvad er de udskrevne regler og hvordan du bedst kan undgå konflikter. </p>
    <h4>DE 3 UDSKREVNE-ROOMIE-REGLER</h4>
    <p>1. Respekter ALTID en lukket dør. Vi har alle brug for vores egen ro og plads</p>
    <p>2. Respekter din roomie og roomies ting. Spørg endelig, hvis du vil låne roomies trøje til byturen! Det er altid vejen til et godt roomieskab </p>
    <p>3. Fortæl din roomie om dine planer. Hvis du holder fest, stopper på studiet eller har du sagt op på arbejdet, er det altid godt at involvere roomie. </p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>SÅDAN UNDGÅR DU KONFLIKTER</h4>
    <p>1. Gem dig ikke bag telefonen, fortæl din roomie face to face, hvis du har et problem. Ofte skabes konflikter pga. misforståelser og dette kan ofte ske over besked</p>
    <p>2. Skab klare regler for rengøring af fælles områderne og hjælp hinanden med at overhold dem</p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om infografik
let infografik = `
<!--INDLÆG “Hvornår flytter VI hjemmefra?”-->
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li class="sidsteCrumb">HVORNÅR FLYTTER VI HJEMMEFRA</li>
    </ul>
  </div>
</div>
<!--content--> 
<!--Indlæg HVORNÅR FLYTTER VI HJEMMEFRA-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>HVORNÅR FLYTTER VI HJEMMEFRA?</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Hvornår flyver vi danskere endeligt fra reden? Vi har sammensat nogle grafiker, som kan give dig svaret på det! Her kan du sammenligne dig selv med statistikken og få svar på om du er en early bird eller en late bloomer.</p>
  </div>
  <div class="col-2"></div>
</div>
<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Hvornår flyver vi danskere egentlig fra reden? Vi har sammensat nogle grafiker, som kan give dig svaret på det! Her kan du sammenligne dig selv med statistikken og få svar på om du er en early bird eller en late bloomer.</p>
  </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>TAL FRA 2017</h4>
  </div>
</div>
<div class="row text-center altan">
  <div class="col-12"> <img class="img-fluid" src="images/statestik.png" alt="Statistik"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Statistikken viser, hvornår danske unge i alderen 15-25 år flyttede hjemmefra i 2017 og sammenligner derudover mænd og kvinder. Statistikken tager dog ikke højde for dem, som flytter hjem til mor og far igen. </p>
  </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>REGIONERNE</h4>
  </div>
</div>
<div class="row text-center altan">
  <div class="col-12"> <img class="img-fluid" src="images/statestik_dk.png" alt="Statistik Danmark"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Cirkeldiagrammerne fortæller om, hvilken forskel der er i regioner, samt hvordan tallene var tilbage i 2010. Som du kan se, har tallene ikke ændret sig meget. </p>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`

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
      <li class="sidsteCrumb">HOLD STYR PÅ DIT BUDGET</li>
    </ul>
  </div>
</div>
<!--content--> 
<!--Indlæg FÅ ØKONOMISK OVERSKUD-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>HOLD STYR PÅ DIT BUDGET</h1>
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
    <p>3. Tag et kig på dit budget og beslut dig for, hvor mange penge du har om måneden</p>
    <p>4. Få gang i farverne! Opskriv kategorier, som giver mening for dig og brug endeligt farver. Jeg har valgt at bruge farverne grøn, gul, orange og rød, men du kan vælge din helt egen farvepalette! </p>
    <p>Du kan nu få overblik over dine køb på en visuel måde. Budgettet kan give dig muligheden for hele tiden at vide, hvor meget du har tilbage til resten af måneden og sammenligne dit forbrug med andre måneder. </p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>
`
//Indlæg om lægger budget
let ligBudget = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="okonomi">ØKONOMI</a></li>
      <li class="sidsteCrumb">SÅDAN LÆGGER DU ET BUDGET</li>
    </ul>
  </div>
</div>
<!--content--> 
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>SÅDAN LÆGGER DU ET BUDGET</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Når man flytte hjemmefra kan der hurtigt komme uforudsete udgifter. Følg med her og lær at lægge et budget, så du er klar til de uforudsete udgifter</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Når man flytte hjemmefra kan der hurtigt komme uforudsete udgifter. Følg med her og lær at lægge et budget, så du er klar til de uforudsete udgifter</p>
  </div>
</div>

<div class="row text-center altan">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/budget-lig.jpg" alt="Lig budget"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>1. sæt dig ned en dag hvor du har god tid og find ud af, hvad du ca. tjener om måneden, hvad du får i SU, hvad du betaler til din forsikringer, transport, mad, netflix og andet. Skriv det ind i excel for at få bedre styr på det</p>
    <p>2. Har du en roomie kan I med fordel gøre det sammen, det er lettere, hvis man får hjælp</p>
    <p>3. Dine udgifter skal helst ikke være større end din indtjening. Sørg for at skære ned på luksusting som netflix, hvis dit forbrug er for højt</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Du kan med fordel downloade dette <a href="images/indlagsbilleder/budget-lig.jpg" target="_blank  ">budget skema</a> for at få hjælp til planlægningen. </p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>
`

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
    <p>Ligemeget om du kun har en lille altan eller om du har en stor have, så har man altid brug for noget at sidde i, når man er ude i det fri. Det er en ren luksus i sig selv at man har muligheden for at sidde ude, men hvis man ikke lige kan finde et altan/have sæt der passer til dig, har vi fundet nogle frem i forskellige størrelser</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Ligemeget om du kun har en lille altan eller om du har en stor have, så har man altid brug for noget at sidde i, når man er ude i det fri. Det er en ren luksus i sig selv at man har muligheden for at sidde ude, men hvis man ikke lige kan finde et altan/have sæt der passer til dig, har vi fundet nogle frem i forskellige størrelser</p>
  </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET HYGGELIGE SÆT</h4>
    <div class="text-center altan">
      <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/hyggeligemobler.jpg" alt="Altansæt"> </div>
    </div>
    <p>Det her sæt er et cafésæt, og den slags kan fås i de fleste møbelforretninger som også har cafésæt bare i forskellige udgaver. Et godt tip er at købe det i en frisk farve, så man kan komme i endnu højere humør når man skal sidde ude og nyde solen. </p>
    <p>Find det<a href="https://www.beliani.dk/cafesaet-foldebord-med-2-stol-bla-fiori.html" target="_blank"> her</a></p>
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
    <p>Find det<a href="https://www.beliani.dk/altanet-havemobelset-tre-2stole-1bord-toscana.html" target="_blank"> her</a></p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">DET MERE FANCY SÆT</h4>
    <div class="text-center altan">
      <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/fancymobler.jpg " alt="Altansæt"> </div>
    </div>
    <p>Sættet her er mere til dem der går op i kvalitet og udseende. Det er det helt rigtige sæt til dig der gerne vil have de fede instagram altan billeder. Udover at det ser godt ud, så kan vi næsten garanterer for at det også er komfortabelt.</p>
    <p>Find det<a href="https://www.beliani.dk/udendors-indendors-cafe-sat-altan-sat-bord-og-2-stole-hvid-acapulco.html" target="_blank"> her</a></p>
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
  </div>
</div>
<div class="row text-center text-i-row">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Byg dit eget Insekthotel og giv de små venner en hjælpende hånd!</p>
  </div>
  <div class="col-2"></div>
</div>

<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/insekthus.jpg" alt="Insekthotel"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">INSTRUKTIONER</h4>
    <p>Insekter spiller en væsentlig rolle i vores økosystem, og det er vigtigt at vi passer på dem.
      Sådan bygger du nemt og hurtigt et insekthotel.<br>Hvad skal du bruge: En beholder, træstykker, pinde, bark, nedfaldende blade og grankogler.</p>
    <p>1. Anskaf en beholder, som kan skabe ramme for dit hotel. Dette kan eksempelvis være en dåse eller en gamle kasse, som du har liggende.</p>
    <p>2. Gå en tur i haven eller naturen og indsaml nedfaldne blade, træstykker, grankogler og pinde. Disse skal du bruge til at udfylde dit hotel. Pak det så tæt som muligt.</p>
    <p>3. Dit hotel er nu klar til gæster! Du skal blot placere hotellet et solrigt sted, som er i ly for vind og vejr. Et oplagt sted kunne eksempelvis være på din terrassen/altanen eller i enden af haven.</p>
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
<div class="row text-center text-i-row">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Forvandle dine æggeskaller til din helt egen køkkenhave!</p>
  </div>
  <div class="col-2"></div>
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
    <p>Æggeskaller indeholder en masse calcium som planterne kan nyde godt af, og som kan give gode vækstbetingelser. Æggeskallerne vil skabe den perfekte grobund for din køkkenhave og når frøene er vokset, kan du omplante dem i større krukker eller beholdere.</p>
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
      <li class="sidsteCrumb">PIFT STUEN OP</li>
    </ul>
  </div>
</div>
<!--content--> 
<!--indlæg pift din stue-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>PIFT STUEN OP</h1>
  </div>
</div>
<div class="row text-center text-i-row">
  <div class="col-2"></div>
  <div class="col-8">
    <p>At få en lækker stue kan ofte være en dyr fornøjelse. Her får du tips og tricks til, hvordan du billigt kan pifte din stue op til billige penge! </p>
  </div>
  <div class="col-2"></div>
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
    <p>Hvide vægge giver ofte et kedeligt og upersonligt udtryk. Køb billige plakater og billeder på loppemarkeder og hæng dem op. </p>
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
<div class="row text-center text-i-row badMakeover">
  <div class="col-12">
    <h1>BADEVÆRELSESMAKEOVER</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Giv dit badeværelse en makeover! Lever du også med et badeværelse, som har nogle karakteristiske klinker og mangler et lille pift er dette den perfekte guide til dig! 
      Denne guide er nemlig til dig, som ikke har mange penge mellem hænderne og gerne på en nem, hurtigt og billig måde gøre dit badeværelse til noget specielt. </p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Giv dit badeværelse en makeover! Lever du også med et badeværelse, som har nogle karakteristiske klinker og mangler et lille pift er dette den perfekte guide til dig! 
      Denne guide er nemlig til dig, som ikke har mange penge mellem hænderne og gerne på en nem, hurtigt og billig måde gøre dit badeværelse til noget specielt. </p>
  </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">1. HÆNG SKABE OG HYLDER OP</h4>
    <p>Hvis du står og mangler skabsplads, kan du investere i nogle nye skabe, ikke blot løse dit skabsplads problem, men også giv badeværelset et helt nyt look!  
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
    <p>80ér klinker behøver ikke være dit badeværelses svaghed. Ram genbrugsbutikkerne og grav gamle møbler, vaser, spejle og små ting fra samme periode frem! Vær badeværelsesstilen tro og få et stilmæssigt og mere sammenhængende badeværelse.</p>
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
    <h1>LÆKRE SENGESÆT</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Et lækkert sengesæt kan gøre meget for dit soveværelse. Hvis du har hvide vægge og en rimelig almindelig seng, kan sengesættet være det der pifter dit værelse op. Der findes flere tusind forskellige varianter af sengesæt, derfor kan det være svært at finde det der passer lige præcis til dig. Om du er mest til god kvalitet, det farverige eller det ekstra lange har vi samlet 10 forskellige slags, så du bedre kan finde det der passer til dig. Du kan klikke på billederne for at købe sættene.</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Et lækkert sengesæt kan gøre meget for dit soveværelse. Hvis du har hvide vægge og en rimelig almindelig seng, kan sengesættet være det der pifter dit værelse op. Der findes flere tusind forskellige varianter af sengesæt, derfor kan det være svært at finde det der passer lige præcis til dig. Om du er til god kvalitet, det farverige eller det ekstra lange har vi samlet 10 forskellige slags, så du bedre kan finde det der passer til dig. Du kan klikke på billederne for at købe sættene.</p>
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
let etVarelse = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HJEM</a></li>
			  <li><a href="#" id="inspiration">INSPIRATION</a></li>
			  <li><a href="#" id="indretning">INDRETNING</a></li>
			  <li class="sidsteCrumb">INDRET DIN 1-VÆRELSES LEJLIGHED</li>
			</ul>
	</div>
</div>

<!--content-->
<!--Indlæg HVORNÅR FLYTTER VI HJEMMEFRA-->
	<div class="row text-center text-i-row">
		<div class="col-12">
			<h1>INDRET DIN 1-VÆRELSES LEJLIGHED</h1>
		</div>
	</div>
	<div class="row text-center text-i-row pLarge">
		<div class="col-2"></div>
		<div class="col-8">
			<p>Hvis du heller ikke har så meget plads i din lejlighed, skal du se med her. Vi har fundet tips og tricks til, hvordan du kan indrette din lille lejlighed, men hvor der stadig er plads til det hele og hvad man har brug for.</p>
		</div>
		<div class="col-2"></div>
	</div>
<!--på lille ser den sådan her ud-->
	<div class="row text-center text-i-row pSmall">
		<div class="col-12">
			<p>Hvis du heller ikke har så meget plads i din lejlighed, skal du se med her. Vi har fundet tips og tricks til, hvordan du kan indrette din lille lejlighed, men hvor der stadig er plads til det hele og hvad man har brug for.</p>
		</div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4>1. tip:</h4>
		</div>
	</div>
	
	<div class="row text-center planter">
		<div class="col-12">
			<img class="img-fluid" src="images/indlagsbilleder/rullebord.jpg" alt="Rullebord">
		</div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<p>Det er sjældent man har meget køkkenplads, hvis du bor på få kvadratmeter. Det kan dog skaffes med et rullebord, som nemt kan skaffes i ikea. Her kan du have opbevaringsplads og samtidig får du et ekstra køkkenbord. </p>
		</div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4>2. tip:</h4>
		</div>
	</div>
	
	<div class="row text-center planter">
		<div class="col-12">
			<img class="img-fluid" src="images/indlagsbilleder/hyggekrog.jpg" alt="Hyggekrog">
		</div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<p>Sofaplads er der heller ikke meget af på meget lidt plads. Men hvis man stadig prioriterer at have et lille hyggehjørne udover sengen, kan det nemt løses. Køb en dejlig stor sækkepude, lav vindueskarmen om til en hjemmelavet sofa eller find en behagelig lænestol, du kan ligge og flyde i. Frem med den indre kreativitet!  </p>
		</div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4>3. tip:</h4>
		</div>
	</div>
	
	<div class="row text-center planter">
		<div class="col-12">
			<img class="img-fluid" src="images/indlagsbilleder/lillebord.jpg" alt="Lille spisebord">
		</div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<p>Hvis du bor alene eller med din kæreste på lidt plads, kan du spare lidt plads på spisebordet. Medmindre du tit får gæster over, kan et lille spisebord være rigeligt i hverdagen. Et lille bord, 2 stole og 2 klapstole i kælderen er alt, hvad du behøver.</p>
		</div>
	</div>

`

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
	<div class="col-12 col-md-4">
    	<div class="card bg-dark"> <a href=""> <img src="images/tilbudsaviser.jpg" id="commingSoonInspiIndkob" class="card-img rounded-0" alt="Indkøbsliste"> </a> </div>
  </div>
	<div class="col-12 col-md-4">
    	<div class="card bg-dark"> <a href=""> <img src="images/loppemarked.jpg" id="commingSoonInspiIndkob" class="card-img rounded-0" alt="Indkøbsliste"> </a> </div>
  </div>
	<div class="col-12 col-md-4">
    	<div class="card bg-dark"> <a href=""> <img src="images/gratis-facebook.jpg" id="commingSoonInspiIndkob" class="card-img rounded-0" alt="Indkøbsliste"> </a> </div>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om ikea
let ikea = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li><a href="#" id="indkob">INDKØB</a></li>
      <li class="sidsteCrumb">EN TUR I IKEA</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>EN TUR I IKEA</h1>
  </div>
</div>
<div class="row text-center text-i-row">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Kom med Maja på shoppingtur og få gode råd om, hvilke ting du skal bruge i din nye bolig!</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Vi har også, i samarbejde med Maja, lavet en indkøbsliste til, hvad vi mener du har brug for når du skal til at flytte hjemmefra, den kan du finde <a href="docs/shoppinglist.pdf" target="_blank">her</a>. Du kan også lave din helt egen liste på IKEA's hjemmeside.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
	<div class="col-12 video">
  		<iframe src="https://www.youtube.com/embed/iKG0m0fH7xQ" allowfullscreen></iframe>
	</div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om føtex
let fotex = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="inspiration">INSPIRATION</a></li>
      <li><a href="#" id="indkob">INDKØB</a></li>
      <li class="sidsteCrumb">DIN FØRSTE INDKØBSTUR</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>DIN FØRSTE INDKØBSTUR</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Hvad har man egentlig brug for på sin første indkøbstur i supermarkedet? Vi har lavet en indkøbsliste til dig, der ikke er helt sikker på, hvad man egentlig skal sørge for selv, når man er flyttet hjemmefra. Du kan downloade indkøbslisten ned, printe den ud og tilføje ting til den selv</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row text-center planter">
  <div class="col-12"><img class="img-fluid" src="images/indlagsbilleder/indkob1.png" alt="Indkøbsliste"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Du kan downloade indkøbslisten <a href="docs/indkobsliste.pdf" target="_blank">her</a>.<br>Se også med i vores video, hvor vi er på vores første indkøbstur og giver gode råd med på vejen</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
	<div class="col-12 video">
  		<iframe src="https://www.youtube.com/embed/jnu584Qm7yo" allowfullscreen></iframe>
	</div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`

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
let rengoring = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="praktisk">DET PRAKTISKE</a></li>
      <li class="sidsteCrumb">RENGØRING</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row">
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/opvask.png" id="commingSoonPrakRen" class="card-img rounded-0" alt="opvaskebillede"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/plet.png" id="plet" class="card-img rounded-0" alt="Få den plet væk"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/indstillinger.png" id="commingSoonPrakRen" class="card-img rounded-0" alt="Tørretumbler"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/rensbad.jpg" id="badeforhang" class="card-img rounded-0" alt="Badeforhæng"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/tojvask.jpg" id="commingSoonPrakRen" class="card-img rounded-0" alt="Tøjvask"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/handklaeder_1.png" id="commingSoonPrakRen" class="card-img rounded-0" alt="Håndklæder"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/five.png" id="femRen" class="card-img rounded-0" alt="5 gode rengøringsråd"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/gulvvask.png" id="commingSoonPrakRen" class="card-img rounded-0" alt="Gulvvask"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/aflob.png" id="commingSoonPrakRen" class="card-img rounded-0" alt="Rens dit afløb"> </a> </div>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om få den plet væk
let plet = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="praktisk">DET PRAKTISKE</a></li>
      <li><a href="#" id="rengoring">RENGØRING</a></li>
      <li class="sidsteCrumb">FÅ DEN PLET VÆK</li>
    </ul>
  </div>
</div>
<!--content--> 
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>FÅ DEN PLET VÆK</h1>
  </div>
</div>
<div class="row text-center text-i-row">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Her får du det bedste trick til at fjerne alle slags pletter på tøjet!</p>
  </div>
  <div class="col-2"></div>
</div>

<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/real_plet.jpg" alt="Plettet trøje"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Du skal bruge: en plastiskpose og noget opvaskemiddel. Andet behøver du faktisk ikke!</p>
    <p>1. Tag dit tøj ned i plastiskposen</p>
    <p>2. Hæld en god mængde opvaskemiddel på pletten</p>
    <p>3. Fold dit tøj sammen, så pletten og opvaskemidlet er pakket godt ind</p>
    <p>4. Luk posen og vent 24 timer</p>
    <p>5. Vask dit tøj i vaskemaskinen</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Tricket virker hver gang, det har endnu ikke slået fejl! Du kan fjerne både motorolie, solcreme, syltetøj og mange andre ting på denne måde</p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>
`
//Indlæg om badeforhæng
let badeforhang = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="praktisk">DET PRAKTISKE</a></li>
      <li><a href="#" id="rengoring">RENGØRING</a></li>
      <li class="sidsteCrumb">RENS DIT BADEFORHÆNG</li>
    </ul>
  </div>
</div>
<!--content--> 
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>RENS DIT BADEFORHÆNG</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Der er flere bakterier end man lige går og aner i et badeforhæng. Da badeforhæng ofte er billige, kan man let fristes til at købe et nyt i stedet for at vaske det gamle. Men brug disse 3 råd, og du vil aldrig få lyst til at købe et nyt</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Der er flere bakterier end man lige går og aner i et badeforhæng. Da badeforhæng ofte er billige, kan man let fristes til at købe et nyt i stedet for at vaske det gamle. Men brug disse 3 råd, og du vil aldrig få lyst til at købe et nyt</p>
  </div>
</div>

<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/badeforhang.jpg" alt="Badeforhæng"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>1. Hvis du ofte vasker dit badeforhæg kan det blot vaskes ved 40 grader. Det er vigtigt at du derefter hænger forhænget op bagefter, da det kommer til at lugte grimt, hvis ikke det bliver tørt</p>
    <p>2. Hvis dit badeforhæng har gule mærker efter kalk, kan du med fordel lægge det i blød i en balje med 1dl rodalon og 1 liter vand. Rodalon fjerne bakterier og afbleger samtidig. Husk; pas på dit tøj</p>
    <p>3. Skurecreme er den sidste og mest fantastiske løsning på et beskidt forhæng. Smør skurecreme på dit badeforhæng og brug en svamp til at skrubbe pletter og snavs væk. Vupti, et helt rent badeforhæng!</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Husk at du hjælper miljøet, hvis du lade være med at købe nye forhæng når dit gamle er beskidt!</p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>
`
//Indlæg om 5 tricks til rengøring
let femRen = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="praktisk">DET PRAKTISKE</a></li>
      <li><a href="#" id="rengoring">RENGØRING</a></li>
      <li class="sidsteCrumb">5 TRICKS TIL RENGØRING</li>
    </ul>
  </div>
</div>
<!--content--> 
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>5 TRICKS TIL RENGØRING</h1>
  </div>
</div>
<div class="row text-center text-i-row">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Rengøring er desværre noget man bliver nødt til, selvom det er surt arbejde. Her kommer nogle gode fif til en nemmere rengøring! </p>
  </div>
  <div class="col-2"></div>
</div>

<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/cleaning.jpg" alt="Rengøringsbillede"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4 class="startH4">1. HUSK AT SKIFT TOILETBØRSTEN REGELMÆSSIGT</h4>
    <p>På toiletbørsten finder du alverdens bakterier. Skift din toiletbørste 1 gang om måneden så du undgår smitte.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>2. AFKALK DIN VASKEMASKINE</h4>
    <p>Put citronsyre i din vaskemaskine med jævne mellemrum. Du kan spare op til 20% af dit samlet energiforbrug på vaskemaskinen ved at holde den afkalket</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>3. LUK TOILETBRÆFTTET NÅR DU SKYLDER UD</h4>
    <p>Når toilettet skyller ud, spredes der massevis af bakterier. Når du skyller ud er det en god idé at lukke brættet så bakterierne bliver nede i toilettet</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>4. AFKALK DIT BRUSEHOVED</h4>
    <p>Hvis du putter ⅓ bagepulver og 1dl eddike i en pose og hænger den over dit brusehovedet opløser du naturligt kalken på dit brusehovede. Lad posen hænge i 10 minutter og skyld brusehovedet med vand inden du næstegang går i bad. </p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <h4>5. RENGØR DIN OVN</h4>
    <p>Smør et tykt lag brun sæbe på emalje-overfladerne og sæt ovnen på 100 grader. Sluk din ovn så snart sæben begynder og boble og lad sæben virke i 20 minutter. Rens ovnen med en klud efter den er kølet ned.</p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`

//Gør det selv siden
let gorDetSelv = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="praktisk">DET PRAKTISKE</a></li>
      <li class="sidsteCrumb">GØR DET SELV</li>
    </ul>
  </div>
</div>
<!--content-->
<div class="row">
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/lampedone.png" id="commingSoonPrakGorSelv" class="card-img rounded-0" alt="En lampe"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/tvbox_1.png" id="commingSoonPrakGorSelv" class="card-img rounded-0" alt="En tv-boks"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/tools.jpg" id="commingSoonPrakGorSelv" class="card-img rounded-0" alt="Værktøj"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/handbog.png" id="commingSoonPrakGorSelv" class="card-img rounded-0" alt="Håndbog"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/internet.jpg" id="commingSoonPrakGorSelv" class="card-img rounded-0" alt="Internet"> </a> </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="card bg-dark"> <a href=""> <img src="images/hylde.jpg" id="commingSoonPrakGorSelv" class="card-img rounded-0" alt="Hylde"> </a> </div>
  </div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`


//Indlæg om flyttemand
let flyttemand = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="praktisk">DET PRAKTISKE</a></li>
      <li class="sidsteCrumb">RÅD TIL BESTILLING AF FLYTTEMAND</li>
    </ul>
  </div>
</div>
<!--content--> 
<!--Indlæg "skrald i køkkenhaven"-->
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>RÅD TIL BESTILLING AF FLYTTEMAND!</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Dette er en guide, som sikre dig mod uønskede problemer med både bestillingen af flyttemænd eller på selve din flyttedag. Om flytningen ordnes af et flyttefirma, venner eller dine forældre er denne guide altid hensigtsmæssig at have i baghovedet!</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Dette er en guide, som sikre dig mod uønskede problemer med både bestillingen af flyttemænd eller på selve din flyttedag. Om flytningen ordnes af et flyttefirma, venner eller dine forældre er denne guide altid hensigtsmæssig at have i baghovedet!</p>
  </div>
</div>
<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/flyttemand.jpg" alt="Flyttekasserstabel"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>1. Lav en liste over alle dine møbler/genstande, som du skal have flyttet. 
      Notér eventuelt om du har genstande flyttemanden skal være ekstra varsom med.
      Listen vil give dig et bedre overblik, når du taler med din flyttemand i telefonen. </p>
    <p>2. Fortæl din flyttemand om du har brug for hjælp med at afmonterer vaskemaskinen eller lamper. Hvis du har problemer med at gøre andre ting selv, som eksempelvis flytterengøring eller at tage dine gardiner ned, kan du altid spørger din flyttemand</p>
    <p>3. Fortæl din flyttemand, hvor du bor og hvilke muligheder de har for parkering, om du skal flytte fra 4. sal eller fra dine forældres 1-plans parcelhus. Fortæl også flyttemanden, hvor du skal flytte hen </p>
    <p>4. Det er altid en god ide at spørge flyttemanden ind til forsikring i tilfælde af, at der
      skulle ske noget. Flyttemanden sørger naturligvis for at passe på dine ting, men for
      en sikkerheds skyld </p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>

`
//Indlæg om flyttehuskeliste
let flyttehuskeliste = `
<!--BREADCRUMBSTIEN-->

<div class="row">
  <div class="col-12 tilbageKnap">
    <ul class="breadcrumb">
      <li><a href="#" id="home">HJEM</a></li>
      <li><a href="#" id="praktisk">DET PRAKTISKE</a></li>
      <li class="sidsteCrumb">FLYTTEHUSKELISTEN</li>
    </ul>
  </div>
</div>
<!--content--> 
<div class="row text-center text-i-row">
  <div class="col-12">
    <h1>FLYTTEHUSKELISTEN</h1>
  </div>
</div>
<div class="row text-center text-i-row pLarge">
  <div class="col-2"></div>
  <div class="col-8">
    <p>Er du også i tvivl om, hvad du skal have med til din første flytning? Vi har samlet en hel liste, over de ting vi mener man har brug for til sin første flytning</p>
  </div>
  <div class="col-2"></div>
</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
  <div class="col-12">
    <p>Er du også i tvivl om, hvad du skal have med til din første flytning? Vi har samlet en hel liste, over de ting vi mener man har brug for til sin første flytning</p>
  </div>
</div>

<div class="row text-center planter">
  <div class="col-12"> <img class="img-fluid" src="images/indlagsbilleder/huskelisten.jpg" alt="Huskeliste til flytning"> </div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Listen er til dig der har brug for at få et overblik over, hvad du mangler at få skaffet. Den opdeler nemlig efter rum og behov, som personlig pleje, og vil give dig chancen for at nå i mål. Du kan printe listen ud og hænge den op, og hvis du mener der mangler et punkt eller to kan du tilføje det, så listen kommer til at passe helt præcist til dig.</p>
  </div>
  <div class="col-2"></div>
</div>
<div class="row">
  <div class="col-2"></div>
  <div class="col-12 col-md-8">
    <p>Du kan med fordel downloade listen <a href="images/indlagsbilleder/huskelisten.jpg" target="_blank">her</a> for at få hjælp til planlægningen. </p>
  </div>
  <div class="col-2"></div>
</div>
<button onclick="topFunction()" id="myBtn" title="Go to top">&#8593;</button>
`


//Når eventlistneren registrere et klik inde i div'en "navPage" kaldes funktionen. Dette er vores navigation
document.getElementById('navPage').addEventListener('click', function (e){
	
	let pages = {
        inspiration: inspiration,
        home: home,
		praktisk: praktisk,
		okonomi: okonomi,
	
    }
	
	if (e.target.id) {
//Hvis Eventlistneren registrerer et id ved klikket, udskiftes "page" med den string som er tilknyttet id'et
//Siden kan kun udskiftes hvis id'et findes i objektet "pages"
        let id = e.target.id
		
        if(pages[id] != undefined){
//Her gør vi så billedet ikke loader siden ved klik
        e.preventDefault()
			
// Scroll to top når der klikkes på et id
//https://stackoverflow.com/questions/4210798/how-to-scroll-to-top-of-page-with-javascript-jquery
        document.getElementById('page').innerHTML = pages[id],window.scrollTo(0, 0);
    }
    }
	
})
document.getElementById('page').addEventListener('click', function (e) {
	
//Når eventlistneren registrerer et klik i div'en "page" kaldes funktionen. Dette er vores content
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
		
		
	//Indlægsobjekter
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
	
//Her tjekkes om det er et id der er trykket på
    if (e.target.id) {
		
//Hvis Eventlistneren registrerer et id ved klikket, udskiftes "page" med den string som er tilknyttet id'et
//Siden kan kun udskiftes hvis id'et findes i objektet "pages"
        let id = e.target.id
		
        if(pages[id] != undefined){
//Her gør vi så billedet ikke loader siden ved klik
        e.preventDefault()
// Scroll to top når der klikkes på et id
//https://stackoverflow.com/questions/4210798/how-to-scroll-to-top-of-page-with-javascript-jquery
        document.getElementById('page').innerHTML = pages[id], window.scrollTo(0, 0);
    }
    }
})

//Dette er vores scroll-to-top knap med inspiration fra: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//Når man scroller 20px ned fra toppen, vises knappen
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

//Nå knappen klikkes på, scrolles der til toppen automatisk

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

