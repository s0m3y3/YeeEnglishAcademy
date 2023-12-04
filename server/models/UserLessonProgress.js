const { Schema, model } = require('mongoose');

const userLessonProgressSchema = new Schema(
  {
    ID: {
      type: String,
      required: true,
      unique: true,
    },
    userID:[{
        type: Schema.Types.ObjectId, 
        ref: "Users"
    }],
    lessonID:[{
        type: Schema.Types.ObjectId, 
        ref: "Lessons"
    }],
    lastVisited:{
        type: String,
    },
    grade: {
      type: String,
    },
    furthestLessonAchieved:{
    type: String,
    required: true,
    },
  },
);

const User = model('UserLessonProgress', userLessonProgressSchema);

module.exports = User;