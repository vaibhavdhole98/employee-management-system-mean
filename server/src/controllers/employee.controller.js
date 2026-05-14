import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import logger from "../utils/logger.js";
import {
  createEmployeeService,
  getAllEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  deleteEmployeeService,
  averageSalaryByDepartmentService,
  totalEmployeesByCityService,
  departmentAnalyticsService
} from "../services/employee.service.js";

const createEmployee = asyncHandler(async (req, res) => {
  const employee = await createEmployeeService(req.body);

  res.status(201).json(
    new ApiResponse(201, "Employee created successfully", employee)
  );

  logger(
  `Employee created: ${employee.name}`,
  "SUCCESS"
);

});

// const getAllEmployees = asyncHandler(async (req, res) => {
//   const employees = await getAllEmployeesService();

//   res.status(200).json(
//     new ApiResponse(200, "Employees fetched successfully", employees)
//   );
// });

const getAllEmployees = asyncHandler(async (req, res) => {

  const search = req.query.search;

  const page = Number(req.query.page) || 1;

  const limit = Number(req.query.limit) || 5;

  const sort = req.query.sort || 'createdAt';

  const department = req.query.department;

  const city = req.query.city;

  const employees = await getAllEmployeesService(
    search,
    page,
    limit,
    sort,
    department,
    city
  );

  res.status(200).json(
    new ApiResponse(
      200,
      "Employees fetched successfully",
      employees
    )
  );
});

const getEmployeeById = asyncHandler(async (req, res) => {
  const employee = await getEmployeeByIdService(req.params.id);

  if (!employee) {
    throw new ApiError(404, "Employee not found");
  }

  res.status(200).json(
    new ApiResponse(200, "Employee fetched successfully", employee)
  );
});

const updateEmployee = asyncHandler(async (req, res) => {
  const employee = await updateEmployeeService(
    req.params.id,
    req.body
  );

  if (!employee) {
    throw new ApiError(404, "Employee not found");
  }

  res.status(200).json(
    new ApiResponse(200, "Employee updated successfully", employee)
  );
});

const deleteEmployee = asyncHandler(async (req, res) => {
  const employee = await deleteEmployeeService(req.params.id);

  if (!employee) {
        logger(
      "Employee not found",
      "ERROR"
    );
    
    throw new ApiError(404, "Employee not found");
  }

    logger(
    `Employee deleted: ${employee.name}`,
    "WARNING"
  );

  
  res.status(200).json(
    new ApiResponse(200, "Employee deleted successfully")
  );
});

const averageSalaryByDepartment = asyncHandler(
  async (req, res) => {

    const data =
      await averageSalaryByDepartmentService();

    res.status(200).json(
      new ApiResponse(
        200,
        "Average salary fetched successfully",
        data
      )
    );
  }
);

const totalEmployeesByCity = asyncHandler(
  async (req, res) => {

    const data =
      await totalEmployeesByCityService();

    res.status(200).json(
      new ApiResponse(
        200,
        "City analytics fetched successfully",
        data
      )
    );
  }
);

const departmentAnalytics = asyncHandler(
  async (req, res) => {

    const data =
      await departmentAnalyticsService();

    res.status(200).json(
      new ApiResponse(
        200,
        "Department analytics fetched successfully",
        data
      )
    );
  }
);

export {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  averageSalaryByDepartment,
  totalEmployeesByCity,
  departmentAnalytics
};