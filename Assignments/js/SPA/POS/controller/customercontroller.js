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


    Swal.fire({
        title: ' Do You Want to Save this customer?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            customerArr.push(customer);
            loadAllCustomer();
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })




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

$("#btnUpdateCustomer").click(function () {
        let customerID = $("#saveCustomerId").val();
        updateCustomer(customerID);
        $("#saveCustomerId,#saveCustomerName,#saveCustomerAddress,#saveCustomerContact").val("");


    Swal.fire({
        title: ' Do You Want to Update this customer?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'update',
        denyButtonText: `Don't update`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            customerArr.push(customer);
            loadAllCustomer();
            Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })



})

function updateCustomer(cid) {
    let customer = searchCustomer(cid);

    if (customer != null) {
        customer.id = $("#saveCustomerId").val();
        customer.name = $("#saveCustomerName").val();
        customer.address = $("#saveCustomerAddress").val();
        customer.contact = $("#saveCustomerContact").val();

        loadAllCustomer();

        return true;
    } else {
        return false;
    }
}

function searchCustomer(cid) {
        for (let customer of customerArr) {
            if (customer.cid === cid) {
                return customer
            }
        }
        return null;

}

$("#btnDeleteCustomer").click(function () {

    let customerID = $("#saveCustomerId").val();
    deleteCustomer(customerID);
    $("#saveCustomerId,#saveCustomerName,#saveCustomerAddress,#saveCustomerContact").val("");

    Swal.fire({
        icon: 'error',
        title: 'Deleted',
        text: 'Something went wrong!',
        footer: '<a href=""></a>'
    })

})

function deleteCustomer(cusId) {
    let customer = searchCustomer(cusId);
    if (customer != null) {
        let indexNumber = customerArr.indexOf(customer);
        customerArr.splice(indexNumber, 1);
        loadAllCustomer();
        return true;
    } else {
        return false;
    }
}
