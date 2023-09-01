const kue = require('kue');

// Create an array of blacklisted phone numbers
const blacklistedNumbers = ['4153518780', '4153518781'];

// Create a Kue queue
const queue = kue.createQueue({
  redis: {
    // Configure your Redis connection here
    host: 'localhost', // Change to your Redis server host if necessary
    port: 6379, // Change to your Redis server port if necessary
  },
});

// Function to send a notification with progress tracking
const sendNotification = (phoneNumber, message, job, done) => {
  // Start tracking progress at 0%
  job.progress(0, 100);

  // Check if phoneNumber is blacklisted
  if (blacklistedNumbers.includes(phoneNumber)) {
    // Fail the job with an Error object and a message
    const errorMessage = `Phone number ${phoneNumber} is blacklisted`;
    job.failed(errorMessage);
    return done(new Error(errorMessage));
  }

  // Update progress to 50%
  job.progress(50, 100);

  // Log the notification message
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

  // Finish the job
  done();
};

// Process jobs from the 'push_notification_code_2' queue with concurrency of 2
queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;

  // Call the sendNotification function with job data and progress tracking
  sendNotification(phoneNumber, message, job, done);
});

// Start the queue processing
queue.on('ready', () => {
  console.log('Queue is ready to process jobs');
});

// Handle queue errors
queue.on('error', (err) => {
  console.error('Queue error:', err);
});
