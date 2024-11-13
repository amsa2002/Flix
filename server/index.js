const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = 6002
const dotenv = require('dotenv')
dotenv.config()
const {readdirSync} = require('fs')
const path = require('path');


//middelewares
app.use(cors())
app.use(express.json())

//routes
readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

//server static files
app.use('/public', express.static(path.join(__dirname, 'public')))

mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
const database = mongoose.connection;

database.on('connected', () => console.log('✅ MongoDB connected successfully!'));
database.on('error', (err) => console.error('❌ MongoDB connection error:', err));
database.on('disconnected', () => console.warn('⚠️ MongoDB disconnected'));


// app.get('/', (req,res)=>{
//     res.send('Express is running')
// })

app.listen(port, ()=>{
    console.log(`App is listening port ${port}`)
})

