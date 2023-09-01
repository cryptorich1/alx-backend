// import redis from 'redis';
import Redis from 'ioredis';

const client = redis.createClient();

//const redisClient = new Redis();

redisClient.on('connect', () => {
  console.log('Redis client connected to the server');
});

redisClient.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error.message}`);
});
