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
      data: data.data ? data.data : data,
    });
  }

  utilError(_err, _traking, _message, _param) {
    return {
      gateway: () => {
        this.res.status(CODES.BAD_REQUEST).send({
          message: _message ? _message : "Servicios no disponibles",
          tracking: _traking,
          errorData: _err.data ? _err : null,
        });
      },
      service: () => {
        this.res.status(CODES.BAD_REQUEST).send({
          message: _message ? _message : "Servicios no disponibles",
          tracking: _traking,
          error: _err.data ? _err : null,
        });
      },
      core: () => {
        this.res.status(CODES.BAD_REQUEST).send({
          message: _message ? _message : "Servicios no disponibles",
          tracking: _traking,
          error: _err.data ? _err : null,
        });
      },
      format: () => {
        const errorFormat = _err.map((data) => {
          return {
            message: data.msg,
            param: data.path,
            location: data.location,
          };
        });

        this.res.status(CODES.BAD_REQUEST).send({
          message: _message ? _message : "Error de formato",
          traking: _traking,
          error: errorFormat,
        });
      },
      data: () => {
        this.res.status(CODES.BAD_REQUEST).send({
          param: _param,
          value: _err,
          trakin: _traking,
          message: _message,
        });
      },
    };
  }

  serviceError(_err, _traking) {
    return {
      data: _err.response.data,
      traking: _traking,
    };
  }
};
