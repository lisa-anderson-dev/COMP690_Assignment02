let coinFlip = Math.round(Math.random());
let choice = prompt('Enter Heads or Tails (h=heads, t=tails');

if (!choice || (choice !== 'h' && choice !== 't')) {
    alert('Invalid input - you did not enter h for Heads or t for Tails');
} else if (coinFlip < 1) {
    if (choice === 'h') {
        alert('The flip was heads and you chose heads...you win!');
    } else {
        alert('The flip was heads but you chose tails...you lose!');
    }
} else {
    if (choice === 'h') {
        alert('The flip was tails but you chose heads...you lose!');
    } else {
        alert('The flip was tails and you chose tails...you win!');
    }
}