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
  try {
    // game.invest(amount);
    res.json(game);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const payOffLiability = (req: Request, res: Response) => {
  const amount = req.body.amount;
  try {
    // game.payOffLiability(amount);
    res.json(game);
  } catch (error) {
    res.status(400).send(error);
  }
};
