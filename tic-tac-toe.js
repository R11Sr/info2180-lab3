
document.addEventListener("DOMContentLoaded", function(event) {
    let allsquares = document.getElementById('board');
    let children = allsquares.childNodes;

    // Exercise 1
    
    [...children].forEach((e) =>{e.className = 'square';});


    // Exercise 2
    let choice = 0;


    const boardArray = Array.from(document.querySelectorAll('.square'));

    const combinationsToWin = [
        [2,5,8],
        [1,4,7],
        [0,3,6],
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6]
    ];
    
    [...children].forEach((e) => 
    {e.addEventListener("click",function (e){
                if (choice%2 == 0)
                {
                   if(e.target.textContent == '') {

                       e.target.textContent = 'X';
                       e.target.className += ' X';
                       choice++;
                       checkForWinner();
                   }
                }
                else 
                {
                    if(e.target.textContent == '') {
                       
                        e.target.textContent = 'O';
                        e.target.className += ' O';
                        choice++;
                        checkForWinner();
                    }
                }
            }
    
        );
    
      }
    
    );
    

    // Exercise 3
    [...children].forEach((e) =>{
        e.addEventListener("mouseover",function(e){
            e.target.className += " hover";
        })

        e.addEventListener("mouseout",function(e){
            e.target.classList.remove("hover");
        })

    });

    //Exercise 4
    function checkForWinner(){
       
        let pos0value , pos1value , pos2value;
        
        combinationsToWin.forEach((combo)=>{
            
            //Asign values or assign 
            if(boardArray[combo[0]].hasChildNodes()){
                
                pos0value = boardArray[combo[0]].childNodes[0].textContent

            }
            else{
                pos0value ='';
            }
        
            if ( boardArray[combo[1]].hasChildNodes()){

                pos1value = boardArray[combo[1]].childNodes[0].textContent

            } 
            else{
                pos1value ='';
                
            }
        
            if(boardArray[combo[2]].hasChildNodes()){
                
                pos2value = boardArray[combo[2]].childNodes[0].textContent

            }
            else{
                pos2value ='';
                
            }
        

            // check only if spaces have been filled 
            if(pos1value !== '' && pos2value !== '' && pos2value !== '')
            {

                if (pos0value == pos1value && pos1value == pos2value)
                {

                    
                    let winnerNotification = document.getElementById('status');
                    winnerNotification.textContent = `Congratulations! ${pos1value} is the Winner!`
                    winnerNotification.classList += "you-won";

                }
            }
        });

    }


    // Exercise 5
    let btn = document.getElementsByClassName("btn")[0];

    btn.addEventListener("click",resetGame);

    function resetGame(){
        document.querySelectorAll('.square').forEach((e) => {
            e.classList.remove("X");
            e.classList.remove("O");
            e.textContent = '';            

        })
    }

    // Exercise 6
    // Altered code in Ex 2


});





