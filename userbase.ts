import express, {Request, Response, NextFunction} from 'express'
import { z } from 'zod'
import { userModel } from './auth'
import mongoose from 'mongoose'

const app = express();
app.use(express.json());

const nameSchema = 

async function main(){
    await mongoose.connect('mongodb+srv://amulyamishra1733:Amulyam@1@typescript.tbuywnh.mongodb.net/?retryWrites=true&w=majority&appName=Typescript')
    console.log("connected to MongoDB")
}

app.post('/userSignUp', async (req:Request, res : Response) => {

})