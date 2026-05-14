import express from "express";

import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  averageSalaryByDepartment,
  totalEmployeesByCity,
  departmentAnalytics

} from "../controllers/employee.controller.js";
import validateEmployee from "../validators/employee.validator.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// router.post("/", validateEmployee, createEmployee);
router.post("/", authMiddleware, validateEmployee, createEmployee);
router.get("/", getAllEmployees);

router.get("/:id", getEmployeeById);

// router.put("/:id", validateEmployee, updateEmployee);
router.put("/:id", authMiddleware, validateEmployee, updateEmployee);


// router.delete("/:id", deleteEmployee);
router.delete("/:id", authMiddleware, deleteEmployee);
router.get("/analytics/average-salary", averageSalaryByDepartment);

router.get("/analytics/employees-by-city", totalEmployeesByCity);

router.get("/analytics/department-dashboard", departmentAnalytics);

export default router;