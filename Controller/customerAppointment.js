const res = require("express/lib/response");
const User = require("../model/appointment");
const dotenv = require("dotenv").config();

const appointmentAdd = async(req, res)=>{
    try {
        
        const create = await User.create(req.body);
        res.status(201).json({status:"success",
         message: 'Appointment created successfully',
      });
  } catch (err) {
    res.status(400).json({ status: "failed", error: err.message });
  }
};

const listappointment = async(req, res)=>{
    try {
        
        const list=await User.find();
        res.status(201).json({status:"success",
         message: 'Appointment created successfully',list
      });
  } catch (err) {
    res.status(400).json({ status: "failed", error: err.message });
  }
};
const viewUser = async(req, res)=>{
  try {
      const Id=req.params.id;
      const list=await User.findById(Id);
      res.status(201).json({status:"success",
       message: 'Appointment get by id successfully',list
    });
} catch (err) {
  res.status(400).json({ status: "failed", error: err.message });
}
};
const UpdateUser = async(req, res)=>{
  try {
      const list=await User.updateOne(
        { _id: req.params.id },
        { $set: req.body });
      res.status(201).json({status:"success",
       message: 'Appointment get by id successfully'
    });
} catch (err) {
  res.status(400).json({ status: "failed", error: err.message });
}
};
const StatusUser = async (req, res) => {
  try {
    const { Customerstatus } = req.body;
    const allowedStatusValues = ['Scheduled', 'In Progress', 'Completed', 'Cancelled'];

    if (!allowedStatusValues.includes(Customerstatus)) {
      return res.status(400).json({ status: "failed", message: "Invalid Customerstatus value" });
    }

    const list = await User.updateOne(
      { _id: req.params.id },
      { $set: { status: Customerstatus } }
    );

    if (list.modifiedCount === 0) {
      return res.status(404).json({ status: "failed", message: "User not found or status already set" });
    }

    res.status(200).json({
      status: "success",
      message: 'User status updated successfully'
    });
  } catch (err) {
    res.status(400).json({ status: "failed", error: err.message });
  }
};

const deleteUser = async(req, res)=>{
  try {
      const Id=req.params.id;
      const list=await User.findByIdAndDelete(Id);
      res.status(201).json({status:"success",
       message: 'Appointment get by id successfully',
    });
} catch (err) {
  res.status(400).json({ status: "failed", error: err.message });
}
};

module.exports = {appointmentAdd,listappointment,viewUser,UpdateUser,deleteUser,StatusUser}