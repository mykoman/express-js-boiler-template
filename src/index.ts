import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { config } from "dotenv";
import errorHandler from "./helpers/error-handler";
import router from "./routes";

const app = express();
config();
const PORT = process.env.PORT || 3001;
const dbUrl: string = process.env.DATABASE_URL!;

app.use(cors());
app.use(express.json());

app.use(json());

//connect to the database

app.use("/api/v1", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
