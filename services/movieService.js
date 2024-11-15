const movieRepository = require('../repositories/movieRepository');

const getAllMovies = async () => {
  try {
    //Get the movies from repository
    const movies = await movieRepository.getAllMovies();
    return movies;
  } catch (error) {
    console.error('Error fetching movies from repository:', error.message);
    throw new Error('Failed to retrieve movies');
  }
};

module.exports = {
  getAllMovies,
};