class UI{
    constructor(){    
    }


    static showMessage(msg, container){
        if(!document.querySelector(".message")){
            const pMsg = document.createElement('p')
            pMsg.innerHTML = msg
            pMsg.style.color = "red"
            pMsg.className = "message"
            container.appendChild(pMsg)

            setTimeout(()=>{
                container.removeChild(pMsg)
            }, 2000)
        }

        
        
    }
}

export default UI