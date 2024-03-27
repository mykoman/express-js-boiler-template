import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { config } from "dotenv";
//import errorHandler from './helpers/error-handler';

const app = express();
config();
const PORT = process.env.PORT || 3003;
const dbUrl: string = process.env.DATABASE_URL!;

app.use(cors());
app.use(express.json());

app.use(json());

//connect to the database

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
