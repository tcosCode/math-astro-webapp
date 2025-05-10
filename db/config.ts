import { defineDb, defineTable, column, NOW } from "astro:db";

const users = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    userId: column.text({ unique: true }), // Is important that the referenced column is unique
    name: column.text(),
    email: column.text(),
    createdAt: column.date({
      default: NOW,
    }),
  },
});

const answers = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    userId: column.text({
      references: () => users.columns.userId, // Here we reference the column of the users table
    }),
    grade: column.text(),
    exerciseId: column.number(),
    correct: column.boolean(),
    createdAt: column.date({
      default: NOW,
    }),
  },
});

export default defineDb({
  tables: { users, answers },
});
