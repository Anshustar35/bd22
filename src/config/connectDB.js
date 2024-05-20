import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'bpjl5hl7rd3dknngsday-mysql.services.clever-cloud.com',
    user: 'ueie7f1fmz8ovhp8',
    password: '0DprGhsYEEMsxmwdon5U',
    database: 'bpjl5hl7rd3dknngsday'
});

export default pool;
