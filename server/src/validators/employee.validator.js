const validateEmployee = (req, res, next) => {
  const {
    name,
    email,
    department,
    designation,
    salary,
    experience,
    city
  } = req.body;

  if (
    !name ||
    !email ||
    !department ||
    !designation ||
    !salary ||
    !experience ||
    !city
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  next();
};

export default validateEmployee;