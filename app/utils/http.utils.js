const { Response } = require("express");

const CODES = {
  OK: 200,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
};

module.exports = class responseUtilClass {
  res;
  req;
  constructor(_req, _res) {
    this.res = _res;
    this.req = _req;
  }
  //? funcion estandar de respuestas positivas
  Ok(tracking, message, data) {
    return this.res.status(CODES.OK).send({
      tracking: tracking,
      message: message,
      data: data,
    });
  }

  utilError(_err, _traking, _message) {
    return this.res.status(CODES.BAD_REQUEST).send({
      message: _message ? _message : "Servicios no disponibles",
      errorData: {
        tracking: _traking,
        message: _message ? _message : "Servicios no disponibles",
        data: _err.data ? _err : null,
      },
    });
  }
};