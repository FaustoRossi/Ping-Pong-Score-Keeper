const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const resetBtn = document.querySelector('#resetBtn')
const puntos = document.querySelector('#puntos')

let player1Score = 0;
let player2Score = 0;
let winningScore = 3;
let isGameOver = false;

player1.addEventListener('click', function(){
    if(!isGameOver){
        player1Score += 1;
    
    if(player1Score === winningScore){
        isGameOver = true;
        p1Score.classList.add('winner');
        p2Score.classList.add('loser');
        player1.disabled= true;
        player2.disabled=true;
    }
    
    p1Score.textContent = player1Score;
}
    })

    player2.addEventListener('click', function(){
        if(!isGameOver){
            player2Score += 1;
        
        if(player2Score === winningScore){
            isGameOver = true;
            p2Score.classList.add('winner');
            p1Score.classList.add('loser');
            player1.disabled= true;
            player2.disabled=true;
        }
        
        p2Score.textContent = player2Score;
    }
        })

        

         puntos.addEventListener('change', function(){
             winningScore = parseInt(this.value);
              reset();
          })

        resetBtn.addEventListener('click',reset)
        
        function reset(){
            isGameOver = false;
            player1Score = 0;
            player2Score = 0;
            p1Score.textContent = 0;
            p2Score.textContent = 0;
            p1Score.classList.remove('winner', 'loser');
            p2Score.classList.remove('loser', 'winner');
            player1.disabled= false;
            player2.disabled= false;
        }

    