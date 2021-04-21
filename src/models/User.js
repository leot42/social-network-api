const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true,
    trim: true
  },
  email: {
    type: String,
    lowercase:true,
    unique: true,
    require: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },

  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: {
    type: Schema.Types.ObjectId,
    ref: 'Friend'
  }
});

const User = model('User', UserSchema);

module.exports = User;
