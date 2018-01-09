class Queue {
	constructor() {
		this.queue = []
	}

	isEmpty() {
		return this.queue.length === 0
	}

	enqueue(item) {
		this.queue.push(item)
	}

	size() {
		return this.queue.length
	}

	dequeue() {
		return this.queue.shift()
	}
}

module.exports = Queue
