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
        $("#content").append(`<div style="background-color: ${queueDetails.names[i].color}"><h1>${queueDetails.names[i].name}</h1></div>`);
    }

    queueDetails.nextName();
}

setInterval(setDueData,500);

$("#enterName").click(function () {
    var pName=$("txtName").val();
    var pColor=$("#colors").val();
    var person={name:pName, color:pColor};
    queueDetails.names.unshift(person);
})

