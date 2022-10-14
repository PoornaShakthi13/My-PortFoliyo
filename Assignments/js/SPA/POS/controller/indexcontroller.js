$("#customer").css('display','none');
$("#item").css('display','none');
$("#orders").css('display','none');
$("#orderDetail").css('display','none');


$("#btndash").on('click',function () {

    $("#dashBoard").css('display','block');
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#orders").css('display','none');
    $("#orderDetail").css('display','none');

});

$("#cus").on('click',function () {

    $("#dashBoard").css('display','none');
    $("#customer").css('display','block');
    $("#item").css('display','none');
    $("#orders").css('display','none');
    $("#orderDetail").css('display','none');

});

$("#btnitems").on('click',function () {

    $("#dashBoard").css('display','none');
    $("#customer").css('display','none');
    $("#item").css('display','block');
    $("#orders").css('display','none');
    $("#orderDetail").css('display','none');

});

$("#btnorder").on('click',function () {

    $("#dashBoard").css('display','none');
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#orders").css('display','block');
    $("#orderDetail").css('display','none');

});

$("#btnorderdetail").on('click',function () {

    $("#dashBoard").css('display','none');
    $("#customer").css('display','none');
    $("#item").css('display','none');
    $("#orders").css('display','none');
    $("#orderDetail").css('display','block');

});




