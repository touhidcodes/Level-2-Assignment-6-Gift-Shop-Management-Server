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

const getSingleSales = catchAsync(async (req, res) => {
  const { salesId } = req.params;
  const result = await SalesServices.getSingleSales(salesId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users Sales History retrieved successfully",
    data: result,
  });
});

const getUserSales = catchAsync(async (req, res) => {
  const { username } = req.params;
  const result = await SalesServices.getUserSales(username);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users Sales History retrieved successfully",
    data: result,
  });
});

export const SalesControllers = {
  createSales,
  getSales,
  getSingleSales,
  getUserSales,
};
