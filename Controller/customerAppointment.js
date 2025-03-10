const res = require("express/lib/response");
const appointment = require("../model/appointment");
const dotenv = require("dotenv").config();

const appointmentAdd = async(req, res)=>{
    try {        
        const create = await appointment.create(req.body);
        res.status(201).json({status:"success",
         message: 'Appointment created successfully',
      });
  } catch (err) {
    res.status(400).json({ status: "failed", error: err.message });
  }
};
const listappointment = async(req, res)=>{
    try {
        
        const list=await appointment.find();
        res.status(201).json({status:"success",
         message: 'Showing list of Appointments ',list
      });
  } catch (err) {
    res.status(400).json({ status: "failed", error: err.message });
  }
};
const viewappointment = async(req, res)=>{
  try {
      const Id=req.params.id;
      const list=await appointment.findById(Id);
      res.status(201).json({status:"success",
       message: 'Appointment get by id successfully',list
    });
} catch (err) {
  res.status(400).json({ status: "failed", error: err.message });
}
};
const Updateappointment = async(req, res)=>{
  try {
      const list=await appointment.updateOne(
        { _id: req.params.id },
        { $set: req.body });
      res.status(201).json({status:"success",
       message: 'Appt. info updated successfully'
    });
} catch (err) {
  res.status(400).json({ status: "failed", error: err.message });
}
};
const appointmentStatus = async (req, res) => {
  try {
    const { appointmentstatus } = req.body;
    const allowedStatusValues = ['Scheduled', 'In Progress', 'Completed', 'Cancelled'];

    if (!allowedStatusValues.includes(appointmentstatus)) {
      return res.status(400).json({ status: "failed", message: "Invalid appointment status value" });
    }

    const list = await User.updateOne(
      { _id: req.params.id },
      { $set: { status: appointmentstatus } }
    );

    if (list.modifiedCount === 0) {
      return res.status(404).json({ status: "failed", message: "appointment not found or status already set" });
    }

    res.status(200).json({
      status: "success",
      message: 'Appointment status updated successfully'
    });
  } catch (err) {
    res.status(400).json({ status: "failed", error: err.message });
  }
};
const deleteappointment = async(req, res)=>{
  try {
      const Id=req.params.id;
      const list=await appointment.findByIdAndDelete(Id);
      res.status(201).json({status:"success",
       message: 'Appointment deleted successfully',
    });
} catch (err) {
  res.status(400).json({ status: "failed", error: err.message });
}
};

module.exports = {appointmentAdd,listappointment,viewappointment,Updateappointment,deleteappointment,appointmentStatus}