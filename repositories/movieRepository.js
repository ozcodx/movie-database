import fs from 'fs/promises';
import path from 'path';

const MOVIES_FILE_PATH = path.resolve('data/movies.json');

const getAllMovies = async () => {
  try {
    const data = await fs.readFile(MOVIES_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading movies JSON file:', error.message);
    throw new Error('Could not fetch movies data');
  }
};

export default {
  getAllMovies
};