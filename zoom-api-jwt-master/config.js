const env = process.env.NODE_ENV || 'development'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'M_Sw7WKmR6mknoZ81eFIbw',
		APISecret : 'NHD7TvxFVofrpZSUNFbk5lwNsbokHQm473u8'
	},
	production:{	
		APIKey : 'M_Sw7WKmR6mknoZ81eFIbw',
		APISecret : 'NHD7TvxFVofrpZSUNFbk5lwNsbokHQm473u8'
	}
};

module.exports = config[env]
