const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  productname: { type: String, required: true },
  brand: { type: String, required: true },
  issueDescription: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  status: { type: String, enum: ['Scheduled', 'In Progress', 'Completed', 'Cancelled'], default: 'Scheduled' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
