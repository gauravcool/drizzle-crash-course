import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    driver: "d1-http",
    dialect: "postgresql",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL as string
    },
    verbose: true,
    strict: true
})