import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Config from 'App/Models/Config'
import ConfigProductFormat from 'App/Models/ConfigProductFormat'

export default class ConfigProductFormatsController {

public async updateConfig(ctx:HttpContextContract)
{



  var config=ctx.request.input('config')

var result=await ConfigProductFormat.query().where('id','config').update('config',config)

return result




}

public async getProductConfig(ctx:HttpContextContract)
{

  var checkProdutConfig=await ConfigProductFormat.query().where('id','config').first()

console.log("++++read+++")
  if(!checkProdutConfig){
  var defaultValue=[

		{
			label:'WIDTH UNIT',//input field label
			name:'width_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'WIDTH MIN',//input field label
			name:'width_min_spec_org',//column name
			value:'2',//default value
			show:true,
			headerMap:'',
			 validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'WIDTH MAX',//input field label
			name:'width_max_spec_org',//column name
			value:'5',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'WIDTH SUP ONE',//input field label
			name:'width_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'width_min_spec_org <= width_sup_one and width_sup_one <= width_max_spec_org'
		},
		{
			label:'WIDTH SUP TWO',//input field label
			name:'width_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:''
		},
		{
			label:'WIDTH IELPL ONE',//input field label
			name:'width_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:''
		},
		{
			label:'WIDTH IELPL TWO',//input field label
			name:'width_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'WIDTH REMARKS',//input field label
			name:'width_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'THICKNESS UNIT',//input field label
			name:'thickness_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'THICKNESS MIN SPEC',//input field label
			name:'thickness_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'THICKNESS MAX SPEC',//input field label
			name:'thickness_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'THICKNESS SUP ONE',//input field label
			name:'thickness_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:''
		},
		{
			label:'THICKNESS SUP TWO',//input field label
			name:'thickness_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:''
		},
		{
			label:'THICKNESS IELPL ONE',//input field label
			name:'thickness_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:''
		},
		{
			label:'THICKNESS IELPL TWO',//input field label
			name:'thickness_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:''
		},
		{
			label:'THICKNESS REMARKS',//input field label
			name:'thickness_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'HARDNESS UNIT',//input field label
			name:'hardness_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'HARDNESS MIN SPEC',//input field label
			name:'hardness_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'HARDNEWSS MAX SPEC',//input field label
			name:'hardness_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		},
		{
			label:'HARDNESS SUP ONE',//input field label
			name:'hardness_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:''
		},
		{
			label:'HARDNEWSS SUP TWO',//input field label
			name:'hardness_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:''
		},
		{
			label:'HARDNESS IELPL ONE',//input field label
			name:'hardness_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:''
		}
		,
		{
			label:'HARNDESS IELPL TWO',//input field label
			name:'hardness_ielpl_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:true,
    rule:'',
default:true,
note:''
		}
		,
		{
			label:'HARDNESS REMARKS',//input field label
			name:'hardness_remarks',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		}
		,
		{
			label:'ELOGATION UNIT',//input field label
			name:'elongation_unit_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		}
		,
		{
			label:'ELONGATION MIN SPEC',//input field label
			name:'elongation_min_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		}
		,
		{
			label:'ELONGATION MAX SPEC',//input field label
			name:'elongation_max_spec_org',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		}
		,
		{
			label:'ELONGATION SUP ONE',//input field label
			name:'elongation_sup_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		}
		,
		{
			label:'ELONGTATION SUP TWO',//input field label
			name:'elongation_sup_two',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		}
		,
		{
			label:'ELONGATION IELPL ONE',//input field label
			name:'elongation_ielpl_one',//column name
			value:'',//default value
			show:true,
			headerMap:'',  validation:false,
    rule:'',
default:true,
note:''
		}
		,
		{
			label:'ELONGATION IELPL TWO',//input field label
			name:'elongation_ielpl_two',//column name
			value:'',//default value
			show:true,
		   validation:false,
    rule:'',
default:true,
note:''
		}
	]




await ConfigProductFormat.create({id:'config',config:defaultValue})



}
var result=await ConfigProductFormat.query().where('id',"config").first()||{config:[]}
console.log(result.config)
return result.config;
}

}
