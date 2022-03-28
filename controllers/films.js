import { FilmsModels } from './../models/filmsModels.js';

export const getFilms = async (req, res)=>{
   try {
    const movies = await FilmsModels.find();
    res.status(200).json(movies)
   }catch(err){
    res.status(500).json({error:err})
   }
}
export const createFilm = async (req, res)=>{
  try {
      const newFilm =req.body;
      const film = new FilmsModels(newFilm);
      await film.save();
    res.status(200).json(film)
  } catch (error) {
    res.status(500).json({error:err})
  }
}
// export const updateNoti =async (req, res)=>{
//   try {
//       const newNoti =req.body;
//       const noti = await NotificationModel.findOneAndUpdate({_id:newNoti._id},newNoti,{new:true})
//     res.status(200).json(noti)
//   } catch (err) {
//     res.status(500).json({error:err})
//   }
// }
