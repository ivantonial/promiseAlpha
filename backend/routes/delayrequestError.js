let timer = 0;
let connectionStatus = false;

module.exports = app => {
    app.get('/delayrequestError', function (req, res){
        const timeout = 3;
        if (connectionStatus) {
            const promiseResponse = new Promise((resolve, reject)=>{
                if (new Date()/1000 < timer+timeout) {
                    resolve('Requisição Atendida');
                } else {
                    reject('Requisição Falhou (TimeOut)');
                }
            }).then((response)=>{
                res.send(response);
            }).catch((response)=>{
                res.send(response);
            });
        } else {
            timer = new Date()/1000
            connectionStatus = true;
            res.status(200).end('Connection Established')
        }
    });
}
