import express from "express";
import {
  getGameStatus,
  invest,
  payOffLiability,
  startGame,
} from "../controllers/gameController";

const router = express.Router();

router.get("/status", getGameStatus);
router.get("/start", startGame);
router.post("/invest", invest);
router.post("/pay-off-liability", payOffLiability);

export default router;
