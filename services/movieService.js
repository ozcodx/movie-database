import movieRepository from '../repositories/movieRepository.js';

export const getAllMovies = async () => {
  try {
    // Obtener las películas desde el repositorio
    const movies = await movieRepository.getAllMovies();
    return movies;
  } catch (error) {
    console.error('Error fetching movies from repository:', error.message);
    throw new Error('Failed to retrieve movies');
  }
};

export default {
  getAllMovies
};