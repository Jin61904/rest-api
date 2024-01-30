import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  insertItem,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} from "../services/item";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseItem = await getCar(id);
    const data = responseItem ? responseItem : "NOT_FOUND"
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getitems = async (req: Request, res: Response) => {
  try {
    const responseItems = await getCars();
    res.send(responseItems);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = async ({params, body}: Request, res: Response) => {
  try {
    const { id } = params;
    const responseItems = await updateCar(id, body);
    res.send(responseItems);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertItem(body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEM", error);
  }
};

const deleteItem = async({params}: Request, res: Response) => {
  try {
    const {id} = params;
    const responseItem = await deleteCar(id);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getitems, updateItem, postItem, deleteItem };
