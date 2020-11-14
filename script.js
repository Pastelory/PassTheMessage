const send = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)


function sendMsg(){
let content = messageIn.nodeValue;
messageOut.innerHTML = content;
}