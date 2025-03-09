const express=require('express');
const router = express.Router();
const { appointmentAdd,listappointment,viewUser,UpdateUser ,deleteUser,StatusUser} = require("../Controller/customerAppointment");

router.post('/appointments',appointmentAdd );
    


// POST route to add a user
// router.post("/register",registerUser)

router.get("/list",listappointment)

router.get("/view/:id",viewUser)

router.put("/update/:id",UpdateUser)
router.put("/status/:id",StatusUser)

router.delete("/delete/:id",deleteUser)

// router.post("/login",loginUser)

// router.get("/profile", authMiddleware, async (req, res) => {
//   try {
//     // Fetch user details from database using req.user.id
//     const user = await user.findById(req.user.id).select("-password"); // Exclude password

//     if (!user) {
//       return res.status(404).json({ status:"failure", message: "User not found" });
//     }

//     res.status(200).json({ status: "success", user });
//   } catch (error) {
//     res.status(500).json({ status:"failure", message: "Server error", error: error.message });
//   }
// });

// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./image")
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });
// const fs = require("fs");
// const filePath = "./image/1738666942018-My_photo.jpg"; 

// fs.access(filePath, fs.constants.F_OK, (err) => {
//   if (err) {
//     console.error("❌ File does not exist:", filePath);
//   } else {
//     console.log("✅ File exists:", filePath);
//   }
// });


// const upload = multer({ storage: fileStorageEngine});

// router.post('/single', upload.single("image"), (req, res) =>{

//   if(req.file){
//     return res.status(400).json({status:"failure", message:"File not uploaded"})
//   }
// // console.log(req.file, "success", "File Uploaded Successfully", /image/$req.file.filename);

// res.status(200).json({
//   status:"success", message:"File Uploaded Successfully"

// })
// });


module.exports = router; 
