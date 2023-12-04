const { Schema, model } = require('mongoose');

const lessonSchema = new Schema(
  {
    ID: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    difficulty:{
    type: String,
    required: true,
    },
    // Not sure how I would like my lesson to look as, yet. 
    body: {
      type: String,
      required: true,
    }
  },
);

const User = model('Lesson', lessonSchema);

module.exports = User;