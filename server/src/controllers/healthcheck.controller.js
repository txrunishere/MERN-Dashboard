import asyncHandler from 'express-async-handler';

export const handleHealthCheck = asyncHandler(async (_, res) => {
  return res.status(200).json({
    message: "OK Report"
  })
})
