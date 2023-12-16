const { validationResult } = require("express-validator");
const HttpResponse = require("./http.utils");
const validateResult = (_req, _res, _next, _traking) => {
  const JP_RESPONSE = new HttpResponse(_req, _res);
  try {
    validationResult(_req).throw();

    return _next();
  } catch (_err) {
    return JP_RESPONSE.utilError(_err.array(), _traking, null).format();
  }
};

module.exports = { validateResult };
