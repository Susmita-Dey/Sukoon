const mongoose =require("mongoose");

const DB ="mongodb://localhost:27017/sukoon"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection succesful");
}).catch((e)=>{
    console.log(e);
})
