class Shiritori{
    constructor(){
        this.words=[];
        this.gameOver=false;
    }
    play(word){
        if(this.gameOver){
            console.log("Game is over.Restart again");
            return;
        }
        if(!word || typeof word!=='string'){
            console.log("Invalid Input ,please enter valid input");
            return;
        }
        word=word.toLowerCase();
        if(this.words.includes(word)){
            console.log("Word has already been used.So game over");
            this.gameOver=true;
            return;
        }
        if(this.words.length>0){
            const lastWord=this.words[this.words.length-1];
            const lastChar=lastWord[lastWord.length-1];
            if(word[0]!==lastChar){
                console.log("Doesnt match,game over");
               
                this.gameOver=true;
                this.restart();
                return;
            }
        }
        this.words.push(word);
        console.log("accepted",word);
        console.log("previous word",this.words);
    }
    restart(){
        this.words=[];
        this.gameOver=false;
        console.log("game over play again");
    }
}
const game=new Shiritori();
game.play("sabuj");
game.play("jungle");
game.play("elephant");
game.play("talent");
game.play("iger"); 
game.play("Sabuj");