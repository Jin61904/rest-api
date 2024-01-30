import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerUpload } from "../services/storage";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    console.log(file);
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };

    const response = await registerUpload(dataToRegister);
    res.send(response);
  
  } catch (error) {
    handleHttp(res, "ERROR_GET_FILE");
  }
};

export { getFile };
