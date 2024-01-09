const numberofWords = document.getElementById("numOfwords")
const btn = document.getElementById("btn")

const generateWord = (n)=> {

     let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     let word = ""

     for(let i=0; i<n; i++){
        
        let randomInd = (Math.random()*25).toFixed(0)
        word += alpha[randomInd]
     }

     return word;
}

const randomColor = ()=> {

    let hexColorString = "123456789ABCDEF"
    let randomColor = "#";

    for(let i=0; i<6; i++){
        
        let randomIndex = (Math.random()*15).toFixed(0);

        randomColor += hexColorString[randomIndex];
    }

    return randomColor;
}

const generatePara = ()=>{

    const container = document.querySelector(".container")
    const words = numberofWords.value;
    
    const para = document.createElement("p")
    let data = "";

    for(let i=0; i<words; i++){

        const randomNumber = (Math.random()*15).toFixed(0);
        data += generateWord(randomNumber)
        data += " ";
    }

    para.innerText = data;
    para.style.color = randomColor();

    para.setAttribute("class","paras")
    container.append(para)
  }

btn.addEventListener("click",()=>{

    generatePara();
    numberofWords=""

})