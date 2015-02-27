
// Main function
$(document).ready(function() {
    $('.square').click(function () {
        $(this).animate({
            'width': '70px',
            'height': '70px'
        }, 200).animate({
            'width': '100px',
            'height': '100px'
        }, 200);
        
        switch($(this).attr("id")) {
            case "red":
                $("#myAss")[0].currentTime = 0;
                $("#myAss")[0].play();
                break
            case "blue":
                $("#myDicks")[0].currentTime = 0;
                $("#myDicks")[0].play();
                break
            case "green":
                $("#myPeen")[0].currentTime = 0;
                $("#myPeen")[0].play();
                break
            case "yellow":
                $("#myPiss")[0].currentTime = 0;
                $("#myPiss")[0].play();
                break
        }
    });
    
    // Keyboard integration
    function sounds(id) {
        $(id)[0].currentTime=0;
        $(id)[0].play();
    }
    
    function moveYaBody(square) {
        $(square).animate({
            'width': '70px',
            'height': '70px'
        }, 200).animate({
            'width': '100px',
            'height': '100px'
        }, 200);
    }
    
    $(document).on("keypress", function(e) {
        switch(e.which) {
            case 97:  // a
                moveYaBody("#red");
                sounds("#myAss");
                break
            case 115:  // s
                moveYaBody("#blue");
                sounds("#myDicks");
                break
            case 100:  // d
                moveYaBody("#green");
                sounds("#myPeen");
                break
            case 102:  // f
                moveYaBody("#yellow");
                sounds("#myPiss");
                break
        }
    });
});

//Huge shoutouts to /u/fredrikaugust for helping make my code much smoother and working out the kinks with keyboard integration!