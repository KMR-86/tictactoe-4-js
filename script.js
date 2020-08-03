if( document.readyState !== 'loading' ) {
    console.log( 'document is already ready, just execute code here' );
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log( 'document was not ready, place code here' );
        myInitCode();
    });
}
let click_count=0;
let width = 10;
let bombAmount = 20;
let flags = 0;
let squares = [];
let isGameOver = false;
let is_clicked = Array(100).fill(0);
var moves = new Array(width);

for (var i = 0; i < moves.length; i++) {
  moves[i] = new Array(width);
}

function change_color() {
    grid=document.querySelector(".grid");
    grid.style.background="green";
    
    grid.addEventListener('click',()=>{
        if(click_count%2==0){
            grid.style.background="red";
            
        }
        else{
            grid.style.background="green";
        }
        click_count++;
        
    })
}
function check_game_result(){
    
}
function createBoard() {

    
    grid=document.querySelector(".grid");
    for(let i = 0; i < 10*10; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      grid.appendChild(square)
     

      //normal click
      square.addEventListener('click', function(e) {
        
        if(is_clicked[square.id]==0){
            if(click_count%2==0){
                //square.style.background="red";

                square.innerHTML="X";
                is_clicked[square.id]=1;
                console.log((Math.floor(square.id/10)));
                moves[Math.floor(square.id/10)][(square.id)%10]="X";

            }
            else{
                //square.style.background="green";
                square.innerHTML="O";
                is_clicked[square.id]=1;
                
                moves[Math.floor(square.id/10)][(square.id)%10]="O";

            }
            click_count++;
        }
        console.log(moves[0]);
        
      })

      
    }
}

function myInitCode() {
    //change_color();

    
    createBoard();
}

