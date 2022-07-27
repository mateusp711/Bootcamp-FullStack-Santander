let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');


function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;	
	if(count <= -1) {
		counter.classList.add("Vermelho");
	}
	else {
		counter.classList.remove("Vermelho");
	
	}
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	if(count <= -1) {
		counter.classList.add("Vermelho");
	}
	else {
		counter.classList.remove("Vermelho");
		
	}

}

function test() {
	kdowkdpo;
}

function negativo(){

}
