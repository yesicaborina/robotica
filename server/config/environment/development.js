'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    // uri: 'mongodb://35.229.17.130:27017/robotica-dev'
    uri: 'mongodb://admin:admin123@ds143000.mlab.com:43000/robotica-dev'
  },

  // Seed database on startup
  seedDB: false

};
