const qtns = [["What is the prime factorization of 24", "(2^3)*3", "8x2", true], ["What is the prime factorization of 36", "2(2x3)", "2^2x3^2", false], ["What would x be in the equation: 3(x-5)+15=9", "3", "0", true], ["What is the prime factorization of 18?", "2x3^2", "9x2", true], ["A teacher shows the equation 6x+5^2= 25\nEvan says the first step would be to be to divide 25 by 6\nEric says the first step would be to find the value of 5^2\nWho is correct?", "Eric", "Evan", true], ["2^3 is equal to...", "6", "8", false], ["Edward pays 20 dollars for materials to make yummy donuts. He makes 10 donuts and sells 7 for 5 dollars and 3 for 2 dollars. What is Edward’s profit?", "21$", "41$", true]]
async function start() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("left").style.display = "inline-block";
    document.getElementById("right").style.display = "inline-block";
    document.getElementById("next").style.display = "inline-flex";
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
        const dil = await compareFirstClick();
        if (dil && qtns[idx][3]) {
            rg++
            q.innerText = "That's correct!";
        } else if (!dil && !qtns[idx][3]) {
            q.innerText = "That's correct!";
            rg++
        } else {
            q.innerText = "That's incorrect, " + ca + " was the correct answer";
	}
        await waitNextBtn();
        qtns.splice(idx, 1);
        if (qtns.length === 0) {
            qtnsNotNull = false;
        }
    }
    l.innerText = "";
    r.innerText = "";
    q.innerText = "Congratulations You finished the quiz with a score of " + Math.ceil((rg/qs) * 100).toFixed(2) + "%";
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "none";
    document.getElementById("next").style.display = "none";
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
function onButtonClick(buttonId) {
    const button = document.getElementById(buttonId);
    button.removeEventListener('click', onButtonClick);
    return buttonId;
}

function waitLeftClick() {
    return new Promise((resolve) => {
        const leftButton = document.getElementById("left");
        leftButton.addEventListener('click', () => resolve(onButtonClick(leftButton.id)));
    });
}

function waitRightClick() {
    return new Promise((resolve) => {
        const rightButton = document.getElementById("right");
        rightButton.addEventListener('click', () => resolve(onButtonClick(rightButton.id)));
    });
}

async function compareFirstClick() {
    try {
        // Use Promise.race to wait for the first of the two promises to resolve
        const result = await Promise.race([waitLeftClick(), waitRightClick()]);
        
        // Check which button was clicked first using an if statement
        if (result === 'left') {
            console.log("The left button was clicked first.");
            return true; // Return true if the left button was clicked
        } else if (result === 'right') {
            console.log("The right button was clicked first.");
            return false; // Return false if the right button was clicked
        } else {
            throw new Error("Unexpected result from Promise.race");
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return false; // Default to false if there's an error
    }
}

// Example usage
compareFirstClick().then(result => {
    console.log("Result:", result);
});
function waitNextBtn() {
    return new Promise((resolve) => {
        const nextButton = document.getElementById("next");
        nextButton.addEventListener('click', onButtonClick);
        
        function onButtonClick() {
            nextButton.removeEventListener('click', onButtonClick);
            resolve();
        }
    });
}