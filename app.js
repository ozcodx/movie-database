import createError from 'http-errors';
import express from 'express';

import indexRouter from './routes/index.js';
import moviesRouter from './routes/movies.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configurar las rutas
app.use('/', indexRouter);
app.use('/movies', moviesRouter);

// Manejar errores 404
app.use((req, res, next) => {
  next(createError(404));
});

// Manejador de errores
app.use((err, req, res, next) => {
  // Enviar mensaje y detalles del error en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Devolver el error en formato JSON
  res.status(err.status || 500);
  res.json({ error: err.message });
});

export default app;