const mongoose = require('mongoose');

const cvSchema = new mongoose.Schema({
  personalInformation: {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    linkedInProfile: { type: String },
    dateOfBirth: { type: String, required: true },
    careerObjective: { type: String },
  },
  professionalExperience: [
    {
      jobTitle: String,
      companyName: String,
      duration: String,
    },
  ],
  education: [
    {
      degree: String,
      institutionName: String,
    },
  ],
  skills: [String],
  certifications: [
    {
      certificationName: String,
      issuingOrganization: String,
    },
  ],
  projects: [
    {
      projectTitle: String,
      technologiesUsed: [String],
    },
  ],
  achievements: [String],
  languages: [String],
  volunteerExperience: [
    {
      organizationName: String,
      role: String,
    },
  ],
  agreeToTerms: { type: Boolean, required: true },
});

const CV = mongoose.model('CV', cvSchema);
module.exports = CV;
