import { db, users } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db
    .insert(users)
    .values([
      {
        userId: "alice123",
        name: "Alice",
        email: "alice@example.com",
        createdAt: new Date(),
      },
    ]);
}
