var boy = document.getElementById("boy");

var idleImageNumber = 1;
var idleAnimationNumber = 0;

function idleAnimation() {
    idleImageNumber = idleImageNumber + 1;

    if (idleImageNumber === 11) {
        idleImageNumber = 1;
    }

    boy.src = "assets/Idle" + (idleImageNumber)+ ".png";
}

function idleStartAnimation() {
    idleAnimationNumber = setInterval(idleAnimation, 50);
}


// function runAnimation() {
//     runImageNumber = runImageNumber + 1;
//
//     if (runImageNumber === 9) {
//         runImageNumber = 1;
//     }
//
//     girl.src = "assets/Run (" + runImageNumber + ").png";
//
// }
//
// function runAnimationStart() {
//     runAnimationNumber = setInterval(runAnimation, 100);
//     clearInterval(idleAnimationNumber);
//
// }
