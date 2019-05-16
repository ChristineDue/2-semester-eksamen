// JavaScript Document

//document.getElementById("klikSove").addEventListener('click', function () {
//	document.getElementById('sove').innerHTML = "<div><p>hej med dig!</p></div>"
//})

//Initial setup
//Når siden loader bliver siden sat til hjemme siden
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('page').innerHTML = home
});

//Front page
let home = `
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
							<img src="images/cut.png" class="d-block w-100" alt="...">
							<div class="carousel-caption d-none d-md-block">
								<h3>5 gode rengøringsråd!</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
			<div class="card"> <a href="#"><img class="card-img-top rounded-0" src="images/how-to-incorporate-at-ease-pantone-color-palette-into-your-home_2.jpg" alt="Card image cap"></a></div>
			<div class="card"> <img class="card-img-top rounded-0" src="images/Indretningsideer-Billedvæg-plakater-fra-ViSSEVASSE-varme-farver.jpg" alt="Card image cap"> </div>
			<div class="card"> <img class="card-img rounded-0" src="images/74031539bea8572d7decf6e52bebddd92601d50e.jpg" alt="Card image"> </div>
			<div class="card text-center"> 
				<a href="#">
					<h4 class="card-title"> TEXT OVER IMAGE </h4>
					<img class="card-img rounded-0" src="images/genbrugsmoebler_flytte_hjemmefra_liste.jpg" alt="Card image">
				</a> 
			</div>
			<div class="card"> <img class="card-img rounded-0" src="images/kitchen.jpg" alt="Card image"> </div>
			<div class="card text-right"> <img class="card-img rounded-0" src="images/gris.jpg" alt="Card image"> </div>
			<div class="card text-right"> <img class="card-img rounded-0" src="images/logo.png" alt="Card image"> </div>
			<div class="card text-right"> <img class="card-img rounded-0" src="images/bad.png" alt="Card image"> </div>
		</div>
  	</div>
`
//Vores side om bolig
let bolig = `
<div class="row">
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/bolig/sovevaerelse.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/bolig/stue.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/bolig/badogtoilet.png" class="card-img rounded-0" alt="badogtoilet">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/bolig/koekken.png" class="card-img rounded-0" id="koekken" alt="køkken">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/bolig/altanoghave.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="../images/bolig/entre.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		</div>
`
//Vores side om køkken
let koekken = `
<h1>JEG HEDDER KØKKEN</h1>
<!--Content start-->
	<div class="row">
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/cards/altan.png" class="card-img rounded-0" alt="kokkensiden">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/cards/eggs.png" class="card-img rounded-0" alt="kokkensiden">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/cards/insekt.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		<div class="col-4">
			<div class="card bg-dark">
				<a href="">
					<img src="images/cards/1x/placeholder.png" class="card-img rounded-0" alt="sparegris">
				</a>
			</div>
		</div>
		</div>`
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




//let nytId = document.getElementById('dropKnap')
//
////for(let i = 0; i < nytId.length; i++) {
////	console.log("adding addEventListener to: " + nytId[i].id)
////  nytId[i].addEventListener("click", function(e) {
//	
//	
//	console.log("hej")
//    // Vi har vores pages liggende i et objekt så vi let kan hente den side vi ønsker
//    // Hvis vi vil tilføje en ny side, er det eneste vi nu skal gøre at
//    //Tilføje den til pages objektet og selvfølgelig have en knap der linker dertil
//    // Men så er alt det andet faktisk automatisk :)
//    let pages = {bolig: bolig, home: home, koekken: koekken
//    }
//    //Her ser vi om det er et id der er trykket på
//    if (e.target.id) {
//		console.log(e.target.id)
//        //Hvis det er, så laver vi HTML'en om til den knap der er trykket på
//        //Vi forsøger kun at lave siden om hvis at id'et findes i objektet "pages"
//        let id = e.target.id
//        if(pages[id] != undefined){
//            console.log("id found")
//        
//			document.getElementById('page').innerHTML = pages[id]
//		} else {
//			console.log("id not found")
//		}
//    }
//});
