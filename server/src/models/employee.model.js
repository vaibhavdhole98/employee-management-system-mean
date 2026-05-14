import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    department: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    salary: {
      type: Number,
      required: true
    },
    experience: {
      type: Number,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

employeeSchema.index({ email: 1 });

employeeSchema.index({ department: 1, city: 1 });

employeeSchema.index({
  name: "text",
  designation: "text"
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;