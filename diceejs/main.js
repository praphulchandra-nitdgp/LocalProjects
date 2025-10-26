function rollDice() {
    // Function to show dots based on random number
    function showDots(diceId, randomNumber) {
        // Hide all dots initially
        const dots = document.querySelectorAll(`#${diceId} .dot`);
        dots.forEach(dot => dot.style.display = 'none');

        // Show specific dots based on the random number
       
        switch (randomNumber) {
            case 1:
                document.getElementById(`dot3-${diceId}`).style.display = 'block'; // Center dot
                break;
            case 2:
                document.getElementById(`dot1-${diceId}`).style.display = 'block'; // Top-left
                document.getElementById(`dot5-${diceId}`).style.display = 'block'; // Bottom-right
                break;
            case 3:
                document.getElementById(`dot1-${diceId}`).style.display = 'block'; // Top-left
                document.getElementById(`dot3-${diceId}`).style.display = 'block'; // Center
                document.getElementById(`dot5-${diceId}`).style.display = 'block'; // Bottom-right
                break;
            case 4:
                document.getElementById(`dot1-${diceId}`).style.display = 'block'; // Top-left
                document.getElementById(`dot2-${diceId}`).style.display = 'block'; // Top-right
                document.getElementById(`dot4-${diceId}`).style.display = 'block'; // Bottom-left
                document.getElementById(`dot5-${diceId}`).style.display = 'block'; // Bottom-right
                break;
            case 5:
                document.getElementById(`dot1-${diceId}`).style.display = 'block'; // Top-left
                document.getElementById(`dot2-${diceId}`).style.display = 'block'; // Top-right
                document.getElementById(`dot3-${diceId}`).style.display = 'block'; // Center
                document.getElementById(`dot4-${diceId}`).style.display = 'block'; // Bottom-left
                document.getElementById(`dot5-${diceId}`).style.display = 'block'; // Bottom-right
                break;
            case 6:
                document.getElementById(`dot1-${diceId}`).style.display = 'block'; // Top-left
                document.getElementById(`dot2-${diceId}`).style.display = 'block'; // Top-right
                document.getElementById(`dot4-${diceId}`).style.display = 'block'; // Bottom-left
                document.getElementById(`dot5-${diceId}`).style.display = 'block'; // Bottom-right
                document.getElementById(`dot6-${diceId}`).style.display = 'block'; // Middle-left
                document.getElementById(`dot7-${diceId}`).style.display = 'block'; // Middle-right
                break;
        }
    }

    // Get random numbers for both dice
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    if(randomNumber1>randomNumber2) {
        document.getElementById(`player1`).style.display = 'block';
        document.getElementById(`player2`).style.display = 'none';
        document.getElementById(`tie`).style.display = 'none';

     }else if(randomNumber1<randomNumber2) {
        document.getElementById(`player2`).style.display = 'block';
        document.getElementById(`player1`).style.display = 'none';
        document.getElementById(`tie`).style.display = 'none';
     }else{
        document.getElementById(`tie`).style.display = 'block';
        document.getElementById(`player2`).style.display = 'none';
        document.getElementById(`player1`).style.display = 'none';
     }
    // Display dots for each dice
    showDots('dice1', randomNumber1);
    showDots('dice2', randomNumber2);
}
