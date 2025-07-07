import express from 'express';

const router = express.Router();

export default (): express.Router => {
  // Define your routes here
  router.get('/', (req, res) => {
    res.send('Welcome to the API');
  });

  // You can import and use other route files here
  // e.g., router.use('/users', userRoutes);

  return router;
};