class HttpResponse {
  static success(obj) {
    return {
      statusCode: 200,
      body: obj,
    };
  }

  static created(obj) {
    return {
      statusCode: 201,
      body: obj,
    };
  }

  static notFound() {
    return {
      statusCode: 404,
      body: {
        message: "item not found",
      },
    };
  }

  static deleted() {
    return {
      statusCode: 204,
    };
  }

  static missingParam(param) {
    return {
      statusCode: 400,
      body: {
        error: `field ${param} is required`,
      },
    };
  }

  static alreadyExist(param) {
    return {
      statusCode: 409,
      body: {
        message: `${param} already exist`,
      },
    };
  }
}

module.exports = HttpResponse;
