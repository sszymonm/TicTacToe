export default class TicTacToe{
    constructor(){
        this.turn =0
        this.fields = new Array(9).fill(-1)
        this.gameActive = false
        this.initGameRef = this.initGame.bind(this); 
        this.buttonStart = document.getElementById("button-start")
        this.buttonStart.addEventListener("click", this.initGameRef )
        this.fieldsElement = document.getElementsByClassName("field");
        
    }

    whowins(){

        if(this.gameActive==true){
            //winning condition
            if(this.fields[0]===this.fields[1] && this.fields[1]===this.fields[2] && this.fields[0]!==-1 || 
                this.fields[3]===this.fields[4] && this.fields[4]===this.fields[5] && this.fields[4]!==-1 || 
                this.fields[6]===this.fields[7] && this.fields[7]===this.fields[8] && this.fields[6]!==-1 ||
                this.fields[0]===this.fields[3] && this.fields[3]===this.fields[6] && this.fields[0]!==-1 ||
                this.fields[1]===this.fields[4] && this.fields[4]===this.fields[7] && this.fields[1]!==-1 || 
                this.fields[2]===this.fields[5] && this.fields[5]===this.fields[8] && this.fields[2]!==-1 ||
                this.fields[0]===this.fields[4] && this.fields[4]===this.fields[8] && this.fields[0]!==-1 || 
                this.fields[2]===this.fields[4] && this.fields[4]===this.fields[6] && this.fields[2]!==-1){
                       
                document.getElementById("button-start").value="Play again!"

                
                Array.from(this.fieldsElement).forEach(function(el) {
                    el.style.cursor = "default";
                });
                //Whose turn was it 
                if(this.turn===0) document.getElementById("what").innerHTML="<p>O won!</p>"
                else if(this.turn===1) document.getElementById("what").innerHTML="<p>X won!</p>"
                
                this.gameActive=false
            }

        }
        if(this.gameActive===true && this.fields[0]!==-1 && this.fields[1]!==-1 && this.fields[2]!==-1 && this.fields[3]!==-1 && this.fields[4]!==-1 && this.fields[5]!==-1 && this.fields[6]!==-1 && 
            this.fields[7]!==-1 && this.fields[8]!==-1){
                document.getElementById("what").innerHTML="Draw"
                document.getElementById("button-start").value="Play again"
                this.gameActive=false
        }

    }

    

    initGame(){

        const fieldsElements = document.querySelectorAll('.field')
    
        console.log("czy sie wykonujesz")
        fieldsElements.forEach((el, index) => {
            el.addEventListener('click', () => {
            
            this.select(index)
              })
        })
    
        this.gameActive=true
        this.turn = 0
        
        this.buttonStart.value="Reset"

        this.buttonStart.removeEventListener("click", this.initGameRef);
        this.buttonStart.addEventListener("click", () => this.resetGame())
    
    }

    resetGame(){

        //reset the board and remove its content
        const fieldElements = document.querySelectorAll(".field")
        fieldElements.forEach((el) => {
          el.style = "cursor:pointer;" // Restore the cursor
          el.innerHTML = "" 
        })
        this.gameActive = true
        this.turn = 0
    
        this.buttonStart.value="Reset"
        this.fields.fill(-1)
        
        document.getElementById("turn").innerHTML="<p id='what'> Tic-tac-toe <span id='who'></span></p>"
        document.getElementById("info").innerHTML=""
        
    }

}