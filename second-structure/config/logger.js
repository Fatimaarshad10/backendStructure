class LoggerService {
  // logger
  LoggerHandler = (status, message = "", response, data = {}) => {
    const success = !!(status === 200 || status === 201);

    return response.status(status).json({ message, status, success, data });
  };
}
module.exports = new LoggerService();
