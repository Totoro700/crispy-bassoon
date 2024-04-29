const cr;
const width;
var dil;
const qtn;

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
	else {
		if (qil) {
			// incorrect
		} else {
			// correct
		}
	}
}

function waitDrn() {
	return new Promise((resolve) => {
		document.addEventListener('keydown'), onKeyHandler);
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
	}
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
