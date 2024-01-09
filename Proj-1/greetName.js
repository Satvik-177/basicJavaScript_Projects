const btn = document.querySelector(".btn")

btn .addEventListener("click",()=>{

    const nameField = document.getElementById("userName")
    const userName = nameField.value;

    if(userName !== ""){

        const h2 = document.createElement("h2")
        h2.textContent = `Hi ${userName}`
        h2.style.color="#fff"
        h2.style.textAlign="center"
        document.body.append(h2)
    }

    else {

        const p = document.createElement("p")
        p.textContent = "Please fill out the field"
        p.style.color="red"
        p.style.fontSize="20px"
        document.body.prepend(p)
    }
    
})