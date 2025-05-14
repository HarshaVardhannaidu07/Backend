const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  nationality: { type: String, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  accommodation: {
    type: String,
    required: true,
    enum: ['Space Hotel', 'Martian Base']
  },
  healthDeclaration: { type: String, required: true },
  medicalConditions: { type: String },
  emergencyContactName: { type: String, required: true },
  emergencyContactPhone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);