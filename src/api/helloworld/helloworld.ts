import { Request, Response } from "express";

export const helloworld = (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
};
