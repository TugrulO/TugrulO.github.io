function finalCost(){
    var ingredient = document.getElementById("ingredient").value;
    var unit = document.getElementById("unit").value;
    var servings = document.getElementById("servings").value;
    var amount= document.getElementById("amount").value;
   
    var total =  ((parseInt(ingredient))*(parseInt(unit))*(parseInt(amount)))/(parseInt(servings));

    document.getElementById("result").innerHTML = total;
}