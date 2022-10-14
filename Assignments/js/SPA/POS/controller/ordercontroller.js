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

        let customerId;

$("#txtOrderCustomerID").on('change',function () {

    customerId=$(this).val();

    fillCustomerDetail(customerId);

})

function fillCustomerDetail(cid) {
    let custo= searchCustomer(cid);

    $("#txtOrderCustomerName").val(custo.name);
    $("#txtOrderCustomerAddress").val(custo.address);
    $("#txtOrderCustomerContact").val(custo.contact);
}

        let itemId;

$("#txtOrderItemId").on('change',function () {

    itemId=$(this).val();

    fillItemDetail(itemId);

})

function fillItemDetail(id) {
    let it = searchItem(id);

    $("#txtOrderItemName").val(it.name);
    $("#txtOrderItemPrice").val(it.price);
    $("#txtOrderQtyOnHand").val(it.qty);
}

     let cartArr=[];

$("#btnAddtoCart").click(function () {
    let total=generateTotal();
   let cart = {
       itemCode:itemId,
       itemName:$("#txtOrderItemName").val(),
       unitPrice:$("#txtOrderItemPrice").val(),
       qty:$("#txtOrderQty").val(),
       total:total

   }
   cartArr.push(cart);
   loadCartDetails();
    generateSubTotal();
})

    let subTotal=[];

function generateTotal() {
    var qty= $("#txtOrderQty").val();
    var uprice= $("#txtOrderItemPrice").val();
    var tot=qty*uprice;

    subTotal.push(tot);

    return tot;

}

function loadCartDetails() {
    $("#tblOrder").empty();
    for(let cart of cartArr){
        var row = `<tr class='bg-dark text-light'><td>${cart.itemCode}</td><td>${cart.itemName}</td><td>${cart.unitPrice}</td><td>${cart.qty}</td><td>${cart.total}</td></tr>`;
        $("#tblOrder").append(row);

    }
}


function generateSubTotal() {
    let amount=0;
    for (var i = 0;i<subTotal.length;i++){
            amount+=subTotal[i];
    }
    $("#txtOrderTotal").text(amount);

}

function getDiscount() {
    var tot=$("#txtOrderTotal").text();
    var dis=$("#txtOrderDiscount").val();

    var discount=tot*dis/100;

    var newTotsa=tot-discount;
    $("#txtOrderSub").val(newTotsa);
}

$("#txtOrderDiscount").on("keydown",function (event) {
        if(event.key=='Enter'){
            getDiscount()
        }

})

function getBalance() {
    var cash=$("#txtOrderCash").val();
    var subtotal=$("#txtOrderSub").val();

    var balance=cash-subtotal;
    $("#txtOrderbalance").val(balance);
}

$("#txtOrderCash").on("keydown",function (event) {
    if(event.key=="Enter"){
        getBalance();
    }

})

    var orderDetails=[];

$("#btnPlaceorder").click(function () {
        var orderDetail= {
            orderId:oid,
            customerName:$("#txtOrderCustomerName").val(),
            discount:$("#txtOrderDiscount").val(),
            total:$("#txtOrderTotal").text(),
            date:date

        }
})