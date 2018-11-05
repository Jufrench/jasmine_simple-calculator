function calculate(inputValue) {
   const exp = /\+|\-|\*|\//;
   const numbers = inputValue.split(exp);

   const numberA = parseInt(numbers[0]);
   const numberB = parseInt(numbers[1]);

   const operation = inputValue.match(exp);
   if (Number.isNaN(numberA) || Number.isNaN(numberB) || operation == null) {
      updateResult('Operation not recognized');
      return;
   }

   const calc = new Calculator();
   calc.add(numberA);

   let result;

   switch(operation[0]) {
      case '+':
         result = calc.add(numberB);
         break;
      case '-':
         result = calc.subtract(numberB);
         break;
      case '*':
         result = calc.multiply(numberB);
         break;
      case '/':
         result = calc.divide(numberB);
         break;
   }
   updateResult(result);
}

function updateResult(result) {
   const element = document.getElementById('result');

   if (element) {
      element.innerText = result;
   }
}
