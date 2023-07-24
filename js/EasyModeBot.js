import TicTacToeBot from "./TicTacToeBot.js"

class EasyModeBot extends TicTacToeBot{
    constructor(){
        super()
    }

    selectBot(){

        if(this.gameActive){
            let isAvailable = false 

            if(this.checkWin(0)){
                isAvailable = true
            }
            else if(this.checkWin(1)){
                isAvailable = true
            }

            while(isAvailable===false){

                this.botMov = Math.floor(Math.random() * 9);
                if(this.fields[this.botMov] === -1){
                    
                    isAvailable = true
                    
                }
                else if (this.fields.every((field) => field !== -1)) {
                    // If  all squares are filled, terminate the game 
                    this.gameActive = false
                    break
                }
                
            }
            if(this.gameActive){
                document.getElementById("field"+this.botMov).innerHTML="<span class='mark'>o</span>"
                this.turn=0
                this.fields[this.botMov]=0
                document.getElementById("field"+this.botMov).style="cursor:default;"
            }
            this.whowins()
        }
    }

    

}

const game = new EasyModeBot()