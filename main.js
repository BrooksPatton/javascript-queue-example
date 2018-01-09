const Queue = require('./Queue')

const games = new Queue()

console.log(`the queue is empty ${games.isEmpty()}`)

games.enqueue('Mario Bros.')
games.enqueue('Legend of Zelda')

console.log(`the queue is empty ${games.isEmpty()}`)
console.log(`the size of the queue ${games.size()}`)

console.log(`${games.dequeue()}`)
