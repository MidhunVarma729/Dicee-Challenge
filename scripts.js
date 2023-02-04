randomNumber1 = Math.floor(Math.random()*6) + 1;
dice1 = document.querySelector('.img1');
dice1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');

randomNumber2 = Math.floor(Math.random()*6) + 1;
dice2 = document.querySelector('.img2');
dice2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

heading = document.querySelector('h1')
if(randomNumber1 > randomNumber2)
    heading.innerHTML = "🎆Player 1 Wins!";
else if(randomNumber2 > randomNumber1)
    heading.innerHTML = "Player 2 Wins!🎆";
else
    heading.innerHTML = "Draw🎭";

    