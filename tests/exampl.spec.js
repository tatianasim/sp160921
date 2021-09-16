import {expect} from "chai";

const a = 5;
const b = 7;

describe('operations with numbers', function (){
    it('addition works correctly', function (){
       expect(a + b, 'result should equal 12').to.eq(12);
    });

    it('subtraction works correctly', function (){
        expect(a - b, 'result should equal -2').to.eq(-2);
    });

    it('multiplication works correctly', function (){
        expect(a * b, 'result should equal 35').to.eq(35);
    });

    it('division works correctly', function (){
        expect(a / b, 'result should equal 0.7142857142857143').to.eq(0.7142857142857143);
    });
});