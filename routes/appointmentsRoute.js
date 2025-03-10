const express=require('express');
const router = express.Router();
const {appointmentAdd,listappointment,viewappointment,Updateappointment,deleteappointment,appointmentStatus} = require("../Controller/customerAppointment");

router.post('/appointments',appointmentAdd );

router.get("/list",listappointment)

router.get("/view/:id",viewappointment)

router.put("/update/:id",Updateappointment)

router.put("/status/:id",appointmentStatus)

router.delete("/delete/:id",deleteappointment)

module.exports = router; 
