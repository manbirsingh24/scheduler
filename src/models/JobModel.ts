import mongoose, { Schema } from "mongoose";

const jobDetailSchema = new Schema(
  {
    // _id: { type: String, required: true, unique: true, index: true },
    pattern: { type: String, required: true },
    data: { type: Schema.Types.Mixed, required: true },
    endDate: { type: String},
    startDate: { type: String},
  },
  { timestamps: true }
);

const JobDetailModel = mongoose.model("JobDetail", jobDetailSchema);

export default JobDetailModel;

