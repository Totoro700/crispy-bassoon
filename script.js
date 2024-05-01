function start() {
    const cvs = document.getElementById("c");
    if (cvs.getContext) {
        document.getElementById("start-btn").style.display = "none";
        const ctx = cvs.getContext("2d");
        const height = window.innerHeight - 20;
        const width = window.innerWidth - 20;
        cvs.height = height;
        cvs.width = width;

        // Calculate coordinates for the line
        const startX = width / 2; // middle of the screen horizontally
        const startY = height / 2; // top of the screen
        const endX = width / 2; // middle of the screen horizontally
        const endY = height; // bottom of the screen

        // Begin drawing
        ctx.beginPath();

        // Move the cursor to the starting point
        ctx.moveTo(startX, startY);

        // Draw a line to the ending point
        ctx.lineTo(endX, endY);

        // Set line color to black
        ctx.strokeStyle = "black";

        // Draw the line
        ctx.stroke();
    }
}