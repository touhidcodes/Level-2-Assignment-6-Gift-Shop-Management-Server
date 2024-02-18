import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Product } from "../Product/product.model";
import { TSales } from "./sales.interface";
import { Sales } from "./sales.model";
import { FilterQuery } from "mongoose";
import moment from "moment";

const createSales = async (payload: TSales) => {
  const { productId, quantity } = payload;

  // Retrieve the product from the database
  const product = await Product.findById(productId);

  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, "Product not found");
  }
  const productQuantity = parseInt(product.quantity);
  const receivedQuantity = parseInt(quantity);

  // Check if there is enough quantity to sell
  if (productQuantity < receivedQuantity) {
    throw new AppError(
      httpStatus.NOT_MODIFIED,
      "Not enough quantity available"
    );
  }

  // Deduct the sold quantity from the product quantity
  const remainingQuantity = productQuantity - receivedQuantity;

  // If the remaining quantity is zero, remove the product from the inventory
  if (remainingQuantity === 0) {
    await Product.findByIdAndUpdate(
      productId,
      { isDeleted: true },
      {
        new: true,
      }
    );
  } else {
    // Save the updated product quantity to the database
    const quantity = remainingQuantity.toString();
    await Product.findByIdAndUpdate(
      productId,
      { quantity },
      {
        new: true,
      }
    );
  }

  // Create a sale record in the database
  const result = await Sales.create(payload);
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSales = async (payload: Record<string, any>) => {
  const filter: FilterQuery<TSales> = {};

  const currentDate = parseInt(moment().format("YYYYMMDD"));

  if (payload.query === "day") {
    filter.sellDate = {
      $eq: currentDate,
    };
  }
  if (payload.query === "week") {
    filter.sellDate = {
      $gte: parseInt(moment().subtract(1, "week").format("YYYYMMDD")),
      $lte: currentDate,
    };
  }
  if (payload.query === "month") {
    filter.sellDate = {
      $gte: parseInt(moment().subtract(1, "months").format("YYYYMMDD")),
      $lte: currentDate,
    };
  }
  if (payload.query === "year") {
    filter.sellDate = {
      $gte: parseInt(moment().subtract(12, "months").format("YYYYMMDD")),
      $lte: currentDate,
    };
  }

  const result = await Sales.aggregate([
    { $match: filter },
    {
      $lookup: {
        from: "products",
        localField: "productId",
        foreignField: "_id",
        as: "populatedProduct",
      },
    },
    { $unwind: "$populatedProduct" },
  ]);

  return result;
};

const getSingleSales = async (payload: string) => {
  const result = await Sales.findById(payload);
  return result;
};

const getUserSales = async (payload: string) => {
  const result = await Sales.find({ seller: payload });
  return result;
};

export const SalesServices = {
  createSales,
  getSales,
  getSingleSales,
  getUserSales,
};
