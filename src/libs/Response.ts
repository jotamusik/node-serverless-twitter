export type Headers = { [header: string]: boolean | number | string; } | undefined;


class ResponseBuilder {
  private readonly response: Response;

  constructor() {
    this.response = {
      statusCode: 200,
      body: JSON.stringify(""),
    }
  }

  statusCode(statusCode: number): ResponseBuilder {
    this.response.statusCode = statusCode;
    return this;
  }

  body(body: object): ResponseBuilder {
    this.response.body = JSON.stringify(body, null, 2);
    return this;
  }

  headers(headers: Headers): ResponseBuilder {
    this.response.headers = headers;
    return this;
  }

  build(): Response {
    return this.response;
  }
}


export class Response {
  statusCode: number;
  body: string;
  headers?: Headers;

  static builder(): ResponseBuilder {
    return new ResponseBuilder();
  }

  static Ok(): ResponseBuilder {
    return new ResponseBuilder()
      .statusCode(200);
  }

  static Created(): ResponseBuilder {
    return new ResponseBuilder()
      .statusCode(201);
  }

  static NoContent(): ResponseBuilder {
    return new ResponseBuilder()
      .statusCode(204);
  }

  static BadRequest(): ResponseBuilder {
    return new ResponseBuilder()
      .statusCode(400);
  }

  static Unauthorized(): ResponseBuilder {
    return new ResponseBuilder()
      .statusCode(401);
  }

  static Forbidden(): ResponseBuilder {
    return new ResponseBuilder()
      .statusCode(403);
  }
}
