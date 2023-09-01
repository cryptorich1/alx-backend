import Redis from 'ioredis';

const redisClient = new Redis();

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

// Function to display the value for a given school name
const displaySchoolValue = (schoolName) => {
  redisClient.get(schoolName, (err, reply) => {
    if (err) {
      console.error(`Error retrieving value for ${schoolName}: ${err.message}`);
    } else if (reply === null) {
      console.log(`Value for ${schoolName} not found in Redis`);
    } else {
      console.log(`Value for ${schoolName}: ${reply}`);
    }
  });
};

// Call the functions
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
