import TicTacToeBot from "./TicTacToeBot.js"

class HardModeBot extends TicTacToeBot{
    constructor(){
        super()
        this.playerMov = null
    }


    

    selectBot(){

        if(this.gameActive){
            let goodChoice = false
            let isAvailable = false 

            if(this.fields[4] === -1){
                this.botMov = 4 
                goodChoice = true        
            }

            else if(this.checkWin(0)){
                goodChoice = true
            }

            else if(this.checkWin(1)){
                goodChoice = true
            }

            else if(this.fields[0] === 1 && this.fields[8] === 1 && (this.fields[1] === -1 || this.fields[3] === -1 || this.fields[5] === -1 || this.fields[7] === -1)){
                while(goodChoice == false){
                    let AvailableMov = [1,3,5,7]
                    let randomNum = Math.floor(Math.random() * AvailableMov.length)
                    let isPossible = AvailableMov[randomNum]
                    if(this.fields[isPossible] != -1){
                        break
                    }
                    else{
                        this.botMov = isPossible
                        goodChoice = true
                        isAvailable=true
                    }
                }
            }

            else if(this.fields[2] === 1 && this.fields[6] === 1 && (this.fields[1] === -1 || this.fields[3] === -1 || this.fields[5] === -1 || this.fields[7] === -1)){
                while(goodChoice === false){
                    let AvailableMov = [1,3,5,7]
                    let randomNum = Math.floor(Math.random() * AvailableMov.length)
                    let isPossible = AvailableMov[randomNum]
                    if(this.fields[isPossible] != -1){
                        break
                    }
                    else{
                        this.botMov = isPossible
                        goodChoice = true
                        isAvailable=true
                    }
                }
            }

            // chec zwyciestwa gdy x 1,7 lub 3,5

            else if(this.fields[1] === 1 && this.fields[7] === 1 && (this.fields[0] === -1 || this.fields[2] === -1 || this.fields[6] === -1 || this.fields[8] === -1)){
                while(goodChoice == false){
                    let AvailableMov = [0,2,6,8]
                    let randomNum = Math.floor(Math.random() * AvailableMov.length)
                    let isPossible = AvailableMov[randomNum]
                    if(this.fields[isPossible] != -1){
                        break
                    }
                    else{
                        this.botMov = isPossible
                        goodChoice = true
                        isAvailable=true
                    }
                }
            }

                
            else if(this.fields[3] === 1 && this.fields[5] === 1 && (this.fields[0] === -1 || this.fields[2] === -1 || this.fields[6] === -1 || this.fields[8] === -1)){
                while(goodChoice === false){
                    let AvailableMov = [0,2,6,8]
                    let randomNum = Math.floor(Math.random() * AvailableMov.length)
                    let isPossible = AvailableMov[randomNum]
                    if(this.fields[isPossible] !== -1){
                        break
                    }
                    else{
                        this.botMov = isPossible
                        goodChoice = true
                        isAvailable=true
                    }
                }
            }


            //sprawdzenie kombinowania x1 i x7

            else if(this.fields[0] === 1 && this.fields[7] === 1 && this.fields[6] === -1){
                this.botMov = 6
                goodChoice = true
            }

            else if(this.fields[0] === 1 && this.fields[7] === 1 && this.fields[3] === -1){
                this.botMov = 3
                goodChoice = true
            }


            //to samo tylko x2 i x7

            else if(this.fields[2] === 1 && this.fields[7] === 1 && this.fields[8] === -1){
                this.botMov = 8
                goodChoice = true
            }

            else if(this.fields[2] === 1 && this.fields[7] === 1 && this.fields[5] === -1){
                this.botMov = 5
                goodChoice = true
            }

            //to samo tylko x1 i x8

            else if(this.fields[1] === 1 && this.fields[8] === 1 && this.fields[2] === -1){
                this.botMov = 2
                goodChoice = true
            }
                
            else if(this.fields[1] === 1 && this.fields[8] === 1 && this.fields[6] === -1){
                this.botMov = 6
                goodChoice = true
            }

            //to samo tylko x1 i x6


            else if(this.fields[1] === 1 && this.fields[6] === 1 && this.fields[5] === -1){
                this.botMov = 5
                goodChoice = true
            }
                
            else if(this.fields[1] === 1 && this.fields[8] === 1 && this.fields[6] === -1){
                this.botMov = 6
                goodChoice = true
            }


            // || x ||
            //  x  o || 

            else if(this.fields[1] === 1 && this.fields[3] === 1 && this.fields[0] === -1){
                this.botMov = 0
                goodChoice = true
            }

            else if(this.fields[1] === 1 && this.fields[5] === 1 && this.fields[2] === -1){
                this.botMov = 2
                goodChoice = true
            }

            else if(this.fields[5] === 1 && this.fields[7] === 1 && this.fields[8] === -1){
                this.botMov = 8
                goodChoice = true
            }

            else if(this.fields[3] === 1 && this.fields[7] === 1 && this.fields[6] === -1){
                this.botMov = 6
                goodChoice = true
            }


            else if(this.fields[2] === 1 && this.fields[3] === 1 && this.fields[0] === -1){
                this.botMov = 0
                goodChoice = true
            }

            else if(this.fields[3] === 1 && this.fields[8] === 1 && this.fields[6] === -1){
                this.botMov = 6
                goodChoice = true
            }

            else if(this.fields[5] === 1 && this.fields[6] === 1 && this.fields[8] === -1){
                this.botMov = 8
                goodChoice = true
            }

            else if(this.fields[0] === 1 && this.fields[5] === 1 && this.fields[2] === -1){
                this.botMov = 2
                goodChoice = true
            }

            else if(goodChoice===false){

                while(this.playerMov===4 && goodChoice === false && (this.fields[0] === -1 || this.fields[2] === -1 || this.fields[6] === -1 || this.fields[8] === -1)){
                            
                    let AvailableMov = [0,2,6,8]
                    let randomNum = Math.floor(Math.random() * AvailableMov.length)                
                    let isPossible = AvailableMov[randomNum]
                    if(this.fields[isPossible] != -1){
                        break
                    }
                    else{
                        this.botMov = isPossible
                        goodChoice = true
                        isAvailable=true
                    }
                }
            }

            while(goodChoice===false){
                this.botMov = Math.floor(Math.random() * 9);
                if(this.fields[this.botMov] === -1){    
                    goodChoice = true          
                }
                else if (this.fields.every((field) => field !== -1)) {
                    // If  all squares are filled, terminate the game 
                    this.gameActive = false
                    break
                }
                
            }
            
            if(this.gameActive){
                document.getElementById("field"+this.botMov).innerHTML="<span class='mark'>o</span>"
                document.getElementById("field"+this.botMov).style="cursor:default;"
                this.turn=0
                this.fields[this.botMov]=0
            }
            this.whowins()
        }
    }

}

const game = new HardModeBot()