var path = require('path')
	,rootPath = path.normalize(__dirname+'/..')
	,templatePath = path.normalize(__dirname+'/../server/mailer/templates')
	,notifier = {
		service: 'postmark',
		APN: false,
		email: false, //true
		actions: ['comment'],
		tplPath: templatePath,
		key: 'POSTMARK_KEY',
		parseAppId: 'PARSE_APP_ID',
		parseApiKey: 'PARSE_MASTER_KEY'
	};
module.exports = {
	development: {
		db: 'mongodb://localhost/jumpcutStudios',
		root: rootPath,
		notifier: notifier,
		app: {
			name: 'Jumpcut Studios Task'
		}
	},
	test: {
		db: 'mongodb://localhost/test',
		root: rootPath,
		notifier: notifier,
		app: {
			name: "Jumpcut Studios Task"
		}
	},
	production: {
		db: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
		app: {
			name: 'Jumpcut Studios Task'
		}
	}
}