import asyncHandler from "../utils/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";

import {
  registerUserService,
  loginUserService
} from "../services/auth.service.js";

const registerUser = asyncHandler(
  async (req, res) => {

    const user =
      await registerUserService(req.body);

    res.status(201).json(
      new ApiResponse(
        201,
        "User registered successfully",
        user
      )
    );
  }
);

const loginUser = asyncHandler(
  async (req, res) => {

    const token =
      await loginUserService(
        req.body.email,
        req.body.password
      );

    res.status(200).json(
      new ApiResponse(
        200,
        "Login successful",
        token
      )
    );
  }
);

export {
  registerUser,
  loginUser
};