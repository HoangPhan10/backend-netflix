import { NotificationModel } from '../models/notificationModels.js';

export const getNoti = async (req, res)=>{
   try {
    const noti = await NotificationModel.find();
    res.status(200).json(noti)
   }catch(err){
    res.status(500).json({error:err})
   }
}
export const createNoti = async (req, res)=>{
  try {
      const newNoti =req.body;
      const noti = new NotificationModel(newNoti);
      await noti.save();
    res.status(200).json(noti)
  } catch (error) {
    res.status(500).json({error:err})
  }
}
export const updateNoti =async (req, res)=>{
  try {
      const newNoti =req.body;
      const noti = await NotificationModel.findOneAndUpdate({_id:newNoti._id},newNoti,{new:true})
    res.status(200).json(noti)
  } catch (err) {
    res.status(500).json({error:err})
  }
}
