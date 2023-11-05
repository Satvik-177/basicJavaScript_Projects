const btnEl = document.getElementById("submit-button");
        let scoreEl = document.getElementById("score-display");
        let questionEl = document.getElementById("question-display");
        let answerEl = document.getElementById("answer");
        let messageDisplay = document.querySelector(".message");
        let res = 0;
        let score = 0;

        const updateQuestion = ()=> {
            
            let number1 = Math.floor((Math.random()*10)+1);
            let number2 = Math.floor((Math.random()*10)+1);
            res = number1*number2;

            questionEl.innerHTML = `Q. Value of ${number1} multiplied by ${number2}`;
            answerEl.value = "";
            scoreEl.innerHTML = `Score: ${score}`;
 
        }

        const answerCheck = () => {
             
            
             let finalanswer = parseFloat(answerEl.value);

             if(res === finalanswer){

                  score++;
                  messageDisplay.innerHTML=`Correct answer`
             } 
             
             else if(score !==0) {

                  score--;
                  messageDisplay.innerHTML=`wrong answer`
             
             }
             
              scoreEl.innerHTML = `Score: ${score}`;
              updateQuestion();
             
        }
    
        const displayInitially = ()=> {

            updateQuestion();
            btnEl.addEventListener('click',answerCheck);
        }
        
        displayInitially();
   
        