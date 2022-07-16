import Qasformone from "App/Models/Qasformone";
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Qasformtwo from "App/Models/Qasformtwo";

export default class QasformonesController {

  public async invoiceUpload(ctx:HttpContextContract){
  // Access file
  const coverImage = ctx.request.file('file', {
    extnames: ['jpg', 'png', 'jpeg'],
    size: '3mb'
  })
console.log(coverImage)
  // Check for errors
  // if (coverImage.hasErrors()) {
  //   return coverImage.errors()
  // }

  // Move to uploads directory
  await coverImage.move('uploads')
}

  public async addInvoices(ctx:HttpContextContract){

    var invoices=ctx.request.input('invoices')

    return invoices;
for(var invoiceIndex in invoices){
var qasFormOneArray=invoices[invoiceIndex].qasForm1New;
console.log('Gallery',invoices[invoiceIndex].gallery)



  for(var qasForm1Index in qasFormOneArray){

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

        }=qasFormOneArray[qasForm1Index]


        // console.log("before",qasFormOneArray[qasForm1Index])
  var qasformone= await Qasformone.create({
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


await Qasformtwo.create({
    qas_form_one_id:parseFloat(qasFormOneId)||0,
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

}
