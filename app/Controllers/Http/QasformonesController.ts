import Qasformone from "App/Models/Qasformone";
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Qasformtwo from "App/Models/Qasformtwo";
import Application from '@ioc:Adonis/Core/Application'
import Invoice from "App/Models/Invoice";
import Database from "@ioc:Adonis/Lucid/Database";

export default class QasformonesController {

  public async invoiceUpload(ctx:HttpContextContract){
  // Access file
//   const coverImage = ctx.request.file('file', {
//     extnames: ['jpg', 'png', 'jpeg'],
//     size: '3mb'
//   })
// console.log(coverImage)
  // Check for errors
  // if (coverImage.hasErrors()) {
  //   return coverImage.errors()
  // }

  // Move to uploads directory


  // await coverImage.move('uploads')

  const images = ctx.request.files('file')
  // await images[0].move('uploads')
console.log(Application.publicPath('uploads'))
  for (let image of images) {

    image.clientName="test.jpeg"
    console.log("Ext",image.extname)
    console.log("file",image.fileName)
    console.log("path",image.filePath)
    console.log("client name",image.clientName)
    console.log("field name",image.fieldName)
    console.log("size",image.size)
    console.log("temp path",image.tmpPath)
    // console.log("temp path",image.)

    await image.move(Application.publicPath('uploads'))
  }
}

  public async addInvoices(ctx:HttpContextContract){

    var invoices=ctx.request.input('invoices')
var result=[];
var invoiceTable={id:0};
    // return invoices;
for(var invoiceIndex in invoices){

var getInvoice=invoices[invoiceIndex]

 invoiceTable=await Invoice.create({
invoice_client_id:getInvoice.invoice_client_id||'',
supplier_name:getInvoice.supplier_name||'',
invoice_no:getInvoice.invoice_no||'',
invoice_date:getInvoice.invoice_date||new Date(),
grn_no:getInvoice.grn_no||'',
grn_date:getInvoice.grn_date||new Date(),
operator_id:getInvoice.operator_id||0


})


// invoiceTable.id
result.push(invoiceTable)


  var qasFormOneArray=invoices[invoiceIndex].qasForm1New;
console.log('Gallery',invoices[invoiceIndex].gallery)



  for(var qasForm1Index in qasFormOneArray){

    const    {
      operator_id=0,
      supplier_name='',
      invoice_client_id="",
      invoice_no='',
      invoice_date=new Date(),
      invoice_qty=0,
      ir='',
      grn_no='',
      grn_date=new Date(),
      rmcode='',
      eds='',
      rm='',
      received_qty=0,
      product_name='',
      form_format='',
      comment='',
      duedate=new Date(),
      observation_print_view=[],
      observation_format=[],
      header_format=[],
      remarks='',
      approved_by=0,
      skiplevel_status=false,
      roletype='',
      date=new Date(),

        }=qasFormOneArray[qasForm1Index]


        // console.log("before",qasFormOneArray[qasForm1Index])
  var qasformone= await Qasformone.create({
    invoice_table_id:invoiceTable.id,
    operator_id,
    product_name,
    supplier_name,
    invoice_client_id,
    rmcode,
    eds,
    rm,
    form_format,
    comment,
    invoice_no,
    invoice_date,
    invoice_qty:parseFloat(invoice_qty)||0,
    ir,
    grn_no,
    grn_date,
    received_qty:parseFloat(received_qty)||0,
    duedate,
    observation_print_view,
    observation_format,
    header_format,
    remarks,
    approved_by,
    skiplevel_status,
    roletype,
    // date

  })
var qasform2Products=qasFormOneArray[qasForm1Index].qasForm2New
  var qasFormOneId=qasformone.id||0;
for(var qasform2Productindex in qasform2Products)
{
  var product=qasform2Products[qasform2Productindex];
// console.log("product",product)

var {
  qas_form_one_id=0,
  // invoice_client_id='',
  // rmcode='',
  // eds='',
  // supplier_name='',
  qty=0,
  // grn_date='',
  error_status=false,
  batch_no='',
  coil='',
  coil_weight='',
  width_one='',
  width_two='',
  thickness_one='',
  thickness_two='',
  lot_no='',
  validation='',
  // date=new Date(),

}=qasform2Products[qasform2Productindex]

var qasform2=qasform2Products[qasform2Productindex];

await Qasformtwo.create({
  invoice_table_id:invoiceTable.id,

    qas_form_one_id:parseFloat(qasFormOneId)||0,
    invoice_client_id:qasform2.invoice_client_id,
    rmcode:product['rmcode'],
    eds:product['eds'],
    supplier_name:product['supplier_name'],
    qty:parseFloat(qty)||0,
    grn_date:product['grn_date'],
    error_status,
    batch_no,
    coil,
    coil_weight,
    width_one,
    width_two,
    thickness_one,
    thickness_two,
    lot_no,
    validation,
    date:product['date'],

   })
}


  // console.log("after")
  // console.log('qasformone',qasformone)

  }

}

return ctx.response.send({
  successStatus:true,
  error:'no issue',
  data:result

})

  }
  public async  createQasFormOne(ctx: HttpContextContract) {
    const    {
      operator_id=0,
      supplier_name='',
      invoice_no='',
      invoice_date=new Date(),
      invoice_qty=0,
      ir='',
      grn_no='',
      grn_date=new Date(),
      rmcode='',
      eds='',
      rm='',
      received_qty=0,
      product_name='',
      form_format='',
      comment='',
      duedate=new Date(),
      observation_print_view=[],
      observation_format=[],
      header_format=[],
      remarks='',
      approved_by=0,
      skiplevel_status=false,
      roletype='',
      date=new Date(),

        }=ctx.request.all()



 return await Qasformone.create({
        operator_id,
        product_name,
        supplier_name,
        rmcode,
        eds,
        rm,
        form_format,
        comment,
        invoice_no,
        invoice_date,
        invoice_qty,
        ir,
        grn_no,
        grn_date,
        received_qty,
        duedate,
        observation_print_view,
        observation_format,
        header_format,
        remarks,
        approved_by,
        skiplevel_status,
        roletype,
        date

       })







    }

    public async  products(ctx: HttpContextContract) {

    return await Qasformone.all();
    }

    public async getelement(ctx:HttpContextContract){

// return await Database.rawQuery("select * from qasformones where observation_format -> 'value' = 2",[])

return await Database.rawQuery(`select ui.info ->> 'id' as id,
ui.info ->> 'name' as name
from qasformones t
cross join lateral jsonb_array_elements(t.observation_format) as ui(info)
where t.id = 1;`)
}
}
