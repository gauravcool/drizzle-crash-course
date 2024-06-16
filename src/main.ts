import "dotenv/config"
import { db } from "./drizzle/db"; 
import { UserTable } from "./drizzle/schema";

async function main() {
    const user = await db.insert(UserTable).values([{
        name: "Gaurav",
        age: 32,
        email: "test@test.com"
    }, {name: "Kumar", age: 29, email: "kumar@test.com"}])
    .returning({
        id: UserTable.id,
        name: UserTable.name
    }).onConflictDoUpdate({
        target: UserTable.email, 
        set: {name: "Updated Name"}
    })
    console.log(user);
    
}

main();