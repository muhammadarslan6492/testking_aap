import mongoose from 'mongoose';

const orgUserSchema = mongoose.Schema({
  userType: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  org: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Organization',
  },
});

const orgUser = mongoose.model('orgUser', orgUserSchema);

export default orgUser;
