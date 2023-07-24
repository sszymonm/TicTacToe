import TicTacToe from "./TicTacToe.js"

export default class BotMode extends TicTacToe{
    constructor(){
        super()
        this.botMov = 0
    }

    checkWin(player){
        let move = false
        if(this.fields[0] === player && this.fields[2] === player && this.fields[1] === -1){
            this.botMov=1
            move = true
        }

        else if(this.fields[0] === player && this.fields[1] === player && this.fields[2] === -1){
            this.botMov=2
            move = true
        }

        else if(this.fields[1] === player && this.fields[2] === player && this.fields[0] === -1){
            this.botMov=0
            move = true
        }

        //boczny tor - lewo

        else if(this.fields[0] === player && this.fields[6] === player && this.fields[3] === -1){
            this.botMov=3
            move = true
        }

        else if(this.fields[0] === player && this.fields[3] === player && this.fields[6] === -1){
            this.botMov=6
            move = true
        }

        else if(this.fields[3] === player && this.fields[6] === player && this.fields[0] === -1){
            this.botMov = 0
            move = true
        }

        //dolny tor

        else if(this.fields[6] === player && this.fields[7] === player && this.fields[8] === -1){
            this.botMov=8
            move = true
        }

        else if(this.fields[6] === player && this.fields[8] === player && this.fields[7] === -1){
            this.botMov=7
            move = true
        }

        else if(this.fields[7] === player && this.fields[8] === player && this.fields[6] === -1){
            this.botMov = 6
            move = true
        }

        //boczny tor prawo

        else if(this.fields[2] === player && this.fields[5] === player && this.fields[8] === -1){
            this.botMov=8
            move = true
        }

        else if(this.fields[2] === player && this.fields[8] === player && this.fields[5] === -1){
            this.botMov=5
            move = true
        }

        else if(this.fields[5] === player && this.fields[8] === player && this.fields[2] === -1){
            this.botMov = 2
            move = true
        }

        //tor przez srodek od "0"

        else if(this.fields[0] === player && this.fields[4] === player && this.fields[8] === -1){
            this.botMov=8
            move = true
        }

        else if(this.fields[0] === player && this.fields[8] === player && this.fields[4] === -1){
            this.botMov=4
            move = true
        }

        else if(this.fields[4] === player && this.fields[8] === player && this.fields[0] === -1){
            this.botMov = 0
            move = true
        }

        // tor przez srodek od "2"
        else if(this.fields[2] === player && this.fields[4] === player && this.fields[6] === -1){
            this.botMov=6
            move = true
        }

        else if(this.fields[2] === player && this.fields[6] === player && this.fields[4] === -1){
            this.botMov=4
            move = true
        }

        else if(this.fields[4] === player && this.fields[6] === player && this.fields[2] === -1){
            this.botMov = 2
            move = true
        }

        // tor przez srodek od 3


        else if(this.fields[3] === player && this.fields[4] === player && this.fields[5] === -1){
            this.botMov=5
            move = true
        }
        
        else if(this.fields[3] === player && this.fields[5] === player && this.fields[4] === -1){
            this.botMov=4
            move = true
        }
        
        else if(this.fields[4] === player && this.fields[5] === player && this.fields[3] === -1){
            this.botMov = 3
            move = true
        }

        //tor przez srodek od 1

        else if(this.fields[1] === player && this.fields[4] === player && this.fields[7] === -1){
            this.botMov=7
            move = true
        }
        
        else if(this.fields[1] === player && this.fields[7] === player && this.fields[4] === -1){
            this.botMov=4
            move = true
        }
        
        else if(this.fields[4] === player && this.fields[7] === player && this.fields[1] === -1){
            this.botMov = 1
            move = true
        }
        return move
    }

    select(x){
        let isBotMove = true
        if(this.fields[x]==-1 && this.gameActive==true){
                document.getElementById("field"+x).innerHTML="<span class='mark'>x</span>"
                document.getElementById("field"+x).style="cursor:default;"
                this.turn=1
                this.fields[x]=1
                this.playerMov = x
                document.getElementById("info").innerHTML=""
        }
        else if(this.gameActive==false){
            document.getElementById("info").innerHTML="Game ended, play again!"
        }
        else{
            document.getElementById("info").innerHTML="The field is already occupied!"
            isBotMove = false
        }

        if(isBotMove){
            this.whowins()

            this.selectBot()
        }
    }
}