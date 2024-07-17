import express from "express";
import bodyParser from "body-parser";
import router from "./routes/gameRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/game", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
