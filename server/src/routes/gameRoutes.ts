import express from "express";
import {
  collectMonthlyIncome,
  getGameStatus,
  invest,
  nextMonth,
  payMonthlyExpenses,
  payOffLiability,
  startGame,
} from "../controllers/gameController";

const router = express.Router();

router.get("/status", getGameStatus);
router.get("/nextmonth", nextMonth);
router.get("/start", startGame);
router.get("/collect-monthly-income", collectMonthlyIncome);
router.get("/pay-monthly-expenses", payMonthlyExpenses);
// router.post("/invest", invest);
router.post("/pay-off-liability", payOffLiability);

export default router;
