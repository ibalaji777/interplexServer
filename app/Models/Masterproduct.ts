import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Masterproduct extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public branch: String

@column()
public product_name: String
@column()
public supplier_name: String
@column()
public rmcode: String
@column()
public eds: String
@column()
public rm: String
@column()
public form_format: String
@column()
public comment: String
@column()
public duedate: String
@column()
public skiplevel: String
@column()
public observation_format: JSON
@column()
public observation_print_view: JSON
@column()
public date :Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
