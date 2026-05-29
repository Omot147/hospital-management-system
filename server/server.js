const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/test-db', async(req, res) => {
   try{
    const [rows] = await  db.query('SELECT 5  + 5 AS test_result');
    res.json({success: true, message: 'Database connection successful', test_result: rows[0]});
   }
   catch(err){
      console.error('Database connection errCode:', err.message);
      res.status(500).json({success:false, err: 'Database connection failed'});
   }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));