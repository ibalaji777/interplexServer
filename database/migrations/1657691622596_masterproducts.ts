import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'masterproducts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('branch').nullable()
      table.string('product_name').nullable()
      table.string('supplier_name').nullable()
      table.string('rmcode').nullable()
      table.string('eds').nullable()
      table.string('rm').nullable()
      table.string('form_format').nullable()
      table.string('comment').nullable()
      table.string('duedate').nullable()
      table.integer('skiplevel').nullable()
      table.specificType('observation_format','json  ARRAY').nullable()
      table.specificType('observation_print_view','json  ARRAY').nullable()
      table.date('date')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
