import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";


const getitems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO LO VEN LAS PERSONAS CON SESSION / JWT ",
      user: req.user,
    });
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

export { getitems };
