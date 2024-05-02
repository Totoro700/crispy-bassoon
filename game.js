var dil;
const cvs = document.getElementById("c");
const qtns = []; 

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


		ctx.font = "48px serif";
		ctx.strokeText("test", 0.25*cWidth,0.33*cHeight);
		
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

