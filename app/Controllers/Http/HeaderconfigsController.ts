import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Headerconfig from 'App/Models/Headerconfig';

export default class HeaderconfigsController {
  public async  HeaderConfig(ctx: HttpContextContract/*unresolved*/) {


    var checkHeaderConfig=await Headerconfig.query().where('id','config').first()

    if(!checkHeaderConfig){
await Headerconfig.create({
  id:'config',
  config:[

		{
			label:'Supplier Name',//input field label
			name:'supplier_name',//column name
			value:'',//default value
			show:true,
			map:'Vendor Name',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},
		{
			label:'Product Name',//input field label
			name:'product_name',//column name
			value:'',//default value
			show:true,
			map:'product_name',
			mapFrom:'product',//header or product
			default:true,
			note:''

		},


		{
			label:'Invoice No',//input field label
			name:'invoice_no',//column name
			value:'',//default value
			show:true,
			map:'invoice_no',
			mapFrom:'header',//header or product
			default:true,
			note:''

		},
		{
			label:'Invoice Date',//input field label
			name:'invoice_date',//column name
			value:'',//default value
			show:true,
			map:'DATE_EXT',
			mapFrom:'header',//header or product
			default:true,
			note:''

		},
		{
			label:'Invoice Qty',//input field label
			name:'invoice_qty',//column name
			value:'',//default value
			show:true,
			map:'invoiceQty',
			mapFrom:'header',//header or product
			default:true,
			note:'No Need to Map'

		},
		{
			label:'ir',//input field label
			name:'ir',//column name
			value:'',//default value
			show:true,
			map:'ir',
			mapFrom:'product',//header or product
			default:true,
			note:''
		},
		{
			label:'grn_no',//input field label
			name:'grn_no',//column name
			value:'',//default value
			show:true,
			map:'grn_no',
			mapFrom:'header',//header or product
			default:true,
			note:''

		},
		{
			label:'grn_date',//input field label
			name:'grn_date',//column name
			value:'',//default value
			show:true,
			map:'LAST_GR_DATE_EXT',
			mapFrom:'header',//header or product
			default:true,
			note:''
		},
		{
			label:'rmcode',//input field label
			name:'rmcode',//column name
			value:'',//default value
			show:true,
			map:'rmcode',
			mapFrom:'product',//header or product
			default:true,
			note:''
		},		{
			label:'eds',//input field label
			name:'eds',//column name
			value:'',//default value
			show:true,
			map:'eds',
			mapFrom:'product',//header or product
			default:true,
			note:''
		},		{
			label:'rm',//input field label
			name:'rm',//column name
			value:'',//default value
			show:true,
			map:'rm',
			mapFrom:'product',//header or product
			default:true,
			note:''
		},		{
			label:'received_qty',//input field label
			name:'received_qty',//column name
			value:'',//default value
			show:true,
			map:'invoiceQty',
			mapFrom:'header',//header or product
			default:true,
			note:'No Need to Map'

		},

	]
}
)
    }

       var config =await Headerconfig.query().where('id','config').first()||{};

       return config['config']
      }


    public async updateHeaderConfig(ctx:HttpContextContract){

      const {
        config=[]
      }=ctx.request.all();

      // return config;
      var updateConfig=await Headerconfig.query().where('id','config').update({config})

      if(updateConfig){
        return ctx.response.send({
          successStatus:true
        })
        return ;
      }
      return ctx.response.send({
        successStatus:false
      })
      return ;
    }
}
