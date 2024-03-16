import mysql from "mysql";
import util from "util";

export const conn = mysql.createPool( //เชื่อมต่อไปยัง database //createPool connect กันหลายๆคน
    {
        connectionLimit : 10,
        host : "119.59.96.110",
        user : "aemandko_Tinchai",
        password : "Tinchai",
        database : "aemandko_Tinchai"
        
    }
) 

export const queryAsync = util.promisify(conn.query).bind(conn); //async