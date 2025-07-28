import { pgTable, text, timestamp, uuid, index } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const memos = pgTable("memos", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  userIdIdx: index("memos_user_id_idx").on(table.userId),
  titleIdx: index("memos_title_idx").on(table.title),
}));

export const tags = pgTable("tags", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const memoTags = pgTable("memo_tags", {
  memoId: uuid("memo_id").references(() => memos.id).notNull(),
  tagId: uuid("tag_id").references(() => tags.id).notNull(),
}, (table) => ({
  primaryKey: index("memo_tags_pk").on(table.memoId, table.tagId),
}));
