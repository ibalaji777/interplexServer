import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sapimportconfig from 'App/Models/Sapimportconfig';

export default class SapimportconfigsController {


  public async getSapImport(ctx:HttpContextContract)
  {
   var branch=ctx.request.headers()['branch']||''

   return await Sapimportconfig.query().where('branch',branch).first();


  }

    public async setSapImport(ctx:HttpContextContract)
  {
   var branch=ctx.request.headers()['branch']||''
   const searchPayload = { branch}
  //  const persistancePayload = ctx.request.input('code')

   await Sapimportconfig.updateOrCreate(searchPayload, {config:ctx.request.input('config'),branch})


   return await Sapimportconfig.query().where('branch',branch).first();


  }

}
