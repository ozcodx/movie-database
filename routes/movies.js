import express from 'express';
import { fetchAllMovies } from '../controllers/movieController.js';

const router = express.Router();

router.get('/', fetchAllMovies);

export default router;