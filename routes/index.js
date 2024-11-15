import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Movie Classification System!');
});

export default router;