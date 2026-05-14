import Employee from "../models/employee.model.js";

const createEmployeeService = async (employeeData) => {
  return await Employee.create(employeeData);
};

// const getAllEmployeesService = async () => {
//   return await Employee.find();
// };

const getAllEmployeesService = async (
  search,
  page = 1,
  limit = 5,
  sort = 'createdAt',
  department,
  city
) => {

  let query = {};

  if (search) {
    query.$text = {
      $search: search
    };
  }

  if (department) {
    query.department = department;
  }

  if (city) {
    query.city = city;
  }

  const skip = (page - 1) * limit;

  return await Employee.find(query)
    .sort(sort)
    .skip(skip)
    .limit(limit);
};

const getEmployeeByIdService = async (id) => {
  return await Employee.findById(id);
};

const updateEmployeeService = async (id, updatedData) => {
  return await Employee.findByIdAndUpdate(
    id,
    updatedData,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteEmployeeService = async (id) => {
  return await Employee.findByIdAndDelete(id);
};
const averageSalaryByDepartmentService = async () => {

  return await Employee.aggregate([
    {
      $group: {
        _id: "$department",
        averageSalary: {
          $avg: "$salary"
        }
      }
    }
  ]);
};

const totalEmployeesByCityService = async () => {

  return await Employee.aggregate([
    {
      $group: {
        _id: "$city",
        totalEmployees: {
          $sum: 1
        }
      }
    }
  ]);
};

const departmentAnalyticsService = async () => {

  return await Employee.aggregate([
    {
      $group: {
        _id: "$department",

        totalEmployees: {
          $sum: 1
        },

        averageSalary: {
          $avg: "$salary"
        },

        averageExperience: {
          $avg: "$experience"
        },

        highestSalary: {
          $max: "$salary"
        }
      }
    }
  ]);
};


export {
  createEmployeeService,
  getAllEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  deleteEmployeeService,
  averageSalaryByDepartmentService,
  totalEmployeesByCityService,
  departmentAnalyticsService
};