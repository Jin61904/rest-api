import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTES = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift(); // ["item", "ts"], file = "item"
  return file;
};

readdirSync(PATH_ROUTES).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => { // Importación dinámica.
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
