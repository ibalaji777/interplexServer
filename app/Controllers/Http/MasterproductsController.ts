// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Masterproduct from "App/Models/Masterproduct";
import * as core from './core'
export default class MasterproductsController {

public async findProducts(ctx:HttpContextContract){


  var rmcode=ctx.request.input('rmcode')

  return ctx.response.send(await Masterproduct.query().where('rmcode',rmcode);)





}
public async  updateProduct(ctx:HttpContextContract){

  const    {
    id='',
    branch='Chennai',
    product_name='',
    supplier_name='',
    rmcode='',
    eds=new Date(),
    rm=0,
    form_format='',
    comment='',
    duedate=new Date(),
    skiplevel=0,
    observation_format=[],
    observation_print_view=[],


  }=ctx.request.all()
console.log("id+++",id)
console.log(ctx.request.all())
var product=   await Masterproduct
  .query()
  .where('id', id)
  .update({
    branch,
    product_name,
    supplier_name,
    rmcode,
    eds,
    rm,
    form_format,
    comment,
    duedate,
    skiplevel,
    observation_format,
    observation_print_view,

   })
   return product;

}
  public async  defaultProduct(ctx: HttpContextContract) {
    const    {
      branch='Chennai',
      product_name='',
      supplier_name='',
      rmcode='',
      eds=new Date(),
      rm=0,
      form_format='',
      comment='',
      duedate=new Date(),
      skiplevel=0,
      observation_format=[],
      observation_print_view=[],
      date=new Date(),

        }=ctx.request.all()



 return await Masterproduct.create({
  branch,
  product_name,
  supplier_name,
  rmcode,
  eds,
  rm,
  form_format,
  comment,
  duedate,
  skiplevel,
  observation_format,
  observation_print_view,
  date,

       })
}

public async  getBranchProducts(ctx: HttpContextContract) {
  var branch=ctx.request.headers()['branch']||''
  return ctx.response.send({
    data:await Masterproduct.query().where('branch',branch)
   })

  }

  public async  removeProduct(ctx: HttpContextContract) {

    var id=ctx.request.input('id')
  if(await core.checkAdmin(ctx)){
  const product = await Masterproduct.findOrFail(id)

  return ctx.response.send({
    successStatus:true,
    data:await product.delete(),
    error:'',

  })

  }
  return ctx.response.send({
    successStatus:false,
    error:'Not Found',

  })

  }

public async  createProduct(ctx: HttpContextContract) {
  const    {
    branch='Chennai',
    product_name='',
    supplier_name='',
    rmcode='',
    eds=new Date(),
    rm=0,
    form_format='',
    comment='',
    duedate=new Date(),
    skiplevel=0,
    observation_format=[],
    observation_print_view=[],
    date=new Date(),

      }=ctx.request.all()


// return ctx.request.all();
var product= await Masterproduct.create({
branch,
product_name,
supplier_name,
rmcode,
eds,
rm,
form_format,
comment,
duedate,
skiplevel,
observation_format,
observation_print_view,
date,

     })

if(product){

  return ctx.response.send({
    successStatus:true,
    error:'',
    })
}

return  ctx.response.send({
  successStatus:false,
  error:'Failed to create',

})

    }




}
