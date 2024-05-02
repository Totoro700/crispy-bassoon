const cr;
const width;
var dil;
const qtn;
const qtns = []; // {question, left, right, isLeft}

function start() {
	var rq = grq();
	var qil = rq.il();
	qtn.innerText = rq.q;
	waitDrn();
	if (dil) {
		if (qil) {
			// correct
		} else {
			// incorrect
		}
	} else {
		if (qil) {
			// incorrect
		} else {
			// correct
		}
	}
}

function waitDrn() {
	return new Promise((resolve) => {
		document.addEventListener('keydown', onKeyHandler);
		function onKeyHandler(e) {
			if (e.keyCode === 37) {
				document.removeEventListener('keydown', onKeyHandler);
				resolve();
				dil = true; 
			} else if (e.keyCode === 39) {
				document.removeEventListener('keydown', onKeyHandler);
				resolve();
				dil = false;
			}
		}
	});
}

function waitEtr() {
	return new Promise((resolve) => {
		document.addEventListener('keydown', onKeyHandler);
		function onKeyHandler(e) {
			if (e.keyCode === 13) {
				document.removeEventListener('keydown', onKeyHandler);
				resolve();
			}
		}
	});
}

class grq {
	constructor() {
		const idx = Math.floor(Math.random() * qtns.length);
		this.q = qtns[idx][0];
		this.l = qtns[idx][1];
		this.r = qtns[idx][2];
		this.il = qtns[idx][3];
		
	}

	q() {
		return this.q
	}
	
}

