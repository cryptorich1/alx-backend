const kue = require('kue');

// Create a Kue queue
const queue = kue.createQueue();

// Function to send a notification
const sendNotification = (phoneNumber, message) => {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
};

// Process jobs from the 'push_notification_code' queue
queue.process('push_notification_code', (job, done) => {
  const { phoneNumber, message } = job.data;

  // Call the sendNotification function with job data
  sendNotification(phoneNumber, message);

  // Mark the job as completed
  done();
});

// Start the queue processing
queue.on('ready', () => {
  console.log('Queue is ready to process jobs');
});

// Handle queue errors
queue.on('error', (err) => {
  console.error('Queue error:', err);
});
