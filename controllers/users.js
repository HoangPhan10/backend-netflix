import { UsersModel } from "../models/usersModel.js"

export const getUser = async (req, res)=>{
   try {
    const users = await UsersModel.find();
    res.status(200).json(users)
   }catch(err){
    res.status(500).json({error:err})
   }
}
export const getUserId = async (req,res)=>{
  const id  = req.query.id
  try {
    const users = await UsersModel.findOne({_id:id});
    res.status(200).json(users)
   }catch(err){
    res.status(500).json({error:err})
   }
}
export const createUser = async (req, res)=>{
  try {
      const newUser =req.body;
      const user = new UsersModel(newUser);
      await user.save();
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({error:err})
  }
}
export const updateUser =async (req, res)=>{
  try {
      const updateUser =req.body;
      const user = await UsersModel.findOneAndUpdate({_id:updateUser.id},updateUser,{new:true})
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({error:err})
  }
}
