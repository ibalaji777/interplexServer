 import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'qasformtwos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('invoice_table_id').nullable()
      table.string('invoice_no').nullable()//
      table.string('invoice_client_id').nullable()
      table.integer('qas_form_one_id').nullable()
      table.string('rmcode').nullable()
      table.string('eds').nullable()
      table.string('supplier_name').nullable()
      // table.double('qty').nullable()
      table.string('grn_no').nullable()//
      table.date('grn_date').nullable()//
      table.boolean('error_status').nullable()
      table.string('batch_no').nullable()
      // table.string('coil').nullable()
      table.double('weight').nullable()
      table.double('width_one').nullable()
      table.double('width_two').nullable()
      table.double('thick_one').nullable()
      table.double('thick_two').nullable()
      table.string('lot_no').nullable()
      table.string('validation').nullable()
      table.jsonb('qas_form_two_values')//new
      table.jsonb('qas_form_two_validation')//new
      table.jsonb('other')
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
