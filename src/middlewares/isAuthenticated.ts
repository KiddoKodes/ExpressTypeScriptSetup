import { verifyToken } from "../utils/lib/jwt";
import User from "../db/models/user";
import { NextFunction, Request, Response } from "express";

export default async function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.header("authToken") || req.cookies["authToken"];
  // check if the user provided a token or not
  if (!token) {
    res
      .status(401)
      .json({ errorMsg: "Please Login Or Register to get full access" });
    return;
  }
  try {
    const decodedToken = verifyToken({ token }) as { id: string };
    const userID = decodedToken.id;
    const user = await User.findOne({ where: { id: userID } });

    res.locals.decodedToken = decodedToken;
    res.locals.user = user;

    next();
  } catch (err: any) {
    res.status(401).json({ errorMsg: err.message });
  }
}
