import mongoose from 'mongoose'
import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import express, {Request, Response, NextFunction} from 'express'

async function main(){
    await mongoose.connect('mongodb+srv://amulyamishra1733:Amulyam@1@typescript.tbuywnh.mongodb.net/?retryWrites=true&w=majority&appName=Typescript')
}

@modelOptions({
    schemaOptions: {
        timestamps : true, //createdAt and Updated at will be added automatically
        collection : 'users'
    }
})
export class User{
    @prop({required : true})
    name! : string;

    @prop({required : true, unique : true})
    email!: string;

    @prop({required : true})
    password!: string
}

export const userModel = getModelForClass(User);