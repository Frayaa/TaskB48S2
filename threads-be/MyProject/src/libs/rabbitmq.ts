import  amqp = require ("amqplib")

export async function sendMessageToQueue(
  queueName: string,
  payload: any
): Promise<boolean> {
  try {
    const connection = await amqp.connect("amqp://localhost")
    const channel = await connection.createChannel()

    await channel.assertQueue(queueName)
    channel.sendToQueue(queueName, Buffer.from(JSON.stringify(payload)))

    // await channel.waitForConfirms()
    await channel.close()
    await connection.close()

    return null
  } catch (err) {
    console.log(err)
    return err
  }
}
