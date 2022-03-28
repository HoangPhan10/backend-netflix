import mongoose  from "mongoose";
const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
},{
    timestamps:true,
}
)
export const NotificationModel =mongoose.model("notifications",schema)