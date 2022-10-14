var customerArr=[];


$("#btnSaveCustomer").click(function () {
        var cid=$("#saveCustomerId").val();
        var cName=$("#saveCustomerName").val();
        var cAddress=$("#saveCustomerAddress").val();
        var cContact=$("#saveCustomerContact").val();

        let customer={
            cid:cid,
            name:cName,
            address:cAddress,
            contact:cContact
        }
        customerArr.push(customer);
        loadAllCustomer();
})

function loadAllCustomer() {
        $("#tblCustomer").empty();
        for (let customer of customerArr){
            var row = `<tr class='bg-dark text-light'><td>${customer.cid}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contact}</td></tr>`;
            $("#tblCustomer").append(row);
        }

}
