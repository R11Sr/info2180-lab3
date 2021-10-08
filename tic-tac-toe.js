
document.addEventListener("DOMContentLoaded", function(event) {
    let allsquares = document.getElementById('board');
    let children = allsquares.childNodes;

    // Exercise 1
    
    [...children].forEach((e) =>{e.className = 'square';});


    // Exercise 2
    let choice = 0;


    const boardArray = Array.from(document.querySelectorAll('.square'));

    const conbinationsToWin = [
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
                   
                    e.target.textContent = 'X';
                    e.target.className += ' X';
                    choice++;
                }
                else 
                {
                    e.target.textContent = 'O';
                    e.target.className += ' O';
                    choice++;
                }
            }
    
        );
    
      }
    
    );
    


});





