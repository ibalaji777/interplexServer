import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mapproductcode from 'App/Models/Mapproductcode'

export default class MapproductcodesController {


  public async getCode(ctx:HttpContextContract)
{
 var branch=ctx.request.headers()['branch']||''

 return await Mapproductcode.query().where('branch',branch).first();


}

  public async setCode(ctx:HttpContextContract)
{
 var branch=ctx.request.headers()['branch']||''
 const searchPayload = { branch}
//  const persistancePayload = ctx.request.input('code')

 await Mapproductcode.updateOrCreate(searchPayload, {code:ctx.request.input('code'),branch})


 return
 return await Mapproductcode.query().where('branch',branch).first();


}}
