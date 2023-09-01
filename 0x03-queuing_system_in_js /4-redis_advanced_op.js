import Redis from 'ioredis';

const redisClient = new Redis();

redisClient.on('connect', () => {
  console.log('Redis client connected to the server');
});

redisClient.on('error', (error) => {
  console.error('Redis client not connected to the server: ${error.message}');
});

const KEY = 'HolbertonSchools';

const keys = ['Portland', 'Seattle', 'New York', 'Bogota', 'Cali', 'Paris'];
const values = [50, 80, 20, 20, 40, 2];

keys.forEach((key, index) => {
  client.hset(KEY, key, values[index], redis.print);
});

client.hgetall(KEY, (err, value) => {
  console.log(value);
});
