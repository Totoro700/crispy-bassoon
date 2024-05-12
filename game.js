/*var dil;
const cvs = document.getElementById("c");
const qtns = [["Which comes first in the Order of Operations, Exponents or Multiplication? (remember PEMDAS)", "Exponents", "Multiplication", true], ["Which comes first in the Order of Operations, Multiplication or Division? (remember PEMDAS)", "It's always multiplication", "It's is interchangable", false]]; 

function start() {
    if (cvs.getContext) {
        document.getElementById("start-btn").style.display = "none";
        const ctx = cvs.getContext("2d");
        const height = window.innerHeight - 20;
        const width = window.innerWidth - 20;
        const cHeight = cvs.height;
        const cWidth = cvs.width;
        cvs.height = height;
        cvs.width = width;
		ctx.fillStyle = "green";
		ctx.fillRect(0, 0, cvs.width, cvs.height);

        
        const startX = width / 2; 
        const startY = height / 2; 
        const endX = width / 2; 
        const endY = height; 

        
        ctx.beginPath();

        
        ctx.moveTo(startX, startY);

        
        ctx.lineTo(endX, endY);

        
        ctx.strokeStyle = "black";

        
        ctx.stroke();
		const idx = Math.floor(Math.random() * qtns.length);
		ctx.font = "25px Arial";
		ctx.fillStyle = "black";
		ctx.fillText(qtns[idx][0], 0.5*cWidth, 0.25*cHeight);
		ctx.fillText(qtns[idx][1], 0.2*cWidth, 0.6*cHeight);	
		ctx.fillText(qtns[idx][2], 0.7*cWidth, 0.6*cHeight);	
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
*/