const express = require('express');
const app = express();
const PORT = 8080;

app.get('/',(req, res)=>{
    res.status(201).json({
        message: 'Welcome'
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})