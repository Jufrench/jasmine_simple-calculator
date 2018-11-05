xdescribe('calculator.js', function () {
   it('should add number to total', function () {
      const calc = new Calculator();
      calc.add(5);

      // expect total to be 5
      expect(calc.total).toBe(5);
   });

   it('should subtract number from total', function () {
      const calc = new Calculator();
      calc.total = 30;
      calc.subtract(5);

      expect(calc.total).toBe(25);
   });

   it('should multiply total by number', function () {
      const calc = new Calculator();
      calc.total = 10;
      calc.multiply(2);

      expect(calc.total).toBe(20);
   });

   it('should divide total by number', function () {
      const calc = new Calculator();
      calc.total = 100;
      calc.divide(5);

      expect(calc.total).toBe(20);
   });
});
