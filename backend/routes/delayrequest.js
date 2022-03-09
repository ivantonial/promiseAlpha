let connectionStatus = false;
let timeout = 0;
let connectionStatusCheck = true;

module.exports = app => {
    app.get('/delayrequest', function (req, res) {

        if (connectionStatus) {
            const promiseResponse = new Promise((resolve, reject) => {
                if (connectionStatusCheck) {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        connectionStatusCheck = false;
                    }, 3000);
                    resolve('Requisição Atendida');
                } else {
                    connectionStatus = false;
                    connectionStatusCheck = true;
                    reject('Requisição Falhou (TimeOut)');
                }
            }).then((response) => {
                res.send(response);
            }).catch((response) => {
                res.send(response);
            });
        } else {
            timeout = setTimeout(() => {
                connectionStatusCheck = false;
            }, 3000);
            connectionStatus = true;
            res.status(200).end('Connection Established')
        }
    });
}
