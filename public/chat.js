const socket = io("127.0.0.1:4000")

const message = document.getElementById("message");
const button = document.getElementById("send");
const username = document.getElementById("username");
const output = document.getElementById("output");

button.addEventListener('click', () => {
    socket.emit('sendingMessage', {
        "message": message.value,
        "username": username.value,
    })
})

socket.on("messageToAll", (data) => {
    output.innerHTML += `<p>${data.username}: ${data.message}</p>`;
})