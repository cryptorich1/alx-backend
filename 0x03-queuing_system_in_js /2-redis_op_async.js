import Redis from 'ioredis';
import { promisify } from 'util';

const redisClient = new Redis();
const getAsync = promisify(redisClient.get).bind(redisClient);

redisClient.on('connect', () => {
  console.log('Redis client connected to the server');
});

redisClient.on('error', (error) => {
  console.error(`Redis client not connected to the server: ${error.message}`);
});

// Function to set a new school value in Redis
const setNewSchool = (schoolName, value) => {
  redisClient.set(schoolName, value, (err, reply) => {
    if (err) {
      console.error(`Error setting value for ${schoolName}: ${err.message}`);
    } else {
      console.log(`Value for ${schoolName} set successfully: ${reply}`);
    }
  });
};

// Function to display the value for a given school name using async/await
const displaySchoolValue = async (schoolName) => {
  try {
    const value = await getAsync(schoolName);
    if (value === null) {
      console.log(`Value for ${schoolName} not found in Redis`);
    } else {
      console.log(`Value for ${schoolName}: ${value}`);
    }
  } catch (error) {
    console.error(`Error retrieving value for ${schoolName}: ${error.message}`);
  }
};

// Call the functions
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
