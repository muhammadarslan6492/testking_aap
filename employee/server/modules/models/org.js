import mongoose from 'mongoose';

const orgSchema = mongoose.Schema({
  orgName: {
    type: String,
    require: true,
  },
  logo: string,
  domain: String,
  socialLink: [String],
});

const Organization = mongoose.model('Organization', orgSchema);

export default Organization;
