import express from "express";
import {
  getGameStatus,
  invest,
  payOffLiability,
} from "../controllers/gameController";

const router = express.Router();

router.get("/status", getGameStatus);
router.post("/invest", invest);
router.post("/pay-off-liability", payOffLiability);

export default router;
