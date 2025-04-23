// Incorrect, does not populate in other files
// import dotenv from 'dotenv';
// dotenv.config();

// Correct, populates in other files
import 'dotenv/config';

import app from './app';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
