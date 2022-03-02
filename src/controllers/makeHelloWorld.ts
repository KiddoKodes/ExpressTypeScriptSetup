import { Request, Response } from "express";
import { ModelCtor } from "sequelize/types";
interface Parameters {
  user: ModelCtor<any>;
}

export default function makeHelloWorld({ user }: Parameters) {
  return async function HelloWorld(req: Request, res: Response) {
    try {
      const me = await user.findOne({ where: { id: res.locals.user.id } });
      res.json({
        message: "Hello World",
        me,
      });
    } catch (e: any) {
      res.status(500).json({
        errorMsg: e.message,
      });
    }
  };
}
