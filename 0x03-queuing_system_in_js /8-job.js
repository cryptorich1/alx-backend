const kue = require('kue');

// Create a Kue queue
const queue = kue.createQueue({
  redis: {
    // Configure Redis connection
    host: 'localhost',
    port: 6379,
  },
});

// Function to create push notification jobs
function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  jobs.forEach((jobData) => {
    // Create a job in the 'push_notification_code_3' queue
    const job = queue.create('push_notification_code_3', jobData).save((err) => {
      if (!err) {
        console.log(`Notification job created: ${job.id}`);
      } else {
        console.error(`Notification job ${job.id} failed: ${err.message}`);
      }
    });

    // Event handler when the job is completed
    job.on('complete', () => {
      console.log(`Notification job ${job.id} completed`);
    });

    // Event handler when the job is failing
    job.on('failed', (errorMessage) => {
      console.error(`Notification job ${job.id} failed: ${errorMessage}`);
    });

    // Event handler for job progress
    job.on('progress', (progress) => {
      console.log(`Notification job ${job.id} ${progress}% complete`);
    });
  });
}

// Example array of jobs
const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account',
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account',
  },
  // Add more job objects as needed
];

// Create push notification jobs using the function
createPushNotificationsJobs(jobs, queue);

// Start the queue processing
queue.on('ready', () => {
  console.log('Queue is ready to process jobs');
});

// Handle queue errors
queue.on('error', (err) => {
  console.error('Queue error:', err);
});
