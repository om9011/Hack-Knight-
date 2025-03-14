import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/gameRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.use("/game", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
