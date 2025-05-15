const mongoose = require('mongoose')
const { Schema } = mongoose.Schema;

const Post = mongoose.model('Post', {
  title: {
      type: String,
      required: true
  },content: {
      type: String,
      required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tags: [{
    type:String
  }],
  likes: [{
    type: this.schema.Types.ObjectId,
    ref: 'User' //this gives an array of users who liked your post bro
  }],
  comments: [
    {
      text: { 
        type: String,
        required: true
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: { 
    type: Date, 
    default: Date.now
  }
  
});
 
module.exports = Post