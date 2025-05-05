"use strict";
// import express, { Request, Response } from 'express';
// const app = express();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// enum statusCode{
//     Success = 200,
//     ResourceCreated = 201,
//     badRequest = 400,
//     unauthorized = 401
// }
// const port : number = 3000;
// interface kidneys {
//     healthy : boolean;
// }
// interface UserSchema {
//     id : number,
//     name : string;
//     kidney : kidneys[]
// }
// const user : UserSchema[] = [{
//     id : 1,
//     name : 'John',
//     kidney : [{
//         healthy : false
//     },
//     {
//         healthy : true
//     }]
// },
// {
//     id : 2,
//     name : 'Jane',
//     kidney : [{
//         healthy : true
//     },
//     {
//         healthy : true
//     }]
// },
// {
//     id : 3,
//     name : 'Jain',
//     kidney : [{
//         healthy : false
//     },
//     {
//         healthy : false
//     }]
// }]
// let id : number;
// app.get('/', (req : Request, res : Response) => {
//     let strId = req.query.id;
//     let userKidney !: kidneys[];
//     let foundKidney;
//     if(typeof strId !== 'string'){     
//         res.status(statusCode.badRequest).json({error: 'ID must be a string'})
//         return
//     }
//     id = parseInt(strId);
//     if (isNaN(id)) {
//         res.status(statusCode.badRequest).json({ error: 'ID must be a valid number' });
//         return
//     }
//     for(let i = 0; i < user.length; i++){
//         if(user[i].id == id){
//             userKidney = user[i].kidney;
//             foundKidney = true;
//             break;
//         }
//     }
//     if(!foundKidney){
//          res.status(statusCode.unauthorized).json({error: 'ID is not valid'})
//          return
//         }
//     res.status(statusCode.Success).json({ 
//         userKidney : userKidney
//     });
// })
// app.post('/', )
// app.listen(port, ()=>{
//     console.log(`app is running on port ${port}`)
// })
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
var statusCode;
(function (statusCode) {
    statusCode[statusCode["success"] = 200] = "success";
    statusCode[statusCode["badRequest"] = 400] = "badRequest";
})(statusCode || (statusCode = {}));
const usernameSchema = zod_1.z.string().email();
const passwordSchema = zod_1.z.string();
function userMiddleware(req, res, next) {
    const email = req.header('username');
    const username = usernameSchema.safeParse(email);
    const pass = req.header('password');
    const password = passwordSchema.safeParse(pass);
    if (!username.success || !password.success) {
        res.status(statusCode.badRequest).json({
            message: "input type wrong"
        });
        return;
    }
    if (email != "amulyamishra1733@gmail.com" || pass != "1234") {
        res.status(statusCode.badRequest).json({
            message: "Incorrect Input"
        });
        return;
    }
    else {
        next();
    }
}
app.get('/', userMiddleware, (req, res) => {
    res.status(statusCode.success).send("you are authenticated");
});
app.listen(3000, () => {
    console.log(`the site is running at local host 3000`);
});
