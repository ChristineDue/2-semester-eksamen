// JavaScript Document

//Når siden loader bliver siden sat til hjemme siden
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('page').innerHTML = home
});

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
						<div class="carousel-item active">
							<img src="images/slideshow/ikea-tur.jpg" class="d-block w-100" alt="...">
							<div class="carousel-caption d-none d-md-block">
								<h3>Din første IKEA-tur!</h3>
								<p>Har du svært ved at finde ud af, hvad du skal købe i IKEA, så følg med!</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="images/slideshow/flyttekasse_illustration.png" id="flyttemand" class="d-block w-100" alt="...">
							<div class="carousel-caption d-none d-md-block" id="flyttemand">
								<h3>Er du klar til din flyttemand?</h3>
								<p>Er du begravet i flytterod. Få gode tips til hvordan du bliver klar til flyttemanden!</p>
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
					<img class="card-img-top rounded-0" src="images/altanoghave/insekt_part2.jpg" id="insekt" alt="Card image cap">
				</a>
			</div>
			<div class="card"> 
				<a href="#">
					<img class="card-img-top rounded-0" src="images/altanoghave/eggs.jpg" alt="Card image cap">
				</a>
			</div>
			<div class="card"> 
				<a href="#">
					<img class="card-img-top rounded-0" src="images/koekken/nudler.png" id="simpelMad" alt="Card image cap">
				</a>
			</div>
			<div class="card"> 
				<a href="#">
					<img class="card-img-top rounded-0" src="images/goderaad/handbog.png" alt="Card image cap">
				</a>
			</div>
			<div class="card text-center"> 
				<a href="#">
					<img class="card-img rounded-0" src="images/badevaerelse/makeover_front.png" id="makeoverBad" alt="Card image">
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
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li class="sidsteCrumb">BOLIG</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Boligside-->
	<div class="row">
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/sovevaerelse.jpg" id="sovevaerelse" class="card-img rounded-0" alt="soveværelse">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/stue.jpg" id="stue" class="card-img rounded-0" alt="stue">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/badogtoilet.jpg" id="bad" class="card-img rounded-0" alt="badeværelse">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/koekken.jpg" id="koekken" class="card-img rounded-0" alt="Køkken">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/altanoghave.jpg" id="altanHave" class="card-img rounded-0" alt="Altan og have">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
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
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li class="sidsteCrumb">KØKKEN</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Køkkenside-->
<div class="row">
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/koekken/madlavning.png" id="simpelMad" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/koekken/opvask.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/altanoghave/insekt.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
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
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li class="sidsteCrumb">SOVEVÆRELSE</li>
			</ul>
	</div>
</div>
<!--content-->
<div class="row">
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/sengeset.jpg" id="sengeSat" class="card-img rounded-0" alt="hej julie">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/sovevaerelse/seng.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
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
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li class="sidsteCrumb">STUE</li>
			</ul>
	</div>
</div>
<!--content-->
<div class="row">
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" id="piftStuen" class="card-img rounded-0" alt="hej julie">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/stue/lampetekst.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
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
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li class="sidsteCrumb">ALTAN OG HAVE</li>
			</ul>
	</div>
</div>
<!--content-->
<div class="row">
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt_part2.jpg" class="card-img rounded-0" id="insekt" alt="hej julie">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/altan.jpg" id="altanSat" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/eggs.jpg" id="skrald" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		</div>`
//Badeværeslessiden
let bad = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li class="sidsteCrumb">BADEVÆRELSE</li>
			</ul>
	</div>
</div>
<!--content-->
<div class="row">
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/makeover_card.png" class="card-img rounded-0" id="makeoverBad" alt="Makeover af badeværelse">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/indstillinger.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" id="plet" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/handklaeder_1.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/badevaerelse/plet.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		</div>`
//Entrésiden
let entre = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li class="sidsteCrumb">ENTRÉ</li>
			</ul>
	</div>
</div>
<!--content-->
<div class="row">
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/entre/noegleskab.jpg" class="card-img rounded-0" alt="hej julie">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/altan.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/eggs.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/altanoghave/insekt.jpg" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-4">
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
let godeRaad = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li class="sidsteCrumb">GODE RÅD</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Boligside-->
	<div class="row">
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/goderaad/flyttemand.png" id="flyttemand" class="card-img rounded-0" alt="soveværelse">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/goderaad/handbog.png" id="handbog" class="card-img rounded-0" alt="stue">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/goderaad/roomie.jpg" id="roomie" class="card-img rounded-0" alt="badeværelse">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/koekken.jpg" id="koekken" class="card-img rounded-0" alt="Køkken">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/altanoghave.jpg" id="altanHave" class="card-img rounded-0" alt="Altan og have">
				</a>
			</div>
		</div>
		<div class="col-12 col-md-6">
			<div class="card bg-dark">
				<a href="">
					<img src="images/bolig/entre.jpg" id="entre" class="card-img rounded-0" alt="Entré">
				</a>
			</div>
		</div>
		</div>
`
//Indlæg om pift stuen
let piftStuen = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li><a href="#" id="stue">STUE</a></li>
			  <li class="sidsteCrumb">4 GODE IDÉER TIL AT PIFTE DIN STUE OP</li>
			</ul>
	</div>
</div>
<!--content-->
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
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li><a href="#" id="badevaerelse">BADEVÆRELSE</a></li>
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
			Denne guide er nemlig til dig, som ikke har mange penge mellem hænder og gerne på en nem, hurtigt og billig måde gøre dit badeværelse til noget specielt.
			</p>
		</div>
		<div class="col-2"></div>
	</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
		<div class="col-12">
			<p>Giv dit badeværelse en makeover! Lever du også med et badeværelse, som har nogle karakteristiske klinker og mangler et lille pift er dette den perfekte guid til dig! 
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
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
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
			<p>Byg dit eget Insekthotel og giv de små venner en hjælpende hånd!
			</p>
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
//Få den plet væk
let plet = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li><a href="#" id="bad">BADEVÆRELSE</a></li>
			  <li class="sidsteCrumb">FÅ DEN PLET VÆK</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Indlæg "få den plet væk"-->
	<div class="row text-center text-i-row">
		<div class="col-12">
			<h1>FÅ DEN PLET VÆK</h1>
		</div>
	</div>
	<div class="row text-center text-i-row pLarge">
		<div class="col-2"></div>
		<div class="col-8">
			<p>Her får du det bedste trick til at fjerne alle slags pletter på tøjet!</p>
		</div>
		<div class="col-2"></div>
	</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
		<div class="col-12">
			<p>Her får du det bedste trick til at fjerne alle slags pletter på tøjet!</p>
		</div>
	</div>



	<div class="row text-center planter">
		<div class="col-12">
			<img class="img-fluid" src="images/badevaerelse/real_plet.jpg" alt="Planter">
		</div>
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
`
//Indlæg og "fra skrald til køkkenhave"
let skrald = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
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
		<div class="col-12">
			<img class="img-fluid" src="images/altanoghave/eggsforside.jpg" alt="Planter">
		</div>
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
		<div class="col-12">
			<img class="img-fluid" src="images/altanoghave/potteplante.jpg" alt="Planter">
		</div>
	</div>
`
//Indlæg om altansæt
let altanSat = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
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
				<div class="col-12">
					<img class="img-fluid" src="images/altanoghave/hyggeligemobler.jpg" alt="Planter">
				</div>
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
				<div class="col-12">
					<img class="img-fluid" src="images/altanoghave/traemobler.jpg" alt="Planter">
				</div>
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
				<div class="col-12">
					<img class="img-fluid" src="images/altanoghave/fancymobler.jpg" alt="Planter">
				</div>
			</div>
			<p>Sættet her er mere til dem der går op i kvalitet og udseende. Det er det helt rigtige sæt til dig der gerne vil have de fede instagram altan billeder. Udover at det ser godt ud, så kan vi næsten garanterer for at det også er komfortabelt.</p>
			<p>Find det<a href="https://www.beliani.dk/udendors-indendors-cafe-sat-altan-sat-bord-og-2-stole-hvid-acapulco.html"> her</a></p>
		</div>
		<div class="col-2"></div>
	</div>

`
//Indlæg om sengesæt
let sengeSat = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li><a href="#" id="sovevaerelse">SOVEVÆRELSE</a></li>
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
				<div class="col-12">
					<a href="https://jysk.dk/sovevaerelse/sengesaet/glat/basic/sengesaet-nova-sgl-lilla" target="_blank">
						<img src="images/sovevaerelse/glatte.jpeg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="col-2"></div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4 class="startH4">DET MED TERN </h4>
			<div class="text-center altan">
				<div class="col-12">
					<a href="https://jysk.dk/sovevaerelse/sengesaet/glat/plus/sengesaet-pamela-sgl" target="_blank">
						<img src="images/sovevaerelse/tern.jpeg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="col-2"></div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4 class="startH4">DET MED TEKST</h4>
			<div class="text-center altan">
				<div class="col-12">
					<a href="https://jysk.dk/sovevaerelse/sengesaet/glat/gold/sengesaet-dicte-sgl-kronborg" target="_blank">
						<img src="images/sovevaerelse/tekst.jpeg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="col-2"></div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4 class="startH4">DET MED PRIKKER</h4>
			<div class="text-center altan">
				<div class="col-12">
					<a href="https://jysk.dk/sovevaerelse/sengesaet/glat/plus/sengesaet-thea-sgl-koral" target="_blank">
						<img src="images/sovevaerelse/prikker.jpeg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="col-2"></div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4 class="startH4">DET MED STRIBER</h4>
			<div class="text-center altan">
				<div class="col-12">
					<a href="https://jysk.dk/sovevaerelse/sengesaet/glat/gold/sengesaet-anneline-sgl-bla-hoie" target="_blank">
						<img src="images/sovevaerelse/striber.jpeg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="col-2"></div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4 class="startH4">DET MED CIRKLER</h4>
			<div class="text-center altan">
				<div class="col-12">
					<a href="https://jysk.dk/sovevaerelse/sengesaet/glat/plus/sengesaet-freydis-sgl" target="_blank">
						<img src="images/sovevaerelse/cirkler.jpeg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="col-2"></div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4 class="startH4">DET MED BLOMSTER</h4>
			<div class="text-center altan">
				<div class="col-12">
					<a href="https://jysk.dk/sovevaerelse/sengesaet/krep/basic/sengesaet-alvina-krep-sgl" target="_blank">
						<img src="images/sovevaerelse/blomster.jpeg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="col-2"></div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4 class="startH4">DET MED BØLGER</h4>
			<div class="text-center altan">
				<div class="col-12">
					<a href="https://jysk.dk/sovevaerelse/sengesaet/krep/basic/sengesaet-sinja-krep-sgl" target="_blank">
						<img src="images/sovevaerelse/bolger.jpeg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="col-2"></div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4 class="startH4">DET HVIDE OG DET DOBBELTE</h4>
			<div class="text-center altan">
				<div class="col-12">
					<a href="https://jysk.dk/sovevaerelse/sengesaet/satin/gold/sengesaet-ingeborg-satin-dob-hvid-0" target="_blank">
						<img src="images/sovevaerelse/hvide.jpeg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="col-2"></div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<h4 class="startH4">DET FINE MØNSTER</h4>
			<div class="text-center altan">
				<div class="col-12">
					<a href="https://jysk.dk/sovevaerelse/sengesaet/glat/gold/sengesaet-paula-sgl" target="_blank">
						<img src="images/sovevaerelse/monster.jpeg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="col-2"></div>
	</div>
	<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

`
//Indlæg om "er du klar til din flyttemand"
let flyttemand = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="godeRaad">GODE RÅD</a></li>
			  <li class="sidsteCrumb">ER DU KLAR TIL DIN FLYTTEMAND</li>
			</ul>
	</div>
</div>
<!--content-->
<!--Indlæg "skrald i køkkenhaven"-->
	<div class="row text-center text-i-row">
		<div class="col-12">
			<h1>ER DU KLAR TIL DIN FLYTTEMAND</h1>
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
		<div class="col-12">
			<img class="img-fluid" src="images/goderaad/flyttemand.jpg" alt="Planter">
		</div>
	</div>
	<div class="row">
		<div class="col-2"></div>
		<div class="col-12 col-md-8">
			<p>1. Lav en liste over alle dine møbler/genstande, som du skal have flyttet. 
			Noter eventuelt om du har genstand, flyttemanden skal være ekstra varsom med.
			Listen vil give dig et bedre overblik, når du taler med din flyttemand i telefonen.
			</p>
			<p>2. Fortæl din flyttemand om du har brug for hjælp med at afmonterer vaskemaskinen eller lamper. Hvis du har problemer med at gøre andre ting selv, som eksempelvis flytterengøring eller at tage dine gardiner ned, kan du altid spørger din flyttemand</p>
			<p>3. Fortæl din flyttemand, hvor du bor og hvilke muligheder de har for parkering?  
			Skal du flytte fra 4. sal eller fra dine forældres 1-plans parcelhus. Fortæl også
			flyttemanden, hvor du skal flytte hen
			</p>
			<p>4. Det er altid en god ide at spørge flyttemanden indtil til forsikring, i tilfælde af, at der
			skulle ske noget. Flyttemanden sørger naturligvis for at passe på dine ting, men for
			en sikkerheds skyld
			</p>
		</div>
		<div class="col-2"></div>
	</div>
`
//Indlæg om simpel madlavning
let simpelMad = `
<!--BREADCRUMBSTIEN-->
<div class="row">
	<div class="col-12 tilbageKnap">
			<ul class="breadcrumb">
			  <li><a href="#" id="home">HOME</a></li>
			  <li><a href="#" id="bolig">BOLIG</a></li>
			  <li><a href="#" id="koekken">KØKKEN</a></li>
			  <li class="sidsteCrumb">SIMPEL MADLAVNING</li>
			</ul>
	</div>
</div>
<!--content-->

<!--indlæg om "simpel madlavning"--> 
	<div class="row text-center text-i-row">
		<div class="col-12">
			<h1>SIMPEL MADLAVNING</h1>
		</div>
	</div>
	<div class="row text-center text-i-row pLarge">
		<div class="col-2"></div>
		<div class="col-8">
			<p>Er du lige flyttet hjemmefra og har været vant til, at det var mor der stod for aftensmaden? Så bare rolig vi lære dig her hvordan du kan lave den simpleste og lækreste mad helt selv
			</p>
		</div>
		<div class="col-2"></div>
	</div>

<!--på lille ser den sådan her ud-->
<div class="row text-center text-i-row pSmall">
		<div class="col-12">
			<p>Er du lige flyttet hjemmefra og har været vant til, at det var mor der stod for aftensmaden? Så bare rolig vi lære dig her hvordan du kan lave den simpleste og lækreste mad helt selv
			</p>
		</div>
	</div>

	<div class="row text-center">
		<div class="col-12 col-md-6 mad">
			<img src="images/koekken/ris2.png" alt="">
		</div>
		<div class="col-12 col-md-6 mad">
			<img src="images/koekken/kodsovs1.png" alt="">
		</div>
	</div>
	<div class="row text-center">
		<div class="col-12 col-md-6 mad">
			<img src="images/koekken/nudler.png" alt="">
		</div>
		<div class="col-12 col-md-6 mad">
			<img src="images/koekken/salat.png" alt="">
		</div>
	</div>
`
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
		godeRaad: godeRaad,
		
		
	//her starter indlæg
		piftStuen: piftStuen,
		makeoverBad: makeoverBad,
		insekt: insekt,
		plet: plet,
		skrald: skrald,
		altanSat: altanSat,
		sengeSat: sengeSat,
		flyttemand: flyttemand,
		simpelMad: simpelMad,
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
		godeRaad: godeRaad,
		
	//her starter indlæg
		piftStuen: piftStuen,
		makeoverBad: makeoverBad,
		insekt: insekt,
		plet: plet,
		skrald: skrald,
		altanSat: altanSat,
		sengeSat: sengeSat,
		flyttemand: flyttemand,
		simpelMad: simpelMad,
		
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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


