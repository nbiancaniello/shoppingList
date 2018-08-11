$(document).ready(function(){
    $("#addButton").click(function(){
        var product = $("#product").val();
        var quantity = $("#quantity").val();

        if(!validateInput(product, quantity)){
             return;
        }

        var markup = "<tr><td>" + product + "</td><td>" + quantity + "lb</td><td><input type='button' class='btn btn-danger' id='removeButton' value='Remove'></td></tr>";
        $("table tbody").append(markup);

        $("#product").val("");
        $("#quantity").val("");
    });
    
    $("#product-list").on('click', '#removeButton', function () {
        $(this).closest('tr').remove();
    });
});

function validateInput(prod, qty){

    if (prod == null || prod == ''){
        displayAlert('Invalid Product Value, please retry!');
        return false;
    }

    if (qty == null || qty == '' || qty <= 0 || !$.isNumeric(qty)){
        displayAlert('Invalid Quantity Value, please retry!');
        return false;
    }

    return true;
}

function displayAlert(message){
    $(".alert").removeClass("in").show();
    $(".alert").delay(5000).addClass("in").fadeOut(2000);
    $(".alert").text(message);

}