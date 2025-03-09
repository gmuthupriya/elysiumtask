const mongoose = require("mongoose");

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.CONNECTION_STRING,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        console.log("Connected to MongoDB")
    }           
     catch(err) {
        console.error("MongoDB connection error:", err);
    }
}

 module.exports=connectDb;


