// import type { HttpContextContract } from '@ioc=Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const user = new User()
export default class UsersController {

  // public async  creaeUser(ctx: HttpContextContract) {

  //   // return ctx
  //     }


public async checkUser(ctx:HttpContextContract){

  const {username="",password=""}= ctx.request.all();

  if(username!=''&&password!=''){

var user= await User.query().where('username',username).andWhere('password',password).first()
if(user){
  return ctx.response.send({
    successStatus:true,
    data:user
  });
}
return ctx.response.send({
  successStatus:false,
  error:'User Not Found'
})

  }
  return ctx.response.send({
    successStatus:false,
    error:'Enter Valid Username and password'
  })

}

  public async  defaultUser(ctx: HttpContextContract) {
    var defaultValue=[
      {
        name:'User',
        branch:'',
        roletype:'admin',
        username:'admin',
        password:'admin',
        email:'',
        phone:'',
         address:'',
         status:'accepted',
        date:new Date()
      }
    ]


   await User.fetchOrCreateMany('name', defaultValue)


     return ctx.response.send({
      success:true,
      error:'',
     });

}

public async  createUser(ctx: HttpContextContract) {
const    {
      name='',
      branch='',
      roletype='',
      username='',
      password='',
      email='',
      phone='',
       address='',
       status='accepted',
      date=new Date()
    }=ctx.request.all()

    if(username==''&&password=='')
    {
      return ctx.response.send({
        successStatus:false,
        error:'Enter Username and Password',
      })
    }


var user =await User.create({
name,
branch,
roletype,
username,
password,
email,
phone,
address,
status,
date

 })


   return ctx.response.send({
    successStatus:true,
    data:user,
    error:'',
   });

}

public async  removeUser(ctx: HttpContextContract) {

  var id=ctx.request.input('id')
console.log("id=>",id)
if(await this.checkAdmin(ctx)){
const user = await User.findOrFail(id)

return ctx.response.send({
  successStatus:true,
  data:await user.delete(),
  error:'',

})

}
return ctx.response.send({
  successStatus:false,
  error:'Not Found',

})

}

public async checkAdmin(ctx){

  var roletype=ctx.request.headers()['usertype']
var username=ctx.request.headers()['username']
var password=ctx.request.headers()['password']

var user= await User.query().where('username',username).andWhere('password',password).first()
// roletype=='admin'&&
if(user){

  return true;

}

return false;
}

public async  getBranchUsers(ctx: HttpContextContract) {
// var branch=ctx.request.params()['branch']||''
// console.log('branch users',branch)
// console.log(ctx.request.headers())
var branch=ctx.request.headers()['branch']||''
// console.log("check branch",branch)
return ctx.response.send({
  data:await User.query().where('branch',branch)
 })

}
public async  updateUser(ctx: HttpContextContract) {

  const    {
    id='',
    name='',
    branch='',
    roletype='',
    username='',
    password='',
    email='',
    phone='',
     address='',
     status='accepted',

  }=ctx.request.all()
console.log("id+++",id)
console.log(ctx.request.all())
var user=   await User
  .query()
  .where('id', id)
  .update({
name,
branch,
roletype,
username,
password,
email,
phone,
address,
status,
   })

   return user;
}
}
