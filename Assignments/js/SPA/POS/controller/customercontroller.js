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

        fillCustomerDetailFromTable()

}

function fillCustomerDetailFromTable() {
        $("#tblCustomer>tr").click(function () {
            let id = $(this).children(":eq(0)").text();
            let name = $(this).children(":eq(1)").text();
            let address = $(this).children(":eq(2)").text();
            let contact = $(this).children(":eq(3)").text();

            $("#saveCustomerId").val(id);
            $("#saveCustomerName").val(name);
            $("#saveCustomerAddress").val(address);
            $("#saveCustomerContact").val(contact);

        });
}
