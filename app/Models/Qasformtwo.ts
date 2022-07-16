import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Qasformtwo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public invoice_table_id:Number

@column()
public  qas_form_one_id:Number
@column()
public  supplier_name:String
@column()
public invoice_client_id:String
@column()
public  rmcode:String
@column()
public  eds:String
@column()
public  qty:Number
@column()
public  grn_no:String
@column()
public  grn_date:Date
@column()
public  error_status:boolean
@column()
public  batch_no:String
@column()
public  coil:String
@column()
public  coil_weight:String
@column()
public  width_one:String
@column()
public  width_two:String

@column()
public  thickness_one:String
@column()
public  thickness_two:String
@column()
public  lot_no:String
@column()
public  validation:String
@column()
public  date:Date



@column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
