import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Qasformone extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public operator_id:Number
  @column()
  public supplier_name:String
  @column()
  public invoice_no:String
  @column()
  public invoice_date:Date
  @column()
  public invoice_qty:String
  @column()
  public ir:String
  @column()
  public grn_no:String
  @column()
  public grn_date:Date
  @column()
  public rmcode:String
  @column()
  public eds:String
  @column()
  public rm:String
  @column()
  public received_qty:String
  @column()
  public product_name:String
  @column()
  public form_format:String
  @column()
  public comment:String
  @column()
  public duedate:Date
  @column()
  public observation_print_view:JSON

  @column()
  public observation_format:JSON
  @column()
  public header_format:JSON
  @column()
  public remarks:String
  @column()
  public status:String
  @column()
  public approved_by:Number
  @column()
  public skiplevel_status:Boolean
  @column()
  public roletype:String
  @column()
  public date:Date





  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
