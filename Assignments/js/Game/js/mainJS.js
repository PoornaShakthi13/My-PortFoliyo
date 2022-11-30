var boy = document.getElementById("boy");


var IdeleImage = 1;
var IdeleAnimationNumber = 0;
var runImageNumber = 1;
var runAnimationNumber = 0;


function idelAnimation() {
    IdeleImage = IdeleImage + 1;

    if (IdeleImage === 11) {
        IdeleImage = 1;
    }
    // boy.src = "assest/Idle (" + IdeleImage + ").png";
}

function ideleAnimationStart() {
    IdeleAnimationNumber = setInterval(idelAnimation, 200);

}

function runAnimation() {
    runImageNumber = runImageNumber + 1;

    if (runImageNumber === 11) {
        runImageNumber = 1;
    }

    boy.src = "assest/Run (" + runImageNumber + ").png";

}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(IdeleAnimationNumber);

}

function keyCheck(event) {
    var keyCode = event.which;

    if (keyCode === 13) {
        if (runAnimationNumber === 0) {
            runAnimationStart();
        }
    }
}


