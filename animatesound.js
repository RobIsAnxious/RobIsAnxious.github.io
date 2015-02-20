
//Animations
if ($(window).width() > 300){

$('#red').click(function () {
    $(this).animate({
        'width': '70px',
        'height': '70px'
    }, 200);

    $(this).animate({
        'width': '100px',
        'height': '100px'
    }, 200);

});

$('#blue').click(function () {
    $(this).animate({
        'width': '70px',
        'height': '70px'
    }, 200);
    $(this).animate({
        'width': '100px',
        'height': '100px'
    }, 200);

});

$('#green').click(function () {
    $(this).animate({
        'width': '70px',
        'height': '70px'
    }, 200);
    $(this).animate({
        'width': '100px',
        'height': '100px'
    }, 200);

});

$('#yellow').click(function () {
    $(this).animate({
        'width': '70px',
        'height': '70px'
    }, 200);
    $(this).animate({
        'width': '100px',
        'height': '100px'
    }, 200);

});

}

else {
$('#blue').click(function () {
    $(this).animate({
        'width': '50%'
    }, 200);

    $(this).animate({
        'width': '100%'
    }, 200);

});

$('#green').click(function () {
    $(this).animate({
        'width': '50%'
    }, 200);

    $(this).animate({
        'width': '100%'
    }, 200);

});

$('#yellow').click(function () {
    $(this).animate({
        'width': '50%'
    }, 200);

    $(this).animate({
        'width': '100%'
    }, 200);

});

$('#red').click(function () {
    $(this).animate({
        'width': '50%'
    }, 200);

    $(this).animate({
        'width': '100%'
    }, 200);

});

}

//Sound playing
var ass = $('#myAss')[0];
$('#red').click(function(){
	ass.currentTime=0;
    ass.play();
});

var dicks = $('#myDicks')[0];
$('#blue').click(function(){
    dicks.currentTime=0;
	dicks.play();
});

var peen = $('#myPeen')[0];
$('#green').click(function(){
    peen.currentTime=0;
	peen.play();
});

var piss = $('#myPiss')[0];
$('#yellow').click(function(){
    piss.currentTime=0;
	piss.play();
});
