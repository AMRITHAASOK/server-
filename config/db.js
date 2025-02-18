const mongoose = require('mongoose')

const connect =async()=>{
    try{
        await mongoose.connect(process.env.connectionString)
        console.log("Mongodb Connected");
        
    }
    catch(err){
        console.log(err);
        
    }
}

module.exports = connect