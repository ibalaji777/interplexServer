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
		  "label": "SL",
		  "name": "sl_header",
		  "value": "SL #",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 1,
			"rowspan": 2
		  }
		},
		{
		  "label": "SPEC/REQUIRMENT",
		  "name": "spec_req_header",
		  "value": "SPEC/REQUIRMENT",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 4,
			"rowspan": 1
		  }
		},
		{
		  "label": "ACTUAL READING",
		  "name": "act_read_header",
		  "value": "ACTUAL READING",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 4,
			"rowspan": 1
		  }
		},
		{
		  "label": "REMARKS",
		  "name": "remarks_header",
		  "value": "REMARKS",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 1,
			"rowspan": 2
		  }
		},
		{
		  "label": "Description",
		  "name": "desc_header",
		  "value": "Description",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "UNIT",
		  "name": "unit_header",
		  "value": "UNIT",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "Min. Spec.",
		  "name": "min_spec_header",
		  "value": "Min. Spec.",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "Max. Spec.",
		  "name": "max_spec_header",
		  "value": "Max. spec.",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "Supplier",
		  "name": "supplier_header",
		  "value": "Supplier",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 2,
			"rowspan": 1
		  }
		},
		{
		  "label": "IEIPL/THIRD PARTY",
		  "name": "ieipl_header",
		  "value": "IEIPL/THIRD PARTY",
		  "default": true,
		  "editable": true,
		  "merge": {
			"colspan": 2,
			"rowspan": 1
		  }
		},
		{
		  "label": "WIDTH",
		  "name": "width",
		  "value": "WIDTH",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH UNIT",
		  "name": "width_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH MIN",
		  "name": "width_min_spec_org",
		  "value": "2",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH MAX",
		  "name": "width_max_spec_org",
		  "value": "5",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH SUP MIN",
		  "name": "width_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH SUP MAX",
		  "name": "width_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH IEIPL MIN",
		  "name": "width_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH IEIPL MAX",
		  "name": "width_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "WIDTH REMARKS",
		  "name": "width_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS",
		  "name": "thickness",
		  "value": "THICKNESS",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS UNIT",
		  "name": "thickness_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS MIN SPEC",
		  "name": "thickness_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS MAX SPEC",
		  "name": "thickness_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS SUP MIN",
		  "name": "thickness_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS SUP MAX",
		  "name": "thickness_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS IEIPL MIN",
		  "name": "thickness_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS IEIPL MAX",
		  "name": "thickness_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THICKNESS REMARKS",
		  "name": "thickness_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS",
		  "name": "hardness",
		  "value": "HARDNESS",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS UNIT",
		  "name": "hardness_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS MIN SPEC",
		  "name": "hardness_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS MAX SPEC",
		  "name": "hardness_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS SUP MIN",
		  "name": "hardness_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS SUP MAX",
		  "name": "hardness_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS IEIPL MIN",
		  "name": "hardness_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARNDESS IEIPL MAX",
		  "name": "hardness_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "HARDNESS REMARKS",
		  "name": "hardness_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION",
		  "name": "elongation",
		  "value": "ELONGATION",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION UNIT",
		  "name": "elongation_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION MIN SPEC",
		  "name": "elongation_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION MAX SPEC",
		  "name": "elongation_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION SUP MIN",
		  "name": "elongation_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION SUP MAX",
		  "name": "elongation_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION IEIPL MIN",
		  "name": "elongation_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION IEIPL MAX",
		  "name": "elongation_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ELONGATION REMARKS",
		  "name": "elongation_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR",
		  "name": "tensile_str",
		  "value": "TENSILE STR",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR UNIT",
		  "name": "tensile_str_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR MIN SPEC",
		  "name": "tensile_str_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR MAX SPEC",
		  "name": "tensile_str_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR SUP MIN",
		  "name": "tensile_str_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR SUP MAX",
		  "name": "tensile_str_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR IEIPL MIN",
		  "name": "tensile_str_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR IEIPL MAX",
		  "name": "tensile_str_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TENSILE STR REMARKS",
		  "name": "tensile_str_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR UNIT",
		  "name": "yield_str_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR",
		  "name": "yield_str",
		  "value": "YIELD STR",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR MIN SPEC",
		  "name": "yield_str_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR MAX SPEC",
		  "name": "yield_str_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR SUP MIN",
		  "name": "yield_str_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR SUP MAX",
		  "name": "yield_str_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR IEIPL MIN",
		  "name": "yield_str_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR IEIPL MAX",
		  "name": "yield_str_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "YIELD STR REMARKS",
		  "name": "yield_str_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CU",
		  "name": "cu",
		  "value": "CU",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CU UNIT",
		  "name": "cu_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CU MIN SPEC",
		  "name": "cu_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CU MAX SPEC",
		  "name": "cu_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CU SUP MIN",
		  "name": "cu_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CU SUP MAX",
		  "name": "cu_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CU IEIPL MIN",
		  "name": "cu_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CU IEIPL MAX",
		  "name": "cu_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CU REMARKS",
		  "name": "cu_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PB",
		  "name": "pb",
		  "value": "PB",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "pb UNIT",
		  "name": "pb_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "pb MIN SPEC",
		  "name": "pb_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "pb MAX SPEC",
		  "name": "pb_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "pb SUP MIN",
		  "name": "pb_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "pb SUP MAX",
		  "name": "pb_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "pb IEIPL MIN",
		  "name": "pb_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "pb IEIPL MAX",
		  "name": "pb_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "pb REMARKS",
		  "name": "pb_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "FE",
		  "name": "fe",
		  "value": "FE",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "FE UNIT",
		  "name": "fe_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "FE MIN SPEC",
		  "name": "fe_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "FE MAX SPEC",
		  "name": "fe_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "FE SUP MIN",
		  "name": "fe_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "FE SUP MAX",
		  "name": "fe_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "FE IEIPL MIN",
		  "name": "fe_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "FE IEIPL MAX",
		  "name": "fe_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "FE REMARKS",
		  "name": "fe_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SN",
		  "name": "sn",
		  "value": "SN",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SN UNIT",
		  "name": "sn_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SN MIN SPEC",
		  "name": "sn_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SN MAX SPEC",
		  "name": "sn_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SN SUP MIN",
		  "name": "sn_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SN SUP MAX",
		  "name": "sn_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SN IEIPL MIN",
		  "name": "sn_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SN IEIPL MAX",
		  "name": "sn_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SN REMARKS",
		  "name": "sn_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ZN",
		  "name": "zn",
		  "value": "ZN",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ZN UNIT",
		  "name": "zn_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ZN MIN SPEC",
		  "name": "zn_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ZN MAX SPEC",
		  "name": "zn_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ZN SUP MIN",
		  "name": "zn_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ZN SUP MAX",
		  "name": "zn_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ZN IEIPL MIN",
		  "name": "zn_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ZN IEIPL MAX",
		  "name": "zn_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "ZN REMARKS",
		  "name": "zn_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "P",
		  "name": "p",
		  "value": "P",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "P UNIT",
		  "name": "p_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "P MIN SPEC",
		  "name": "p_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "P MAX SPEC",
		  "name": "p_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "P SUP MIN",
		  "name": "p_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "P SUP MAX",
		  "name": "p_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "P IEIPL MIN",
		  "name": "p_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "P IEIPL MAX",
		  "name": "p_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "P REMARKS",
		  "name": "p_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS",
		  "name": "pre_plating_details",
		  "value": "PRE PLATING DETAILS",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS UNIT",
		  "name": "pre_plating_details_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS MIN SPEC",
		  "name": "pre_plating_details_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS MAX SPEC",
		  "name": "pre_plating_details_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS SUP MIN",
		  "name": "pre_plating_details_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS SUP MAX",
		  "name": "pre_plating_details_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS IEIPL MIN",
		  "name": "pre_plating_details_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS IEIPL MAX",
		  "name": "pre_plating_details_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "PRE PLATING DETAILS REMARKS",
		  "name": "pre_plating_details_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR",
		  "name": "slitting_burr",
		  "value": "SLITTING BURR",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR UNIT",
		  "name": "slitting_burr_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR MIN SPEC",
		  "name": "slitting_burr_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR MAX SPEC",
		  "name": "slitting_burr_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR SUP MIN",
		  "name": "slitting_burr_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR SUP MAX",
		  "name": "slitting_burr_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR IEIPL MIN",
		  "name": "slitting_burr_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR IEIPL MAX",
		  "name": "slitting_burr_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SLITTING BURR REMARKS",
		  "name": "slitting_burr_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST",
		  "name": "twist",
		  "value": "TWIST",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST UNIT",
		  "name": "twist_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST MIN SPEC",
		  "name": "twist_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST MAX SPEC",
		  "name": "twist_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST SUP MIN",
		  "name": "twist_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST SUP MAX",
		  "name": "twist_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST IEIPL MIN",
		  "name": "twist_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST IEIPL MAX",
		  "name": "twist_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "TWIST REMARKS",
		  "name": "twist_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER",
		  "name": "camber",
		  "value": "CAMBER",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER UNIT",
		  "name": "camber_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER MIN SPEC",
		  "name": "camber_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER MAX SPEC",
		  "name": "camber_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER SUP MIN",
		  "name": "camber_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER SUP MAX",
		  "name": "camber_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER IEIPL MIN",
		  "name": "camber_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER IEIPL MAX",
		  "name": "camber_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "CAMBER REMARKS",
		  "name": "camber_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH",
		  "name": "surface_finish",
		  "value": "SURFACE FINISH",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH UNIT",
		  "name": "surface_finish_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH MIN SPEC",
		  "name": "surface_finish_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH MAX SPEC",
		  "name": "surface_finish_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH SUP MIN",
		  "name": "surface_finish_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH SUP MAX",
		  "name": "surface_finish_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH IEIPL MIN",
		  "name": "surface_finish_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH IEIPL MAX",
		  "name": "surface_finish_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "SURFACE FINISH REMARKS",
		  "name": "surface_finish_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THER CONDUCT",
		  "name": "ther_conduct",
		  "value": "THER CONDUCT",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THER CONDUCT UNIT",
		  "name": "ther_conduct_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THER CONDUCT MIN SPEC",
		  "name": "ther_conduct_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THER CONDUCT MAX SPEC",
		  "name": "ther_conduct_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THER CONDUCT SUP MIN",
		  "name": "ther_conduct_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THER CONDUCT SUP MAX",
		  "name": "ther_conduct_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THER CONDUCT IEIPL MIN",
		  "name": "ther_conduct_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THER CONDUCT IEIPL MAX",
		  "name": "ther_conduct_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "THER CONDUCT REMARKS",
		  "name": "ther_conduct_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY",
		  "name": "density",
		  "value": "DENSITY",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY UNIT",
		  "name": "density_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY MIN SPEC",
		  "name": "density_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY MAX SPEC",
		  "name": "density_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY SUP MIN",
		  "name": "density_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY SUP MAX",
		  "name": "density_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY IEIPL MIN",
		  "name": "density_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY IEIPL MAX",
		  "name": "density_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "DENSITY REMARKS",
		  "name": "density_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT",
		  "name": "coil_weight",
		  "value": "COIL WEIGHT",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT UNIT",
		  "name": "coil_weight_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT MIN SPEC",
		  "name": "coil_weight_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT MAX SPEC",
		  "name": "coil_weight_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT SUP MIN",
		  "name": "coil_weight_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT SUP MAX",
		  "name": "coil_weight_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT IEIPL MIN",
		  "name": "coil_weight_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT IEIPL MAX",
		  "name": "coil_weight_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL WEIGHT REMARKS",
		  "name": "coil_weight_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL",
		  "name": "coil_300mm_900mm",
		  "value": "COIL",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ID:300MIN OD:900MAX",
		  "name": "coil_300mm_900mm_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ID:300MIN OD:900MAX",
		  "name": "coil_300mm_900mm_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ID:300MIN OD:900MAX",
		  "name": "coil_300mm_900mm_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ID:300MIN OD:900MAX",
		  "name": "coil_300mm_900mm_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ID:300MIN OD:900MAX",
		  "name": "coil_300mm_900mm_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ID:300MIN OD:900MM IEIPL MIN",
		  "name": "coil_300mm_900mm_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ID:300MIN OD:900MM IEIPL MAX",
		  "name": "coil_300mm_900mm_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "COIL ID:300MIN OD:900MM REMARKS",
		  "name": "coil_300mm_900mm_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "Next Due For third party validation",
		  "name": "next_due",
		  "value": "Next Due For third party validation",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE UNIT",
		  "name": "next_due_unit_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE MIN SPEC",
		  "name": "next_due_min_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE MAX SPEC",
		  "name": "next_due_max_spec_org",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE SUP MIN",
		  "name": "next_due_sup_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE SUP MAX",
		  "name": "next_due_sup_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE IEIPL MIN",
		  "name": "next_due_ieipl_min",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE IEIPL MAX",
		  "name": "next_due_ieipl_max",
		  "value": "",
		  "default": true,
		  "editable": true
		},
		{
		  "label": "NEXT DUE REMARKS",
		  "name": "next_due_remarks",
		  "value": "",
		  "default": true,
		  "editable": true
		}
	  ]


await ConfigProductFormat.create({id:'config',config:defaultValue})



}
var result=await ConfigProductFormat.query().where('id',"config").first()||{config:[]}
console.log(result.config)
return result.config;
}

}
