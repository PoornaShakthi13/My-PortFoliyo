var queueDetails={
    names:[
        {name:"manuka",color:"red"},
        {name:"shanuka",color:"blue"},
        {name:"abishek",color:"green"}
    ],
    nextName:function () {
        var lastValue=this.names.pop();
        this.names.unshift(lastValue);
    }
}

function setDueData() {
    $("#content").empty();
    for (let i = 0; i < queueDetails.names.length ; i++) {
        $("#content") .append(`<div style="background-color: ${queueDetails.names[i].color}">
        <h1>${queueDetails.names[i].name}</h1>
         </div>`)
    }
}