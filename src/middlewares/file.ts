import { Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  async filename (req: Request, file: Express.Multer.File, cb: any) {
    const ext = await file.originalname.split(".").pop();
    const fileNameRandom = await `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage });


export default multerMiddleware;