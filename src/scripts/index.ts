import NumberOperatorButtons from './buttons/NumberOperatorButtons';
import ResetButtons from './buttons/ResetButtons';
import EqualButton from './buttons/EqualButton';


class Calculator {
    constructor() {
        new ResetButtons();
        new NumberOperatorButtons();
      
        new EqualButton();
    }
}

new Calculator();
