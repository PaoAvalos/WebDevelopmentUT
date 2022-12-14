const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "hw4wad",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect();
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "body" VARCHAR(200) NOT NULL,
	    "time" VARCHAR(200)
        );
    CREATE TABLE IF NOT EXISTS "users" (
        "id" SERIAL PRIMARY KEY,         
        "email" VARCHAR(200) NOT NULL UNIQUE,
        "password" VARCHAR(200) NOT NULL
        );`
    ;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exists, create the "posttable and users" table');
    }
});

module.exports = pool;