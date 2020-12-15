console.log('App started successfully.');
/*class Calculator{
	contructor(previousOperandTextElement,currentOperandTextElement){
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}
	clear(){
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;	
	}
	deleteLastNumber(){
		
	}
	appendNumber(number){
		this.currentOperand = number;
	}
	chooseOperation(operation){
		
	}
	compute(){
		
	}
	updateDisplay(){
		
	}
	
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deletesButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButtons.forEach(button => {
	
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay()
	})
})*/
function insert(num){
	document.formName.textView.value = document.formName.textView.value+""+num;	
}

function equals(){
	var exp = document.formName.textView.value;
	if(exp){
		document.formName.textView.value= eval(exp);
	}	
}
function clean(){
	document.formName.textView.value="";
}
function back(){
	var exp= document.formName.textView.value;
	document.formName.textView.value=exp.substring(0,exp.length-1);
}











