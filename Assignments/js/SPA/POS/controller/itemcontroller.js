var itemArr=[];


$("#btnSaveItem").click(function () {
    var iid=$("#txtItemId").val();
    var iName=$("#txtItemName").val();
    var iQty=$("#txtItemQty").val();
    var iPrice=$("#txtItemPrice").val();

    let item={
        id:iid,
        name:iName,
        qty:iQty,
        price:iPrice
    }
    itemArr.push(item);
    loadAllItem();
})

function loadAllItem() {
    $("#tblItem").empty();
    for (let item of itemArr){
        var row = `<tr class='bg-dark text-light'><td>${item.id}</td><td>${item.name}</td><td>${item.qty}</td><td>${item.price}</td></tr>`;
        $("#tblItem").append(row);
    }

    fillItemDetailFromTable()

}
function fillItemDetailFromTable() {
    $("#tblItem>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let qty = $(this).children(":eq(2)").text();
        let price = $(this).children(":eq(3)").text();

        $("#txtUpdateItemId").val(id);
        $("#txtUpdateItemName").val(name);
        $("#txtUpdateItemQty").val(qty);
        $("#txtUpdateItemPrice").val(price);

    });
}

$("#btnUpdateItem").click(function () {

    let itemID = $("#txtUpdateItemId").val();
    updateItem(itemID);
    $("#txtUpdateItemId,#txtUpdateItemName,#txtUpdateItemQty,#txtUpdateItemPrice").val("");

})

function updateItem(iid) {
    let item = searchItem(iid);

    if (item != null) {
        item.id = $("#txtUpdateItemId").val();
        item.name = $("#txtUpdateItemName").val();
        item.qty = $("#txtUpdateItemQty").val();
        item.price = $("#txtUpdateItemPrice").val();

        loadAllItem();

        return true;
    } else {
        return false;
    }
}

function searchItem(iid) {
    for (let item of itemArr) {
        if (item.id === iid) {
            return item
        }
    }
    return null;

}

$("#btnDeleteItem").click(function () {
    let itemId = $("#txtUpdateItemId").val();
    deleteItem(itemId);
    $("#txtUpdateItemId,#txtUpdateItemName,#txtUpdateItemQty,#txtUpdateItemPrice").val("");


})

function deleteItem(itemId) {
    let item = searchItem(itemId);
    if (item != null) {
        let indexNumber = itemArr.indexOf(item);
        itemArr.splice(indexNumber, 1);
        loadAllItem();
        return true;
    } else {
        return false;
    }
}


