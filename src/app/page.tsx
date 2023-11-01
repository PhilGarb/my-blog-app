import { enhance } from "@zenstackhq/runtime";
import { db } from "~/server/db";

const enhancedPrisma = enhance(db, { user: { id: "1234" } });

export default async function Page() {
  await enhancedPrisma.user.findUnique({ where: { id: "1234" } });

  return null;
}
