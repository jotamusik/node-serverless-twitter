import { APIGatewayProxyHandler } from "aws-lambda";
import { Response } from "@libs/Response";

export const main: APIGatewayProxyHandler = async () => {
  return Response.Ok().build();
};
