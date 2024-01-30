import { Request, Response, Router } from "express";
import {
  deleteItem,
  getItem,
  getitems,
  postItem,
  updateItem,
} from "../controllers/item";
import { logMiddleware } from "../middlewares/log";

const router = Router();


router.get("/", logMiddleware, getitems);
router.get("/:id", getItem);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
