import Display from "../Display";

export default class EqualButtton {
    equalButton: HTMLButtonElement;

    constructor() {
        this.equalButton = document.querySelector('#equal') as HTMLButtonElement;
        this.equalButton.addEventListener('click', () => this.calculate())
    }

    calculate() {
        const count = Display.display.value
           
        const result = eval(count);
        Display.display.value = result;
    };
}