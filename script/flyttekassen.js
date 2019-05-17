// JavaScript Document

//Når siden loader bliver siden sat til hjemme siden
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('page').innerHTML = home
});

//Front page
let home = `
<!--Forside-->
<!--Slideshow-->
	<div class="row">
		<div class="col-12">
			<div class="bd-example">
				<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="images/slideshow/ikea-tur.jpg" class="d-block w-100" alt="...">
							<div class="carousel-caption d-none d-md-block">
								<h3>Din første IKEA-tur!</h3>
								<p>Har du svært ved at finde ud af, hvad du skal købe i IKEA, så følg med!</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="images/genbrugsmoebler_flytte_hjemmefra_liste.jpg" class="d-block w-100" alt="...">
							<div class="carousel-caption d-none d-md-block">
								<h3>5 gode rengøringsråd!</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="images/74031539bea8572d7decf6e52bebddd92601d50e.jpg" class="d-block w-100" alt="...">
							<div class="carousel-caption d-none d-md-block">
								<h3>5 gode rengøringsråd!</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</div>
						</div>
					</div>
					<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	</div>	
<!--Content start-->
	<div class="row align-content-center">
		<div class="card-columns">
			<div class="card"> 
				<a href="#">
					<img class="card-img-top rounded-0" src="images/altanoghave/insekt_part2.jpg" alt="Card image cap">
				</a>
			</div>
			<div class="card"> 
				<a href="#">
					<img class="card-img-top rounded-0" src="images/altanoghave/eggs.jpg" alt="Card image cap">
				</a>
			</div>
			<div class="card"> 
				<a href="#">
					<img class="card-img-top rounded-0" src="images/koekken/nudler.png" alt="Card image cap">
				</a>
			</div>
			<div class="card"> 
				<a href="#">
					<img class="card-img-top rounded-0" src="images/goderaad/handbog.png" alt="Card image cap">
				</a>
			</div>
			<div class="card text-center"> 
				<a href="#">
					<img class="card-img rounded-0" src="images/badevaerelse/makeover_front.png" alt="Card image">
				</a> 
			</div>
			<div class="card"> 
				<a href="#">
					<img class="card-img-top rounded-0" src="images/goderaad/roomie.jpg" alt="Card image cap">
				</a>
			</div>
			<div class="card"> 
				<a href="#">
					<img class="card-img-top rounded-0" src="images/oekonomi/licens.png" alt="Card image cap">
				</a>
			</div>
			<div class="card"> 
				<a href="#">
					<img class="card-img-top rounded-0" src="images/sovevaerelse/seng.jpg" alt="Card image cap">
				</a>
			</div>
		</div>
  	</div>
`
// Boligsiden
let bolig = `
<!--Boligside-->
	<div class="row">
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/sovevaerelse.jpg" id="sovevaerelse" class="card-img rounded-0" alt="soveværelse">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/stue.jpg" id="stue" class="card-img rounded-0" alt="stue">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/badogtoilet.jpg" id="bad" class="card-img rounded-0" alt="badeværelse">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/koekken.jpg" id="koekken" class="card-img rounded-0" alt="Køkken">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/altanoghave.jpg" id="altanHave" class="card-img rounded-0" alt="Altan og have">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/entre.jpg" id="entre" class="card-img rounded-0" alt="Entré">
				</a>
			</div>
		</div>
		</div>
`
//Køkkensiden
let koekken = `
<!--Køkkenside-->
<div class="row">
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/koekken/madlavning.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/koekken/opvask.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/altanoghave/insekt.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		</div>
`
//Soveværelsesiden
let sovevaerelse = `
<div class="row">
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/sengeset.jpg" class="card-img rounded-0" alt="hej julie">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		</div>
`
//Stuesiden
let stue = `
<div class="row">
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" id="piftStuen" class="card-img rounded-0" alt="hej julie">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		</div>
`
//Altan- og havesiden
let altanHave = `
<div class="row">
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt_part2.jpg" class="card-img rounded-0" id="insekt" alt="hej julie">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/altan.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/eggs.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		</div>`
//Badeværeslessiden
let bad = `
<div class="row">
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/makeover_card.png" class="card-img rounded-0" id="makeoverBad" alt="Makeover af badeværelse">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/indstillinger.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/handklaeder_1.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		</div>`
//Entrésiden
let entre = `
<div class="row">
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/entre/noegleskab.jpg" class="card-img rounded-0" alt="hej julie">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/altan.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/eggs.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		</div>`
//Huskelisten
let huskelisten = ``
//Økonomisiden
let okonomi = ``
//Gode råd siden
let godeRaadSiden = ``
//Indlæg om pift stuen
let piftStuen = `
<!--indlæg pift din stue-->
	<div class="row text-center text-i-row">
		<div class="col-12">
			<h1>4 GODE IDEER TIL AT PIFTE DIN STUE OP</h1>
		</div>
	</div>
	<div class="row text-center text-i-row pLarge">
		<div class="col-2"></div>
		<div class="col-8">
			<p>At få en lækker stue kan ofte være en dyr fornøjelse. Her får du tips og tricks til, hvordan du billigt kan pifte din stue op til billige penge!
			</p>
		</div>
		<div class="col-2"></div>
	</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
		<div class="col-12">
			<p>At få en lækker stue kan ofte være en dyr fornøjelse. Her får du tips og tricks til, hvordan du billigt kan pifte din stue op til billige penge!
			</p>
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
		<div class="col-12">
			<img class="img-fluid" src="images/stue/plants.jpg" alt="Planter">
		</div>
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
		<div class="col-12">
			<img class="img-fluid" src="images/stue/poster.jpg" alt="Plakat">
		</div>
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
		<div class="col-12">
			<img class="img-fluid" src="images/stue/puder.jpg" alt="Puder">
		</div>
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
		<div class="col-12">
			<img class="img-fluid" src="images/stue/skabmedfigurer.png" alt="Reol med figurer">
		</div>
	</div>
`
//Makeover af badeværelse
let makeoverBad = `
<div class="row text-center text-i-row">
		<div class="col-12">
			<h1>BADEVÆRELSESMAKEOVER</h1>
		</div>
	</div>
	<div class="row text-center text-i-row pLarge">
		<div class="col-2"></div>
		<div class="col-8">
			<p>Giv dit badeværelse en makeover! Lever du også med et badeværelse, som har nogle karakteristiske klinker og mangler et lille pift er dette den perfekte guid til dig! 
			Denne guide er nemlig til dig, som ikke har mange penge mellem hænder og gerne på en nem, hurtigt og billig måde gøre dit badeværelse til noget specielt.
			</p>
		</div>
		<div class="col-2"></div>
	</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
		<div class="col-12">
			Giv dit badeværelse en makeover! Lever du også med et badeværelse, som har nogle karakteristiske klinker og mangler et lille pift er dette den perfekte guid til dig! 
			Denne guide er nemlig til dig, som ikke har mange penge mellem hænder og gerne på en nem, hurtigt og billig måde gøre dit badeværelse til noget specielt.
			</p>
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
		<div class="col-12">
			<img class="img-fluid" src="images/badevaerelse/hylde.jpg" alt="Planter">
		</div>
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
		<div class="col-12">
			<img class="img-fluid" src="images/badevaerelse/klinker.png" alt="Plakat">
		</div>
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
		<div class="col-12">
			<img class="img-fluid" src="images/badevaerelse/badearmatur.jpg" alt="Puder">
		</div>
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
		<div class="col-12">
			<img class="img-fluid" src="images/badevaerelse/mal.jpg" alt="Reol med figurer">
		</div>
	</div>


`
//Insekthotel
let insekt = `
<div class="row text-center text-i-row">
		<div class="col-12">
			<h1>INSEKTHOTEL</h1>
			<p>Byg dit eget Insekthotel og giv de små venner en hjælpende hånd!</p>
		</div>
	</div>
	<div class="row text-center planter">
		<div class="col-12">
			<img class="img-fluid" src="images/altanoghave/insekthus.jpg" alt="Planter">
		</div>
	</div>

	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4 class="startH4">INSTRUKTIONER</h4>
			<p>Insekter spiller en væsentlig rolle i vores økosystem og det er vigtigt at vi passer på dem.
			Hvad skal du bruge: En beholder, træstykker, pinde, brak,nedfaldende blad og grankogler. 	<br>
			Sådan bygger du nemt og hurtigt et insekthotel.</p>
			<p>1. Anskaf en beholder, som kan skabe rammer for hotellet. Dette kan eksempelvis være en dåse eller en gamle kasse, som du har liggende.</p>
			<p>2. Gå en tur i haven eller naturen og indsaml nedfaldne blade, træstykker, grankogler og pinde. Disse skal du bruge til at udfylde dit hotel. Pak det så tæt som muligt.</p>
			<p>3. Dit hotel er nu klar til gæster! Du skal blot placér hotellet et solrigt sted, som er i ly for vind og vejr. Et oplagt sted kunne eksempelvis være på din terrassen/altanen eller i enden af haven.</p>
		</div>
		<div class="col-2"></div>
	</div>
`
//
let  = ``

//Her sker alt magien, vi kigger på om en knap bliver trykket på
//Hvis den gør så sker følgende
document.getElementById('navPage').addEventListener('click', function (e){
	
	let pages = {
        bolig: bolig,
        koekken: koekken,
        home: home,
		sovevaerelse: sovevaerelse,
		stue: stue,
		altanHave: altanHave,
		bad: bad,
		entre: entre,
		
	//her starter indlæg
		piftStuen: piftStuen,
		makeoverBad: makeoverBad,
		insekt: insekt,
		
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
        home: home,
		sovevaerelse: sovevaerelse,
		stue: stue,
		altanHave: altanHave,
		bad: bad,
		entre: entre,
	//her starter indlæg
		piftStuen: piftStuen,
		makeoverBad: makeoverBad,
		insekt: insekt,
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