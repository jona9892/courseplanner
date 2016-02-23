'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var EmployeeSchema = new mongoose.Schema({
  name: String,
  address: {
    name: String,
    number: Number
  },
  info: String,
  active: Boolean
});

export default mongoose.model('Employee', EmployeeSchema);
