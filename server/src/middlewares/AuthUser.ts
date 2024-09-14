/**
 *  TODO: Mock the authentication of user using this middleware
 */
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authenticadedUser = [
  { username: "admin", password: "admin" },
  { username: "admin123", password: "admin123" },
];

export const AuthUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.split(' ')[1]
  res.send( token);
};
