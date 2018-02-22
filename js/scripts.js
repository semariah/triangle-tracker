$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#input1").val());
    var side2 = parseInt($("#input2").val());
    var side3 = parseInt($("#input3").val());
    var result;
    if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2){
      result =$('#Not').show();
    } else if (side1 === side2 || side2 === side3 || side1 === side3){
      result = $('#Isoceles').show();
    } else if (side1 != side2 && side2 != side3 && side1 != side3){
      result =$('#Scalene').show();
    } else if (side1 === side2 && side2 === side3 && side1 === side3){
      result = $('#Equilateral').show();
      }
      $("#result").text(result);
    });
  });



    // } else if (age>=16){
      // alert("Did you know you can register now?");
      // $('#voting-age').show();
    // } else {
      // $('#non-voting-age').show();
    // /}
 // });

    //if (operator === "add") {
          // result = add(number1, number2);
        // } else if (operator === "subtract") {
          // result = subtract(number1, number2);
        // } else if (operator === "multiply") {
          // result = multiply(number1, number2);
        // } else if (operator === "divide") {
          // result = divide(number1, number2);
