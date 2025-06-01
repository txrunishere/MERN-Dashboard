import dotenv from 'dotenv';
dotenv.config();
import { app } from './app.js';
import connectDB from './db/index.db.js';

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(e => {
  console.error('Failed to connect to the database:', e);
})
