import { Schema, models, model } from "mongoose";

const TaskSchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   required: false,
  // },
  title: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: false,
  },
  
});
TaskSchema.set("timestamps", true);
export default models.Task || model("Task", TaskSchema);
