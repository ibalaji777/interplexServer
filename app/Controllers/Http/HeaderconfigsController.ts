import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Headerconfig from 'App/Models/Headerconfig';
import moment from 'moment';
export default class HeaderconfigsController {
	public async HeaderConfig(ctx: HttpContextContract/*unresolved*/) {


		var checkHeaderConfig = await Headerconfig.query().where('id', 'config').first()

		if (!checkHeaderConfig) {
			await Headerconfig.create({
				id: 'config',
				config: [


					{
						label: 'SUPPLIER',//input field label
						name: 'supplier_name',//column name
						value: '',//default value
						show: true,
						map: '',
						mapFrom: 'header',//header or product
						default: true,
						note: ''
					},
					{
						label: 'PRODUCT NAME',//input field label
						name: 'product_name',//column name
						value: '',//default value
						show: true,
						map: '',
						mapFrom: 'header',//header or product
						default: true,
						note: ''

					},


					{
						label: 'INVOICE / DC #',//input field label
						name: 'invoice_no',//column name
						value: '',//default value
						show: true,
						map: '',
						mapFrom: 'header',//header or product
						default: true,
						note: ''

					},
					{
						label: 'INVOICE / DC DATE',//input field label
						name: 'invoice_date',//column name
						value: '',//default value
						show: true,
						map: 'DATE_EXT',
						mapFrom: 'header',//header or product
						default: true,
						note: ''

					},
					{
						label: 'INVOICE QTY',//input field label
						name: 'invoice_qty',//column name
						value: '',//default value
						show: true,
						map: 'invoiceQty',
						mapFrom: 'header',//header or product
						default: true,
						note: 'No Need to Map'

					},

					{
						label: 'IR #',//input field label
						name: 'ir',//column name
						value: '',//default value
						show: true,
						map: '',
						mapFrom: 'header',//header or product
						default: true,
						note: ''
					},
					{
						label: 'GRN NO',//input field label
						name: 'grn_no',//column name
						value: '',//default value
						show: true,
						map: '',
						mapFrom: 'header',//header or product
						default: true,
						note: ''

					},
					{
						label: 'GRN DATE',//input field label
						name: 'grn_date',//column name
						value: '',//default value
						show: true,
						map: 'LAST_GR_DATE_EXT',
						mapFrom: 'header',//header or product
						default: true,
						note: ''
					},
					{
						label: 'R/M CODE',//input field label
						name: 'rmcode',//column name
						value: '',//default value
						show: true,
						map: '',
						mapFrom: 'header',//header or product
						default: true,
						note: ''
					}, {
						label: 'EDS /Q /P #',//input field label
						name: 'eds',//column name
						value: '',//default value
						show: true,
						map: '',
						mapFrom: 'header',//header or product
						default: true,
						note: ''
					},
					{
						label: 'DATE',//input field label
						name: 'DATE',//column name
						value: moment().format("YYYY-MM-DD"),//default value
						show: true,
						map: '',
						mapFrom: 'header',//header or product
						default: true,
						note: ''
					},
					{
						label: 'R/M',//input field label
						name: 'rm',//column name
						value: '',//default value
						show: true,
						map: '',
						mapFrom: 'header',//header or product
						default: true,
						note: ''
					}, {
						label: 'RECEIVED QTY',//input field label
						name: 'received_qty',//column name
						value: '',//default value
						show: true,
						map: '',
						mapFrom: 'header',//header or product
						default: true,
						note: 'No Need to Map'

					},


				]
			}
			)
		}

		var config = await Headerconfig.query().where('id', 'config').first() || {};

		return config['config']
	}


	public async updateHeaderConfig(ctx: HttpContextContract) {

		const {
			config = []
		} = ctx.request.all();

		// return config;
		var updateConfig = await Headerconfig.query().where('id', 'config').update({ config })

		if (updateConfig) {
			return ctx.response.send({
				successStatus: true
			})
			return;
		}
		return ctx.response.send({
			successStatus: false
		})
		return;
	}
}
