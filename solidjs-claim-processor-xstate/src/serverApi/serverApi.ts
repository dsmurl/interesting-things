import server$ from "solid-start/server";
import { fakePrisma } from "./fakePrisma";

export const serverApi$ = {
  getUser: server$(async (id: string) => {
    try {
      const targetUser = await fakePrisma.user.get(id);  // In real life would be a PRISMA call
      console.log(" SERVER SIDE!!! serverApi$ -> targetUser: ", targetUser);

      return targetUser;
    } catch (e) {
      console.error(
        "Error on getCar: ",
        e instanceof Error ? e.message : "unknown"
      );
      return null;
    }
  }),
};
