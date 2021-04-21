const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    require: true,
    trim: true,
    minLength: [1, "thoughtText length is too short. It must be between 1 and 280"],
    maxLength: [280, "thoughtText length is too long. It must be between 1 and 280"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },

  username: {
    type: {
      type: String,
      require: true
    }
  },
  reactions: [ReactionSchema]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);


ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
