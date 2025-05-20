import { Sequelize } from "sequelize";
import db from "../database/database.js";

const {DataTypes} = Sequelize

const Notes = db.define( 
   "notes",
   {
    title : DataTypes.STRING,
    writer : DataTypes.STRING,
    date: DataTypes.DATEONLY,
    content : DataTypes.TEXT,
  });

  db.sync().then(() => console.log("notes synchronized"))
  export default Notes
