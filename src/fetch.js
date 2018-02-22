import TimeAgo from "javascript-time-ago";
// Load locale-specific relative date/time formatting rules.
import en from "javascript-time-ago/locale/en";
var AppSettings = require('./settings.json'); 
var createClient = require("webdav");

export function execute_fetch(query, page) {
	


	
	var accessToken = AppSettings.fetch.token;
	var loginURL = AppSettings.fetch.url;

	//var searchURL =	loginURL;


  if (query == ""){
    query="trump"
  }
	var searchURL = loginURL; //		"https://www.googleapis.com/customsearch/v1?key=AIzaSyAuB7ifj4-MTKemvd9mUSrJNDjrhF6Opu0&cx=015662618096363611325:5ge5t2aztri&q="+query;
	var myHeaders = new Headers();
	var bodydata = {
		"q": query,
		"size": "50",
		"page": "1"
	  };
	var myInit = {
		method: "POST",
		headers: myHeaders,
	
	};


	

	
	
	myHeaders.append('Accept', 'application/json');
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('x-trus-api-key', 'b44738c06eaa7e9fe90c044d964f507e');

	
	var myInit = { method: 'POST',
					   headers: myHeaders,
					   body: JSON.stringify(bodydata),
					   cache: 'default' };
	
	return fetch('http://om24md:3000/fetch/https://trust.servista.eu/api/rest/v2/search',  myInit)
	
		.then(response => response.json())
		.then(responseData => {
			console.log(responseData);

			TimeAgo.locale(en);
			const timeAgo = new TimeAgo("en-US");
			var len = responseData.results.length,
			newData = { resultCount: responseData.totalHits, items: [] }
				
			console.log(len);
			var i;
			//Loop through the source JSON and format it into the standard format
			for (i = 0; i < len; i += 1) {
				try {
				console.log(i);
				newData.items.push({
					key: responseData.results[i].id,
					rawItem: responseData.results[i],
					title: responseData.results[i].title,
					description: responseData.results[i].summary,
					target: "_blank",
					open_url: responseData.results[i].url,
					iconName: "eye",
					iconColor: "purple",
					mediaType: "image",
					author: responseData.results[i].author,
					source: responseData.results[i].source,
					sentiment: responseData.results[i].sentiment,
					trustLevel: responseData.results[i].trustLevel,
					thumbnail: responseData.results[i].articleLogo,
					highres: responseData.results[i].articleLogo,
					dragAndDropString:
						"<mos><mosID>trustservista</mosID>" +
						"<objID>" +
						responseData.results[i].url +
						"</objID>" +
						"<objSlug>" +
						responseData.results[i].title +
						"</objSlug>" +
						"<mosAbstract>" +
						responseData.results[i].description +
						"</mosAbstract></mos>",
					meta: responseData.results[i].sentiment

				});
			
			}
			catch(e)
			{
				console.log("Error occoured fetching a value from JSON:" + e)
			}
		}


		//	console.log(JSON.stringify(newData));

			return newData;
		})
		.catch(error => console.warn(error));
}

