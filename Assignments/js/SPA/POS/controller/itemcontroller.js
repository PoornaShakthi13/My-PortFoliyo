var itemArr=[];


$("#btnSaveItem").click(function () {
    var iid=$("#txtItemId").val();
    var iName=$("#txtItemName").val();
    var iQty=$("#txtItemQty").val();
    var iPrice=$("#txtItemPrice").val();

    let customer={
        id:iid,
        name:iName,
        qty:iQty,
        price:iPrice
    }
    itemArr.push(customer);
    loadAllItem();
})

