import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { SalesServices } from "./sales.service";

const createSales = catchAsync(async (req, res) => {
  const result = await SalesServices.createSales(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Sales added successfully",
    data: result,
  });
});
const getSales = catchAsync(async (req, res) => {
  const result = await SalesServices.getSales(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sales History retrieved successfully",
    data: result,
  });
});

export const SalesControllers = {
  createSales,
  getSales,
};
