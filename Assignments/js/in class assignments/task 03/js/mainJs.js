var kingtRider={
    count:0,
    tmArray:[],
    leftArray:["white","white","white","white","white","white","#ffe3e3","#fab5b5","#ee9797","#f17272","#ef2d2d","#ff0000"],
    rightArray:["white","white","white","white","white","white","#ff0000","#ef2d2d","#f17272","#ee9797","#fab5b5","#ffe3e3"],

    animateLeft:function () {
            var lastColor=this.tmArray.pop();
            this.tmArray.unshift(lastColor);
    },



}