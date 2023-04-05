const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(name, event) {
    let message = [];
    for(let i = [0]; i < names.length; i++) {
    message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return message;
}

function countDown() {
    let n = 10;
    while(n >= 0) {
        console.log(n);
        n--;
    }
}