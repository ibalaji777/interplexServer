import User from "App/Models/User"


export async function checkAdmin(ctx){
return true;
var roletype=ctx.request.headers()['usertype']
var username=ctx.request.headers()['username']
var password=ctx.request.headers()['password']

var user= await User.query().where('username',username).andWhere('password',password).first()
if(user){

  return true;

}

return false;

}


export function onlyNumbers(str) {
  return /^[0-9.,]+$/.test(str);
}

export function number(value){
if(onlyNumbers(value))  return parseFloat(value||0)
return 0;
}
