import mongoose, { FilterQuery } from "mongoose";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getProduct = async (payload: Record<string, any>) => {
  // Filtering parameters
  const filter: FilterQuery<TProduct> = {};

  if (payload.minPrice) {
    filter.price = { $gte: payload.minPrice };
  }

  if (payload.maxPrice) {
    filter.price = {
      ...filter.price,
      $lte: payload.maxPrice,
    };
  }

  if (payload.occasion) {
    filter.occasion = payload.occasion;
  }

  if (payload.recipient) {
    filter.recipient = payload.recipient;
  }

  if (payload.category) {
    filter.category = payload.category;
  }

  if (payload.theme) {
    filter.theme = payload.theme;
  }

  if (payload.brand) {
    filter.brand = payload.brand;
  }
  if (payload.color) {
    filter.color = payload.color;
  }

  const result = await Product.aggregate([{ $match: filter }]);

  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findOne({ _id: id });

  return result;
};

const updateProduct = async (_id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    }
  );
  return result;
};

const deleteMultipleProduct = async (productIds: string[]) => {
  const oIds = productIds.map((id) => new mongoose.Types.ObjectId(id));

  const result = await Product.updateMany(
    { _id: { $in: oIds } },
    { isDeleted: true }
  );

  return result;
};
export const ProductServices = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  deleteMultipleProduct,
};
