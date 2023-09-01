import Redis from 'ioredis';

const redisClient = new Redis();

redisClient.on('connect', () => {
  console.log('Redis client connected to the server');
});

redisClient.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error.message}`);
});

// Subscribe to the "holberton school channel"
redisClient.subscribe('holberton school channel');

// Listen for incoming messages on the subscribed channel
redisClient.on('message', (channel, message) => {
  console.log(`Received message on channel ${channel}: ${message}`);

  // Check if the message is "KILL_SERVER"
  if (message === 'KILL_SERVER') {
    // Unsubscribe and quit when receiving "KILL_SERVER"
    redisClient.unsubscribe('holberton school channel', () => {
      console.log('Unsubscribed from channel');
      redisClient.quit();
    });
  }
});
