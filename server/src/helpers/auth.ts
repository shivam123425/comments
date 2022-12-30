import { omit } from "lodash";
import { Request } from "express";
import { prisma } from "@config";
import { verifyAuthToken } from "@services/token.manager";

export const getLoggedInUser = async (req: Request) => {
  const token = req.headers["authorization"];
  if (!token) {
    // TODO - Replace it with correct error instances
    throw new Error("You need to be logged in to perform this action");
  }
  const payload = await verifyAuthToken(token as string);
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: payload.id },
  });
  return omit(user, ["password"]);
};
