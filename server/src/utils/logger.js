const logger = (
  message,
  type = "INFO"
) => {

  const time =
    new Date().toISOString();

  console.log(
    `[${time}] [${type}] ${message}`
  );
};

export default logger;