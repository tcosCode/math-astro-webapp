import { defineDb, defineTable, column, NOW } from "astro:db";

const answers = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    userId: column.text(),
    grade: column.text(),
    exerciseId: column.number(),    
    createdAt: column.date({ default: NOW }),
  },
});

export default defineDb({
  tables: {
    answers,
  },
});
