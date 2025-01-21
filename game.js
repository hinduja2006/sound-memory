document.querySelector('#start').addEventListener("click",sequence);
document.querySelector('#reset').addEventListener("click",reset);
var gamePattern=[];
var level=0;
var colors=["red","blue","yellow","green"];
function sequence(){
    var randomVar=Math.floor(Math.random()*4);
    gamePattern.push(colors[randomVar]);
    console.log(gamePattern);
    for (var i = 0; i < gamePattern.length; i++) {
        (function(i) {
            setTimeout(function() {
                $(`#${gamePattern[i]}`).fadeIn(100).fadeOut(100).fadeIn(100);
                var audio=new Audio('./sounds/'+gamePattern[i]+'.mp3');
                audio.play();
            }, i*600);  // Delay each color's fade effect to create sequence appearance
        })(i);
    }
}
    
    


 


userPattern=[];
var clicks=0;
gameOver=0;
var colorBtn=document.querySelectorAll('.colorButton');
for (var i=0;i<colorBtn.length;i++){
    document.querySelectorAll(".colorButton")[i].addEventListener('click',function(){

        $(`#${this.id}`).fadeIn(100).fadeOut(100).fadeIn(100);
        var audio=new Audio('./sounds/'+this.id+'.mp3');
        audio.play();
        userPattern.push(this.id);
        
        console.log(userPattern);
        clicks+=1;
        for (var j=0;j<clicks;j++)
        {
            if(userPattern[j]!=gamePattern[j])
            {

                alert("Game 0ver");
                var audio=new Audio('./sounds/wrong.mp3');
                audio.play();
                
                gameOver++;
                reset();
                break;
            }
        }
        if(clicks==level+1)
        {
            updateLevel();
            clicks=0;
        }
    })
}





function updateLevel(){
    if(gameOver==0)
    {
        level+=1;
        document.querySelector('#level').innerHTML=`Level: ${level}`;
        setTimeout(sequence,1000);
        userPattern=[];
    }
}

function reset(){
    level=0;
    document.querySelector('#level').innerHTML=`Level: ${level}`;
    clicks=0;
    userPattern=[];
    gamePattern=[];
    gameOver=0;

}






