import { getAllMovies } from '../services/movieService.js';

export const fetchAllMovies = async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    console.error('Error in controller:', error.message);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};