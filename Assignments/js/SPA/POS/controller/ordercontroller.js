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