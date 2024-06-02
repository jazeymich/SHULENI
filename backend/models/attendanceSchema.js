import mongoose from 'mongoose';
import validator from 'validator';

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },

  status: {
    type: String,
    enum:["present" , "Absent" ,"Absent with apology"],
    required: true,
   
  },
});

export const Attendance = mongoose.model('Attendance', attendanceSchema);
