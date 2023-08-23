import * as amqp from "amqplib"

async function processQueue() {
  const queueName = "threads-queue"
  try {
    const connection = await amqp.connect("amqp://localhost")

    const chanel = await connection.createChannel()

    await chanel.assertQueue(queueName)

    await chanel.consume(queueName, (message) => {
      if (message !== null) {
        const payload = JSON.parse(message.content.toString())
        console.log("Received message:", payload)

        chanel.ack(message)
      }
    })
  } catch (err) {
    console.log("Error processing queue:", err)
  }
}

processQueue()
