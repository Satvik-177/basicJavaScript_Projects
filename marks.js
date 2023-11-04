const btnEl = document.getElementById('btn');
        const hindimarks = document.getElementById('hindi');
        const mathsmarks = document.getElementById('maths');
        const englishmarks = document.getElementById('english');
        const sciencemarks = document.getElementById('science');
        const perDisplay = document.querySelector('#results');
        
        
        const calcPercentage = () => {
            
            if(isNaN(parseFloat(hindimarks.value)) || isNaN(parseFloat(mathsmarks.value)) || isNaN(parseFloat(sciencemarks.value)) || isNaN(parseFloat(englishmarks.value))){

                perDisplay.innerHTML=`Please enter valid marks`;
            }

           else { 
            
            const marksTotal = parseFloat(hindimarks.value)+ 
                               parseFloat(mathsmarks.value)+ 
                               parseFloat(sciencemarks.value)+
                               parseFloat(englishmarks.value); 
            
            const maxMarks = 400;
            
            const percentage = Math.round(marksTotal/4);
            
                perDisplay.innerHTML=`Your total marks is ${marksTotal} out of ${maxMarks} and percentage is ${percentage} %`;
            
            } 
        }

        

    btnEl.addEventListener('click',calcPercentage);
