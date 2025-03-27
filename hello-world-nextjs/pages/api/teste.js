import mysql from 'mysql2';

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teste',
});


export default function handler(req, res) {
    connection.query('SELECT * FROM teste1', (error, results) => {
        if(error) {
            console.error('Error na consulta ', error);
            return res.status(500).json({error: 'Erro ao buscar dados.'});
        }

        res.status(200).json(results);
    } )
}