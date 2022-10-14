$("#txtOrderCustomerID").click(function () {
        // alert("xsadcds");
       loadAllCustomerID();
})

function loadAllCustomerID() {
    // $("#txtOrderCustomerID").click(function () {
        $("#txtOrderCustomerID").empty();
        $("#txtOrderCustomerID").append(`<option></option>`);
        for (let cus of customerArr){
            $("#txtOrderCustomerID").append(`<option>${cus.cid}</option>`);
        }
    // })
}

$("#btnAdd").click(function () {
    $("#dashBoard").css('display','none');
    $("#customer").css('display','block');
    $("#item").css('display','none');
    $("#orders").css('display','none');
    $("#orderDetail").css('display','none');
})

$("#txtOrderItemId").click(function () {
       loadAllItemId();
})

function loadAllItemId() {
    $("#txtOrderItemId ").empty();
    $("#txtOrderItemId").append(`<option></option>`);
    for (let item of itemArr){
        $("#txtOrderItemId").append(`<option>${item.id}</option>`);
    }

}