import { FilmsModels } from '../models/filmsModels.js';

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

