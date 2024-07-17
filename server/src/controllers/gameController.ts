import { Request, Response } from "express";
import Game from "../models/game";

const game = new Game();

export const getGameStatus = (req: Request, res: Response) => {
  res.json(game);
};

export const startGame = (req: Request, res: Response) => {
  res.json(game);
};

export const invest = (req: Request, res: Response) => {
  const amount = req.body.amount;
  const assetName = req.body.liabilityName;
  try {
    game.invest(amount, assetName);
    res.json(game);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const payOffLiability = (req: Request, res: Response) => {
  const amount = req.body.amount;
  const liabilityName = req.body.liabilityName;
  try {
    game.payOffLiability(amount, liabilityName);
    res.json(game);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const collectMonthlyIncome = (req: Request, res: Response) => {
  try {
    game.collectMonthlyIncome();
    res.json(game);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const payMonthlyExpenses = (req: Request, res: Response) => {
  try {
    game.payMonthlyExpenses();
    res.json(game);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const nextMonth = (req: Request, res: Response) => {
  try {
    game.nextMonth();
    res.json(game);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const payIncomeTax = (req: Request, res: Response) => {
  try {
    game.payIncomeTax();
    res.json(game);
  } catch (error) {
    res.status(400).send(error);
  }
}


