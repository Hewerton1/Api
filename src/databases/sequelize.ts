import { Sequelize } from "sequelize/types";

export const sequelize = new Sequelize (
    {
    logging: () => console.log(process.env.MYSQL_USER),
    dialect: "mysql",
    database: process.env.MYSQL_DB,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    port :parseInt(process.env.MYSQL_PORT as string),
    }
    
    )