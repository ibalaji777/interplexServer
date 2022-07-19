/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/
/*eslint-disable*/
import Route from '@ioc:Adonis/Core/Route'
import AssurancemediasController from 'App/Controllers/Http/AssurancemediasController'
import BranchesController from 'App/Controllers/Http/BranchesController'
import ConfigProductFormatsController from 'App/Controllers/Http/ConfigProductFormatsController'
import HeaderconfigsController from 'App/Controllers/Http/HeaderconfigsController'
import MasterproductsController from 'App/Controllers/Http/MasterproductsController'
import Qasform2configsController from 'App/Controllers/Http/Qasform2configsController'
import QasformonesController from 'App/Controllers/Http/QasformonesController'
import QasformtwosController from 'App/Controllers/Http/QasformtwosController'
import UnitsController from 'App/Controllers/Http/UnitsController'
import UploadtypesController from 'App/Controllers/Http/UploadtypesController'
import UsersController from 'App/Controllers/Http/UsersController'
import ConfigProductFormat from 'App/Models/ConfigProductFormat'

//branches

Route.get('/branches', async (ctx) => {

  return new BranchesController().readBranches(ctx)
})

// Route.get('/', async (ctx) => {
//   return 'working'
//   return new UsersController().creaeUser(ctx)
// })

// *****************USER*******************************
Route.post('/login', async (ctx) => {
  return new UsersController().checkUser(ctx)
})

Route.post('/user/create', async (ctx) => {
  return new UsersController().createUser(ctx)
})

Route.get('/getusers', async (ctx) => {
  return new UsersController().getBranchUsers(ctx)
})


Route.post('/user/remove', async (ctx) => {
  return new UsersController().removeUser(ctx)
})

Route.post('/user/update', async (ctx) => {
  return new UsersController().updateUser(ctx)
})

Route.get('/user/test', async (ctx) => {
  return new UsersController().defaultUser(ctx)
})


// *********************qasformone************************
Route.get('/product/test', async (ctx) => {
  return new MasterproductsController().defaultProduct(ctx)
})
Route.post('/product/create', async (ctx) => {
  return new MasterproductsController().createProduct(ctx)
})

Route.post('/product/remove', async (ctx) => {
  return new MasterproductsController().removeProduct(ctx)
})

Route.post('/product/update', async (ctx) => {
  return new MasterproductsController().updateProduct(ctx)
})


Route.get('/readproducts', async (ctx) => {
  return new MasterproductsController().getBranchProducts(ctx)
})




// Route.post('/user/create', async (ctx) => {
//   return new UsersController().createUser(ctx)
// })
// Route.post('/user/create', async (ctx) => {
//   return new UsersController().createUser(ctx)
// })
// Route.post('/user/create', async (ctx) => {
//   return new UsersController().createUser(ctx)
// })


// **************branches***************

Route.get('/readbranch', async (ctx) => {
  return new BranchesController().readBranches(ctx)
})

Route.post('/branch/create', async (ctx) => {
  return new BranchesController().createBranch(ctx)
})


Route.post('/branch/remove', async (ctx) => {
  return new BranchesController().removeBranch(ctx)
})

Route.post('/branch/update', async (ctx) => {
  return new BranchesController().updateBranch(ctx)
})

// **************upload Types***************

Route.get('/readuploadtype', async (ctx) => {
  return new UploadtypesController().readUploadType(ctx)
})

Route.post('/uploadtype/create', async (ctx) => {
  return new UploadtypesController().createUploadType(ctx)
})


Route.post('/uploadtype/remove', async (ctx) => {
  return new UploadtypesController().removeUploadType(ctx)
})

Route.post('/uploadtype/update', async (ctx) => {
  return new UploadtypesController().updateUploadType(ctx)
})

// *************config**********************

Route.get('/readheaderconfig', async (ctx) => {
  return new HeaderconfigsController().HeaderConfig(ctx)
})

Route.post('/headerconfig/update', async (ctx) => {
  return new HeaderconfigsController().updateHeaderConfig(ctx)
})
Route.get('/readqasform2config', async (ctx) => {
  return new Qasform2configsController().readQasForm2Config(ctx)
})

Route.post('/headerqasform2/update', async (ctx) => {
  return new Qasform2configsController().updateQasForm2Config(ctx)
})

// Route.post('/productbatch/check', async (ctx) => {
//   return new QasformonesController().productBatchCheck(ctx)
// })

Route.post('/checkproductsbatch', async (ctx) => {
  return new QasformonesController().checkProductsBatch(ctx)
})


Route.post('/addInvoices', async (ctx) => {
  return new QasformonesController().addInvoices(ctx)
})

Route.post('/invoiceupload', async (ctx) => {
  return new QasformonesController().invoiceUpload(ctx)
})

// public async getelement(ctx:HttpContextContract){
Route.get('/getelement', async (ctx) => {
 return new QasformonesController().getelement(ctx)

})


Route.get('/readqasformonelist', async (ctx) => {
  return new QasformonesController().getQasFormOneList(ctx)

 })
 Route.post('/readqasformonesingle', async (ctx) => {
  return new QasformonesController().getQasSingleForm(ctx)

 })

 Route.post('/qasformone/update', async (ctx) => {
  return new QasformonesController().updateQasFormOne(ctx)

 })

 Route.post('/qasformtwo/update', async (ctx) => {
  return new QasformonesController().updateQasFormTwo(ctx)

 })

 Route.post('/media/delete', async (ctx) => {
  return new QasformonesController().invoiceImageDelete(ctx)

 })

 Route.post('/readoperatorforms', async (ctx) => {
  return new QasformonesController().getOperatorQasFormList(ctx)

 })

 Route.post('/qasformstatus/update', async (ctx) => {
  return new QasformonesController().qasFormUpdateStatus(ctx)

 })


 Route.post('/productformat/update', async (ctx) => {
  return new ConfigProductFormatsController().updateConfig(ctx)

 })

 Route.get('/productformat/read', async (ctx) => {
  return new ConfigProductFormatsController().getProductConfig(ctx)

 })



// public async getelement(ctx:HttpContextContract){

// Route.get('/defaultUser', async (ctx) => {
//  return new UsersController().defaultUser(ctx)

// })
