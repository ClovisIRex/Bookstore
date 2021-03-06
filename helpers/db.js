const mongoose = require('mongoose');
const config = require('../config/server');

/**
 * Mongoose connection wrapper
 */

//Create the database connection
mongoose.connect(config.dbUri);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {  
  console.log(`[INFO] Mongoose connection open to ${config.dbUri}`);
}); 
  
  // If the connection throws an error
mongoose.connection.on('error', (err) => {  
  console.log(`[ERROR] Mongoose default connection error!
   Is the mongo daemon running in the correct port?
   Error: ${err}`);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {  
  console.log('[INFO] Mongoose default connection disconnected.'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', () => {  
  mongoose.connection.close(() => { 
    console.log('[INFO] Mongoose default connection disconnected through app termination.'); 
    process.exit(0); 
  }); 
}); 

module.exports = mongoose