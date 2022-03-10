const address = `http://localhost:3000/`
const connectionStatus = document.getElementById("status");

startBtn.addEventListener("click", comunicate);

function comunicate() {
    fetch(address+"delayrequest")
        .then(responseObject=>responseObject.text())
        .then(responseText=>{
            connectionStatus.innerHTML = responseText;
            if (responseText === "Connection Established"){
                document.body.style.backgroundColor = "rgb(189,236,182)";
            } else if (responseText === 'Requisição Atendida'){
                document.body.style.backgroundColor = "rgb(150,207,190)";
            } else if (responseText === 'Requisição Falhou (TimeOut)'){
                document.body.style.backgroundColor = "rgb(255,105,97)";
                setTimeout(() => {
                    document.body.style.backgroundColor = "rgb(254, 253, 150)";
                    connectionStatus.innerHTML = "-";
                }, 3000);
            }
        })
};