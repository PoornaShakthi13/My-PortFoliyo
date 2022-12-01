var boy = document.getElementById("boy");

var idleImageNumber = 1;
var idleAnimationNumber = 0;
var runImageNumber=1;
var runAnimationNumber=0;
var moveBackgroundAnimationID=0;

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


function runAnimation() {
    runImageNumber = runImageNumber + 1;

    if (runImageNumber === 9) {
        runImageNumber = 1;
    }

    boy.src = "assets/Run " + (runImageNumber)+ ".png";

}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 100);
    clearInterval(idleAnimationNumber);

}

function keyCheck(event) {
    var keyCode = event.which;

    if (keyCode === 13) {
        if (runAnimationNumber === 0) {
            runAnimationStart();
        }

        /*/!*move background*!/
        if (moveBackgroundAnimationID === 0) {
            moveBackgroundAnimationID = setInterval(moveBackground, 100);
        }

        }*/
    }
}
/*

if (keyCode === 32) {
/!*
    if (jumpAnimationNumber === 0) {
        jumpAnimationStart();
    }
*!/

    /!*move background*!/
    if (moveBackgroundAnimationID === 0) {
        moveBackgroundAnimationID = setInterval(moveBackground, 100);
    }

   /!* /!*move gif*!/
    if (boxAnimationID === 0) {
        boxAnimationID = setInterval(boxAnimation, 100);
    }*!/

}

function moveBackground() {
    backgroundPositionX = backgroundPositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px";

/!*    /!*score*!/
    score = score + 10;
    document.getElementById("score").innerHTML = "Score : " + score;

    if (score === 3000) {
        document.getElementById("win").style.visibility="visible";
        document.getElementById("lastScore").innerHTML=score;

        clearInterval(boxAnimationID);
        clearInterval(runAnimationNumber);
        clearInterval(moveBackgroundAnimationID);
    }*!/
}

*/


