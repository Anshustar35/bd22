import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'bg0kz0yb6mupqiuysxx4-mysql.services.clever-cloud.com',
    user: 'ukwguunhq2c4r2ik',
    password: 'klFDMA6LzjkevjsFWJGr',
    database: 'bg0kz0yb6mupqiuysxx4'
});

export default pool;
