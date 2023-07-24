import TicTacToe from "./TicTacToe.js"

class TwoPlayerMode extends TicTacToe{
    constructor(){
        super()

    }

    select(x){
        if(this.fields[x]===-1 && this.gameActive===true){
            if(this.turn===0){
                document.getElementById("field"+x).innerHTML="<span class='mark'>x</span>"
                document.getElementById("field"+x).style="cursor:default;"
                this.turn=1
                this.fields[x]=1
                document.getElementById("who").innerHTML="O"
                document.getElementById("info").innerHTML=""
            }
            else if(this.turn===1){
                document.getElementById("field"+x).innerHTML="<span class='mark'>o</span>"
                document.getElementById("field"+x).style="cursor:default;"
                this.turn=0
                this.fields[x]=0
                document.getElementById("who").innerHTML="X"
                document.getElementById("info").innerHTML=""
            }
        }
        else if(this.gameActive==false){
            document.getElementById("info").innerHTML="Game ended, play again!"
        }
        else{
            document.getElementById("info").innerHTML="The field is already occupied!"
        }

        this.whowins()
    }
        

}

const game = new TwoPlayerMode()