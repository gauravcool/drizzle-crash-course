import "dotenv/config"
import { db } from "./drizzle/db"; 
import { UserPreferencesTable, UserTable } from "./drizzle/schema";
import { asc, sql } from "drizzle-orm";

async function main() {
    // db.insert(UserPreferencesTable).values({
    //     emailUpdates: true,
    //     userId: 
    // })

    const users = await db.select().from(UserTable)
    console.log(users);
}

main();