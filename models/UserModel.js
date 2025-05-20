import { Sequelize } from "sequelize";
import db from "../database/database.js";

const User = db.define(
    "users",{
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    refresh_token: Sequelize.TEXT,
    }
)

db.sync().then(()=>console.log("database synced"))
export default User