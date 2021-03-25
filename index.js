const express = require('express');
const app = express();
const socket = require("socket.io")

const server = app.listen(4000, () => {
    console.log('listening on port 4000');
})

app.use(express.static("public"));

const upgradedServer = socket(server);

upgradedServer.on('connection', (socketClient) => {
    console.log('connection made', socketClient.id);

    socketClient.on('sendingMessage', (data) => {
        console.log(`${data.username} : ${data.message}`)
        upgradedServer.emit('messageToAll', data)
    })
})