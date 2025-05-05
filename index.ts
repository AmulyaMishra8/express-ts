// import express, { Request, Response } from 'express';
// const app = express();


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



import express,{Request, Response, NextFunction} from 'express'
import {z} from 'zod';
const app = express();


enum statusCode{
    success = 200,
    badRequest = 400
}

const usernameSchema = z.string().email();
const passwordSchema = z.string();


function userMiddleware(req : Request, res : Response, next : NextFunction ){
    const email = req.header('username');
    const username = usernameSchema.safeParse(email);
    const pass = req.header('password');
    const password = passwordSchema.safeParse(pass);
    if(!username.success || !password.success){
        res.status(statusCode.badRequest).json({
            message : "input type wrong"
        })
        return
    }

    if(email != "amulyamishra1733@gmail.com" || pass != "1234"){
        res.status(statusCode.badRequest).json({
            message : "Incorrect Input"
        })
        return
    }
    else{
        next();
    }
}


app.get('/', userMiddleware, (req : Request, res : Response) =>{
    res.status(statusCode.success).send("you are authenticated");
})


app.listen(3000, ()=>{
    console.log(`the site is running at local host 3000`)
})