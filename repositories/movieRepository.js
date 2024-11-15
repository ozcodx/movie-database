const fs = require('fs').promises;
const path = require('path');

const MOVIES_FILE_PATH = path.join(__dirname, '../data/movies.json');

const getAllMovies = async () => {
  try {
    // Reads the database file
    const data = await fs.readFile(MOVIES_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading movies JSON file:', error.message);
    throw new Error('Could not fetch movies data');
  }
};

module.exports = {
  getAllMovies,
};