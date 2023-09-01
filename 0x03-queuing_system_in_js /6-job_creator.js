const kue = require('kue');

// Create a Kue queue
const queue = kue.createQueue();

// Object containing the job data
const jobData = {
  phoneNumber: '1234567890', // Replace with a valid phone number
  message: 'Hello, this is a notification.', // Replace with your message
};

// Create a job and add it to the queue
const job = queue.create('push_notification_code', jobData).save((err) => {
  if (!err) {
    console.log(`Notification job created: ${job.id}`);
  } else {
    console.error(`Error creating notification job: ${err.message}`);
  }
});

// Event handler when the job is completed
job.on('complete', () => {
  console.log('Notification job completed');
});

// Event handler when the job is failing
job.on('failed', () => {
  console.error('Notification job failed');
});
