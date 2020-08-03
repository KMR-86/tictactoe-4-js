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
let winner="n";
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
    for(i=0;i<width-3;i++){
        for(j=0;j<width;j++){
            if((moves[i][j]=="X"|| moves[i][j]=="O") && moves[i][j]==moves[i+1][j] && moves[i][j]==moves[i+2][j] && moves[i][j]==moves[i+3][j]){
                winner=moves[i][j];
            }
        }
    }

    for(i=0;i<width;i++){
        for(j=0;j<width-3;j++){
            if((moves[i][j]=="X"|| moves[i][j]=="O") && moves[i][j]==moves[i][j+1] && moves[i][j]==moves[i][j+2] && moves[i][j]==moves[i][j+3]){
                winner=moves[i][j];
            }
        }
    }

    for(i=0;i<width-3;i++){
        for(j=0;j<width-3;j++){
            if((moves[i][j]=="X"|| moves[i][j]=="O") && moves[i][j]==moves[i+1][j+1] && moves[i][j]==moves[i+2][j+2] && moves[i][j]==moves[i+3][j+3]){
                winner=moves[i][j];
            }
        }
    }

    for(i=width-4;i>=0;i--){
        for(j=width-1;j>2;j--){
            if((moves[i][j]=="X"|| moves[i][j]=="O") && moves[i][j]==moves[i+1][j-1] && moves[i][j]==moves[i+2][j-2] && moves[i][j]==moves[i+3][j-3]){
                winner=moves[i][j];
            }
        }
    }


}

function reset_board(){

    for(let i=0;i<width*width;i++){
        square=document.getElementById(i);
        square.innerHTML="";
        is_clicked[i]=0;

    }
    winner="n";
    for(let i=0;i<width;i++){
        for(let j=0;j<width;j++){
            moves[i][j]="";
        }
    }
    click_count=0;
    result.innerHTML="";



}
function createBoard() {

    
    grid=document.querySelector(".grid");
    for(let i = 0; i < 10*10; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      grid.appendChild(square)
     

      //normal click
      square.addEventListener('click', function(e) {
        
        if(is_clicked[square.id]==0 && winner=="n"){
            if(click_count%2==0 ){
                //square.style.background="red";

                square.innerHTML="X";
                is_clicked[square.id]=1;
                console.log((Math.floor(square.id/10)));
                moves[Math.floor(square.id/10)][(square.id)%10]="X";
                check_game_result();
                if(winner!="n"){
                    result=document.querySelector(".result");
                    result.innerHTML="the winner is "+winner;
                }

            }
            else{
                //square.style.background="green";
                square.innerHTML="O";
                is_clicked[square.id]=1;
                
                moves[Math.floor(square.id/10)][(square.id)%10]="O";
                check_game_result();

                
                if(winner!="n"){
                    result=document.querySelector(".result");
                    result.innerHTML="the winner is "+winner;
                }

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

