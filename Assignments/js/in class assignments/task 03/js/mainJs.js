var kingtRider={
    count:0,
    tmArray:[],
    leftArray:["white","white","white","white","white","white","#ffe3e3","#fab5b5","#ee9797","#f17272","#ef2d2d","#ff0000"],
    rightArray:["white","white","white","white","white","white","#ff0000","#ef2d2d","#f17272","#ee9797","#fab5b5","#ffe3e3"],

    animateLeft:function () {
            var lastColor=this.tmArray.pop();
            this.tmArray.unshift(lastColor);
    },

    animateRight:function () {
            var firstColor=this.tmArray.shift();
            this.tmArray.push(firstColor);
    },

    animate:function () {
        this.count++
        if (this.count<=this.leftArray.length){
            this.tmArray=this.leftArray

            this.animateLeft();
        }else {
            if (this.count>=(this.rightArray.length*2)){
                this.count=0;
            }
            this.tmArray=this.rightArray;
            this.animateRight();
        }
    }
}
makeDives();
function makeDives() {
        $("#sec01").empty();

    for (let i = 0; i <(kingtRider.tmArray.length)/2 ; i++) {
        $("#sec01").append(`<div style="background-color: ${kingtRider.tmArray[i]}"></div>`)
    }
    kingtRider.animate();
}

        var id=setInterval(makeDives,90);

$("#start").click(function () {
        clearInterval(id);
        id=setInterval(makeDives,90);
})

$("#end").click(function () {
        clearInterval(id);
})