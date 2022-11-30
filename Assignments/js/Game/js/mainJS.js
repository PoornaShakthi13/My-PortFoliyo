var boy = document.getElementById("boy");


var IdeleImage = 1;
var IdeleAnimation = 0;


function idelAnimation() {
    IdeleImage = IdeleImage + 1;

    if (IdeleImage === 11) {
        IdeleImage = 1;
    }
    boy.src = "assest/idle (" + IdeleImage + ").png";
}

function ideleAnimationStart() {
    idelAnimation = setInterval(idelAnimation, "500");

}


function keyCheck(event) {

}

