import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertItem = async (item: Car) => {
  // item is of type Car
  const responseInsert = await ItemModel.create(item); // Create a new item and insert it into the database
  return responseInsert; // Return the inserted item
};

const getCars = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getCar = async (id: string) => {
  const responseItem = await ItemModel.find({ _id: id });
  return responseItem;
};

const updateCar = async (id: string, data: Car) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

const deleteCar = async (id: string) => {
  const responseItem = await ItemModel.deleteOne({ _id: id });
  return responseItem;
};

export { insertItem, getCars, getCar, updateCar, deleteCar };
