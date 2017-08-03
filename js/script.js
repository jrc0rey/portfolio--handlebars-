console.log('hello')

$(window).resize(function(){
	if ($(this).width() > 700){
		$('nav').hide();
	}
})

// Handlebars Menu
$(function(){
  var template = $('#template').html();
  var theTemplate = Handlebars.compile(template);
	var context={
    "links":[{
			link: "scofflaw.html",
			title: "Scofflaw App"
			},
			{
			link: "greysite.html",
			title: "Greysite Game"
			},
			{
			link: "api-collection.html",
			title: "API Collection App"
			},
			{
			link: "audible.html",
			title: "Audible.com"
			},
			{
			link: "caf.html",
			title: "Chicago Architecture Foundation"
			},
			{
			link: "key-art.html",
			title: "Key Art"
			},
			{
			link: "hollywood-casino.html",
			title: "Hollywood Casino"
			},
			{
			link: "virgin-mobile.html",
			title: "Virgin Mobile"
			},
			{
			link: "photography.html",
			title: "Photography"
			},
			{
			link: "logos-lettering.html",
			title: "Logos & Lettering"
			},
			{
			link: "transistor.html",
			title: "Transistor Chicago"
			},
			{
			link: "illustrations.html",
			title: "Illustrations"
		}]
};
var compiled = theTemplate(context);
$('.work').html(compiled);
});
//

// Mobile nav
$('.burger').click(function(){
	$('nav').slideToggle('fast')
});
//

// Scofflaw Nav
var scofflawNav = function(){
var currImg = 0;
$('#nextScoff').click(function(){
	if(currImg === 0){
		$('img.scoffItem1').hide()
		$('img.scoffItem2').show()
		$('.imgDescrip').hide()
		currImg++;
	}
	else{
		$('img.scoffItem2').hide()
		$('img.scoffItem1').show()
		currImg = 0;
	}
	return false;
});
$('#prevScoff').click(function(){
	if(currImg -1 === 0){
		$('img.scoffItem2').hide()
		$('img.scoffItem1').show()
		currImg--;
	}
	return false
});
};
scofflawNav();
//

// Audible nav
var audibleNav = function(){
var currImg = 0;
$('#nextAu').click(function(){
	if(currImg === 0){
		$('img.audible1').hide()
		$('img.audible2').show()
		$('.featured').hide()
		currImg++;
	}
	else if(currImg === 1){
		$('img.audible2').hide()
		$('img.audible3').show()
		currImg++
	}
	else if(currImg === 2){
		$('img.audible3').hide()
		$('.iDesktop').show()
		currImg++;
	}
	else{
		$('.iDesktop').hide()
		$('img.audible1').show()
		$('.featured').show()
		currImg = 0;
	}
});
$('#prevAu').click(function(){
	if(currImg -1 === 0){
		$('img.audible2').hide()
		$('img.audible1').show()
		$('.featured').show()
		currImg--;
	}
	else if(currImg -2 === 0){
		$('img.audible3').hide()
		$('img.audible2').show()
		currImg--;
	}
	else if(currImg -3 === 0){
		$('iframe').hide()
		$('img.audible3').show()
		currImg--;
	}
	return false;
});
};
audibleNav();

// Caf nav
var cafNav = function(){
var currImg = 0;
$('#nextCaf').click(function(){
	if(currImg === 0){
		$('img.caf1').hide()
		$('img.caf2').show()
		currImg++;
	}
	else if(currImg === 1){
		$('img.caf2').hide()
		$('img.caf3').show()
		currImg++
	}
	else if(currImg === 2){
		$('img.caf3').hide()
		$('img.caf4').show()
		currImg++;
	}
	else{
		$('img.caf4').hide()
		$('img.caf1').show()
		currImg = 0;
	}
});
$('#prevCaf').click(function(){
	if(currImg -1 === 0){
		$('img.caf2').hide()
		$('img.caf1').show()
		currImg--;
	}
	else if(currImg -2 === 0){
		$('img.caf3').hide()
		$('img.caf2').show()
		currImg--;
	}
	else if(currImg -3 === 0){
		$('img.caf4').hide()
		$('img.caf3').show()
		currImg--;
	}
	return false;
});
};
cafNav();
//

// Virgin-Mobile nav
var virginNav = function(){
var currImg = 0;
$('#nextVirgin').click(function(){
	if(currImg === 0){
		$('img.virgin1').hide()
		$('img.virgin2').show()
		currImg++;
	}
	else{
		$('img.virgin2').hide()
		$('img.virgin1').show()
		currImg = 0;
	}
});
$('#prevVirgin').click(function(){
	if(currImg -1 === 0){
		$('img.virgin2').hide()
		$('img.virgin1').show()
		currImg--;
	}
	return false;
});
};
virginNav();
//

// Key-Art Nav
var keyArtNav = function(){
var currImg = 0
$('#nextKey').click(function(){
	if(currImg === 0){
		$('img.poster1').hide();
		$('img.poster2').show();
		currImg++;
	}
	else if(currImg === 1){
		$('img.poster2').hide();
		$('img.poster3').show();
		currImg++;
	}
	else if(currImg === 2){
		$('img.poster3').hide();
		$('img.poster4').show();
		currImg++;
	}
	else if(currImg === 3){
		$('img.poster4').hide();
		$('img.poster5').show();
		currImg++;
	}
	else if(currImg === 4){
		$('img.poster5').hide();
		$('img.poster6').show();
		currImg++;
	}
	else if(currImg === 5){
		$('img.poster6').hide();
		$('img.poster7').show();
		currImg++;
	}
	else if(currImg === 6){
		$('img.poster7').hide();
		$('img.poster8').show();
		currImg++;
	}
	else if(currImg === 7){
		$('img.poster8').hide();
		$('img.poster9').show();
		currImg++;
	}
	else if(currImg === 8){
		$('img.poster9').hide();
		$('img.poster10').show();
		currImg++;
	}
	else{
		$('img.poster10').hide();
		$('img.poster1').show();
		currImg = 0;
	}
	return false;
});

$('#prevKey').click(function(){
	if(currImg - 1 === 0 ){
		$('img.poster2').hide();
		$('img.poster1').show();
		currImg--;
	}
	else if(currImg - 2 === 0 ){
		$('img.poster3').hide();
		$('img.poster2').show();
		currImg--;
	}
	else if(currImg - 3 === 0 ){
		$('img.poster4').hide();
		$('img.poster3').show();
		currImg--;
	}
	else if(currImg - 4 === 0 ){
		$('img.poster5').hide();
		$('img.poster4').show();
		currImg--;
	}
	else if(currImg - 5 === 0 ){
		$('img.poster6').hide();
		$('img.poster5').show();
		currImg--;
	}
	else if(currImg - 6 === 0 ){
		$('img.poster7').hide();
		$('img.poster6').show();
		currImg--;
	}
	else if(currImg - 7 === 0 ){
		$('img.poster8').hide();
		$('img.poster7').show();
		currImg--;
	}
	else if(currImg - 8 === 0 ){
		$('img.poster9').hide();
		$('img.poster8').show();
		currImg--;
	}
	else if(currImg - 9 === 0 ){
		$('img.poster10').hide();
		$('img.poster9').show();
		currImg--;
	}
	return false;
});
}
keyArtNav();

// Hollywood Nav
var hwdNav = function(){
var currImg = 0
$('#nextHwd').click(function(){
	if(currImg === 0){
		$('img.hwd1').hide();
		$('img.hwd2').show();
		currImg++;
	}
	else if(currImg === 1){
		$('img.hwd2').hide();
		$('img.hwd3').show();
		currImg++;
	}
	else if(currImg === 2){
		$('img.hwd3').hide();
		$('img.hwd4').show();
		currImg++;
	}
	else if(currImg === 3){
		$('img.hwd4').hide();
		$('img.hwd5').show();
		currImg++;
	}
	else if(currImg === 4){
		$('img.hwd5').hide();
		$('img.hwd6').show();
		currImg++;
	}
	else if(currImg === 5){
		$('img.hwd6').hide();
		$('img.hwd7').show();
		currImg++;
	}
	else if(currImg === 6){
		$('img.hwd7').hide();
		$('img.hwd8').show();
		currImg++;
	}
	else if(currImg === 7){
		$('img.hwd8').hide();
		$('img.hwd9').show();
		currImg++;
	}
	else{
		$('img.hwd9').hide();
		$('img.hwd1').show();
		currImg = 0;
	}
	return false;
});

$('#prevHwd').click(function(){
	if(currImg - 1 === 0 ){
		$('img.poster2').hide();
		$('img.poster1').show();
		currImg--;
	}
	else if(currImg - 2 === 0 ){
		$('img.poster3').hide();
		$('img.poster2').show();
		currImg--;
	}
	else if(currImg - 3 === 0 ){
		$('img.poster4').hide();
		$('img.poster3').show();
		currImg--;
	}
	else if(currImg - 4 === 0 ){
		$('img.poster5').hide();
		$('img.poster4').show();
		currImg--;
	}
	else if(currImg - 5 === 0 ){
		$('img.poster6').hide();
		$('img.poster5').show();
		currImg--;
	}
	else if(currImg - 6 === 0 ){
		$('img.poster7').hide();
		$('img.poster6').show();
		currImg--;
	}
	else if(currImg - 7 === 0 ){
		$('img.poster8').hide();
		$('img.poster7').show();
		currImg--;
	}
	else if(currImg - 8 === 0 ){
		$('img.poster9').hide();
		$('img.poster8').show();
		currImg--;
	}
	else if(currImg - 9 === 0 ){
		$('img.poster10').hide();
		$('img.poster9').show();
		currImg--;
	}
	return false;
});
}
hwdNav();

// Transistor nav
var tNav = function(){
var currImg = 0;
$('#nextT').click(function(){
	if(currImg === 0){
		$('img.t1').hide()
		$('img.t2').show()
		currImg++;
	}
	else if(currImg === 1){
		$('img.t2').hide()
		$('img.t3').show()
		currImg++
	}
	else{
		$('img.t3').hide()
		$('img.t1').show()
		currImg = 0;
	}
});
$('#prevT').click(function(){
	if(currImg -1 === 0){
		$('img.t2').hide()
		$('img.t1').show()
		currImg--;
	}
	else if(currImg -2 === 0){
		$('img.t3').hide()
		$('img.t2').show()
		currImg--;
	}
	return false;
});
};
tNav();
//

// Logo nav
var logoNav = function(){
var currImg = 0
$('#nextLogo').click(function(){
	if(currImg === 0){
		$('img.logo1').hide();
		$('img.logo2').show();
		currImg++;
	}
	else if(currImg === 1){
		$('img.logo2').hide();
		$('img.logo3').show();
		currImg++;
	}
	else if(currImg === 2){
		$('img.logo3').hide();
		$('img.logo4').show();
		currImg++;
	}
	else if(currImg === 3){
		$('img.logo4').hide();
		$('img.logo5').show();
		currImg++;
	}
	else{
		$('img.logo5').hide();
		$('img.logo1').show();
		currImg = 0;
	}
	return false;
});

$('#prevLogo').click(function(){
	if(currImg - 1 === 0 ){
		$('img.logo2').hide();
		$('img.logo1').show();
		currImg--;
	}
	else if(currImg - 2 === 0 ){
		$('img.logo3').hide();
		$('img.logo2').show();
		currImg--;
	}
	else if(currImg - 3 === 0 ){
		$('img.logo4').hide();
		$('img.logo3').show();
		currImg--;
	}
	else if(currImg - 4 === 0 ){
		$('img.logo5').hide();
		$('img.logo4').show();
		currImg--;
	}
	return false;
});
}
logoNav();
//

// Photography Nav
var photoNav = function(){
var currImg = 0
$('#nextPhoto').click(function(){
	if(currImg === 0){
		$('img.photo1').hide();
		$('img.photo2').show();
		currImg++;
	}
	else if(currImg === 1){
		$('img.photo2').hide();
		$('img.photo3').show();
		currImg++;
	}
	else if(currImg === 2){
		$('img.photo3').hide();
		$('img.photo4').show();
		currImg++;
	}
	else if(currImg === 3){
		$('img.photo4').hide();
		$('img.photo5').show();
		currImg++;
	}
	else if(currImg === 4){
		$('img.photo5').hide();
		$('img.photo6').show();
		currImg++;
	}
	else if(currImg === 5){
		$('img.photo6').hide();
		$('img.photo7').show();
		currImg++;
	}
	else if(currImg === 6){
		$('img.photo7').hide();
		$('img.photo8').show();
		currImg++;
	}
	else if(currImg === 7){
		$('img.photo8').hide();
		$('img.photo9').show();
		currImg++;
	}
	else{
		$('img.photo9').hide();
		$('img.photo1').show();
		currImg = 0;
	}
	return false;
});

$('#prevPhoto').click(function(){
	if(currImg - 1 === 0 ){
		$('img.photo2').hide();
		$('img.photo1').show();
		currImg--;
	}
	else if(currImg - 2 === 0 ){
		$('img.photo3').hide();
		$('img.photo2').show();
		currImg--;
	}
	else if(currImg - 3 === 0 ){
		$('img.photo4').hide();
		$('img.photo3').show();
		currImg--;
	}
	else if(currImg - 4 === 0 ){
		$('img.photo5').hide();
		$('img.photo4').show();
		currImg--;
	}
	else if(currImg - 5 === 0 ){
		$('img.photo6').hide();
		$('img.photo5').show();
		currImg--;
	}
	else if(currImg - 6 === 0 ){
		$('img.photo7').hide();
		$('img.photo6').show();
		currImg--;
	}
	else if(currImg - 7 === 0 ){
		$('img.photo8').hide();
		$('img.photo7').show();
		currImg--;
	}
	else if(currImg - 8 === 0 ){
		$('img.photo9').hide();
		$('img.photo8').show();
		currImg--;
	}
	return false;
});
}
photoNav();
//

// Logo nav
var illNav = function(){
var currImg = 0
$('#nextIll').click(function(){
	if(currImg === 0){
		$('img.ill1').hide();
		$('img.ill2').show();
		currImg++;
	}
	else if(currImg === 1){
		$('img.ill2').hide();
		$('img.ill3').show();
		currImg++;
	}
	else if(currImg === 2){
		$('img.ill3').hide();
		$('img.ill4').show();
		currImg++;
	}
	else if(currImg === 3){
		$('img.ill4').hide();
		$('img.ill5').show();
		currImg++;
	}
	else if(currImg === 4){
		$('img.ill5').hide();
		$('img.ill6').show();
		currImg++;
	}
	else{
		$('img.ill6').hide();
		$('img.ill1').show();
		currImg = 0;
	}
	return false;
});

$('#prevIll').click(function(){
	if(currImg - 1 === 0 ){
		$('img.ill2').hide();
		$('img.ill1').show();
		currImg--;
	}
	else if(currImg - 2 === 0 ){
		$('img.ill3').hide();
		$('img.ill2').show();
		currImg--;
	}
	else if(currImg - 3 === 0 ){
		$('img.ill4').hide();
		$('img.ill3').show();
		currImg--;
	}
	else if(currImg - 4 === 0 ){
		$('img.ill5').hide();
		$('img.ill4').show();
		currImg--;
	}
	else if(currImg - 5 === 0 ){
		$('img.ill6').hide();
		$('img.ill5').show();
		currImg--;
	}
	return false;
});
}
illNav();
//
