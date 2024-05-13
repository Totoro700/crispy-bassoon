const qtns = [["Which comes first in the Order of Operations, Exponents or Multiplication? (remember PEMDAS)", "Exponents", "Multiplication", true], ["Which comes first in the Order of Operations, Multiplication or Division? (remember PEMDAS)", "It's always multiplication", "It's is interchangable", false], ["What would be the first step in this equation: 3(x-5)", "Subtract 5 from x", "Distributive property", false], ["What would the simplification of this equation be? 3(x-5)", "3x-15", "3x-5", true], ["What is 3^2", "6", "9", false], ["What is the prime factorization of 24", "(2^3)*3", "8x2", true], ["What is the prime factorization of 36", "2(2x3)", "2^2x3^2", false]]
async function start() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("vl").style.display = "block";
    const q = document.getElementById("question");
    const l = document.getElementById("left");
    const r = document.getElementById("right");
    const qs = qtns.length;
    var rg = 0;
    var qtnsNotNull = true;
    while (qtnsNotNull) {
        const idx = Math.floor(Math.random() * qtns.length);
        q.innerText = qtns[idx][0];
        l.innerText = qtns[idx][1];
        r.innerText = qtns[idx][2];
        var ca = " ";
        if (qtns[idx][3]) {
            ca = qtns[idx][1];
        } else {
            ca = qtns[idx][2];
        }
        await waitDrn();
        if (dil && qtns[idx][3]) {
            rg++
            q.innerText = "That's correct!";
        } else if (!dil && !qtns[idx][3]) {
            q.innerText = "That's correct!";
        } else {
            q.innerText = "That's incorrect, " + ca + " was the correct answer";
	}
        await waitEtr();
        qtns.splice(idx, 1);
        if (qtns.length === 0) {
            qtnsNotNull = false;
        }
    }
    l.innerText = "";
    r.innerText = "";
    q.innerText = "Congratulations! You finished the quiz with a score of " + (rg/qs)*100 + "%";
}
var dil = false;
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
