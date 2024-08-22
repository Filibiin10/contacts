import chalk from 'chalk';
import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import { registerUser } from './controller/UserControler.js';
const app = express();
const port = 5000
app.use(cors());
app.use(express.json());

const dbURL = "mongodb+srv://filibiinfanax10:sru0xiXlNmF1tkFs@cluster0.vurfpiv.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(dbURL)
.then(()=>{
  console.log(`${chalk.green.bold('connected to the DB')} : ${dbURL}`)
}).catch((e) =>{
  console.error(`Error connecting to DB ${e}`);
  process.exit(1);
})

  app.post('/api/contact', registerUser)
  app.get('/api/contacts', (req,res)=>{
    res.send('get all contacts')
  })
  // connectDb();
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });