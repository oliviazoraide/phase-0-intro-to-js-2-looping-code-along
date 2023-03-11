const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";

function writeCards(names, event) {
    let message = []
    for ( let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}