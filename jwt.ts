import  jwt  from 'jsonwebtoken'
const jwtPassword : string = "secret"
import { z } from 'zod'

const usernameSchema = z.string().email();
const passwordSchema = z.string().min(6);

function signJwt(username :string , password : string){
    let user = usernameSchema.safeParse(username);
    let pass = passwordSchema.safeParse(password);
    if(!user.success || !pass.success) return null;
    const token = jwt.sign({
        user
    }, jwtPassword)

    return token;
}






function decodeJwt(token : string) : boolean{
    //true or false'
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}




function verifyJwt(token : string){
    try{
        const jwtVerified = jwt.verify(token, jwtPassword);
        return true;
    }
    catch(e){
        return false
    } 
    
}