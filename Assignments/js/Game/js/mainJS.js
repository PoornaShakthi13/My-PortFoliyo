var boy = document.getElementById("boy");


var IdeleImage = 1;
var IdeleAnimation = 0;
var runImageNumber = 1;
var runAnimationNumber = 0;


function idelAnimation() {
    IdeleImage = IdeleImage + 1;

    if (IdeleImage === 11) {
        IdeleImage = 1;
    }
    boy.src = "assest/idle(" + IdeleImage + ").png";
}

function ideleAnimationStart() {
    idelAnimation = setInterval(idelAnimation, "200");

}

function runAnimation() {
    runImageNumber = runImageNumber + 1;

    if (runImageNumber === 11) {
        runImageNumber = 1;
    }

    boy.src = "assest/Run(" + runImageNumber + ").png";

}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(idelAnimation);

}


